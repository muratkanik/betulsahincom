'use client'

import Link from 'next/link'

export default function ServicesSection() {
  return (
    <>
      <div className="section sections_style_5">
        <div className="section_wrapper clearfix">
          <div className="items_group clearfix">
            <div className="column one column_column">
              <div className="column_attr align_center">
                <h2>Burun <strong>Estetiği</strong></h2>
                <h5>Burun estetiği, burunun görünümünü iyileştirmek için yapılan cerrahi bir prosedürdür. Fonksiyonel iyileştirmeler de yapılabilir. Uzman bir cerrahla danışmak önemlidir.</h5>
              </div>
            </div>

            <div className="column one-second column_zoom_box">
              <div className="zoom_box">
                <Link href="/ameliyatlar">
                  <div className="photo">
                    <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan.jpg" alt="" />
                  </div>
                  <div className="desc" style={{ backgroundColor: 'rgba(12, 123, 175, 0.8)' }}>
                    <div className="desc_wrap" style={{ paddingTop: '70px' }}>
                      <div className="desc_img">
                        <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                      </div>
                      <div className="desc_txt">Rinoplasti</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="column one-second column_zoom_box">
              <div className="zoom_box">
                <Link href="/ameliyatlar">
                  <div className="photo">
                    <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan2.jpg" alt="" />
                  </div>
                  <div className="desc" style={{ backgroundColor: 'rgba(236, 46, 133, 0.8)' }}>
                    <div className="desc_wrap">
                      <div className="desc_img">
                        <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                      </div>
                      <div className="desc_txt">TipPlasti</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section sections_style_5">
        <div className="section_wrapper clearfix">
          <div className="items_group clearfix">
            <div className="column one column_column">
              <div className="column_attr align_center">
                <h2>Ameliyatlar <strong></strong></h2>
              </div>
            </div>

            {/* Page divider */}
            <div className="column one column_divider">
              <hr className="no_line" />
            </div>

            <div className="column one-third column_zoom_box">
              <div className="zoom_box">
                <Link href="/ameliyatsiz">
                  <div className="photo">
                    <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan3.jpg" alt="" />
                  </div>
                  <div className="desc" style={{ backgroundColor: 'rgba(232, 167, 53, 0.8)' }}>
                    <div className="desc_wrap">
                      <div className="desc_img">
                        <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                      </div>
                      <div className="desc_txt">Kepçe Kulak Estetiği(OtoPlasti)</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="column one-third column_zoom_box">
              <div className="zoom_box">
                <Link href="/ameliyatsiz">
                  <div className="photo">
                    <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan4.jpg" alt="" />
                  </div>
                  <div className="desc" style={{ backgroundColor: 'rgba(12, 50, 95, 0.8)' }}>
                    <div className="desc_wrap">
                      <div className="desc_img">
                        <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                      </div>
                      <div className="desc_txt">Göz Kapağı Estetiği</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="column one-third column_zoom_box">
              <div className="zoom_box">
                <Link href="/ameliyatsiz">
                  <div className="photo">
                    <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan5.jpg" alt="" />
                  </div>
                  <div className="desc" style={{ backgroundColor: 'rgba(148, 132, 108, 0.8)' }}>
                    <div className="desc_wrap">
                      <div className="desc_img">
                        <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                      </div>
                      <div className="desc_txt">Burun Polibi (Nazal Polip)</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
