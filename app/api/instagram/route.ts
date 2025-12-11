import { NextResponse } from 'next/server'

interface InstagramPost {
  id: string
  media_type: string
  media_url: string
  permalink: string
  thumbnail_url?: string
  caption?: string
  timestamp: string
}

export async function GET() {
  try {
    // Instagram Graph API için gerekli bilgiler
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN
    const userId = process.env.INSTAGRAM_USER_ID

    if (!accessToken || !userId) {
      console.warn('Instagram API credentials not configured')
      return NextResponse.json({ posts: [] })
    }

    // Instagram Graph API endpoint
    const url = `https://graph.instagram.com/${userId}/media?fields=id,media_type,media_url,permalink,thumbnail_url,caption,timestamp&access_token=${accessToken}&limit=5`

    const response = await fetch(url, {
      next: { revalidate: 3600 } // 1 saat cache
    })

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.statusText}`)
    }

    const data = await response.json()

    if (data.data && Array.isArray(data.data)) {
      const posts: InstagramPost[] = data.data.map((item: any) => ({
        id: item.id,
        media_type: item.media_type,
        media_url: item.media_url,
        permalink: item.permalink,
        thumbnail_url: item.thumbnail_url,
        caption: item.caption || '',
        timestamp: item.timestamp
      }))

      return NextResponse.json({ posts })
    }

    return NextResponse.json({ posts: [] })
  } catch (error) {
    console.error('Instagram API error:', error)
    // Hata durumunda boş array döndür, böylece sayfa çalışmaya devam eder
    return NextResponse.json({ posts: [] })
  }
}
