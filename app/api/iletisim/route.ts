import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: NextRequest) {
  try {
    const { ad, email, telefon, mesaj } = await request.json()

    if (!ad || !email || !mesaj) {
      return NextResponse.json(
        { success: false, message: 'Lütfen gerekli alanları doldurunuz' },
        { status: 400 }
      )
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error('Supabase environment variables missing')
      return NextResponse.json(
        { success: false, message: 'Sunucu yapılandırma hatası' },
        { status: 500 }
      )
    }

    const supabase = createClient(supabaseUrl, supabaseKey)
    const { error } = await supabase
      .from('iletisim')
      .insert([{ ad, email, telefon, mesaj }])

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { success: false, message: 'Veritabanı hatası' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Mesajınız başarıyla gönderilmiştir'
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { success: false, message: 'Bir hata oluştu' },
      { status: 500 }
    )
  }
}
