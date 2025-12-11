'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface VideoGaleriItem {
  id: number
  baslik: string
  video: string
  dosyaadi: string
  arkaplanresmi?: string
  arkaplanyazi?: string
}

export default function VideoGaleriPage() {
  const [videos, setVideos] = useState<VideoGaleriItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/videogaleri')
      .then(res => res.json())
      .then(data => {
        if (data.data) {
          setVideos(data.data)
        }
        setLoading(false)
      })
      .catch(err => {
        console.error('Video galeri yüklenirken hata:', err)
        setLoading(false)
      })
  }, [])

  return (
    <div id="Wrapper">
      <div id="Header_wrapper">
        <Header />
      </div>

      <div id="Content">
        <div className="content_wrapper clearfix">
          <div className="sections_group">
            <div className="entry-content">
              {/* Banner */}
              <div className="section dark" style={{ paddingTop: '200px', paddingBottom: '80px', backgroundImage: 'url(/web/content/webdesign/res/akademi.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_column">
                      <div className="column_attr">
                        <h4 style={{ fontWeight: 700, color: 'white' }}>Dr. Betül ŞAHİN Eğitimleri</h4>
                        <h2 style={{ fontWeight: 700, color: 'white' }}>Video Galeri</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p></p>
              <p></p>
              <p></p>

              {/* Video Listesi */}
              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    {loading ? (
                      <div className="column one column_column">
                        <div className="column_attr align_center">
                          <p>Yükleniyor...</p>
                        </div>
                      </div>
                    ) : videos.length === 0 ? (
                      <div className="column one column_column">
                        <div className="column_attr align_center">
                          <p>Henüz video bulunmamaktadır.</p>
                        </div>
                      </div>
                    ) : (
                      videos.map((video) => (
                        <div key={video.id} className="column one-third">
                          <div className="column_attr align_center">
                            <div className="column one-five">
                              <div className="column_attr align_center">
                                <h4><strong>{video.baslik}</strong></h4>
                              </div>
                            </div>

                            <div className="zoom_box">
                              <a href={`/videogaleri2/${video.video}`}>
                                <div className="photo">
                                  <img className="scale-with-grid" src={`/web/content/webdesign/res/videogaleri/${video.dosyaadi}`} alt={video.baslik} />
                                </div>
                                <div className="desc" style={{ backgroundColor: 'rgba(153, 30, 210, 0.7)' }}>
                                  <div className="desc_wrap" style={{ paddingTop: '70px' }}>
                                    <div className="desc_img">
                                      <img className="scale-with-grid" src={`/web/content/webdesign/res/${video.arkaplanresmi || 'manset_arkaplan_icon.png'}`} alt="" />
                                    </div>
                                    <div className="desc_txt">
                                      {video.arkaplanyazi || 'Video'}
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
