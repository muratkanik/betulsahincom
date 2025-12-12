import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

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
      const { data, error } = await supabase
        .from('iletisim')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        return NextResponse.json(
          { error: error.message },
          { status: 500 }
        )
      }

      return NextResponse.json({ iletisim: data })
    }

    if (countOnly) {
      const { count, error } = await supabase
        .from('iletisim')
        .select('*', { count: 'exact', head: true })

      if (error) {
        return NextResponse.json(
          { error: error.message },
          { status: 500 }
        )
      }

      return NextResponse.json({ count })
    }

    const { data, error } = await supabase
      .from('iletisim')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ iletisim: data || [] })
  } catch (error) {
    console.error('İletişim API error:', error)
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

    const { error } = await supabase
      .from('iletisim')
      .delete()
      .eq('id', id)

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'İletişim formu başarıyla silindi' })
  } catch (error) {
    console.error('Delete iletisim error:', error)
    return NextResponse.json(
      { error: 'Bir hata oluştu' },
      { status: 500 }
    )
  }
}
