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
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [forgotPasswordTC, setForgotPasswordTC] = useState('')
  const [forgotPasswordLoading, setForgotPasswordLoading] = useState(false)
  const [forgotPasswordError, setForgotPasswordError] = useState('')
  const [forgotPasswordSuccess, setForgotPasswordSuccess] = useState(false)
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
        body: JSON.stringify({ tc: tcno, sifre: password }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        // Admin ise admin paneline, değilse videolar sayfasına yönlendir
        if (data.user?.isAdmin) {
          router.push('/akademi/admin')
        } else {
          router.push('/videolar')
        }
      } else {
        setError(data.message || 'Giriş başarısız. Lütfen bilgilerinizi kontrol edin.')
      }
    } catch (error) {
      setError('Bir hata oluştu. Lütfen tekrar deneyiniz.')
    } finally {
      setLoading(false)
    }
  }

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setForgotPasswordLoading(true)
    setForgotPasswordError('')
    setForgotPasswordSuccess(false)

    try {
      const response = await fetch('/api/akademi/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tc: forgotPasswordTC }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setForgotPasswordSuccess(true)
        setForgotPasswordTC('')
        setTimeout(() => {
          setShowForgotPassword(false)
          setForgotPasswordSuccess(false)
        }, 3000)
      } else {
        setForgotPasswordError(data.message || 'Bir hata oluştu. Lütfen tekrar deneyiniz.')
      }
    } catch (error) {
      setForgotPasswordError('Bir hata oluştu. Lütfen tekrar deneyiniz.')
    } finally {
      setForgotPasswordLoading(false)
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
                            style={{padding: '10px 20px', display: 'inline-block', textDecoration: 'none', border: '1px solid #ccc', borderRadius: '4px', marginRight: '10px'}}
                          >
                            Kayıt Formu
                          </a>
                          <button
                            type="button"
                            onClick={() => setShowForgotPassword(true)}
                            style={{padding: '10px 20px', background: 'transparent', border: '1px solid #ccc', borderRadius: '4px', cursor: 'pointer', color: '#666'}}
                          >
                            Şifremi Unuttum
                          </button>
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
      
      {/* Şifremi Unuttum Modal */}
      {showForgotPassword && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}
          onClick={() => {
            if (!forgotPasswordLoading) {
              setShowForgotPassword(false)
              setForgotPasswordError('')
              setForgotPasswordSuccess(false)
            }
          }}
        >
          <div 
            style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '8px',
              maxWidth: '500px',
              width: '90%',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setShowForgotPassword(false)
                setForgotPasswordError('')
                setForgotPasswordSuccess(false)
              }}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#666'
              }}
            >
              ×
            </button>
            
            <h3 style={{marginBottom: '20px'}}>Şifremi Unuttum</h3>
            
            {forgotPasswordSuccess ? (
              <div style={{color: 'green', marginBottom: '20px'}}>
                <p>Yeni şifreniz e-posta adresinize gönderilmiştir. Lütfen e-posta kutunuzu kontrol ediniz.</p>
              </div>
            ) : (
              <form onSubmit={handleForgotPassword}>
                <p style={{marginBottom: '20px', color: '#666'}}>
                  TC Kimlik Numaranızı giriniz. Yeni şifreniz kayıtlı e-posta adresinize gönderilecektir.
                </p>
                <input
                  type="text"
                  value={forgotPasswordTC}
                  onChange={(e) => setForgotPasswordTC(e.target.value)}
                  placeholder="TC Kimlik No"
                  required
                  style={{width: '100%', padding: '10px', marginBottom: '20px', boxSizing: 'border-box'}}
                />
                {forgotPasswordError && (
                  <p style={{color: 'red', marginBottom: '10px'}}>{forgotPasswordError}</p>
                )}
                <div style={{display: 'flex', gap: '10px'}}>
                  <button
                    type="submit"
                    disabled={forgotPasswordLoading}
                    style={{
                      padding: '10px 20px',
                      background: '#20146b',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: forgotPasswordLoading ? 'not-allowed' : 'pointer',
                      flex: 1
                    }}
                  >
                    {forgotPasswordLoading ? 'Gönderiliyor...' : 'Gönder'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowForgotPassword(false)
                      setForgotPasswordError('')
                      setForgotPasswordSuccess(false)
                    }}
                    style={{
                      padding: '10px 20px',
                      background: '#ccc',
                      color: 'black',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    İptal
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  )
}
