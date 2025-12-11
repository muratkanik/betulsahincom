'use client'

import Link from 'next/link'

export default function AboutSection() {
  return (
    <div className="section sections_style_5">
      <div className="section_wrapper clearfix">
        <div className="items_group clearfix">
          <div className="column one column_divider">
            <hr className="no_line" />
          </div>

          <div className="column one-second column_zoom_box">
            <div className="zoom_box">
              <Link href="/tr-kimdir">
                <div className="photo">
                  <img className="scale-with-grid" src="/web/content/webdesign/res/kimdir.jpg" alt="" />
                </div>
                <div className="desc" style={{ backgroundColor: 'rgba(19, 79, 75, 0.8)' }}>
                  <div className="desc_wrap" style={{ paddingTop: '70px' }}>
                    <div className="desc_img">
                      <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                    </div>
                    <div className="desc_txt">Hakkında</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="column one-second column">
            <div className="column_attr">
              <h4 style={{ fontWeight: 700 }}>
                <span style={{ display: 'inline-block', width: '25px', height: '25px', background: '#bf1717', overflow: 'hidden', marginRight: '15px' }}></span>
                Op.Dr. Betül ŞAHİN kimdir?
              </h4>
              <p className="big">
                1997 yılında İstanbul Tıp fakültesinden derece ile mezun oldu<br />
                Türk Kulak Burun Boğaz vakfının kurucu kurul üyesidir.<br />
                Yüz Plastik Cerrahi Derneği üyesidir.<br />
                <br />
                Yüz estetiğiyle ilgili çok sayıda ulusal, uluslarası kongrede sunumları,<br />
                workshop eğitmenlikleri, kadavra üzerinde uygulamalı eğitmenlik,<br />
                minimal invaziv yüz gençleştirme kampları yapmıştır.
              </p>
              <div className="tp-caption tp-resizeme" style={{ fontSize: '20px', lineHeight: '22px', fontWeight: 400, color: 'rgb(233, 72, 12)', padding: '0 0 0 0', borderRadius: '0 0 0 0' }}>
                <Link href="/tr-kimdir" className="button button_stroke_custom button_js" style={{ borderColor: 'rgb(233, 72, 12)', color: 'rgb(233, 72, 12)' }}>
                  <span className="button_label">Hakkında</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
