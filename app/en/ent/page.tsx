'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ENTPage() {
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
              <div className="section dark" style={{paddingTop: '200px', paddingBottom: '80px', backgroundImage: 'url(/web/content/webdesign/res/kbb_banner.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_column">
                      <div className="column_attr">
                        <h2 style={{fontWeight: 700, color: 'white'}}>ENT Treatments</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="section" style={{paddingTop: '70px', paddingBottom: '30px'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_column">
                      <div className="column_attr align_center">
                        <h3><strong>Ear Nose Throat</strong></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tonsil and Adenoid Surgery */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2>Tonsil and Adenoid Surgery</h2>
                  <h5>Adenoid enlargement (adenoid hypertrophy), usually seen in children; It is the lymphoid tissue located at the junction of the nasal cavity and the oral cavity becoming larger than normal.</h5>
                  <h5>As a result of this growth, the airway narrows and air passage becomes difficult.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a>
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/kbb_genizeti.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(132, 20, 107, 0.8)'}}>
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
                        <h4><strong>What is Adenoid Enlargement?</strong></h4>
                        <h5>As a result of the narrowing of the airway and difficulty in air passage, symptoms such as sleeping with the mouth open, drooling during sleep, snoring, stopping breathing during sleep (sleep apnea), restless sleep, constantly moving during sleep, and urinary incontinence during sleep are observed.</h5>
                        <h5>Children with adenoid enlargement may experience frequent upper respiratory tract infections. Similarly, adenoids may enlarge in children who are frequently ill. These children have an endless postnasal drip. When postnasal drip that does not improve with treatment is observed, an allergic condition along with adenoid enlargement should be investigated.</h5>
                        <h5>Adenoids that cannot be controlled with medical treatment can be removed with a minor operation and the patient can be discharged on the same day.</h5>
                      </div>
                    </div>
                  </div>
                  
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h4><strong>What is Tonsil Surgery?</strong></h4>
                        <h5>Tonsils are oval-shaped organs located on both sides at the back of the throat. With the white blood cells in their structure, they are important parts of the body's immunity, especially in children; however, their function decreases with adolescence.</h5>
                        <h5>Therefore, the likelihood of tonsillitis is higher, especially in children. Inflammation of the tonsils can lead to throat swelling, sore throat, and fever, among other problems. If these complaints are frequently experienced, tonsil surgery may be necessary to remove the tonsils. For this purpose, using state-of-the-art devices such as thermal welding and coblator, tonsils can be completely removed or reduced in a bloodless and painless manner. Similar tonsil surgery can also be performed in adults, although less frequently.</h5>
                      </div>
                    </div>
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a>
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/kbb_bademcik.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(132, 20, 107, 0.8)'}}>
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

              {/* Burun Tıkanıklığı & Burun Eti Ameliyatı */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2><strong>Burun Tıkanıklığı & Burun Eti</strong> Ameliyatı</h2>
                  <h5>Burun yapısında bulunan çeşitli problemler kronik burun tıkanıklığına sebep olmaktadır. Burun kemiğimdeki eğrilikler, burun eti şişlikleri, burun içinde olmaması gereken kitleler anatomik sebeplerdir.</h5>
                  <h5>Hava kirliliği, sigara kullanımı hatta kapalı ortamlardaki kalitesiz havanın solunması gibi çevre ve alışkanlıklar da kronik burun tıkanıklığına neden olmaktadır.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h5>Burun tıkanıklığı kalitesini uykuya, baş ağrılarına, tat ve koku alma duyularının körelmesine neden olmaktadır. Burundan rahat nefes alamayan hastalar ağızlarından nefes almak zorunda kalırlar bu da solunum yolu enfeksiyonlarının daha sık görülmesine neden olur.</h5>
                        <h5><strong>Burun Tıkanıklığı Operasyonu</strong></h5>
                        <h5>Detaylı bir endoskopik kulak burun boğaz muaynesi ile problemin tam olarak ne olduğu tespit edildikten sonra operasyon planlanır, eğri olan kemik düzeltilerek orta hatta alınır, burun etlerindeki büyümeler radyofrekans kullanılarak yakılır, küçültülür. Morarma vs olmadan günübirlik yapılacak bir prosedürle hasta taburcu edilir</h5>
                        <div style={{marginTop: '20px'}}>
                          <a 
                            className="button button_stroke_custom button_js" 
                            target="_blank" 
                            href="https://www.youtube.com/embed/4ypeIHL6Y84?si=NN7MhObouH8ScauK" 
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
                            <img className="scale-with-grid" src="/web/content/webdesign/res/kbb_buruntikanikligi.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(132, 20, 107, 0.6)'}}>
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

              {/* Horlama ve Uyku Apnesi */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2><strong>Horlama</strong> ve Uyku Apnesi</h2>
                  <h5>Uyku apnesi, uyku sırasında solunumun tekrarlanan duraklamalarına neden olan bir uyku bozukluğudur. Bu duraklamalar genellikle solunum yolu tıkanıklığından kaynaklanır ve uyku sırasında oksijen seviyelerinin düşmesine neden olabilir.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a>
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/kbb_horlama.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(132, 20, 107, 0.6)'}}>
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
                          href="https://www.youtube.com/embed/jRA_oLGQKtU?si=HTvZO62sYwL1u26E" 
                          style={{borderColor: 'rgb(32, 20, 107)', color: 'rgb(32, 20, 107)'}}
                        >
                          <span className="button_label">Video İzlemek İçin Tıklayınız</span>
                        </a>
                      </div>
                    </div>
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h5><strong>Horlama ve uyku apnesi sağlığımızı nasıl etkiler?</strong></h5>
                        <h5>Horlama ve uyku apnesi, sağlığımız üzerinde birçok olumsuz etkiye sahip olabilir. Horlama, uyku kalitesini düşürebilir ve dinlenmemiş hissetmeye neden olabilir. Bu da gün içinde iş veya okul performansımızı etkileyebilir. Horlama ayrıca, aile üyelerinin de uyku kalitesini etkileyebilir, onların uyku kalitesini düşürerek ve gün içinde yorgun hissetmelerine neden olarak, ilişkilerimizi de etkileyebilir. Uyku apnesi ise daha ciddi bir sağlık sorunudur.</h5>
                        <h5>Uyku apnesi, solunumun duraklaması ve düşük oksijen seviyeleri nedeniyle, kalp hastalığı, hipertansiyon, inme, diyabet, obezite ve hatta erken ölüm riskini artırabilir. Uyku apnesi ayrıca, gün içinde aşırı yorgunluk, dikkat eksikliği, hafıza sorunları, ruh hali değişiklikleri, cinsel işlev bozukluğu ve iş veya trafik kazalarına neden olabilir.</h5>
                        <h5>Uyku apnesi ve horlama olanlarda burun tıkanıklığının değerlendirilmesiyle birlikte küçük dil ve damak sarkıklığı, boyun kısalığı, çenenin geride olması çok önemlidir. Bunların belirlenmesiyle gerekli ameliyatların yapılması şarttır</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sinüzit Ameliyatı */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2><strong>Sinüzit</strong> Ameliyatı</h2>
                  <h5>Üst solunum yollarında sıklıkla görülen problemlerden biri olan sinüzit; insanların günlük yaşam kalitelerini önemli derecede düşürmektedir.</h5>
                  <h5>Sinüslerin iltihaplanması olarak tanımlanan sinüzit problemi nedeni ile birçok hastada tedavi için sinüzit ameliyatına başvurulmaktadır.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h5><strong>Sinüzit Tedavisinde Cerrahi Yöntem</strong></h5>
                        <h5>Günümüzde sinüzit ameliyatında sıklıkla endoskopik sinüs cerrahisi yöntemine başvurulmaktadır. Sinüzit ameliyatında tedavi planlaması ve hedeflenen süreç aşağıdaki gibidir;</h5>
                        <h5>Sinüslerdeki doğumsal ya da edinilmiş anatomik bozuklukların tedavisi, Sinüs havalanma ve boşalma kanallarında tıkanıklığa neden olan problemlerin giderilmesi, Sinüslerin buruna bağlanan kanalların genişletilerek sinüslere hava giriş çıkışının sağlanması, Alerji problemlerinin önüne geçilmesi (alerjik rinit)</h5>
                        <div style={{marginTop: '20px'}}>
                          <a 
                            className="button button_stroke_custom button_js" 
                            target="_blank" 
                            href="https://www.youtube.com/embed/zn-_h_PVXOw?si=JNpfvq4DSHK-hE6q" 
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
                            <img className="scale-with-grid" src="/web/content/webdesign/res/kbb_sinuzit.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(132, 20, 107, 0.6)'}}>
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

              {/* Kulak Zarı Ameliyatı */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2><strong>Kulak Zarı</strong> Ameliyatı</h2>
                  <h5>Kulak zarının tamiri, yırtığın boyutu ve nedenine göre değişebilmektedir. Kulak zarı deliğinin küçük olması durumunda delik kendi kendini onarıp kapanabilmektedir. Bu durumda herhangi bir tedavi uygulanmasına gerek olmamaktadır.</h5>
                  <h5>Kulak zarı deliğinin kendi kendine kapanmasının söz konusu olmadığı vakalarda ise kulak zarı ameliyatına baş vurulmaktadır. Bu ameliyatlarda yapay zar kullanılmaz, kişinin kendi vucudunda yer alan ve kulağın arka tarfındaki kasın üzerinden zar alınarak ya da dış kulak yolunun önünde yer alan kıkırdak dokudan zar yapılarak yama yapılır. Benim en sık tercih ettiğim metod iz bırakmaması, tutma şansının en yüksek olması ve dayanıklı olması nedeniyle dış kulak yolu önünde yer alan kıkırdak ile zarın kombine kullanıldığı yöntemdir.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a>
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/kbb_kulakzari.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(132, 20, 107, 0.6)'}}>
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
                        <h5>Kulak zarı yırtıklarında operasyon öncesi kulak zarında akıntı olmaması en önemli başarı kriteridir. Kuru, akıntısı olmayan ve işitme testleri sonucunda iletim tipi kayıp görülen vakalar kulak zarı onarımı için aday hasta grubunu oluşturur. Bazı hastalarda iletim tipi kayıp fazla ise orta kulakta kemikçik sistemde kopukluk, kireçlenme ve erime olabilir. Bunun tanısı ancak operasyon sırasında mikroskopla görülerek anlaşılabilir. Zar onarımı yapılırken aynı seansta orta kulaktaki kemikçiklere de müdahele edilebilir.</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vertigo */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2><strong>Vertigo</strong></h2>
                  <h5>Vertigo, sizin veya gördüklerinizin döndüğünü hissetmenize yol açan bir histir. Sıklıkla bulantı, kusma ve denge kaybı bu duruma eşlik edebilir.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h5><strong>Vertigo</strong></h5>
                        <h5>Çağımızın popüler rahatsızlıklarından olan vertigo- baş dönmesi semptomun altında nörolojik kardiyolojik problemler olabilse de kulak burun boğaz hastalıkları nedeniyle ortaya çıkanlar çok daha büyük bir kısmını oluşturmaktadır</h5>
                        <h5>Özellikle stres, yoğun yaşam şartları, aşırı spor, alkol ve kahve kullanımının fazlalığı ile tetiklenen vertigo detaylı bir kbb muayenesi ve bu konuda uzmanlaşmış bir kbb hekimi tarafından tedavi edilebilmektedir</h5>
                      </div>
                    </div>
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a>
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/kbb_vertigo.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(132, 20, 107, 0.6)'}}>
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

              {/* Ses Hastalıkları */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2><strong>Ses</strong> Hastalıkları</h2>
                  <h5>Ses kısıklığı semptomu hayatın belli dönemlerinde mutlaka herkesin başına gelmiş bir durumdur.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a>
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/kbb_ses.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(132, 20, 107, 0.6)'}}>
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
                        <h5>Özellikle nezle grip gibi durumlarda sıklıkla görülebilen bir durum olan ses kısıklığı özellikle 3 haftayı geçmesi durumunda önemli olabilmektedir</h5>
                        <h5>Böyle durumlarda endoskopik muayene ile detaylı incelenen ses tellerinde Nodül, polip, ödem vs varlığı değerlendirilerek medikal veya cerrahi tedavi planlanması yapılabilir.</h5>
                        <h5>Mide problemlerine bağlı gelişen reflü de önemli bir ses kısıklığı sebebi olabildiği gibi sesini aşırı yormak zorunda kalan bazı meslek gruplarında da ses kısıklığı fazlaca görülmektedir</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alerji */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2><strong>Alerji</strong></h2>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h5><strong>Alerji</strong></h5>
                        <h5>Çocuklarda olduğu kadar erişkinlerde sık görülen çağımızın hastalıklarından sayılan alerji durumunda özellikle burun etlerinde şişmeye bağlı burun tıkanıklığı, hapşırma, kaşıntı, halsizlik yorgunluk gibi semptomlarla birlikte sık geçirilen üsye atakları izlenmektedir</h5>
                        <h5>Yapılan prick testleri ile kişinin neye karşı alerjisi olduğu saptanarak hem alerjenden uzak kalması sağlanabilmekte hem de kişiye özel tedavi planlamaları yapılması mümkün olmaktadır. Bu şekilde hem kişinin üsye sıklığı azalırken hem de hayat kalitesi de artarak iş gücü kaybı kontrol altına alınabilmektedir</h5>
                        <div style={{marginTop: '20px'}}>
                          <a 
                            className="button button_stroke_custom button_js" 
                            target="_blank" 
                            href="https://www.cnnturk.com/saglik/sonbahar-alerjisinden-14-adimda-korunun" 
                            style={{borderColor: 'rgb(32, 20, 107)', color: 'rgb(32, 20, 107)'}}
                          >
                            <span className="button_label">Detaylı Bilgi İçin Tıklayınız</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a>
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/kbb_alerji.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(132, 20, 107, 0.6)'}}>
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

              {/* Resim Galerisi */}
              <div className="section" style={{paddingTop: '70px', paddingBottom: '30px'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-four column_zoom_box">
                      <div className="zoom_box">
                        <Link href="/tr-kimdir">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/kbb-1.jpg" alt="" />
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
                            <img className="scale-with-grid" src="/web/content/webdesign/res/kbb-2.jpg" alt="" />
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
                            <img className="scale-with-grid" src="/web/content/webdesign/res/kbb-3.jpg" alt="" />
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
                            <img className="scale-with-grid" src="/web/content/webdesign/res/kbb-4.jpg" alt="" />
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
