'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface InstagramPost {
  id: string
  media_type: string
  media_url: string
  permalink: string
  thumbnail_url?: string
  caption?: string
  timestamp: string
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/instagram')
        const data = await response.json()
        
        if (!response.ok) {
          console.error('Instagram API response error:', response.status, data)
          throw new Error('Instagram feed yüklenemedi')
        }
        
        if (data.posts && Array.isArray(data.posts) && data.posts.length > 0) {
          setPosts(data.posts.slice(0, 5)) // Son 5 paylaşım
        } else {
          console.warn('Instagram feed: No posts returned', data)
          setError('Instagram paylaşımları bulunamadı')
        }
      } catch (err) {
        console.error('Instagram feed error:', err)
        setError('Instagram paylaşımları yüklenemedi')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="instagram-feed-section">
        <div className="section" style={{paddingTop: '60px', paddingBottom: '60px'}}>
          <div className="section_wrapper clearfix">
            <div className="items_group clearfix">
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h3 style={{marginBottom: '30px'}}>Instagram'da Biz</h3>
                  <p>Yükleniyor...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    // Hata durumunda gizle (sessizce başarısız ol)
    console.warn('Instagram feed error:', error)
    return null
  }

  if (posts.length === 0) {
    // Post yoksa gizle
    return null
  }

  return (
    <div className="instagram-feed-section">
      <style jsx>{`
        .instagram-feed-section {
          background: #f8f9fa;
        }
        
        .instagram-feed-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .instagram-post {
          position: relative;
          aspect-ratio: 1;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: white;
        }
        
        .instagram-post:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
        
        .instagram-post-link {
          display: block;
          width: 100%;
          height: 100%;
          text-decoration: none;
        }
        
        .instagram-post-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .instagram-post-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0);
          transition: background 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .instagram-post:hover .instagram-post-overlay {
          background: rgba(0, 0, 0, 0.3);
        }
        
        .instagram-icon {
          opacity: 0;
          transition: opacity 0.3s ease;
          color: white;
          font-size: 24px;
        }
        
        .instagram-post:hover .instagram-icon {
          opacity: 1;
        }
        
        @media (max-width: 768px) {
          .instagram-feed-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            padding: 0 15px;
          }
        }
      `}</style>
      
      <div className="section" style={{paddingTop: '60px', paddingBottom: '60px'}}>
        <div className="section_wrapper clearfix">
          <div className="items_group clearfix">
            <div className="column one column_column">
              <div className="column_attr align_center">
                <h3 style={{marginBottom: '10px'}}>
                  <strong>Instagram'da Biz</strong>
                </h3>
                <p style={{marginBottom: '30px', color: '#666'}}>
                  <Link 
                    href="https://www.instagram.com/dr.betulsahin/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{color: '#E4405F', textDecoration: 'none'}}
                  >
                    @dr.betulsahin
                  </Link>
                </p>
              </div>
            </div>
          </div>
          
          <div className="items_group clearfix">
            <div className="column one column_column">
              <div className="column_attr">
                <div className="instagram-feed-grid">
                  {posts.map((post) => (
                    <div key={post.id} className="instagram-post">
                      <Link 
                        href={post.permalink} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram-post-link"
                      >
                        <img 
                          src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url} 
                          alt={post.caption || 'Instagram post'}
                          className="instagram-post-image"
                          loading="lazy"
                        />
                        <div className="instagram-post-overlay">
                          <i className="icon-instagram instagram-icon"></i>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
