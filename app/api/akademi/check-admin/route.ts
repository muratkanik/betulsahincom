import { NextRequest, NextResponse } from 'next/server'

// Admin TC'leri (login route ile aynı)
const adminTCs = ['34322246006', '25006089088']

export async function GET(request: NextRequest) {
  try {
    const session = request.cookies.get('akademi_session')
    const adminCookie = request.cookies.get('akademi_admin')
    const tc = request.cookies.get('akademi_tc')?.value
    
    if (!session || !tc) {
      return NextResponse.json(
        { isAdmin: false, message: 'Oturum bulunamadı' },
        { status: 401 }
      )
    }

    // Admin cookie'si varsa veya TC admin listesindeyse admin
    const isAdmin = adminCookie?.value === '1' || adminTCs.includes(tc)

    return NextResponse.json({
      isAdmin,
      tc,
      adsoyad: session.value
    })
  } catch (error) {
    console.error('Admin check error:', error)
    return NextResponse.json(
      { isAdmin: false, message: 'Bir hata oluştu' },
      { status: 500 }
    )
  }
}
