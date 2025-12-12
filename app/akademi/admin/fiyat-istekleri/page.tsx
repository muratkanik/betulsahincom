'use client'

import { useEffect, useState } from 'react'

interface FiyatIstek {
  id: number
  ad: string
  sehir: string
  gsm: string
  islem: string
  created_at?: string
}

export default function FiyatIstekleriAdminPage() {
  const [fiyatIstekleri, setFiyatIstekleri] = useState<FiyatIstek[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedItem, setSelectedItem] = useState<FiyatIstek | null>(null)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    fetchFiyatIstekleri()
  }, [])

  const fetchFiyatIstekleri = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/akademi/admin/fiyat-istekleri', {
        credentials: 'include'
      })
      const data = await response.json()
      if (data.fiyatIstekleri) {
        setFiyatIstekleri(data.fiyatIstekleri)
      } else if (data.error) {
        setError(data.error)
      }
    } catch (err) {
      setError('Fiyat istekleri yüklenemedi')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Bu fiyat isteğini silmek istediğinize emin misiniz?')) {
      return
    }

    try {
      const response = await fetch(`/api/akademi/admin/fiyat-istekleri?id=${id}`, {
        method: 'DELETE',
        credentials: 'include'
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess('Fiyat isteği silindi')
        fetchFiyatIstekleri()
        setTimeout(() => setSuccess(''), 3000)
      } else {
        setError(data.error || 'Silme işlemi başarısız')
      }
    } catch (err) {
      setError('Bir hata oluştu')
    }
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return '-'
    return new Date(dateString).toLocaleString('tr-TR')
  }

  if (loading) {
    return (
      <div className="section sections_style_5">
        <div className="section_wrapper clearfix">
          <div className="items_group clearfix">
            <div className="column one column_column">
              <div className="column_attr align_center">
                <p>Yükleniyor...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="section sections_style_5">
        <div className="section_wrapper clearfix">
          <div className="items_group clearfix">
            <div className="column one column_column">
              <div className="column_attr">
                <h2><strong>Fiyat İstekleri</strong></h2>
              </div>
            </div>
          </div>
        </div>

        {error && (
          <div className="section_wrapper clearfix">
            <div className="items_group clearfix">
              <div className="column one column_column">
                <div className="column_attr" style={{ padding: '15px', background: '#fee', color: '#c33', borderRadius: '4px', marginBottom: '20px' }}>
                  {error}
                </div>
              </div>
            </div>
          </div>
        )}

        {success && (
          <div className="section_wrapper clearfix">
            <div className="items_group clearfix">
              <div className="column one column_column">
                <div className="column_attr" style={{ padding: '15px', background: '#efe', color: '#3c3', borderRadius: '4px', marginBottom: '20px' }}>
                  {success}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="section_wrapper clearfix">
          <div className="items_group clearfix">
            <div className="column one column_column">
              <div className="column_attr">
                <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <thead>
                    <tr style={{ background: '#20146b', color: 'white' }}>
                      <th style={{ padding: '12px', textAlign: 'left' }}>ID</th>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Ad</th>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Şehir</th>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Telefon</th>
                      <th style={{ padding: '12px', textAlign: 'left' }}>İşlem</th>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Tarih</th>
                      <th style={{ padding: '12px', textAlign: 'left' }}>İşlemler</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fiyatIstekleri.map((item) => (
                      <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                        <td style={{ padding: '12px' }}>{item.id}</td>
                        <td style={{ padding: '12px' }}>{item.ad}</td>
                        <td style={{ padding: '12px' }}>{item.sehir}</td>
                        <td style={{ padding: '12px' }}>{item.gsm}</td>
                        <td style={{ padding: '12px' }}>{item.islem}</td>
                        <td style={{ padding: '12px' }}>{formatDate(item.created_at)}</td>
                        <td style={{ padding: '12px' }}>
                          <button
                            onClick={() => setSelectedItem(item)}
                            style={{
                              padding: '5px 10px',
                              marginRight: '5px',
                              background: '#20146b',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer'
                            }}
                          >
                            Detay
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            style={{
                              padding: '5px 10px',
                              background: '#c33',
                              color: 'white',
                              border: 'none',
                              borderRadius: '4px',
                              cursor: 'pointer'
                            }}
                          >
                            Sil
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detay Modal */}
      {selectedItem && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}
          onClick={() => setSelectedItem(null)}
        >
          <div
            style={{
              background: 'white',
              padding: '30px',
              borderRadius: '8px',
              maxWidth: '600px',
              width: '90%',
              maxHeight: '90vh',
              overflow: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ marginTop: 0 }}>Fiyat İsteği Detayı</h3>
            <div style={{ marginBottom: '15px' }}>
              <strong>Ad:</strong> {selectedItem.ad}
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Şehir:</strong> {selectedItem.sehir}
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Telefon:</strong> {selectedItem.gsm}
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>İşlem:</strong> {selectedItem.islem}
            </div>
            <div style={{ marginBottom: '15px' }}>
              <strong>Tarih:</strong> {formatDate(selectedItem.created_at)}
            </div>
            <button
              onClick={() => setSelectedItem(null)}
              style={{
                padding: '10px 20px',
                background: '#20146b',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </>
  )
}
