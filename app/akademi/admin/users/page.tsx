'use client'

import { useEffect, useState } from 'react'

interface User {
  id: number
  tc: string
  adsoyad: string
  mail?: string
  telefon?: string
  sifre: string
  diploma?: string
  aktif: number
  klinikgiris?: number | string
  baslama?: string
  bitis?: string
  created_at?: string
}

export default function UsersAdminPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [formData, setFormData] = useState({
    tc: '',
    adsoyad: '',
    mail: '',
    telefon: '',
    sifre: '',
    diploma: '',
    aktif: 1,
    klinikgiris: 0,
    baslama: '',
    bitis: ''
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/akademi/admin/users', {
        credentials: 'include'
      })
      const data = await response.json()
      if (data.users) {
        setUsers(data.users)
      } else if (data.error) {
        setError(data.error)
      }
    } catch (err) {
      setError('Kullanıcılar yüklenemedi')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    try {
      const url = editingUser
        ? '/api/akademi/admin/users'
        : '/api/akademi/admin/users'
      
      const method = editingUser ? 'PUT' : 'POST'
      const body = editingUser
        ? { id: editingUser.id, ...formData }
        : formData

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(body)
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(data.message || 'İşlem başarılı')
        setShowModal(false)
        setEditingUser(null)
        resetForm()
        fetchUsers()
        setTimeout(() => setSuccess(''), 3000)
      } else {
        setError(data.error || 'Bir hata oluştu')
      }
    } catch (err) {
      setError('Bir hata oluştu')
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Bu kullanıcıyı silmek istediğinize emin misiniz?')) {
      return
    }

    try {
      const response = await fetch(`/api/akademi/admin/users?id=${id}`, {
        method: 'DELETE',
        credentials: 'include'
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess('Kullanıcı silindi')
        fetchUsers()
        setTimeout(() => setSuccess(''), 3000)
      } else {
        setError(data.error || 'Silme işlemi başarısız')
      }
    } catch (err) {
      setError('Bir hata oluştu')
    }
  }

  const handleEdit = (user: User) => {
    setEditingUser(user)
    setFormData({
      tc: user.tc,
      adsoyad: user.adsoyad,
      mail: user.mail || '',
      telefon: user.telefon || '',
      sifre: user.sifre,
      diploma: user.diploma || '',
      aktif: user.aktif,
      klinikgiris: typeof user.klinikgiris === 'number' ? user.klinikgiris : (user.klinikgiris === '1' ? 1 : 0),
      baslama: user.baslama || '',
      bitis: user.bitis || ''
    })
    setShowModal(true)
  }

  const resetForm = () => {
    setFormData({
      tc: '',
      adsoyad: '',
      mail: '',
      telefon: '',
      sifre: '',
      diploma: '',
      aktif: 1,
      klinikgiris: 0,
      baslama: '',
      bitis: ''
    })
  }

  const openAddModal = () => {
    setEditingUser(null)
    resetForm()
    setShowModal(true)
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
              <div className="column_attr" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2><strong>Kullanıcı Yönetimi</strong></h2>
                <button
                  onClick={openAddModal}
                  style={{
                    padding: '10px 20px',
                    background: '#20146b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  + Yeni Kullanıcı
                </button>
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
                      <th style={{ padding: '12px', textAlign: 'left' }}>TC</th>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Ad Soyad</th>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Email</th>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Telefon</th>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Aktif</th>
                      <th style={{ padding: '12px', textAlign: 'left' }}>Klinik Giriş</th>
                      <th style={{ padding: '12px', textAlign: 'left' }}>İşlemler</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} style={{ borderBottom: '1px solid #eee' }}>
                        <td style={{ padding: '12px' }}>{user.id}</td>
                        <td style={{ padding: '12px' }}>{user.tc}</td>
                        <td style={{ padding: '12px' }}>{user.adsoyad}</td>
                        <td style={{ padding: '12px' }}>{user.mail || '-'}</td>
                        <td style={{ padding: '12px' }}>{user.telefon || '-'}</td>
                        <td style={{ padding: '12px' }}>{user.aktif ? '✓' : '✗'}</td>
                        <td style={{ padding: '12px' }}>{user.klinikgiris ? '✓' : '✗'}</td>
                        <td style={{ padding: '12px' }}>
                          <button
                            onClick={() => handleEdit(user)}
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
                            Düzenle
                          </button>
                          <button
                            onClick={() => handleDelete(user.id)}
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

      {/* Modal */}
      {showModal && (
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
          onClick={() => setShowModal(false)}
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
            <h3 style={{ marginTop: 0 }}>
              {editingUser ? 'Kullanıcı Düzenle' : 'Yeni Kullanıcı Ekle'}
            </h3>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>TC Kimlik No *</label>
                <input
                  type="text"
                  value={formData.tc}
                  onChange={(e) => setFormData({ ...formData, tc: e.target.value })}
                  required
                  style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Ad Soyad *</label>
                <input
                  type="text"
                  value={formData.adsoyad}
                  onChange={(e) => setFormData({ ...formData, adsoyad: e.target.value })}
                  required
                  style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                <input
                  type="email"
                  value={formData.mail}
                  onChange={(e) => setFormData({ ...formData, mail: e.target.value })}
                  style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Telefon</label>
                <input
                  type="text"
                  value={formData.telefon}
                  onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                  style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Şifre *</label>
                <input
                  type="password"
                  value={formData.sifre}
                  onChange={(e) => setFormData({ ...formData, sifre: e.target.value })}
                  required
                  style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Diploma URL</label>
                <input
                  type="text"
                  value={formData.diploma}
                  onChange={(e) => setFormData({ ...formData, diploma: e.target.value })}
                  style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input
                    type="checkbox"
                    checked={formData.aktif === 1}
                    onChange={(e) => setFormData({ ...formData, aktif: e.target.checked ? 1 : 0 })}
                  />
                  Aktif
                </label>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input
                    type="checkbox"
                    checked={formData.klinikgiris === 1}
                    onChange={(e) => setFormData({ ...formData, klinikgiris: e.target.checked ? 1 : 0 })}
                  />
                  Klinik Giriş
                </label>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Başlama Tarihi</label>
                <input
                  type="date"
                  value={formData.baslama}
                  onChange={(e) => setFormData({ ...formData, baslama: e.target.value })}
                  style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Bitiş Tarihi</label>
                <input
                  type="date"
                  value={formData.bitis}
                  onChange={(e) => setFormData({ ...formData, bitis: e.target.value })}
                  style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                />
              </div>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false)
                    setEditingUser(null)
                    resetForm()
                  }}
                  style={{
                    padding: '10px 20px',
                    background: '#ccc',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  İptal
                </button>
                <button
                  type="submit"
                  style={{
                    padding: '10px 20px',
                    background: '#20146b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  {editingUser ? 'Güncelle' : 'Ekle'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
