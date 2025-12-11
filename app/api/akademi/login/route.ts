import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { tc, sifre } = await request.json()

    if (!tc || !sifre) {
      return NextResponse.json(
        { success: false, message: 'TC ve şifre gereklidir' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('tc', tc)
      .eq('sifre', sifre)
      .eq('aktif', 1)
      .single()

    if (error || !data) {
      return NextResponse.json(
        { success: false, message: 'TC veya şifre hatalı' },
        { status: 401 }
      )
    }

    const isAdmin = data.tc === '34322246006'

    const response = NextResponse.json({
      success: true,
      user: {
        adsoyad: data.adsoyad,
        tc: data.tc,
        isAdmin: isAdmin,
        klinikGiris: data.klinikgiris,
        baslama: data.baslama,
        bitis: data.bitis
      }
    })

    // Cookie'leri set et
    response.cookies.set('akademi_session', data.adsoyad, {
      httpOnly: false, // Client-side'dan okunabilir olmalı
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7 // 7 gün
    })

    if (data.klinikgiris) {
      response.cookies.set('klinik_giris', data.klinikgiris, {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7 // 7 gün
      })
    }

    return response
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { success: false, message: 'Bir hata oluştu' },
      { status: 500 }
    )
  }
}
