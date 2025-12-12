import { NextResponse } from 'next/server'

interface YouTubeVideo {
  id: string
  title: string
  thumbnail: string
  publishedAt: string
  videoId: string
}

export async function GET() {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY
    const channelId = process.env.YOUTUBE_CHANNEL_ID || 'UCdr.betulsahin' // Fallback olarak handle kullanabiliriz

    if (!apiKey) {
      console.warn('YouTube API key not configured - YOUTUBE_API_KEY required')
      return NextResponse.json({ 
        videos: [],
        error: 'YouTube API key not configured'
      }, { status: 200 })
    }

    // YouTube Data API v3 - Channel ID'yi bulmak için
    // Önce channel handle'dan channel ID'yi bulalım
    let finalChannelId = channelId
    
    // Eğer channelId yoksa, handle'dan ID'yi bul
    if (!channelId || channelId.startsWith('UC') === false) {
      const handle = '@dr.betulsahin'
      const channelUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(handle)}&type=channel&key=${apiKey}`
      
      try {
        const channelResponse = await fetch(channelUrl, {
          next: { revalidate: 86400 } // 24 saat cache
        })
        
        if (channelResponse.ok) {
          const channelData = await channelResponse.json()
          if (channelData.items && channelData.items.length > 0) {
            finalChannelId = channelData.items[0].snippet.channelId
          }
        }
      } catch (err) {
        console.warn('Could not fetch channel ID from handle:', err)
      }
    }

    // Son videoları çek
    const videosUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${finalChannelId}&type=video&order=date&maxResults=4&key=${apiKey}`
    
    const response = await fetch(videosUrl, {
      next: { revalidate: 3600 } // 1 saat cache
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('YouTube API error:', response.status, response.statusText, errorData)
      return NextResponse.json({ 
        videos: [],
        error: `YouTube API error: ${response.statusText}`
      }, { status: 200 })
    }

    const data = await response.json()

    if (data.error) {
      console.error('YouTube API returned error:', data.error)
      return NextResponse.json({ 
        videos: [],
        error: data.error.message || 'YouTube API error'
      }, { status: 200 })
    }

    if (data.items && Array.isArray(data.items)) {
      const videos: YouTubeVideo[] = data.items.map((item: any) => ({
        id: item.id.videoId,
        videoId: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default.url,
        publishedAt: item.snippet.publishedAt
      }))

      return NextResponse.json({ videos })
    }

    console.warn('YouTube API: No videos in response', data)
    return NextResponse.json({ videos: [] })
  } catch (error) {
    console.error('YouTube API error:', error)
    return NextResponse.json({ 
      videos: [],
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 200 })
  }
}
