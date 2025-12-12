'use client'

import { useEffect, useState } from 'react'

interface SmtpSettings {
  id?: number
  host: string
  port: string
  secure: boolean
  user: string
  from_email?: string
  updated_at?: string
}

export default function SmtpSettingsPage() {
  const [settings, setSettings] = useState<SmtpSettings | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState({
    host: '',
    port: '587',
    secure: false,
    user: '',
    password: '',
    from_email: ''
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/akademi/admin/smtp-settings', {
        credentials: 'include'
      })
      const data = await response.json()
      if (data.settings) {
        setSettings(data.settings)
        setFormData({
          host: data.settings.host || '',
          port: data.settings.port || '587',
          secure: data.settings.secure || false,
          user: data.settings.user || '',
          password: '', // Şifre gösterilmez
          from_email: data.settings.from_email || data.settings.user || ''
        })
      } else if (data.error) {
        setError(data.error)
      }
    } catch (err) {
      setError('SMTP ayarları yüklenemedi')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setSaving(true)

    try {
      const response = await fetch('/api/akademi/admin/smtp-settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(data.message || 'SMTP ayarları güncellendi')
        setFormData({ ...formData, password: '' }) // Şifreyi temizle
        fetchSettings()
        setTimeout(() => setSuccess(''), 3000)
      } else {
        setError(data.error || 'Bir hata oluştu')
      }
    } catch (err) {
      setError('Bir hata oluştu')
    } finally {
      setSaving(false)
    }
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
    <div className="section sections_style_5">
      <div className="section_wrapper clearfix">
        <div className="items_group clearfix">
          <div className="column one column_column">
            <div className="column_attr">
              <h2><strong>SMTP Ayarları</strong></h2>
              <p style={{ color: '#666', marginBottom: '20px' }}>
                E-posta gönderimi için SMTP sunucu ayarlarını yapılandırın. Şifre güvenlik nedeniyle gösterilmez.
              </p>
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
              <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                    SMTP Host *
                  </label>
                  <input
                    type="text"
                    value={formData.host}
                    onChange={(e) => setFormData({ ...formData, host: e.target.value })}
                    required
                    placeholder="mail.sistemdestekas.com.tr"
                    style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ddd' }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                    SMTP Port *
                  </label>
                  <input
                    type="text"
                    value={formData.port}
                    onChange={(e) => setFormData({ ...formData, port: e.target.value })}
                    required
                    placeholder="587"
                    style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ddd' }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input
                      type="checkbox"
                      checked={formData.secure}
                      onChange={(e) => setFormData({ ...formData, secure: e.target.checked })}
                    />
                    <span style={{ fontWeight: 'bold' }}>Secure (SSL/TLS)</span>
                  </label>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                    SMTP Kullanıcı Adı (Email) *
                  </label>
                  <input
                    type="email"
                    value={formData.user}
                    onChange={(e) => setFormData({ ...formData, user: e.target.value, from_email: formData.from_email || e.target.value })}
                    required
                    placeholder="drbetulsahin@sistemdestekas.com.tr"
                    style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ddd' }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                    SMTP Şifre {settings ? '(Değiştirmek için yeni şifre girin)' : '*'}
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required={!settings}
                      placeholder={settings ? 'Şifreyi değiştirmek için yeni şifre girin' : 'SMTP şifresi'}
                      style={{ width: '100%', padding: '10px', paddingRight: '40px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ddd' }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '18px'
                      }}
                    >
                      {showPassword ? '🙈' : '👁️'}
                    </button>
                  </div>
                  {settings && (
                    <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                      Mevcut şifre gösterilmez. Değiştirmek istemiyorsanız boş bırakın.
                    </p>
                  )}
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                    Gönderen Email (From)
                  </label>
                  <input
                    type="email"
                    value={formData.from_email}
                    onChange={(e) => setFormData({ ...formData, from_email: e.target.value })}
                    placeholder="drbetulsahin@sistemdestekas.com.tr"
                    style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ddd' }}
                  />
                  <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                    Boş bırakılırsa SMTP kullanıcı adı kullanılır.
                  </p>
                </div>

                {settings && settings.updated_at && (
                  <div style={{ marginBottom: '20px', padding: '10px', background: '#f5f5f5', borderRadius: '4px' }}>
                    <strong>Son Güncelleme:</strong> {new Date(settings.updated_at).toLocaleString('tr-TR')}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={saving}
                  style={{
                    padding: '12px 24px',
                    background: '#20146b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: saving ? 'not-allowed' : 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}
                >
                  {saving ? 'Kaydediliyor...' : 'Kaydet'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
