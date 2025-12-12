'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface YouTubeVideo {
  id: string
  title: string
  thumbnail: string
  publishedAt: string
  videoId: string
}

export default function YouTubeFeed() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/youtube')
        const data = await response.json()
        
        if (data.error) {
          console.warn('YouTube API error:', data.error)
          setError(data.error)
          return
        }
        
        if (data.videos && Array.isArray(data.videos) && data.videos.length > 0) {
          setVideos(data.videos)
        } else {
          console.warn('YouTube feed: No videos returned')
          setError('YouTube videoları bulunamadı')
        }
      } catch (err) {
        console.error('YouTube feed error:', err)
        setError('YouTube videoları yüklenemedi')
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

  if (loading) {
    return (
      <div className="section sections_style_5">
        <div className="section_wrapper clearfix">
          <div className="items_group clearfix">
            <div className="column_attr align_center">
              <h3><strong>YouTube</strong> Sayfamız</h3>
              <p>Yükleniyor...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || videos.length === 0) {
    // Hata durumunda veya video yoksa eski banner'ı göster
    return (
      <div className="section sections_style_5">
        <div className="section_wrapper clearfix">
          <div className="items_group clearfix">
            <div className="column_attr align_center">
              <h3><strong>YouTube</strong> Sayfamız</h3>
            </div>

            <div className="column one column_zoom_box">
              <div className="zoom_box">
                <a target="_blank" href="https://www.youtube.com/@dr.betulsahin" rel="noopener noreferrer">
                  <div className="photo">
                    <img className="scale-with-grid" src="/web/content/webdesign/res/ortabanner2.jpg" alt="" />
                  </div>
                  <div className="desc" style={{ backgroundColor: 'rgba(255, 106, 0, 0.6)' }}>
                    <div className="desc_wrap" style={{ paddingTop: '10px' }}>
                      <div className="desc_img">
                        <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                      </div>
                      <div className="desc_txt">Sayfamızı Ziyaret Etmek İçin Tıklayın</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="youtube-feed-section">
      <style jsx>{`
        .youtube-feed-section {
          background: #fff;
        }
        
        .youtube-feed-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .youtube-video-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: white;
        }
        
        .youtube-video-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        
        .youtube-video-thumbnail {
          position: relative;
          width: 100%;
          padding-top: 56.25%; /* 16:9 aspect ratio */
          background: #000;
          overflow: hidden;
        }
        
        .youtube-video-thumbnail img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .youtube-play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 68px;
          height: 48px;
          background: rgba(255, 0, 0, 0.9);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .youtube-play-button:hover {
          background: rgba(255, 0, 0, 1);
          transform: translate(-50%, -50%) scale(1.1);
        }
        
        .youtube-play-button::before {
          content: '';
          width: 0;
          height: 0;
          border-left: 20px solid white;
          border-top: 12px solid transparent;
          border-bottom: 12px solid transparent;
          margin-left: 4px;
        }
        
        .youtube-video-info {
          padding: 20px;
        }
        
        .youtube-video-title {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin: 0 0 10px 0;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .youtube-video-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #FF0000;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        
        .youtube-video-link:hover {
          color: #CC0000;
        }
        
        .youtube-channel-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 30px;
          padding: 12px 24px;
          background: #FF0000;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .youtube-channel-link:hover {
          background: #CC0000;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 0, 0, 0.3);
        }
        
        @media (max-width: 768px) {
          .youtube-feed-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            padding: 0 15px;
          }
          
          .youtube-video-info {
            padding: 15px;
          }
          
          .youtube-video-title {
            font-size: 14px;
          }
        }
        
        @media (max-width: 480px) {
          .youtube-feed-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      
      <div className="section sections_style_5">
        <div className="section_wrapper clearfix">
          <div className="items_group clearfix">
            <div className="column one column_column">
              <div className="column_attr align_center">
                <h3 style={{ marginBottom: '40px' }}>
                  <strong>YouTube</strong> Sayfamız
                </h3>
              </div>
            </div>
          </div>
          
          <div className="items_group clearfix">
            <div className="column one column_column">
              <div className="column_attr">
                <div className="youtube-feed-grid">
                  {videos.map((video) => (
                    <div key={video.id} className="youtube-video-card">
                      <div className="youtube-video-thumbnail">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          loading="lazy"
                        />
                        <div className="youtube-play-button"></div>
                      </div>
                      <div className="youtube-video-info">
                        <h4 className="youtube-video-title">{video.title}</h4>
                        <Link 
                          href={`https://www.youtube.com/watch?v=${video.videoId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="youtube-video-link"
                        >
                          <i className="icon-youtube"></i>
                          Videoyu İzle
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                  <Link 
                    href="https://www.youtube.com/@dr.betulsahin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="youtube-channel-link"
                  >
                    <i className="icon-youtube"></i>
                    Tüm Videoları Görüntüle
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
