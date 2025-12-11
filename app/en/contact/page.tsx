'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/iletisim', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setSubmitting(false)
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
              <div className="section dark" style={{paddingTop: '200px', paddingBottom: '80px', backgroundImage: 'url(/web/content/webdesign/res/iletisim_banner.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_column">
                      <div className="column_attr">
                        <h2 style={{fontWeight: 700}}>İletişim</h2>
                        <div className="image_frame no_link scale-with-grid alignnone no_border">
                          <div className="image_wrapper">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ciz.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alt Başlık */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h3>Op.Dr.<strong>Betül ŞAHİN</strong></h3>
                </div>
              </div>

              <div className="section" style={{paddingTop: '70px', paddingBottom: '30px'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    {/* Adres Bilgileri */}
                    <div className="column one-second column_column">
                      <div className="column_attr">
                        <h4>Adres <strong>Bilgileri</strong></h4>
                        <div className="column one-second">
                          <div className="image_frame scale-with-grid alignnone no_border">
                            <div className="image_wrapper">
                              <a>
                                <div className="mask"></div>
                                <img className="scale-with-grid" src="/web/content/webdesign/res/iletişim_orta.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="column one-second">
                          <h4>Op.Dr.Betül ŞAHİN</h4>
                          <h5 className="hrmargin_b_7">Caddebostan, Bağdat Cad.</h5>
                          <p>No:326/14,34728</p>
                          <p>Kadıköy/İstanbul</p>
                          <p><a href="tel:+905461510505" className="arrow_link">0 (546) 151 05 05</a></p>
                          <p>info@drbetulsahin.com</p>
                          <div className="column one-five">
                            <a target="_blank" href="https://www.instagram.com/dr.betulsahin/" rel="noopener noreferrer">
                              <img className="scale-with-grid" src="/web/content/webdesign/res/instagram.png" alt="" />
                            </a>
                          </div>
                          <div className="column one-five">
                            <a target="_blank" href="https://www.youtube.com/@dr.betulsahin" rel="noopener noreferrer">
                              <img className="scale-with-grid" src="/web/content/webdesign/res/youtube.png" alt="" />
                            </a>
                          </div>
                          <div className="column one-five">
                            <a target="_blank" href="https://www.facebook.com/opdrBetulSahin/" rel="noopener noreferrer">
                              <img className="scale-with-grid" src="/web/content/webdesign/res/facebook.png" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Google Maps */}
                    <div className="column one-second column_column">
                      <div className="column_attr">
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4260.6251544542665!2d29.069997108203623!3d40.965779422770375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7f7a6b281cb%3A0x413ab3ec074a2702!2zT3AuRHIuIEJldMO8bCDFnkFIxLBOIEtsaW5paw!5e0!3m2!1str!2str!4v1708072292988!5m2!1str!2str" 
                          width="600" 
                          height="450" 
                          style={{border: 0}} 
                          allowFullScreen 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>

                    {/* İletişim Formu */}
                    <div className="column one-second column_column">
                      <div className="column_attr">
                        <hr className="no_line hrmargin_b_1" />
                        <h3>İletişim <strong>Formu</strong></h3>
                        <p className="big">Lütfen Bize Ulaşın</p>
                        <div id="contactWrapper">
                          <form onSubmit={handleSubmit}>
                            <div className="column one-second">
                              <label htmlFor="name">İsminiz</label>
                              <input
                                type="text"
                                id="name"
                                className="form-control"
                                placeholder="İsim Soyisim"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                required
                              />
                            </div>
                            <div className="column one-second">
                              <label htmlFor="email">Email</label>
                              <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                              />
                            </div>
                            <div className="column one">
                              <label htmlFor="subject">Konu</label>
                              <input
                                type="text"
                                id="subject"
                                className="form-control"
                                placeholder="Konu"
                                value={formData.subject}
                                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                required
                              />
                            </div>
                            <div className="column one">
                              <label htmlFor="message">Mesaj</label>
                              <textarea
                                id="message"
                                className="form-control"
                                placeholder="Mesajınız ..."
                                style={{height: '100px'}}
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                required
                              ></textarea>
                            </div>
                            <div className="column one">
                              <button 
                                type="submit" 
                                className="btn btn-primary w-100 py-3"
                                disabled={submitting}
                              >
                                {submitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                              </button>
                              {submitStatus === 'success' && (
                                <p style={{color: 'green', marginTop: '10px'}}>Mesajınız başarıyla gönderildi!</p>
                              )}
                              {submitStatus === 'error' && (
                                <p style={{color: 'red', marginTop: '10px'}}>Bir hata oluştu. Lütfen tekrar deneyin.</p>
                              )}
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                    {/* Sağlık Turizmi */}
                    <div className="column one-second column_column">
                      <div className="column_attr">
                        <div className="image_frame scale-with-grid alignnone no_border">
                          <div className="image_wrapper">
                            <a>
                              <div className="mask"></div>
                              <img className="scale-with-grid" src="/web/content/webdesign/res/saglik_turizmi.jpg" alt="" />
                            </a>
                          </div>
                        </div>
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
