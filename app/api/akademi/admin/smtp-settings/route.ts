import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

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

    const { data, error } = await supabase
      .from('smtp_settings')
      .select('id, host, port, secure, user, from_email, updated_at')
      .eq('id', 1)
      .single()

    if (error) {
      // Tablo yoksa veya kayıt yoksa boş döndür
      if (error.code === 'PGRST116') {
        return NextResponse.json({ settings: null })
      }
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ settings: data })
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
    const { data: existing } = await supabase
      .from('smtp_settings')
      .select('id')
      .eq('id', 1)
      .single()

    const updateData: any = {
      host,
      port: port || '587',
      secure: secure === true || secure === 1,
      user,
      from_email: from_email || user,
      updated_at: new Date().toISOString()
    }

    // Şifre değiştiriliyorsa ekle
    if (password && password.trim() !== '') {
      updateData.password = password
    }

    let result
    if (existing) {
      // Güncelle
      const { data, error } = await supabase
        .from('smtp_settings')
        .update(updateData)
        .eq('id', 1)
        .select()
        .single()

      if (error) {
        return NextResponse.json(
          { error: error.message },
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

      const { data, error } = await supabase
        .from('smtp_settings')
        .insert({
          id: 1,
          ...updateData,
          password
        })
        .select()
        .single()

      if (error) {
        return NextResponse.json(
          { error: error.message },
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
