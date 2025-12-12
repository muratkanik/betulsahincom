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
          position: absolute;
          right: 70px;
          top: 30px;
          z-index: 9911;
          display: inline-block;
        }
        
        .header-overlay.sticky-header .language-switcher {
          position: fixed;
          margin-right: 10px;
        }
        
        @media (max-width: 768px) {
          .language-switcher {
            right: 70px;
            top: 30px;
          }
        }
        
        .language-switcher-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          border: none;
          border-radius: 0;
          color: #333;
          text-decoration: none;
          transition: all 0.3s;
          font-size: 30px;
          font-weight: normal;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 0;
          line-height: 1;
        }
        
        .language-switcher-link:hover {
          background: rgba(255, 255, 255, 0.7);
        }
        
        .language-switcher-link:active {
          background: rgba(255, 255, 255, 0.6);
        }
        
        .language-switcher-link img {
          width: 22px;
          height: 22px;
          object-fit: contain;
          display: block;
        }
        
        .language-switcher-link span {
          display: none;
        }
      `}</style>
      
      {isEnglish ? (
        <Link 
          href="/" 
          className="language-switcher-link"
          aria-label="Switch to Turkish"
        >
          <img src="/web/content/webdesign/res/turkce.png" alt="Türkçe" />
        </Link>
      ) : (
        <Link 
          href="/en" 
          className="language-switcher-link"
          aria-label="Switch to English"
        >
          <img src="/web/content/webdesign/res/ingilizce.png" alt="English" />
        </Link>
      )}
    </div>
  )
}
