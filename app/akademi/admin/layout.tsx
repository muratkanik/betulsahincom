'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import AdminGuard from '@/components/AdminGuard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [userInfo, setUserInfo] = useState<{ adsoyad?: string; tc?: string }>({})
  const pathname = usePathname()

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('/api/akademi/check-admin', {
          credentials: 'include'
        })
        const data = await response.json()
        if (data.isAdmin) {
          setUserInfo({ adsoyad: data.adsoyad, tc: data.tc })
        }
      } catch (error) {
        console.error('User info fetch error:', error)
      }
    }
    fetchUserInfo()
  }, [])

  const handleLogout = () => {
    // Cookie'leri temizle
    document.cookie = 'akademi_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    document.cookie = 'akademi_tc=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    document.cookie = 'akademi_admin=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    document.cookie = 'klinik_giris=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    window.location.href = '/akademi'
  }

  const menuItems = [
    { href: '/akademi/admin', label: 'Dashboard', icon: '📊' },
    { href: '/akademi/admin/users', label: 'Kullanıcılar', icon: '👥' },
    { href: '/akademi/admin/iletisim', label: 'İletişim Formları', icon: '📧' },
    { href: '/akademi/admin/fiyat-istekleri', label: 'Fiyat İstekleri', icon: '💰' },
    { href: '/akademi/admin/smtp-settings', label: 'SMTP Ayarları', icon: '⚙️' },
  ]

  return (
    <AdminGuard>
      <div id="Wrapper">
        <div id="Header_wrapper">
          <Header />
        </div>
        
        <div id="Content">
          <div className="content_wrapper clearfix">
            {/* Admin Panel Header */}
            <div className="section" style={{ background: '#20146b', color: 'white', padding: '20px 0' }}>
              <div className="section_wrapper clearfix">
                <div className="items_group clearfix">
                  <div className="column one column_column">
                    <div className="column_attr" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h2 style={{ margin: 0, color: 'white' }}>Yönetici Paneli</h2>
                      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <span>{userInfo.adsoyad || 'Yönetici'}</span>
                        <button
                          onClick={handleLogout}
                          style={{
                            padding: '8px 16px',
                            background: 'rgba(255, 255, 255, 0.2)',
                            border: '1px solid white',
                            color: 'white',
                            borderRadius: '4px',
                            cursor: 'pointer'
                          }}
                        >
                          Çıkış
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Admin Navigation */}
            <div className="section" style={{ background: '#f5f5f5', padding: '10px 0', borderBottom: '1px solid #ddd' }}>
              <div className="section_wrapper clearfix">
                <div className="items_group clearfix">
                  <div className="column one column_column">
                    <div className="column_attr">
                      <nav style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        {menuItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            style={{
                              padding: '10px 20px',
                              background: pathname === item.href ? '#20146b' : 'white',
                              color: pathname === item.href ? 'white' : '#333',
                              textDecoration: 'none',
                              borderRadius: '4px',
                              border: '1px solid #ddd',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '8px',
                              transition: 'all 0.3s'
                            }}
                          >
                            <span>{item.icon}</span>
                            {item.label}
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Page Content */}
            <div className="sections_group">
              <div className="entry-content">
                {children}
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </AdminGuard>
  )
}
