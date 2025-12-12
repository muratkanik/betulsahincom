import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// Admin kontrolü
const adminTCs = ['34322246006', '25006089088']

async function checkAdmin(request: NextRequest): Promise<boolean> {
  const tc = request.cookies.get('akademi_tc')?.value
  const adminCookie = request.cookies.get('akademi_admin')
  return adminCookie?.value === '1' || (tc ? adminTCs.includes(tc) : false)
}

// GET - Tüm kullanıcıları listele veya sayı
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
      // Tek kullanıcı getir
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        return NextResponse.json(
          { error: error.message },
          { status: 500 }
        )
      }

      return NextResponse.json({ user: data })
    }

    if (countOnly) {
      // Sadece sayı
      const { count, error } = await supabase
        .from('users')
        .select('*', { count: 'exact', head: true })

      if (error) {
        return NextResponse.json(
          { error: error.message },
          { status: 500 }
        )
      }

      return NextResponse.json({ count })
    }

    // Tüm kullanıcıları getir
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ users: data || [] })
  } catch (error) {
    console.error('Users API error:', error)
    return NextResponse.json(
      { error: 'Bir hata oluştu' },
      { status: 500 }
    )
  }
}

// POST - Yeni kullanıcı ekle
export async function POST(request: NextRequest) {
  try {
    if (!(await checkAdmin(request))) {
      return NextResponse.json(
        { error: 'Yetkisiz erişim' },
        { status: 403 }
      )
    }

    const body = await request.json()
    const { tc, adsoyad, mail, telefon, sifre, diploma, aktif, klinikgiris, baslama, bitis } = body

    if (!tc || !adsoyad || !sifre) {
      return NextResponse.json(
        { error: 'TC, Ad Soyad ve Şifre gereklidir' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('users')
      .insert({
        tc,
        adsoyad,
        mail: mail || '',
        telefon: telefon || '',
        sifre,
        diploma: diploma || '',
        aktif: aktif !== undefined ? aktif : 1,
        klinikgiris: klinikgiris !== undefined ? klinikgiris : 0,
        baslama: baslama || null,
        bitis: bitis || null
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ user: data, message: 'Kullanıcı başarıyla eklendi' })
  } catch (error) {
    console.error('Create user error:', error)
    return NextResponse.json(
      { error: 'Bir hata oluştu' },
      { status: 500 }
    )
  }
}

// PUT - Kullanıcı güncelle
export async function PUT(request: NextRequest) {
  try {
    if (!(await checkAdmin(request))) {
      return NextResponse.json(
        { error: 'Yetkisiz erişim' },
        { status: 403 }
      )
    }

    const body = await request.json()
    const { id, tc, adsoyad, mail, telefon, sifre, diploma, aktif, klinikgiris, baslama, bitis } = body

    if (!id) {
      return NextResponse.json(
        { error: 'ID gereklidir' },
        { status: 400 }
      )
    }

    const updateData: any = {}
    if (tc !== undefined) updateData.tc = tc
    if (adsoyad !== undefined) updateData.adsoyad = adsoyad
    if (mail !== undefined) updateData.mail = mail
    if (telefon !== undefined) updateData.telefon = telefon
    if (sifre !== undefined) updateData.sifre = sifre
    if (diploma !== undefined) updateData.diploma = diploma
    if (aktif !== undefined) updateData.aktif = aktif
    if (klinikgiris !== undefined) updateData.klinikgiris = klinikgiris
    if (baslama !== undefined) updateData.baslama = baslama
    if (bitis !== undefined) updateData.bitis = bitis

    const { data, error } = await supabase
      .from('users')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ user: data, message: 'Kullanıcı başarıyla güncellendi' })
  } catch (error) {
    console.error('Update user error:', error)
    return NextResponse.json(
      { error: 'Bir hata oluştu' },
      { status: 500 }
    )
  }
}

// DELETE - Kullanıcı sil
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
      .from('users')
      .delete()
      .eq('id', id)

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'Kullanıcı başarıyla silindi' })
  } catch (error) {
    console.error('Delete user error:', error)
    return NextResponse.json(
      { error: 'Bir hata oluştu' },
      { status: 500 }
    )
  }
}
