'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AkademiPage() {
  const [tcno, setTcno] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/akademi/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Cookie'leri göndermek için
        body: JSON.stringify({ tcno, password }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        // Başarılı giriş - videolar sayfasına yönlendir
        router.push('/videolar')
      } else {
        setError(data.message || 'Giriş başarısız. Lütfen bilgilerinizi kontrol edin.')
      }
    } catch (error) {
      setError('Bir hata oluştu. Lütfen tekrar deneyiniz.')
    } finally {
      setLoading(false)
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
              <div className="section dark" style={{paddingTop: '200px', paddingBottom: '80px', backgroundImage: 'url(/web/content/webdesign/res/akademi.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_column">
                      <div className="column_attr">
                        <h4 style={{fontWeight: 700, color: 'white'}}>Dr. Betül ŞAHİN</h4>
                        <h2 style={{fontWeight: 700, color: 'white'}}>Akademi</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p></p>
              <p></p>
              <p></p>

              {/* Başlık */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2><strong>Eğitim Videolarımız</strong></h2>
                  <h5>Hekim Giriş Ekranı</h5>
                </div>
              </div>

              {/* Kullanıcı Giriş Ekranı */}
              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a>
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/akademi_giris.jpg" alt="" height="300" width="300" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(32, 20, 107, 0.1)'}}>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div className="column one-second column_column">
                      <div className="column_attr">
                        <form onSubmit={handleSubmit}>
                          <h5><strong>TC Kimlik No</strong></h5>
                          <input
                            type="text"
                            value={tcno}
                            onChange={(e) => setTcno(e.target.value)}
                            required
                            style={{width: '100%', padding: '10px', marginBottom: '20px'}}
                          />
                          <h5><strong>Şifre</strong></h5>
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{width: '100%', padding: '10px', marginBottom: '20px'}}
                          />
                          <button 
                            type="submit" 
                            disabled={loading}
                            style={{padding: '10px 20px', marginRight: '10px'}}
                          >
                            {loading ? 'Giriş yapılıyor...' : 'Giriş'}
                          </button>
                          <a 
                            href="/akademi-kayit" 
                            style={{padding: '10px 20px', display: 'inline-block', textDecoration: 'none', border: '1px solid #ccc', borderRadius: '4px'}}
                          >
                            Kayıt Formu
                          </a>
                          {error && (
                            <p style={{color: 'red', marginTop: '10px'}}>{error}</p>
                          )}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Yeni Üye */}
              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_column">
                      <div className="column_attr align_center">
                        <h5>Sayfamıza kayıt olan hekimlerimiz, eğitim videolarımızı ücretsiz izleyebilirler</h5>
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
