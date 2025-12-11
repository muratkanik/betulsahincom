import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export async function GET(request: NextRequest) {
  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json(
      { error: 'Supabase yapılandırması eksik' },
      { status: 500 }
    )
  }

  // Session kontrolü için cookie'den kullanıcı bilgisini al
  const sessionCookie = request.cookies.get('akademi_session')
  
  if (!sessionCookie) {
    return NextResponse.json(
      { error: 'Giriş yapmanız gerekiyor' },
      { status: 401 }
    )
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  const { data, error } = await supabase
    .from('videolar')
    .select('*')
    .eq('aktif', 1)
    .order('sira', { ascending: true })

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }

  return NextResponse.json({ data })
}
