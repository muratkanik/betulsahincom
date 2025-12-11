'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const isEnglish = pathname?.startsWith('/en')

  return (
    <div className="language-switcher">
      <style jsx>{`
        .language-switcher {
          position: fixed;
          top: 10px;
          right: 30px;
          z-index: 9999;
          display: inline-block;
        }
        
        @media (max-width: 768px) {
          .language-switcher {
            top: 10px;
            right: 60px;
          }
        }
        
        .language-switcher-link {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 13px;
          font-weight: 500;
        }
        
        .language-switcher-link:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.3);
        }
        
        .language-switcher-link img {
          width: 20px;
          height: 20px;
          object-fit: contain;
        }
      `}</style>
      
      {isEnglish ? (
        <Link 
          href="/" 
          className="language-switcher-link"
          aria-label="Switch to Turkish"
        >
          <img src="/web/content/webdesign/res/turkce.png" alt="Türkçe" />
          <span>TR</span>
        </Link>
      ) : (
        <Link 
          href="/en" 
          className="language-switcher-link"
          aria-label="Switch to English"
        >
          <img src="/web/content/webdesign/res/ingilizce.png" alt="English" />
          <span>EN</span>
        </Link>
      )}
    </div>
  )
}
