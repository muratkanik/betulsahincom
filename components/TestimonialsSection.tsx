'use client'

import YouTubeFeed from '@/components/YouTubeFeed'

export default function TestimonialsSection() {
  return (
    <>
      <div className="section sections_style_5">
        <div className="section_wrapper clearfix">
          <div className="items_group clearfix">
            <div className="column_attr align_center">
              <h3><strong>Hasta</strong> Yorumları</h3>
            </div>

            <div className="column one-second column_zoom_box">
              <div className="zoom_box">
                <a target="_blank" href="https://www.google.com/search?q=betül+şahin+op+dr">
                  <div className="photo">
                    <img className="scale-with-grid" src="/web/content/webdesign/res/medya_google.jpg" alt="" />
                  </div>
                  <div className="desc" style={{ backgroundColor: 'rgba(255, 213, 5, 0.8)' }}>
                    <div className="desc_wrap" style={{ paddingTop: '10px' }}>
                      <div className="desc_img">
                        <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                      </div>
                      <div className="desc_txt">Google Yorumları</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="column one-second column_zoom_box">
              <div className="zoom_box">
                <a target="_blank" href="https://www.doktortakvimi.com/betul-sahin-3/kulak-burun-bogaz/istanbul">
                  <div className="photo">
                    <img className="scale-with-grid" src="/web/content/webdesign/res/medya_drtakvim.jpg" alt="" />
                  </div>
                  <div className="desc" style={{ backgroundColor: 'rgba(48, 187, 169, 0.8)' }}>
                    <div className="desc_wrap" style={{ paddingTop: '70px' }}>
                      <div className="desc_img">
                        <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                      </div>
                      <div className="desc_txt">Sizden Gelenler</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <YouTubeFeed />
    </>
  )
}
