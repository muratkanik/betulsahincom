import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { ad, sehir, gsm, islem } = await request.json()

    // Validasyon
    if (!ad || !sehir || !gsm || !islem) {
      return NextResponse.json(
        { success: false, message: 'Lütfen tüm alanları doldurunuz' },
        { status: 400 }
      )
    }

    // Supabase'e kaydet
    const { error } = await supabase
      .from('fiyat_istekleri')
      .insert([{ ad, sehir, gsm, islem }])

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { success: false, message: 'Veritabanı hatası' },
        { status: 500 }
      )
    }

    // Email gönder (opsiyonel - Vercel Serverless Function için)
    // Email gönderimi için ayrı bir API route kullanılabilir

    return NextResponse.json({
      success: true,
      message: 'Talebiniz başarıyla iletilmiştir'
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { success: false, message: 'Bir hata oluştu' },
      { status: 500 }
    )
  }
}
