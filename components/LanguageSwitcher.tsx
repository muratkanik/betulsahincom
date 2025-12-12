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
          position: relative;
          display: inline-block;
        }
        
        .language-switcher-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border: none;
          border-radius: 0 !important;
          color: #fff;
          text-decoration: none;
          transition: all 0.3s;
          font-size: 30px;
          font-weight: normal;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 7px 2px;
          line-height: 1em;
          box-sizing: border-box;
          vertical-align: middle;
        }
        
        .language-switcher-link:hover {
          background: rgba(0, 0, 0, 0.5);
        }
        
        .language-switcher-link:active {
          background: rgba(0, 0, 0, 0.4);
        }
        
        .language-switcher-link img {
          width: 1em;
          height: 1em;
          object-fit: contain;
          display: block;
          vertical-align: middle;
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
