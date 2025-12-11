'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PriceRequestForm from '@/components/PriceRequestForm'

export default function AmeliyatsizPage() {
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
              <div className="section dark" style={{paddingTop: '200px', paddingBottom: '80px', backgroundImage: 'url(/web/content/webdesign/res/ameliyatsiz_banner.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_column">
                      <div className="column_attr">
                        <h2 style={{fontWeight: 700}}>Ameliyatsız İşlemler</h2>
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
                        <h3><strong>Ameliyatsız</strong> İşlemler</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Toksin Tedavileri */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2>Toksin <strong>tedavileri</strong></h2>
                  <h5>Kırışıklık tedavisinde clostridium botulinum bakterisinin toksini kullanılır. Bu toksin kasları geçici olarak felç eder. İlk kullanım alanı şaşılık tedavisidir ama popülaritesini estetik amaçlı kullanımı ile sağlamıştır</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h5><strong>Toksininin yüzdeki uygulama alanları</strong></h5>
                        <h5>Alın, göz kenarları ve kaş arasındaki kırışıklar, Bazı hastalarda boyundaki uzunlamasına kas bantlarına da uygulanabilir.</h5>
                        <h5><strong>Toksininin etki süresi</strong></h5>
                        <h5>Etkisi 4-6 ay sürer. Tekrarlayan uygulamalarda bu etkinin süresi uzar. Endikasyon dışı sıklıkta uygulama yapılırsa tolerans gelişebilir.</h5>
                        <h5><strong>Toksin uygulaması sonrası "şaşkın ifade" nasıl engellenir</strong></h5>
                        <h5>Toksin uygulamasının yüzün ifadesini dondurmak değil yumuşatmak amacıyla yapılması gerekir. Doğal bir sonuç elde edilmelidir. 50 yaş üzeri hastalarda yüzün üst yarısının toksinle mimik kaslarının fonksiyonunun engellenmesi ve orta ve alt 1/3'e bir müdahale yapılmaması bazen doğal olmayan görüntülere yol açar.</h5>
                      </div>
                    </div>
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a>
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyatsiz_toksin.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(236, 46, 133, 0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Op.Dr. Betül Şahin</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dolgu ile Yüz Şekillendirme */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2><strong>Dolgu</strong> ile Yüz Şekillendirme Tedavisi</h2>
                  <h5>Estetik tedavilerde dolgu uygulaması giderek daha fazla önem kazanıyor. Özellikle ameliyatsız yüz estetiği dediğimiz yüz şekillendirme son zamanlarda sıkça tercih edilen etkin bir tedavi yöntemidir.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a>
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyatsiz_dolgu.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(236, 46, 133, 0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Op.Dr. Betül Şahin</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h5><strong>Doğru Seçim</strong></h5>
                        <h5>Tıpkı gözlük ya da saç modeli tercihi gibi yüze yapılan dolgu uygulamalarında da kişisellik önem taşır. Size uygun, yüzünüzün şekline yakışan uygulama başarı açısından çok değerlidir. Farklı yüz tipleri olduğundan yüzün şekline uygun dolgu tedavisinin planlanması önemli ilk adımdır.</h5>
                        <h5>Bir yüzü güzel gösteren şey yüzdeki tüm oranların birbiri ile olan uyumudur. Bu, mükemmel simetri anlamına gelmez daha ziyade dengeli bir orantı anlamına gelir. Yerçekimi ve yaşlanma süreci nedeniyle de yüzde hacim kayıpları ve sarkmalar oluşur. Kişiye özel planlama yapılarak yüzünüzün doğal şekline göre uygulanan doğru dolgu tedavisiyle başarılı sonuçlar almak mümkündür.</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Burun Dolgusu ve Dudak Dolgusu */}
              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h4><strong>Burun Dolgusu</strong></h4>
                        <h5>Burun dolgusunu burun anatomisine hakim, damarsal yapılanmayı iyi bilen hekimlerin yapması çok önemlidir.</h5>
                        <h6>Cerrahi olarak burun şekillendirme istemeyenlerde burun dolgusu ya da diğer adıyla likit rinoplasti alternatif bir seçenek olarak karşımıza çıkmaktadır. Lokal anesteziyle ağrısız acısız 15 dakikada yapılabilen bir işlem olan burun dolgusu kısa iyileşme süresiyle öne çıkar. Uygun yapılan tekniklerle burun ucunu kaldırmak, burun kemerini gizlemek ve burunda büyüme sağlamadan şekillendirme yapmak mümkündür.</h6>
                      </div>
                    </div>
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a>
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyatsiz_burundolgu.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(236, 46, 133, 0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Op.Dr. Betül Şahin</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a>
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyatsiz_dudakdolgusu.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(236, 46, 133, 0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Op.Dr. Betül Şahin</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h4><strong>Dudak Dolgusu</strong></h4>
                        <h5>Estetik dolgu işlemlerinden biri olan dudak dolgusu, hızlı ve acısız bir şekilde uygulanabilen, ameliyat gerektirmeyen bir yöntemdir. Kişilerin özgüveninin artmasına da katkısı olan dudak dolgusu uygulaması özellikle gençlerde en çok tercih edilen estetik uygulamalardan biridir. Dolgu ile dudakların dolgunlaşması, dudak konturlarının belirginleştirilmesi ve dudak asimetrilerinin düzeltilmesi mümkündür.</h5>
                        <h5>Farklı dolgu çeşitleri ve uygulama teknikleri bulunan dudak dolgusunun kalıcılığı ortalama 8-12 ay kadar devam etmektedir.</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Yağ Enjeksiyonu */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2>Yağ <strong>Enjeksiyonu</strong></h2>
                  <h5>Vücudumuzdaki yağ dokusunun özel işlemlerden geçirilerek dolgu olarak yüzde istenen bölgelere uygulanma işlemidir. Doğal olması en büyük avantajıdır. Bir diğer avantajı ise bilinen en zengin kök hücre kaynağı olması ve şekillendirmeyle birlikte gençleştirme etkisinin de çok fazla olmasıdır.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a>
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyatsiz_yagdolgu.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(236, 46, 133, 0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Op.Dr. Betül Şahin</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h5><strong>İşlem Nasıl Yapılıyor?</strong></h5>
                        <h5>Lokal veya genel anesteziyle yapılabilen bir işlem olup hazırlanan yağ hücreleri hem yüzü şekillendirmek hem de cildi aydınlatmak, parlatmak ve yenilemek için kullanılır.</h5>
                        <h5>Yağ enjeksiyonları yüzde en çok alın, orta yüz, nazolabial ve çene-jawline hattında tercih edilmektedir. Boyun bölgesi deformasyonları için de yağ dolgusu güzel bir alternatiftir.</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Boyun Kırışıklıkları Tedavisi */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2>Boyun kırışıklıkları <strong>Tedavisi</strong></h2>
                  <h5>Yüzünüz ve boynunuz arasında yıllar geçmemesi için doğru uygulamalar ve teknolojilerle daha genç, daha sıkı bir boyun elde etmek mümkündür.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h5><strong>Boyun Gençleştirmede Botoks</strong></h5>
                        <h5>Boyunda yaşlanmayla belirginleşen dikey platismal bantlar, boynu olduğu kadar alt yüz bölgesini de olumsuz etkiler. Sorunu tedavi etmenin en kolay yolu botoks enjeksiyonlarıdır.</h5>
                        <h5>Botoks enjeksiyonlarıyla platisma kasına yapışmış bu bantların gevşetilmesine 'Nefertiti Lift' denir. Bu işlem sadece bu kasların belirginliğini azaltmakla kalmaz, aynı zamanda çene konturunun daha belirgin hale gelmesini sağlar.</h5>
                        <h5>Aynı zamanda, boyun elastikiyet kayıpları ve oluşan yatay çizgilerin tedavisinde, özel yapıya sahip CaOH içeren dolgular ve kolajen içerikli tedavilerle de çok başarılı sonuçlar alınabilir.</h5>
                      </div>
                    </div>
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a>
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyatsiz_boyun.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(236, 46, 133, 0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Op.Dr. Betül Şahin</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Yüz Gençleştirme ve Kök Hücre Tedavileri */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2><strong>Yüz Gençleştirme</strong> ve Kök Hücre Tedavileri</h2>
                  <h5>Zamanla, cildimizin dış katmanları, yaşlanma, yaralanma, kırışıklıklar, yara izleri, yaşlılık lekeleri ve renk değişikliği gibi çevresel faktörlerden kaynaklanan aşınma ve yıpranmayı göstermeye başlar.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a>
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyatsiz_yuzgenlestirme.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(236, 46, 133, 0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Op.Dr. Betül Şahin</div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div style={{marginTop: '20px'}}>
                        <a 
                          className="button button_stroke_custom button_js" 
                          target="_blank" 
                          href="https://www.youtube.com/embed/VPfnwMiubyA?si=gZ_MBPzI2A1n07dN" 
                          style={{borderColor: 'rgb(32, 20, 107)', color: 'rgb(32, 20, 107)'}}
                        >
                          <span className="button_label">Detaylı Bilgi İçin Tıklayınız</span>
                        </a>
                      </div>
                    </div>
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h5><strong>Kök Hücre</strong></h5>
                        <h5>Yüz gençleştirmede kök hücre ve eksozom kullanımı, son dönemlerin en popüler cilt yenileme uygulamalarından kabul edilmektedir. Kulak arkası fibrocell, yağ dokusundan SVF kök hücre uygulamaları gibi değişik teknikler kullanılmaktadır. Yapılan cilt analizi ile belirlenen cilt tipine göre cildinize en uygun işleme karar verilebilmektedir. Kök hücre uygulaması, kendi dokusundan gençleşmek isteyen ve cildine uzun vadeli yatırım yapmak isteyenler için güzel bir seçenektir. Lokal anestezi ile ağrısız ve acısız uygulanabilmektedir.</h5>
                        <h5><strong>Cilt Yenileme</strong></h5>
                        <h5>Yaşlanma ve yer çekimiyle birlikte cildin ihtiyaçları her geçen gün artmaktadır. Başta hyalüronik asit, kolajen olmak üzere somon DNA, çeşitli vitaminler ve peptitler düzenli aralıklarla minik enjeksiyonlarla cilde uygulanarak cildin bu ihtiyaçlarını karşılar. Her yaşın ve her cilt tipinin problemi farklı olduğundan yapılacak dijital cilt analiz ölçümleri ile cilt yaşı ve cildin ihtiyaçları belirlenir ve bu şekilde kişiye özel bir cilt yenileme planlaması çıkarılır.</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gıdı Estetiği */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2>Gıdı <strong>Estetiği</strong></h2>
                  <h5>Gıdı Estetiği, çene ve boyun arasında bulunan gıdı bölgesinde biriken yağların cerrahi olmayan operasyonlar ile giderilmesi işlemine denir.</h5>
                  <h5>Doğru teknikler kullanılarak kısa sürece içerisinde başarılı sonuçların alınması mümkündür. Gıdı bölgesinin eritilmesi sadece diyet ve spor ile mümkün değildir. Ani kilo verme durumlarında da bu bölge sarkabilir.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h5><strong>Gıdı Estetiği Yöntemleri Nelerdir?</strong></h5>
                        <h5>Gıdı estetiği işlemlerinde En popüler olanlarından biri kimyasal gıdı eritme yöntemleridir. Özellikle Fosfotidil kolin ve deoksikolik asit içeren bazı maddeler yağlanma artışı olan alanlara enjekte edilir</h5>
                        <h5>Bu işlem 3-5 seans olacak şekilde yağlanma miktarının fazlalığına göre değerlendirilir.</h5>
                        <h5>Yağlanmanın aşırı olduğu durumlarda cerrahi olarak fazla yağ dokusunun o bölgeden uzaklaştırılması planlanır ki bu işlem lokal veya genel anestezi ile tek seferde olabilecek bir işlemdir. Tüm gıdı estetiği işlemlerinde sonrasında masaj ve bandaj uygulaması sonucun etkinliği açısından çok önemlidir.</h5>
                        <div style={{marginTop: '20px'}}>
                          <a 
                            className="button button_stroke_custom button_js" 
                            target="_blank" 
                            href="https://www.youtube.com/embed/UxGFGTSOp_g?si=YuVuLl4s_Vatb5O_" 
                            style={{borderColor: 'rgb(32, 20, 107)', color: 'rgb(32, 20, 107)'}}
                          >
                            <span className="button_label">Video İzlemek İçin Tıklayınız</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a>
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyatsiz_gidieritme.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(236, 46, 133, 0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Op.Dr. Betül Şahin</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Komplikasyon Yönetimi */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h3><strong>Komplikasyon Yönetimi</strong> ve Yüz Estetiğinde Ultrason Kullanımının Önemi</h3>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a>
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyatsiz_komp.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(236, 46, 133, 0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Op.Dr. Betül Şahin</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h5>Dolgu uygulamalarının sıklığının artması nedeniyle istenmeyen ya da problemli uygulamalar da zaman içerisinde artmaktadır. Özellikle kalıcı materyallerin kullanılması komplikasyon ihtimalini artırmaktadır. Günümüzde ultrason kullanımı oluşan komplikasyonların yönetiminde elimizi son derece güçlendirmektedir.</h5>
                        <h5>Yüz estetik işlemleri için özel tasarlanmış ultrasonlarla dolgunun bulunduğu katmanı tam olarak tespit etmek ve eriticileri doğru yerlere uygulamak sonrasında da dolgu materyalinin tam olarak eriyip erimediğini belirlemek bu tarz ultrasonlarla mümkün olabilmektedir</h5>
                        <div style={{marginTop: '20px'}}>
                          <a 
                            className="button button_stroke_custom button_js" 
                            target="_blank" 
                            href="https://www.youtube.com/embed/fQ-_EDk8Fa8?si=HS4OkUquuVbgMUK7" 
                            style={{borderColor: 'rgb(32, 20, 107)', color: 'rgb(32, 20, 107)'}}
                          >
                            <span className="button_label">Video İzlemek İçin Tıklayınız</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cilt Analizi */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2>Cilt <strong>Analizi</strong></h2>
                  <h5>Cildin analizi, cildin değerlendirilmesini sağlayan bir analizdir.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a>
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyatsiz_ciltanaliz.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(236, 46, 133, 0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Op.Dr. Betül Şahin</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h5>Cilt sağlığını daha iyi anlamamıza, kişiselleştirilmiş tedavileri planlamamıza ve cilt problemlerini erken teşhis etmemize yardımcı olur.</h5>
                        <h5><strong>Cilt Analizi Cihazı Nasıl Çalışır?</strong></h5>
                        <h5>Cilt analiz cihazları, farklı teknolojileri kullanarak cilt üzerinde detaylı incelemeler yaparlar. Bu teknolojiler arasında görüntüleme kameraları, ultraviyole (UV) ışık kullanımı, spektrofotometreler ve lazerler bulunabilir. Bu cihazlar, cildin alt tabakalarına kadar inebilir ve cilt tipi, nem seviyesi, leke ve kırışıklık gibi çeşitli parametreleri ölçebilir.</h5>
                        <h5><strong>Kişiselleştirilmiş Cilt Tedavileri</strong></h5>
                        <h5>Her bireyin cilt tipi ve cilt sorunları farklıdır. Kimi kişiler akne ile mücadele ederken, diğerleri yaşlanma belirtileriyle uğraşır. Cilt analizi sonuçlarına dayalı olarak, uzmanlar kişinin cilt tipini, cilt sorunlarını ve ihtiyaçlarını daha iyi anlayabilirler.</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fiyat İste Formu - Ameliyatsız İşlemler için özel */}
              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <form onSubmit={(e) => {
                      e.preventDefault()
                      // Form submission handled by PriceRequestForm component
                    }}>
                      <div className="column one-five">
                        <label htmlFor="ad">Adınız Soyadınız</label>
                        <input type="text" id="ad" className="form-control" placeholder="Adınız Soyadınız" required />
                      </div>
                      <div className="column one-five">
                        <label htmlFor="sehir">Yaşadığınız Şehir</label>
                        <input type="text" id="sehir" className="form-control" placeholder="Yaşadığınız Şehir" required />
                      </div>
                      <div className="column one-five">
                        <label htmlFor="gsm">Gsm Numarası</label>
                        <input type="tel" id="gsm" className="form-control" placeholder="Gsm Numarası" required />
                      </div>
                      <div className="column one-five">
                        <label htmlFor="islem">İşlem Seçiniz</label>
                        <select id="islem" className="form-control" required>
                          <option value="">İşlem Seçiniz</option>
                          <option value="Dudak Dolgusu">Dudak Dolgusu</option>
                          <option value="Boyun Dolgusu">Boyun Dolgusu</option>
                          <option value="Çene Dolgusu">Çene Dolgusu</option>
                          <option value="Kök Hücre Tedavileri">Kök Hücre Tedavileri</option>
                          <option value="Boyun kırışıklıkları tedavisi">Boyun kırışıklıkları tedavisi</option>
                          <option value="Gıdı eritme">Gıdı eritme</option>
                          <option value="Dolgu ile yüz şekillendirme">Dolgu ile yüz şekillendirme</option>
                          <option value="Toksin tedavileri">Toksin tedavileri</option>
                          <option value="Yüz gençleştirme tedavileri">Yüz gençleştirme tedavileri</option>
                        </select>
                      </div>
                      <div className="column one-five">
                        <br />
                        <button type="submit" className="btn btn-primary w-100 py-3">Fiyat İste</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* Resim Galerisi */}
              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-four column_zoom_box">
                      <div className="zoom_box">
                        <Link href="/tr-kimdir">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyatsiz-1.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(255, 106, 0,0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="column one-four column_zoom_box">
                      <div className="zoom_box">
                        <Link href="/tr-kimdir">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyatsiz-2.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(17, 35, 241,0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="column one-four column_zoom_box">
                      <div className="zoom_box">
                        <Link href="/tr-kimdir">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyatsiz-3.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(231, 236, 52,0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="column one-four column_zoom_box">
                      <div className="zoom_box">
                        <Link href="/tr-kimdir">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyatsiz-4.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(255, 0, 0,0.6)'}}>
                            <div className="desc_wrap" style={{paddingTop: '70px'}}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                            </div>
                          </div>
                        </Link>
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
