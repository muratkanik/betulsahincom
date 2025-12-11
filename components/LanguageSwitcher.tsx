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
          justify-content: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: none;
          border-radius: 16px;
          color: #333;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 14px;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1);
          min-width: 70px;
        }
        
        .language-switcher-link:hover {
          background: rgba(255, 255, 255, 1);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15);
        }
        
        .language-switcher-link:active {
          transform: translateY(0);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }
        
        .language-switcher-link img {
          width: 22px;
          height: 22px;
          object-fit: contain;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
        }
        
        .language-switcher-link span {
          letter-spacing: 0.5px;
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
