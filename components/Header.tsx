'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header id="Header">
      <div id="Action_bar">
        <div className="container">
          <div className="column one">
            <ul className="contact_details"></ul>
            <ul className="social"></ul>
          </div>
        </div>
      </div>

      <div id="Overlay" className={menuOpen ? 'open' : ''}>
        <nav id="overlay-menu">
          <ul id="menu-main-menu" className="overlay-menu">
            <li className="current_page_item">
              <Link href="/">Ana Sayfa</Link>
            </li>
            <li>
              <Link href="/tr-kimdir">Kimdir?</Link>
            </li>
            <li>
              <Link href="/ameliyatsiz">Ameliyatsız İşlemler</Link>
            </li>
            <li>
              <Link href="/ameliyatlar">Ameliyatlar</Link>
            </li>
            <li>
              <Link href="/kbb">KBB Tedavileri</Link>
            </li>
            <li>
              <Link href="/medya">Medya</Link>
            </li>
            <li>
              <Link href="/videogaleri">Video Galeri</Link>
            </li>
            <li>
              <Link href="/akademi">Akademi</Link>
            </li>
            <li>
              <Link href="/iletisim">İletişim</Link>
            </li>
          </ul>
        </nav>
      </div>

      <a 
        className="overlay-menu-toggle" 
        href="#"
        onClick={(e) => {
          e.preventDefault()
          setMenuOpen(!menuOpen)
        }}
      >
        <i className={menuOpen ? "close icon-cancel" : "open icon-menu"}></i>
      </a>

      <div id="Top_bar">
        <div className="container">
          <div className="column one">
            <div className="top_bar_left clearfix">
              <div className="logo">
                <Link href="/" id="logo" title="Op.Dr.Betül Şahin">
                  <img className="logo-main scale-with-grid" src="/web/content/webdesign/res/logo.png" alt="Betül Şahin" />
                  <img className="logo-sticky scale-with-grid" src="/web/content/webdesign/res/logo.png" alt="" />
                </Link>
              </div>
              <div className="menu_wrapper"></div>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}

