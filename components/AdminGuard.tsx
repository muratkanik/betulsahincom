'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface AdminGuardProps {
  children: React.ReactNode
}

export default function AdminGuard({ children }: AdminGuardProps) {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const response = await fetch('/api/akademi/check-admin', {
          credentials: 'include'
        })
        const data = await response.json()
        
        if (data.isAdmin) {
          setIsAdmin(true)
        } else {
          setIsAdmin(false)
          router.push('/akademi')
        }
      } catch (error) {
        console.error('Admin check error:', error)
        setIsAdmin(false)
        router.push('/akademi')
      } finally {
        setLoading(false)
      }
    }

    checkAdmin()
  }, [router])

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <div style={{ fontSize: '18px' }}>Yükleniyor...</div>
      </div>
    )
  }

  if (!isAdmin) {
    return null
  }

  return <>{children}</>
}
