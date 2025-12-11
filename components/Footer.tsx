'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="Footer" className="clearfix">
      <div className="widgets_wrapper">
        <div className="container">
          <div className="column one-second">
            <aside className="widget widget_text">
              <div className="textwidget">
                <div className="image_frame no_link scale-with-grid alignnone no_border">
                  <div className="image_wrapper">
                    <img className="scale-with-grid" src="/web/content/webdesign/res/logo2_footer.png" alt="" />
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div className="column one-second">
            <aside className="widget widget_text">
              <div className="textwidget">
                <p className="contact_icons" style={{ textAlign: 'right', marginTop: '10px' }}>
                  <a href="https://www.instagram.com/dr.betulsahin/">
                    <i className="icon-instagram"></i>
                  </a>
                  <a href="https://www.youtube.com/@dr.betulsahin">
                    <i className="icon-youtube"></i>
                  </a>
                  <a href="https://www.facebook.com/opdrBetulSahin/">
                    <i className="icon-facebook"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/dr-betül-şahin-770a19262/">
                    <i className="icon-linkedin-circled"></i>
                  </a>
                </p>
              </div>
            </aside>

            <div className="copyright">
              Sitede yayınlanan her türlü yazı içeren bilgi,belge ve fikri mülkiyet hakkı, sahipleri ve sahiplerinin izni ile kullanılmaktadır.Telif hakları kapsamındadır.
              &copy; COPYRIGHT Betül Şahin - 2023 - Designed by{' '}
              <a target="_blank" rel="nofollow" href="https://sistemdestekas.com.tr">
                Sistem Destek A.Ş.
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_copy">
        <div className="container">
          <div className="column one">
            <a id="back_to_top" href="#" className="button button_left button_js">
              <span className="button_icon">
                <i className="icon-up-open-big"></i>
              </span>
            </a>

            <nav id="social-menu">
              <ul id="menu-main-menu-1" className="social-menu">
                <li><Link href="/">Ana Sayfa</Link></li>
                <li><Link href="/tr-kimdir">Op.Dr. Betül ŞAHİN kimdir?</Link></li>
                <li><Link href="/ameliyatsiz">Ameliyatsız İşlemler</Link></li>
                <li><Link href="/ameliyatlar">Ameliyatlar</Link></li>
                <li><Link href="/kbb">KBB Tedavileri</Link></li>
                <li><Link href="/medya">Medya</Link></li>
                <li><Link href="/videogaleri">Video Galeri</Link></li>
                <li><Link href="/akademi">Akademi</Link></li>
                <li><Link href="/iletisim">İletişim</Link></li>
                <li><Link href="/en">English</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
