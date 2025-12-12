import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { supabaseQuery, supabaseSelectSingle, supabaseInsert, supabaseUpdate } from '@/lib/supabase-utils'

const adminTCs = ['34322246006', '25006089088']

async function checkAdmin(request: NextRequest): Promise<boolean> {
  const tc = request.cookies.get('akademi_tc')?.value
  const adminCookie = request.cookies.get('akademi_admin')
  return adminCookie?.value === '1' || (tc ? adminTCs.includes(tc) : false)
}

// GET - SMTP ayarlarını getir (şifre hariç)
export async function GET(request: NextRequest) {
  try {
    if (!(await checkAdmin(request))) {
      return NextResponse.json(
        { error: 'Yetkisiz erişim' },
        { status: 403 }
      )
    }

    const { data, error } = await supabaseSelectSingle('smtp_settings', { column: 'id', value: 1 })

    if (error) {
      // Tablo yoksa veya kayıt yoksa boş döndür
      if ((error as any)?.code === 'PGRST116') {
        return NextResponse.json({ settings: null })
      }
      return NextResponse.json(
        { error: error.message || 'SMTP ayarları yüklenemedi' },
        { status: 500 }
      )
    }

    // Şifreyi çıkar
    if (data) {
      const { password: _, ...settingsWithoutPassword } = data as any
      return NextResponse.json({ settings: settingsWithoutPassword })
    }

    return NextResponse.json({ settings: null })
  } catch (error) {
    console.error('SMTP settings GET error:', error)
    return NextResponse.json(
      { error: 'Bir hata oluştu' },
      { status: 500 }
    )
  }
}

// PUT - SMTP ayarlarını güncelle
export async function PUT(request: NextRequest) {
  try {
    if (!(await checkAdmin(request))) {
      return NextResponse.json(
        { error: 'Yetkisiz erişim' },
        { status: 403 }
      )
    }

    const body = await request.json()
    const { host, port, secure, user, password, from_email } = body

    if (!host || !user) {
      return NextResponse.json(
        { error: 'Host ve User gereklidir' },
        { status: 400 }
      )
    }

    // Önce mevcut kaydı kontrol et
    const { data: existing } = await supabaseSelectSingle('smtp_settings', { column: 'id', value: 1 })

    const updateData: any = {
      host,
      port: port || '587',
      secure: secure === true || secure === 1,
      user,
      from_email: from_email || user,
      updated_at: new Date().toISOString()
    }

    // Şifre değiştiriliyorsa ekle
    // Eğer mevcut kayıt varsa ve şifre boş değilse güncelle
    // Eğer mevcut kayıt yoksa şifre zorunlu (yukarıda kontrol ediliyor)
    if (password !== undefined && password !== null && password.trim() !== '') {
      updateData.password = password.trim()
    } else if (!existing) {
      // İlk kayıt için şifre zorunlu
      return NextResponse.json(
        { error: 'İlk kayıt için şifre gereklidir' },
        { status: 400 }
      )
    }
    // Mevcut kayıt varsa ve şifre boşsa, şifreyi güncelleme (mevcut şifre korunur)

    let result
    if (existing) {
      // Güncelle
      const { data, error } = await supabaseUpdate('smtp_settings', updateData, { column: 'id', value: 1 })

      if (error) {
        return NextResponse.json(
          { error: error.message || 'SMTP ayarları güncellenemedi' },
          { status: 500 }
        )
      }
      result = data
    } else {
      // Yeni kayıt oluştur
      if (!password || password.trim() === '') {
        return NextResponse.json(
          { error: 'İlk kayıt için şifre gereklidir' },
          { status: 400 }
        )
      }

      const { data, error } = await supabaseInsert('smtp_settings', {
        id: 1,
        ...updateData,
        password
      })

      if (error) {
        return NextResponse.json(
          { error: error.message || 'SMTP ayarları kaydedilemedi' },
          { status: 500 }
        )
      }
      result = data
    }

    // Şifreyi response'dan çıkar
    const { password: _, ...settingsWithoutPassword } = result

    return NextResponse.json({
      settings: settingsWithoutPassword,
      message: 'SMTP ayarları başarıyla güncellendi'
    })
  } catch (error) {
    console.error('SMTP settings PUT error:', error)
    return NextResponse.json(
      { error: 'Bir hata oluştu' },
      { status: 500 }
    )
  }
}
