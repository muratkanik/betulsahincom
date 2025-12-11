'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const isEnglish = pathname?.startsWith('/en')

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <style jsx>{`
        .language-switcher {
          position: relative;
          display: inline-block;
        }
        
        .language-switcher-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
          font-weight: 500;
        }
        
        .language-switcher-button:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.3);
        }
        
        .language-switcher-button img {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }
        
        .language-switcher-button .arrow {
          margin-left: 4px;
          transition: transform 0.3s ease;
          font-size: 10px;
        }
        
        .language-switcher-button.open .arrow {
          transform: rotate(180deg);
        }
        
        .language-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          min-width: 160px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          z-index: 1000;
          overflow: hidden;
        }
        
        .language-dropdown.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        
        .language-option {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          color: #333;
          text-decoration: none;
          transition: background 0.2s ease;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .language-option:last-child {
          border-bottom: none;
        }
        
        .language-option:hover {
          background: #f8f8f8;
        }
        
        .language-option.active {
          background: #f0f7ff;
          color: #0066cc;
          font-weight: 600;
        }
        
        .language-option img {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }
        
        .language-option-text {
          display: flex;
          flex-direction: column;
        }
        
        .language-option-text strong {
          font-size: 14px;
          line-height: 1.2;
        }
      `}</style>
      
      <button
        className={`language-switcher-button ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Language selector"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <img 
            src="/web/content/webdesign/res/turkce.png" 
            alt="Türkçe"
            style={{ opacity: isEnglish ? 0.5 : 1 }}
          />
          <span style={{ opacity: isEnglish ? 0.5 : 1 }}>TR</span>
          <span style={{ margin: '0 4px', opacity: 0.5 }}>|</span>
          <img 
            src="/web/content/webdesign/res/ingilizce.png" 
            alt="English"
            style={{ opacity: !isEnglish ? 0.5 : 1 }}
          />
          <span style={{ opacity: !isEnglish ? 0.5 : 1 }}>EN</span>
        </div>
        <span className="arrow">▼</span>
      </button>
      
      <div className={`language-dropdown ${isOpen ? 'open' : ''}`}>
        <Link 
          href="/" 
          className={`language-option ${!isEnglish ? 'active' : ''}`}
          onClick={() => setIsOpen(false)}
        >
          <img src="/web/content/webdesign/res/turkce.png" alt="Türkçe" />
          <div className="language-option-text">
            <strong>Türkçe</strong>
          </div>
        </Link>
        <Link 
          href="/en" 
          className={`language-option ${isEnglish ? 'active' : ''}`}
          onClick={() => setIsOpen(false)}
        >
          <img src="/web/content/webdesign/res/ingilizce.png" alt="English" />
          <div className="language-option-text">
            <strong>English</strong>
          </div>
        </Link>
      </div>
    </div>
  )
}
