'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const isEnglish = pathname?.startsWith('/en')

  return (
    <>
      <style jsx global>{`
        .language-switcher-link {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          background: rgba(0, 0, 0, 0.3) !important;
          backdrop-filter: blur(10px);
          border: none !important;
          border-radius: 0 !important;
          color: #fff !important;
          text-decoration: none !important;
          transition: all 0.3s;
          font-size: 30px !important;
          font-weight: normal !important;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 7px 4px !important;
          line-height: 1em !important;
          box-sizing: border-box !important;
          vertical-align: middle !important;
          margin: 0 !important;
          width: auto !important;
          height: auto !important;
        }
        
        .language-switcher-link:hover {
          background: rgba(0, 0, 0, 0.5) !important;
        }
        
        .language-switcher-link:active {
          background: rgba(0, 0, 0, 0.4) !important;
        }
        
        .language-switcher-link img {
          width: 0.85em !important;
          height: 0.85em !important;
          object-fit: contain !important;
          display: block !important;
          vertical-align: middle !important;
          margin: 0 !important;
          border-radius: 0 !important;
        }
      `}</style>
      
      {isEnglish ? (
        <Link 
          href="/" 
          className="language-switcher-link"
          aria-label="Switch to Turkish"
        >
          <img src="/web/content/webdesign/res/turkce-square.png" alt="Türkçe" />
        </Link>
      ) : (
        <Link 
          href="/en" 
          className="language-switcher-link"
          aria-label="Switch to English"
        >
          <img src="/web/content/webdesign/res/ingilizce-square.png" alt="English" />
        </Link>
      )}
    </>
  )
}
