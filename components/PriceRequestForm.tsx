'use client'

import { useState } from 'react'

export default function PriceRequestForm() {
  const [formData, setFormData] = useState({
    ad: '',
    sehir: '',
    gsm: '',
    islem: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/fiyat-iste', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setMessage('Talebiniz başarıyla iletilmiştir!')
        setFormData({ ad: '', sehir: '', gsm: '', islem: '' })
      } else {
        setMessage(data.message || 'Bir hata oluştu')
      }
    } catch (error) {
      setMessage('Bir hata oluştu. Lütfen tekrar deneyiniz.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="section sections_style_5">
      <div className="section_wrapper clearfix">
        <div className="items_group clearfix">
          <form onSubmit={handleSubmit}>
            <div className="column one-five">
              <label htmlFor="ad">Adınız Soyadınız</label>
              <input
                type="text"
                id="ad"
                className="form-control"
                placeholder="Adınız Soyadınız"
                value={formData.ad}
                onChange={(e) => setFormData({ ...formData, ad: e.target.value })}
                required
              />
            </div>

            <div className="column one-five">
              <label htmlFor="sehir">Yaşadığınız Şehir</label>
              <input
                type="text"
                id="sehir"
                className="form-control"
                placeholder="Yaşadığınız Şehir"
                value={formData.sehir}
                onChange={(e) => setFormData({ ...formData, sehir: e.target.value })}
                required
              />
            </div>

            <div className="column one-five">
              <label htmlFor="gsm">Gsm Numarası</label>
              <input
                type="tel"
                id="gsm"
                className="form-control"
                placeholder="Gsm Numarası"
                value={formData.gsm}
                onChange={(e) => setFormData({ ...formData, gsm: e.target.value })}
                required
              />
            </div>

            <div className="column one-five">
              <label htmlFor="islem">İşlem Seçiniz</label>
              <select
                id="islem"
                className="form-control"
                value={formData.islem}
                onChange={(e) => setFormData({ ...formData, islem: e.target.value })}
                required
              >
                <option value="">İşlem Seçiniz</option>
                <optgroup label="Ameliyatlar">
                  <option value="Burun estetiği">Burun estetiği</option>
                  <option value="Kepçe kulak estetiği">Kepçe kulak estetiği</option>
                  <option value="Göz kapağı estetiği">Göz kapağı estetiği</option>
                  <option value="Bişektomi /yanak estetiği">Bişektomi /yanak estetiği</option>
                  <option value="Liplift/dudak kaldırma estetiği">Liplift/dudak kaldırma estetiği</option>
                  <option value="Kaş kaldırma estetiği">Kaş kaldırma estetiği</option>
                  <option value="Facelift">Facelift</option>
                  <option value="Sinüzit cerrahisi">Sinüzit cerrahisi</option>
                  <option value="Horlama cerrahisi">Horlama cerrahisi</option>
                  <option value="Geniz eti ameliyatı">Geniz eti ameliyatı</option>
                  <option value="Bademcik ameliyatı">Bademcik ameliyatı</option>
                  <option value="Septoplasti">Septoplasti</option>
                </optgroup>
                <optgroup label="Ameliyatsız İşlemler">
                  <option value="Boyun kırışıklıkları tedavisi">Boyun kırışıklıkları tedavisi</option>
                  <option value="Gıdı eritme">Gıdı eritme</option>
                  <option value="Dolgu ile yüz şekillendirme">Dolgu ile yüz şekillendirme</option>
                  <option value="Toksin tedavileri">Toksin tedavileri</option>
                  <option value="Yüz gençleştirme tedavileri">Yüz gençleştirme tedavileri</option>
                </optgroup>
                <optgroup label="KBB Tedavileri">
                  <option value="Çocuk kbb Hastalıkları">Çocuk kbb Hastalıkları</option>
                  <option value="Alerji tedavileri">Alerji tedavileri</option>
                  <option value="Vertigo-Başdönmesi">Vertigo-Başdönmesi</option>
                  <option value="İşitme azlığı">İşitme azlığı</option>
                  <option value="Ses kısıklığı tedavileri">Ses kısıklığı tedavileri</option>
                  <option value="Sinüzit">Sinüzit</option>
                  <option value="Burun tıkanıklığı tedavileri">Burun tıkanıklığı tedavileri</option>
                </optgroup>
              </select>
            </div>

            <div className="column one-five">
              <br />
              <button
                type="submit"
                className="btn btn-primary w-100 py-3"
                disabled={loading}
              >
                {loading ? 'Gönderiliyor...' : 'Fiyat İste'}
              </button>
            </div>
          </form>

          {message && (
            <div className="column one" style={{ marginTop: '20px' }}>
              <div className={`alert ${message.includes('başarıyla') ? 'alert-success' : 'alert-error'}`}>
                {message}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
