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
      const missing = []
      if (!accessToken) missing.push('INSTAGRAM_ACCESS_TOKEN')
      if (!userId) missing.push('INSTAGRAM_USER_ID')
      console.warn(`Instagram API credentials not configured - Missing: ${missing.join(', ')}`)
      return NextResponse.json({ 
        posts: [],
        error: `Instagram API credentials not configured. Missing: ${missing.join(', ')}`
      }, { status: 200 }) // 200 döndür ki frontend hata olarak algılamasın
    }
    
    console.log('Instagram API: Fetching posts for userId:', userId)

    // Instagram Graph API endpoint
    const url = `https://graph.instagram.com/${userId}/media?fields=id,media_type,media_url,permalink,thumbnail_url,caption,timestamp&access_token=${accessToken}&limit=5`

    const response = await fetch(url, {
      next: { revalidate: 3600 } // 1 saat cache
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('Instagram Graph API error:', response.status, response.statusText, errorData)
      throw new Error(`Instagram API error: ${response.statusText}`)
    }

    const data = await response.json()
    console.log('Instagram Graph API response:', {
      hasData: !!data.data,
      dataLength: data.data?.length,
      hasError: !!data.error,
      error: data.error,
      keys: Object.keys(data)
    })

    if (data.error) {
      console.error('Instagram Graph API returned error:', data.error)
      return NextResponse.json({ 
        posts: [],
        error: data.error.message || data.error.type || 'Instagram API error',
        errorDetails: data.error
      }, { status: 200 })
    }

    if (data.data && Array.isArray(data.data)) {
      console.log(`Instagram API: Processing ${data.data.length} posts`)
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

    console.warn('Instagram API: No data array in response. Full response:', JSON.stringify(data, null, 2))
    return NextResponse.json({ 
      posts: [],
      error: 'No posts data in API response',
      responseData: data
    })
  } catch (error) {
    console.error('Instagram API error:', error)
    // Hata durumunda boş array döndür, böylece sayfa çalışmaya devam eder
    return NextResponse.json({ 
      posts: [],
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 200 })
  }
}
