'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TrKimdirPage() {
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
              <div className="section dark" style={{paddingTop: '200px', paddingBottom: '80px', backgroundImage: 'url(/web/content/webdesign/res/kimdir_banner.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_column">
                      <div className="column_attr">
                        <h4 style={{fontWeight: 700}}>Op. Dr.</h4>
                        <h2 style={{fontWeight: 700}}>Betül Şahin</h2>
                        <div className="image_frame no_link scale-with-grid alignnone no_border">
                          <div className="image_wrapper">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ciz.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Başlık */}
              <div className="section" style={{paddingTop: '70px', paddingBottom: '30px'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_column">
                      <div className="column_attr align_center">
                        <h3>Op.Dr. <strong>Betül Şahin</strong> Kimdir</h3>
                      </div>
                    </div>
                    <div className="column one column_column">
                      <div className="column_attr align_center">
                        <hr className="no_line hrmargin_b_30"/>
                        <h4 style={{marginBottom: '20px'}}>Biyografisi</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resim ve Yazı 1 */}
              <div className="section section-border-top" style={{paddingTop: '80px', paddingBottom: '40px'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_image">
                      <div className="image_frame no_link scale-with-grid no_border">
                        <div className="image_wrapper">
                          <img className="scale-with-grid" src="/web/content/webdesign/res/hakkimizda1.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="column one-second column_column">
                      <div className="column_attr" style={{marginLeft: '4%', marginTop: '15px'}}>
                        <h5>Op.Dr. Betül Şahin Kulak Burun Boğaz hastalıkları uzmanıdır.</h5>
                        <h5>İstanbul da dünyaya gelen Op. Dr. Betül Şahin, İstanbul Erenköy Kız Lisesini birincilikle bitirdikten sonra İstanbul Üniversitesi İstanbul Tıp fakültesini kazandı ve İstanbul Tıp fakültesinden derece ile mezun oldu. Uzmanlık eğitimini İstanbul Fatih Sultan Mehmet eğitim Araştırma Hastanesinde tamamladı.</h5>
                        <h5>Türk Kulak Burun Boğaz vakfının kurucu kurul üyesidir.Türk Yüz Plastik cerrahi derneği üyesidir. Yüz estetiğiyle ilgili çok sayıda ulusal, uluslarası kongrede sunumları, workshop eğitmenlikleri, kadavra üzerinde uygulamalı eğitmenlik, minimal invaziv yüz gençleştirme kampları yapmıştır. Ayrıca 2013-2016 yılları arasında Mavi Kod adlı medikal derginin editörlüğünü yapmıştır. Aynı zamanda 2010 yılından bu yana Özel Royal hastanesinin de yönetim kurulu üyesidir</h5>
                        <h5>Kulak burun boğaz alanında pekçok ameliyatı başarıyla gerçekleştiren doktor Betül Şahin 2018-2022 yılları arasında Acıbadem Hastaneleri Sağlık grup bünyesinde çalışmış olup mesleki kariyeri boyunca daha çok yüz ve burun estetiği alanında ağırlıklı olarak çalışmıştır. Halen İstanbul Bağdat Caddesi'ndeki kendi muayenehanesinde çalışmaktadır</h5>
                        <h5>Muayenehane pratiğinde kulak burun boğaz hastalıklarının teşhis ve tedavisinin yanı sıra yüz ve boyun estetiği işlemleri de gerçekleştirmektedir</h5>
                        <h5>Estetik bakış açısı ve sanatsal yetenek gerektiren bu alanda eğitimlerini tamamlamış bilgi ve birikimlerini harmanlamıştır. Tüm hastalarıyla planlama aşamasından işlem ve sonrası dönemde de birebir ilgilenmek çalışma prensiplerinin başında gelmektedir.</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seminer ve Eğitimler Başlık */}
              <div className="section" style={{paddingTop: '70px', paddingBottom: '30px'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_column">
                      <div className="column_attr align_center">
                        <h3>Seminer ve <strong>Eğitimler</strong></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Eğitim Seminer 1 */}
              <div className="section section-border-top" style={{paddingTop: '80px', paddingBottom: '40px'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr" style={{marginLeft: '4%', marginTop: '15px'}}>
                        <h6>12-15 Nisan 2018 - Türk Kulak Burun Boğaz ve Baş Boyun Cerrahisi Vakfı 3. İlkbahar Toplantısı'nda Yüz Plastik Cerrahi Derneği Kursu'nda eğitmenlik, Antalya</h6>
                        <h6>6-8 Aralık 2018 - Yüz Plastik Cerrahi Derneği 12. Ulusal Toplantısı'nda botoks, dolgu, mezoterapi workshoplarında eğitmenlik, Adana</h6>
                        <h6>25 Mayıs 2019 - İstanbul KBB Uzmanları Toplantısı'nda Rinoplasti ve Fasial Estetik Uygulamalar Panelinde yüzde dolgu uygulamaları kursunda eğitmenlik, İstanbul</h6>
                        <h6>26-29 Eylül 2019 - İstanbul KBB-BBC Uzmanları Derneği 11. Kongresi'nde dolgu uygulamaları, workshopları ve komplikasyon sunumları, İstanbul</h6>
                        <h6>13-15 Eylül 2019 - KBB'de Dört Mevsim Kapadokya Yüz Plastik Panelinde dolgu ve mezoterapi uygulamalarında eğitmenlik, Kapadokya</h6>
                        <h6>TKBBV'nin 2018-2019 Eğitim Programında dolgu ve botoks uygulamalarında eğitmenlik</h6>
                        <h6>18-20 Ekim 2019 - Yüz Plastik Cerrahi Çeşme Günleri'nde workshop eğitmenliği, Çeşme</h6>
                        <h6>5-7 Aralık 2019 - İstanbul Yüz Plastik Cerrahi Ulusal Toplantısı'nda Minimal İnvaziv Uygulamalar Workshopu'nda eğitmenlik, İstanbul</h6>
                        <h6>9-10 Mart 2019 - Faceminima Toplantısında mezoterapi ve dolgu workshoplarında sunum, Ankara</h6>
                        <h6>18-21 Nisan 2019 - TKBBV 4. İlkbahar Toplantısı'nda yüzde dolgu uygulamaları ve yüzde botulunim toksin uygulamalarında eğitmenlik, Antalya</h6>
                        <h6>13 Kasım 2019 - 41. Ulusal KBB Kongresi'nde Yüz Plastik Cerrahi Okulu kursunda yüz gençleştirmede noninvaziv işlemler kursunda eğitmenlik, Antalya</h6>
                        <h6>28-29 Şubat 2020 - Faceminima Toplantısında yüz estetiğinde minimal invaziv girişimler konusunda eğitmenlik, Ankara</h6>
                        <h6>16-19 Nisan 2021 - 5. İlkbahar Toplantısı'nda noninvaziv yüz gençleştirme kursunda eğitmenlik, Antalya</h6>
                        <h6>12-13 Aralık 2020 - 14. Ulusal 1. Sanal Yüz Plastik Cerrahi Derneği Toplantısı'nda online sunumlar</h6>
                        <h6>2019-2021 arasında Novel Akademi'de eğitmenlik</h6>
                      </div>
                    </div>
                    <div className="column one-second column_image">
                      <div className="image_frame no_link scale-with-grid no_border">
                        <div className="image_wrapper">
                          <img className="scale-with-grid" src="/web/content/webdesign/res/hakkimizda2.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Eğitim Seminer 2 */}
              <div className="section section-border-top" style={{paddingTop: '80px', paddingBottom: '40px'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_image">
                      <div className="image_frame no_link scale-with-grid no_border">
                        <div className="image_wrapper">
                          <img className="scale-with-grid" src="/web/content/webdesign/res/hakkimizda3.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="column one-second column_column">
                      <div className="column_attr" style={{marginLeft: '4%', marginTop: '15px'}}>
                        <h6>16 Nisan 2022 - Harran Üniversitesi'nde Dolgu ve Toksin Workshop Eğitmenliği, Urfa</h6>
                        <h6>17 Nisan 2022 - Dicle Üniversitesi'nde Dolgu ve Toksin Workshop Eğitmenliği, Diyarbakır</h6>
                        <h6>15-18 Mayıs 2022 - 7. İlkbahar Toplantısı'nda Yüze Minimal İnvaziv Uygulamalar Sunum ve Kurs Eğitmenliği, Antalya</h6>
                        <h6>30 Mayıs 2022 - Konya KBB BBC Derneği'nde Minimal İnvaziv İşlemler Kurs Eğitmenliği, Konya Başkent Üniversitesi</h6>
                        <h6>10-12 Haziran 2022 - 2. Tüm Yüz Gençleştirme Kampı'nda Toplantı Başkanlığı ve Eğitmenlik, Antakya</h6>
                        <h6>5 Eylül 2022 - Torlak Kadavra Çalıştayı'nda Dolgu ve Toksin Uygulamaları Eğitmenliği, Ankara</h6>
                        <h6>18-21 Eylül 2022 - Meditrio 6'da Yüze Minimal İnvaziv Uygulamalar Sunumları ve Kurs Eğitmenliği, KKTC</h6>
                        <h6>23-25 Eylül 2022 - 3. Tüm Yüz Gençleştirme Kampı'nda Kamp Başkanlığı ve Eğitmenlik, KKTC</h6>
                        <h6>16 Ekim 2022 - İstanbul Sultangazi Haseki Eğitim Araştırma Hastanesi'nde Minimal İnvaziv Yüz Gençleştirme Kurs Eğitmenliği, İstanbul</h6>
                        <h6>16-20 Kasım 2022 - 16. Ulusal KBB Kongresi'nde İp Askılama ile Yüz Germe Sunumu ve Workshop Eğitmenliği, Antalya</h6>
                        <h6>5 Aralık 2022 - Kahramanmaraş Sütçü İmam Üniversitesi'nde Minimal İnvaziv İşlemler Sunumu ve Workshop Eğitmenliği, Kahramanmaraş</h6>
                        <h6>9-11 Aralık 2022 - Yüz Plastik Cerrahi Derneği'nde Yüze Yağ Dolgusu Uygulamaları ve Burun Dolgusu Sunumları, Kurs Eğitmenliği ve Sunumlar, İstanbul</h6>
                        <h6>4 Ocak 2023 - TKBBV Toplantılarında Minimal İnvaziv Yüz Uygulamaları Kursunda Eğitmenlik</h6>
                        <h6>19-21 Mayıs 2023 - 4. Yüz Gençleştirme Face to Face Kampı'nda Kamp Başkanlığı ve Eğitmenlik, Kapadokya</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Eğitim Seminer Kalanlar */}
              <div className="section" style={{paddingTop: '70px', paddingBottom: '30px'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_column">
                      <div className="column_attr" style={{marginLeft: '4%', marginTop: '15px'}}>
                        <h6>18-19 Şubat 2023 - İzmir Ege Üniversitesi'nde 5. Taze Kadavra Estetik Yüz Anatomi Çalıştayı'nda Eğitmenlik, İzmir</h6>
                        <h6>25 Mart 2023 - İstanbul Medeniyet Üniversitesi KBB ABD'da Minimal İnvaziv Yüz Cerrahisi Toplantısı Sunumu, İstanbul</h6>
                        <h6>28-30 Nisan 2023 - 8. İlkbahar Toplantısı'nda Sunum ve Workshop Eğitmenliği, Antalya</h6>
                        <h6>9-11 Haziran 2023 - 15. Uluslararası KBB ve Baş Boyun Cerrahisi Kongresi.</h6>
                        <h6>18-19 Haziran 2023 - İzmir Ege Üniversitesi Kadavra Çalıştayı'nda Eğitmenlik, İzmir</h6>
                        <h6>8-10 Eylül 2023 - Faceminima International Orta Yüzde Gençleştirme Güzelleştirme Sunumu, Enerji Bazlı Cihazlar Panel Moderatörlüğü, Sunum, Vidrokonferanslar Workshop, Adana</h6>
                        <h6>21-22 Ekim 2023 - Rinoplasti ve Minimal İnvaziv Yüz Gençleştirme Kursunda Workshop Eğitmenliği, Bursa</h6>
                        <h6>16 Kasım 2023 - Recep Tayyip Erdoğan Üniversitesi KBB Anabilim Dalı Minimal İnvaziv Yüz Gençleştirme Workshop'unda Eğitmenlik, Rize</h6>
                        <h6>15-19 Kasım 2023 - 44. Ulusal KBB Baş ve Boyun Cerrahisi Kongresi'nde Sunum ve Workshop Eğitmenliği, Antalya</h6>
                        <h6>30 Kasım - 2 Aralık 2023 - Fırat Dicle KBB Derneği Rinoplasti ve Yüz Estetiği Kadavra Diseksiyon Kursunda Eğitmenlik, Elazığ</h6>
                        <h6>11-12 Aralık 2023 - Face to Face Kadavra Çalıştayı'nda Eğitmenlik, Torlak - Ankara</h6>
                        <h6>8-10 Aralık 2023 - 17. Yüz Plastik Cerrahi Derneği International Toplantısı'nda Sunumlar ve Panel Başkanlığı, İzmir</h6>
                        <h6>8-10 Mart 2024 - 5. Face to Face Yüz Gençleştirme Kampında Kamp Başkanlığı ve Eğitmenlik, Sapanca</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Yayınlar */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <hr className="no_line hrmargin_b_30"/>
                  <h3><strong>YAYINLAR</strong></h3>
                </div>
              </div>

              <div className="section" style={{paddingTop: '70px', paddingBottom: '30px'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_column">
                      <div className="column_attr align_center">
                        <h5>Comparison of the Effects of Radiofrequency Tissue Ablation, CO2 Laser Ablation and Partial Turbinectomy applications on nasal mucociliary functions. Lareyngoscope 2003 Mar.Şapçı T, Şahin B, Results of radiofrequency tissue ablation KBB İHS journal 2002 jan-feb Bozkurt Z, Şapçı T, Sahin B,</h5>
                        <h5>Botulinum toxin A applications on facial wrinkles facial wrinkles TURKFPS / Turkish journal of facial plastic surgery september Oruk V, Özel G, Sahin B.</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kitap Çeviri */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <hr className="no_line hrmargin_b_30"/>
                  <h3><strong>KİTAP ÇEVİRİ</strong></h3>
                </div>
              </div>

              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h4>ESTETİK ENJEKSİYONLAR İÇİN TEMEL YÜZ <strong>2022</strong></h4>
                  <h4>TANISAL OTORİNOLARİNGOLOLOJİ <strong>2023</strong>(Çeviri Editörü)</h4>
                  <h4>MAYO CLINIC - Bütüncül Tıp Kılavuzu- Zindeliği Öz Bakımınızın Odağı Yapmak <strong>2023</strong></h4>
                  <h4>MAYO CLINIC - Bütüncül Tıp Kılavuzu- Zihin Beden Rahatlama Teknikleri <strong>2023</strong></h4>
                </div>
              </div>

              {/* Resim Galerisi */}
              <div className="section" style={{paddingTop: '70px', paddingBottom: '30px'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-four column_zoom_box">
                      <div className="zoom_box">
                        <a href="/tr-kimdir">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/kimdir-1.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(255, 106, 0,0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="column one-four column_zoom_box">
                      <div className="zoom_box">
                        <a href="/tr-kimdir">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/kimdir-2.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(17, 35, 241,0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="column one-four column_zoom_box">
                      <div className="zoom_box">
                        <a href="/tr-kimdir">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/kimdir-3.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(231, 236, 52,0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="column one-four column_zoom_box">
                      <div className="zoom_box">
                        <a href="/tr-kimdir">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/kimdir-4.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(255, 0, 0,0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
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
