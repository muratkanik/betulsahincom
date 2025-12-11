'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface VideoItem {
  id: number
  baslik: string
  video: string
  dosyaadi: string
  arkaplanresmi?: string
  arkaplanyazi?: string
}

export default function VideolarPage() {
  const router = useRouter()
  const [videos, setVideos] = useState<VideoItem[]>([])
  const [loading, setLoading] = useState(true)
  const [userName, setUserName] = useState<string | null>(null)
  const [klinikGiris, setKlinikGiris] = useState<string | null>(null)
  const [kampError, setKampError] = useState('')

  useEffect(() => {
    // Cookie'den kullanıcı bilgisini al
    const cookies = document.cookie.split(';')
    let sessionUser: string | null = null
    let klinik: string | null = null

    cookies.forEach(cookie => {
      const [name, value] = cookie.trim().split('=')
      if (name === 'akademi_session') {
        sessionUser = decodeURIComponent(value)
      }
      if (name === 'klinik_giris') {
        klinik = decodeURIComponent(value)
      }
    })

    if (!sessionUser) {
      router.push('/akademi')
      return
    }

    setUserName(sessionUser)
    setKlinikGiris(klinik)

    // Videoları yükle
    fetch('/api/videolar', {
      credentials: 'include'
    })
      .then(res => {
        if (res.status === 401) {
          router.push('/akademi')
          return null
        }
        return res.json()
      })
      .then(data => {
        if (data && data.data) {
          setVideos(data.data)
        }
        setLoading(false)
      })
      .catch(err => {
        console.error('Videolar yüklenirken hata:', err)
        setLoading(false)
      })
  }, [router])

  const handleLogout = () => {
    // Cookie'leri temizle
    document.cookie = 'akademi_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    document.cookie = 'klinik_giris=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    router.push('/')
  }

  const handleKampVideo = () => {
    if (klinikGiris === '1') {
      setKampError('')
      window.open('https://vimeo.com/829134646/ae9f433212?share=copy#t=0', '_blank')
    } else {
      setKampError('Klinik Kaydınız Bulunmamaktadır')
    }
  }

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
              <div className="section dark" style={{ paddingTop: '200px', paddingBottom: '80px', backgroundImage: 'url(/web/content/webdesign/res/videolar_banner.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top' }}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_column">
                      <div className="column_attr">
                        <h2 style={{ fontWeight: 700 }}>Eğitim Videoları</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Güvenli Çıkış Butonu */}
              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column_attr align_center">
                      <div className="column one column_column">
                        <div className="column_attr align_center">
                          {userName && (
                            <p style={{ fontSize: 'large', fontWeight: 'bold' }}>
                              Hoşgeldin {userName}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="column one column_column">
                        <div className="column_attr align_center">
                          <button
                            onClick={handleLogout}
                            className="Button1"
                            style={{
                              padding: '10px 20px',
                              backgroundColor: '#007bff',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer'
                            }}
                          >
                            Güvenli Çıkış
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
                        <div key={video.id} className="column one-third column_zoom_box">
                          <div className="column_attr align_center">
                            <div className="column one column_column">
                              <div className="column_attr align_center">
                                <h4><strong>{video.baslik}</strong></h4>
                              </div>
                            </div>

                            <div className="zoom_box">
                              <a href={`/videolar/${video.video}`}>
                                <div className="photo">
                                  <img className="scale-with-grid" src={`/web/content/webdesign/res/${video.dosyaadi}`} alt={video.baslik} />
                                </div>
                                <div className="desc" style={{ backgroundColor: 'rgba(255, 106, 0, 0.6)' }}>
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

              {/* Kamp Videoları */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2>Kamp <strong>Videoları</strong></h2>
                  <h5>Kamp Videolarımıza erişmek için Klinik üyeliğinizin aktif olması gerekmektedir</h5>
                </div>
              </div>

              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h5>4.Face to Face Kamp- Kapadokya</h5>
                  <h5>Toplam 18 saatlik Tüm Yüz Dolgu, Toksin, İp ve Mezoterapi uygulamaları İçeren eğitim videomuzdur</h5>
                </div>
              </div>

              <div className="column_attr align_center">
                <img src="/web/content/webdesign/res/kamp1.jpg" alt="Kamp Video" />
                <br />
                <button
                  onClick={handleKampVideo}
                  className="Button_kampvideo"
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#ff6a00',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '10px'
                  }}
                >
                  İzlemek İçin Tıklayınız
                </button>
                <br />
                {kampError && (
                  <p style={{ color: 'red', fontWeight: 'bold' }}>{kampError}</p>
                )}
              </div>

              {/* Güvenli Çıkış Butonu (Alt) */}
              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column_attr align_center">
                      <div className="column one column_column">
                        <div className="column_attr align_center">
                          <button
                            onClick={handleLogout}
                            className="Button1"
                            style={{
                              padding: '10px 20px',
                              backgroundColor: '#007bff',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer'
                            }}
                          >
                            Güvenli Çıkış
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Telif Hakkı */}
              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_column">
                      <div className="column_attr align_center">
                        <h5>
                          Bu sayfada yayınlanan videolar Op. Dr. Betül Şahin'e aittir ve{' '}
                          <strong>Telif Hakları</strong> kapsamındadır. İzinsiz Kullanılamaz.
                        </h5>
                      </div>
                    </div>
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
