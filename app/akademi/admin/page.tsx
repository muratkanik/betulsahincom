'use client'

import { useEffect, useState } from 'react'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    users: 0,
    iletisim: 0,
    fiyatIstekleri: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [usersRes, iletisimRes, fiyatRes] = await Promise.all([
          fetch('/api/akademi/admin/users?count=true', { credentials: 'include' }),
          fetch('/api/akademi/admin/iletisim?count=true', { credentials: 'include' }),
          fetch('/api/akademi/admin/fiyat-istekleri?count=true', { credentials: 'include' })
        ])

        const [usersData, iletisimData, fiyatData] = await Promise.all([
          usersRes.json(),
          iletisimRes.json(),
          fiyatRes.json()
        ])

        setStats({
          users: usersData.count || 0,
          iletisim: iletisimData.count || 0,
          fiyatIstekleri: fiyatData.count || 0
        })
      } catch (error) {
        console.error('Stats fetch error:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

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
            <div className="column_attr align_center">
              <h2><strong>Yönetici Dashboard</strong></h2>
            </div>
          </div>
        </div>
      </div>

      <div className="section_wrapper clearfix">
        <div className="items_group clearfix">
          <div className="column one-third column_column">
            <div className="column_attr align_center" style={{
              background: 'white',
              padding: '30px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              margin: '10px'
            }}>
              <h3 style={{ fontSize: '48px', margin: '0 0 10px 0', color: '#20146b' }}>
                {stats.users}
              </h3>
              <p style={{ margin: 0, fontSize: '18px', color: '#666' }}>Kullanıcı</p>
            </div>
          </div>

          <div className="column one-third column_column">
            <div className="column_attr align_center" style={{
              background: 'white',
              padding: '30px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              margin: '10px'
            }}>
              <h3 style={{ fontSize: '48px', margin: '0 0 10px 0', color: '#20146b' }}>
                {stats.iletisim}
              </h3>
              <p style={{ margin: 0, fontSize: '18px', color: '#666' }}>İletişim Formu</p>
            </div>
          </div>

          <div className="column one-third column_column">
            <div className="column_attr align_center" style={{
              background: 'white',
              padding: '30px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              margin: '10px'
            }}>
              <h3 style={{ fontSize: '48px', margin: '0 0 10px 0', color: '#20146b' }}>
                {stats.fiyatIstekleri}
              </h3>
              <p style={{ margin: 0, fontSize: '18px', color: '#666' }}>Fiyat İsteği</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
