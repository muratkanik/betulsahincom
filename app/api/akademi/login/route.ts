import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

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

    // Yönetici TC'leri
    const adminTCs = ['34322246006', '25006089088']
    const isAdmin = adminTCs.includes(data.tc)

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
    
    // TC'yi cookie'ye ekle (admin kontrolü için)
    response.cookies.set('akademi_tc', data.tc, {
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
    const klinikGirisValue = data.klinikgiris === 1 || data.klinikgiris === '1' || data.klinikgiris === true
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
