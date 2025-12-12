import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { supabaseQuery } from '@/lib/supabase-utils'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    // Hem 'tc' hem de 'tcno' parametrelerini destekle (uyumluluk için)
    const tc = body.tc || body.tcno
    const sifre = body.sifre || body.password

    if (!tc || !sifre) {
      return NextResponse.json(
        { success: false, message: 'TC ve şifre gereklidir' },
        { status: 400 }
      )
    }

    const { data, error } = await supabaseQuery(
      async () => await supabase
        .from('users')
        .select('*')
        .eq('tc', tc)
        .eq('sifre', sifre)
        .eq('aktif', 1)
        .single()
    )

    if (error || !data) {
      return NextResponse.json(
        { success: false, message: error?.message || 'TC veya şifre hatalı' },
        { status: 401 }
      )
    }

    // Yönetici TC'leri
    const adminTCs = ['34322246006', '25006089088']
    const userData = data as any
    const isAdmin = adminTCs.includes(userData.tc)

    const response = NextResponse.json({
      success: true,
      user: {
        adsoyad: userData.adsoyad,
        tc: userData.tc,
        isAdmin: isAdmin,
        klinikGiris: userData.klinikgiris,
        baslama: userData.baslama,
        bitis: userData.bitis
      }
    })

    // Cookie'leri set et
    response.cookies.set('akademi_session', userData.adsoyad, {
      httpOnly: false, // Client-side'dan okunabilir olmalı
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7 // 7 gün
    })
    
    // TC'yi cookie'ye ekle (admin kontrolü için)
    response.cookies.set('akademi_tc', userData.tc, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7 // 7 gün
    })
    
    // Admin durumunu cookie'ye ekle
    if (isAdmin) {
      response.cookies.set('akademi_admin', '1', {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7 // 7 gün
      })
    }

    // klinikgiris INTEGER olabilir (0 veya 1) veya TEXT olabilir ('0' veya '1')
    const klinikGirisValue = userData.klinikgiris === 1 || userData.klinikgiris === '1' || userData.klinikgiris === true
    if (klinikGirisValue) {
      response.cookies.set('klinik_giris', '1', {
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
