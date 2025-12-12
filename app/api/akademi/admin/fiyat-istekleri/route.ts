import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { supabaseQuery, supabaseSelectSingle, supabaseDelete } from '@/lib/supabase-utils'

const adminTCs = ['34322246006', '25006089088']

async function checkAdmin(request: NextRequest): Promise<boolean> {
  const tc = request.cookies.get('akademi_tc')?.value
  const adminCookie = request.cookies.get('akademi_admin')
  return adminCookie?.value === '1' || (tc ? adminTCs.includes(tc) : false)
}

export async function GET(request: NextRequest) {
  try {
    if (!(await checkAdmin(request))) {
      return NextResponse.json(
        { error: 'Yetkisiz erişim' },
        { status: 403 }
      )
    }

    const { searchParams } = new URL(request.url)
    const countOnly = searchParams.get('count') === 'true'
    const id = searchParams.get('id')

    if (id) {
      const { data, error } = await supabaseSelectSingle('fiyat_istekleri', { column: 'id', value: id })

      if (error) {
        return NextResponse.json(
          { error: error.message || 'Fiyat isteği bulunamadı' },
          { status: 500 }
        )
      }

      return NextResponse.json({ fiyatIstek: data })
    }

    if (countOnly) {
      const { data, error } = await supabaseQuery(
        async () => await supabase.from('fiyat_istekleri').select('*', { count: 'exact', head: true })
      )

      if (error) {
        return NextResponse.json(
          { error: error.message || 'Sayım hatası' },
          { status: 500 }
        )
      }

      return NextResponse.json({ count: (data as any)?.count || 0 })
    }

    const { data, error } = await supabaseQuery(
      async () => await supabase.from('fiyat_istekleri').select('*').order('created_at', { ascending: false })
    )

    if (error) {
      return NextResponse.json(
        { error: error.message || 'Fiyat istekleri yüklenemedi' },
        { status: 500 }
      )
    }

    return NextResponse.json({ fiyatIstekleri: (data as any[]) || [] })
  } catch (error) {
    console.error('Fiyat İstekleri API error:', error)
    return NextResponse.json(
      { error: 'Bir hata oluştu' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    if (!(await checkAdmin(request))) {
      return NextResponse.json(
        { error: 'Yetkisiz erişim' },
        { status: 403 }
      )
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: 'ID gereklidir' },
        { status: 400 }
      )
    }

    const { error } = await supabaseDelete('fiyat_istekleri', { column: 'id', value: id })

    if (error) {
      return NextResponse.json(
        { error: error.message || 'Fiyat isteği silinemedi' },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'Fiyat isteği başarıyla silindi' })
  } catch (error) {
    console.error('Delete fiyat isteği error:', error)
    return NextResponse.json(
      { error: 'Bir hata oluştu' },
      { status: 500 }
    )
  }
}
