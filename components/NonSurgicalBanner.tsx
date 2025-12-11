'use client'

import Link from 'next/link'

export default function NonSurgicalBanner() {
  return (
    <div className="section sections_style_5">
      <div className="section_wrapper clearfix">
        <div className="items_group clearfix">
          <div className="column one column_zoom_box">
            <div className="zoom_box">
              <Link href="/ameliyatsiz">
                <div className="photo">
                  <img className="scale-with-grid" src="/web/content/webdesign/res/ortabanner.jpg" alt="" />
                </div>
                <div className="desc" style={{ backgroundColor: 'rgba(148, 132, 108, 0.8)' }}>
                  <div className="column_attr">
                    <p></p>
                    <p></p>
                    <h2 style={{ color: 'white' }}>
                      Ameliyatsız<br />
                      <strong>İşlemler</strong>
                    </h2>
                    <hr className="no_line hrmargin_b_40" />
                    <h4>
                      Ameliyatsız işlemler, cilt ve yüz görünümünü geliştirmenin cerrahi olmayan yollarını sunar, kırışıklık azaltma, dolgu gibi seçenekler sunar.
                    </h4>
                    <hr className="no_line hrmargin_b_40" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
