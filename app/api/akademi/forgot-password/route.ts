import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { supabaseQuery, supabaseUpdate } from '@/lib/supabase-utils'
import nodemailer from 'nodemailer'

// SMTP ayarlarını veritabanından veya environment variable'lardan al
async function getSmtpConfig() {
  // Önce veritabanından kontrol et
  try {
    const { data: settings } = await supabase
      .from('smtp_settings')
      .select('*')
      .eq('id', 1)
      .single()

    if (settings && settings.host && settings.user && settings.password) {
      return {
        host: settings.host,
        port: parseInt(settings.port || '587'),
        secure: settings.secure === true || settings.secure === 1,
        auth: {
          user: settings.user,
          pass: settings.password
        }
      }
    }
  } catch (error) {
    // Veritabanında ayar yoksa environment variable'lara bak
    console.log('SMTP settings not found in database, using environment variables')
  }

  // Environment variable'lardan al (zorunlu)
  const host = process.env.SMTP_HOST
  const port = process.env.SMTP_PORT
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    throw new Error('SMTP ayarları bulunamadı. Lütfen environment variable\'ları veya veritabanı ayarlarını kontrol edin.')
  }

  return {
    host,
    port: parseInt(port || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user,
      pass
    }
  }
}

// Mail gönderici yapılandırması (lazy initialization)
let transporter: nodemailer.Transporter | null = null

async function getTransporter() {
  if (!transporter) {
    const config = await getSmtpConfig()
    transporter = nodemailer.createTransport(config)
  }
  return transporter
}

// Random şifre oluştur
function generateRandomPassword(): string {
  const length = 12
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'
  let password = ''
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length))
  }
  return password
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const tc = body.tc

    if (!tc) {
      return NextResponse.json(
        { success: false, message: 'TC Kimlik No gereklidir' },
        { status: 400 }
      )
    }

    // Kullanıcıyı bul
    const { data: user, error: userError } = await supabaseQuery(
      () => supabase
        .from('users')
        .select('tc, adsoyad, mail, aktif')
        .eq('tc', tc)
        .single()
    )

    if (userError || !user) {
      return NextResponse.json(
        { success: false, message: userError?.message || 'Bu TC Kimlik No ile kayıtlı kullanıcı bulunamadı' },
        { status: 404 }
      )
    }

    if (user.aktif !== 1) {
      return NextResponse.json(
        { success: false, message: 'Bu kullanıcı hesabı aktif değildir' },
        { status: 403 }
      )
    }

    if (!user.mail || user.mail.trim() === '') {
      return NextResponse.json(
        { success: false, message: 'Bu kullanıcının kayıtlı e-posta adresi bulunmamaktadır' },
        { status: 400 }
      )
    }

    // Yeni şifre oluştur
    const newPassword = generateRandomPassword()

    // Veritabanında şifreyi güncelle
    const { error: updateError } = await supabaseUpdate('users', { sifre: newPassword }, { column: 'tc', value: tc })

    if (updateError) {
      console.error('Password update error:', updateError)
      return NextResponse.json(
        { success: false, message: updateError.message || 'Şifre güncellenirken bir hata oluştu' },
        { status: 500 }
      )
    }

    // E-posta gönder
    try {
      const smtpConfig = await getSmtpConfig()
      const mailTransporter = await getTransporter()
      
      const mailOptions = {
        from: smtpConfig.auth.user,
        to: user.mail,
        subject: 'Dr. Betül Şahin Akademi - Şifre Sıfırlama',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #20146b;">Şifre Sıfırlama</h2>
            <p>Sayın ${user.adsoyad},</p>
            <p>Akademi hesabınız için yeni şifreniz aşağıda belirtilmiştir:</p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="font-size: 18px; font-weight: bold; color: #20146b; margin: 0;">${newPassword}</p>
            </div>
            <p>Güvenliğiniz için lütfen giriş yaptıktan sonra şifrenizi değiştiriniz.</p>
            <p>İyi çalışmalar dileriz.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="color: #666; font-size: 12px;">Dr. Betül Şahin Akademi</p>
          </div>
        `,
        text: `
Şifre Sıfırlama

Sayın ${user.adsoyad},

Akademi hesabınız için yeni şifreniz: ${newPassword}

Güvenliğiniz için lütfen giriş yaptıktan sonra şifrenizi değiştiriniz.

İyi çalışmalar dileriz.

Dr. Betül Şahin Akademi
        `
      }

      await mailTransporter.sendMail(mailOptions)
    } catch (mailError) {
      console.error('Mail sending error:', mailError)
      // Şifre güncellendi ama mail gönderilemedi - kullanıcıya bilgi ver
      return NextResponse.json(
        { 
          success: false, 
          message: 'Şifre güncellendi ancak e-posta gönderilemedi. Lütfen yönetici ile iletişime geçiniz.' 
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Yeni şifreniz e-posta adresinize gönderilmiştir'
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { success: false, message: 'Bir hata oluştu' },
      { status: 500 }
    )
  }
}
