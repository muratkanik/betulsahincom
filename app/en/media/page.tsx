'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MediaPage() {
  return (
    <div id="Wrapper">
      <div id="Header_wrapper">
        <Header />
      </div>
      
      <div id="Content">
        <div className="content_wrapper clearfix">
          <div className="sections_group">
            <div className="entry-content">
              {/* Banner */}
              <div className="section dark" style={{paddingTop: '200px', paddingBottom: '80px', backgroundImage: 'url(/web/content/webdesign/res/medya_banner.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_column">
                      <div className="column_attr">
                        <h2 style={{fontWeight: 700}}>Media</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3'lü Resim Grubu */}
              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-third column_zoom_box">
                      <div className="zoom_box">
                        <a target="_blank" href="https://www.youtube.com/watch?v=jRA_oLGQKtU&ab_channel=Dr.Bet%C3%BCl%C5%9Eahin" rel="noopener noreferrer">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/medya-1.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(255, 106, 0,0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Media</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="column one-third column_zoom_box">
                      <div className="zoom_box">
                        <a target="_blank" href="https://www.youtube.com/watch?v=jRA_oLGQKtU&ab_channel=Dr.Bet%C3%BCl%C5%9Eahin" rel="noopener noreferrer">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/medya-2.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(255, 106, 0,0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Media</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="column one-third column_zoom_box">
                      <div className="zoom_box">
                        <a target="_blank" href="https://www.youtube.com/watch?v=jRA_oLGQKtU&ab_channel=Dr.Bet%C3%BCl%C5%9Eahin" rel="noopener noreferrer">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/medya-3.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(255, 106, 0,0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Media</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ulusal Kanal Yayınları Başlık */}
              <div className="section" style={{paddingTop: '70px', paddingBottom: '30px'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_column">
                      <div className="column_attr align_center">
                        <h3><strong>Ulusal</strong> Kanal Yayınları</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ulusal Kanal Yayınları */}
              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a href="https://www.youtube.com/watch?v=jRA_oLGQKtU&ab_channel=Dr.Bet%C3%BCl%C5%9Eahin" target="_blank" rel="noopener noreferrer">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/medya1.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(255, 106, 0,0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Media</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a href="https://youtu.be/zn-_h_PVXOw" target="_blank" rel="noopener noreferrer">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/medya2.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(255, 106, 0,0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Media</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a href="https://youtu.be/aPXI1ZPUuSA" target="_blank" rel="noopener noreferrer">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/medya3.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(255, 106, 0,0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Media</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a href="https://youtu.be/EVLkomrQxVo" target="_blank" rel="noopener noreferrer">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/medya4.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(255, 106, 0,0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Media</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a href="https://youtu.be/fQ-_EDk8Fa8" target="_blank" rel="noopener noreferrer">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/medya5.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(255, 106, 0,0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Media</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a href="https://youtu.be/VPfnwMiubyA" target="_blank" rel="noopener noreferrer">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/medya6.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(255, 106, 0,0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Media</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a href="https://youtu.be/O1NwiG9GC94" target="_blank" rel="noopener noreferrer">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/medya7.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(255, 106, 0,0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Media</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a href="https://youtu.be/vrV_BgCxI_I" target="_blank" rel="noopener noreferrer">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/medya8.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(255, 106, 0,0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Media</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* YouTube Banner */}
              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_zoom_box">
                      <div className="zoom_box">
                        <a target="_blank" href="https://www.youtube.com/@dr.betulsahin" rel="noopener noreferrer">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ortabanner2.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(255, 106, 0,0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Sayfamızı Ziyaret Etmek İçin Tıklayın</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Yazılı Basın Başlık */}
              <div className="section" style={{paddingTop: '70px', paddingBottom: '30px'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_column">
                      <div className="column_attr align_center">
                        <h3><strong>Yazılı</strong> Basın</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Yazılı Basın */}
              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-third column_zoom_box">
                      <div className="zoom_box">
                        <a target="_blank" href="https://www.formsante.com.tr/fransiz-askisi-nedir-ip-aski-ile-yuz-germe-ve-genclestirme/" rel="noopener noreferrer">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/medya-d1.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(255, 106, 0,0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Fransız askısı nedir? Op.Dr.Betül Şahin</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="column one-third column_zoom_box">
                      <div className="zoom_box">
                        <a target="_blank" href="https://www.milliyet.com.tr/pembenar/cocuklarda-horlama-ne-zaman-tehlikeli-2606296" rel="noopener noreferrer">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/medya-d2.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(255, 106, 0,0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Çocuklarda horlama ne zaman tehlikeli? Op.Dr.Betül Şahin</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="column one-third column_zoom_box">
                      <div className="zoom_box">
                        <a target="_blank" href="https://www.cnnturk.com/saglik/sonbahar-alerjisinden-14-adimda-korunun" rel="noopener noreferrer">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/medya-d3.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(255, 106, 0,0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Sonbahar alerjisinden korunun. Op.Dr.Betül Şahin</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* YouTube Shorts Başlık */}
              <div className="section" style={{paddingTop: '70px', paddingBottom: '30px'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_column">
                      <div className="column_attr align_center">
                        <h3><strong>Youtube</strong> Shorts</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* YouTube Shorts */}
              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-third column">
                      <iframe 
                        width="628" 
                        height="374" 
                        src="https://youtube.com/embed/NbJiTvco4Vk?si=YhL22T5-7NeNY1NK" 
                        frameBorder="0" 
                        allowFullScreen
                        style={{width: '100%', maxWidth: '628px', height: '374px'}}
                      ></iframe>
                    </div>
                    <div className="column one-third column">
                      <iframe 
                        width="628" 
                        height="374" 
                        src="https://www.youtube.com/embed/fOYTqmj_VLc" 
                        frameBorder="0" 
                        allowFullScreen
                        style={{width: '100%', maxWidth: '628px', height: '374px'}}
                      ></iframe>
                    </div>
                    <div className="column one-third column">
                      <iframe 
                        width="628" 
                        height="374" 
                        src="https://youtube.com/embed/Db4Dnq3uTXY?si=2biuWYDBYjmbG0kz" 
                        frameBorder="0" 
                        allowFullScreen
                        style={{width: '100%', maxWidth: '628px', height: '374px'}}
                      ></iframe>
                    </div>
                    <div className="column one-third column">
                      <iframe 
                        width="628" 
                        height="374" 
                        src="https://youtube.com/embed/ystq7m6pnwM?si=EiaizLwELgBv2LLo" 
                        frameBorder="0" 
                        allowFullScreen
                        style={{width: '100%', maxWidth: '628px', height: '374px'}}
                      ></iframe>
                    </div>
                    <div className="column one-third column">
                      <iframe 
                        width="628" 
                        height="374" 
                        src="https://youtube.com/embed/Y7MhH9SalJ4?si=-shh6wNTRXVT7Yn6" 
                        frameBorder="0" 
                        allowFullScreen
                        style={{width: '100%', maxWidth: '628px', height: '374px'}}
                      ></iframe>
                    </div>
                    <div className="column one-third column">
                      <iframe 
                        width="628" 
                        height="374" 
                        src="https://youtube.com/embed/GFa5hlmm7Ok?si=zIpTe_b-EwdLc7ka" 
                        frameBorder="0" 
                        allowFullScreen
                        style={{width: '100%', maxWidth: '628px', height: '374px'}}
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hasta Yorumları Başlık */}
              <div className="section" style={{paddingTop: '70px', paddingBottom: '30px'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_column">
                      <div className="column_attr align_center">
                        <h3><strong>Hasta</strong> Yorumları</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hasta Yorumları */}
              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a target="_blank" href="https://www.google.com/search?q=bet%C3%BCl+%C5%9Fahin+op+dr&source=lmns&bih=738&biw=1536&hl=tr&sa=X&ved=2ahUKEwiKzNGRgsGEAxWY5wIHHYMPCgMQ0pQJKAB6BAgBEAI#lrd=0x14cac7f7a6b281cb:0x413ab3ec074a2702,1,,,," rel="noopener noreferrer">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/medya_google.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(255, 213, 5,0.8)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
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
                        <a target="_blank" href="https://www.doktortakvimi.com/betul-sahin-3/kulak-burun-bogaz/istanbul" rel="noopener noreferrer">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/medya_drtakvim.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(48, 187, 169,0.8)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
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

              {/* YouTube Shorts Banner */}
              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_zoom_box">
                      <div className="zoom_box">
                        <a target="_blank" href="https://www.youtube.com/@dr.betulsahin/shorts" rel="noopener noreferrer">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/medya_ortabanner.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(255, 106, 0,0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Short Videoları İzlemek İçin Tıklayın</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instagram Banner */}
              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_zoom_box">
                      <div className="zoom_box">
                        <a target="_blank" href="https://www.instagram.com/dr.betulsahin/" rel="noopener noreferrer">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/medya_instagram.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(255, 106, 0,0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">instagram sayfamız</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
