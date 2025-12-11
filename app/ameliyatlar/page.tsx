'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PriceRequestForm from '@/components/PriceRequestForm'

export default function AmeliyatlarPage() {
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
              <div className="section dark" style={{paddingTop: '200px', paddingBottom: '80px', backgroundImage: 'url(/web/content/webdesign/res/ameliyatlar_banner.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_column">
                      <div className="column_attr">
                        <h2 style={{fontWeight: 700, color: 'darkblue'}}>Ameliyatlar</h2>
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
                        <h3><strong>Ameliyatlar</strong></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Burun Estetiği */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2>Burun <strong>Estetiği</strong></h2>
                  <h5>Burun kıkırdak ve kemik yapılarla oluşur ve burun estetiğinde (rinoplasti) yapılan işlem, bu yapıların yeniden şekillendirilerek yüze uyumlu hale getirilmesidir.</h5>
                  <h5>Daha estetik bir burun şekli oluşturmak için burun kemeri törpülenir, asimetriler düzeltilir, bazen küçültülür, bazen de daraltılır.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a>
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyatlar_burunestetik.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(32, 20, 107, 0.8)'}}>
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
                        <h4><strong>Rinoplasti</strong></h4>
                        <h5>Rinoplastide ve tüm estetik uygulamalarda hasta-hekim iletişimi ve karşılıklı güven esastır. Bu bağın kurulamadığı durumlarda ameliyat sonrası mutsuzluk ve başarısızlık oranı yükselir. Hasta isteğini net bir şekilde belirtmeli hekim de tecrübesi ve cerrahi yeteneğine bağlı olarak yapabileceklerini hastaya doğru bir şekilde anlatmalıdır.</h5>
                        <h5>Ameliyat kararı veren hastanın yüz fotoğrafları çekilerek yüz analizi yapılır ve yüzüne yakışacak doğal ve güzel burun şekli belirlenir. Fotoğraf çalışmaları ameliyat sonrası oluşacak yeni burun hakkında bize yaklaşık sonuçları gösterir.</h5>
                        <div style={{marginTop: '35px', marginBottom: '20px'}}>
                          <a 
                            href="/rinoplasti-burun-estetigi" 
                            className="button button_large button_stroke_custom button_js" 
                            style={{background: 'transparent', border: '2px solid #20146b', color: '#20146b', padding: '16px 45px', fontWeight: 700, fontSize: '16px'}}
                          >
                            <span className="button_label">Rinoplasti Hakkında Daha Fazla Bilgi Al →</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h4><strong>Burun Ucu Estetiği - Tipplasti</strong></h4>
                        <h5>Burun ucu estetiği, yani tip rinoplasti (tipplasti), burun kemiklerine müdahale edilmeden, burun ucunun boyutu, şekli ve orantılarını üç boyutlu olarak değiştiren bir işlemdir. Bu ameliyat, milimetrik değişikliklerle estetik ve fonksiyonel başarıyı hedefler.</h5>
                        <h5>Burun ucu kaldırma ameliyatı, dar olan burun-dudak açısını genişleterek ideal açıya ulaştırmayı amaçlar ve genellikle sadece burun ucunu oluşturan kıkırdak ve yumuşak dokulara müdahale edilir.</h5>
                        <div style={{marginTop: '20px'}}>
                          <a 
                            className="button button_stroke_custom button_js" 
                            target="_blank" 
                            href="https://www.youtube.com/embed/aPXI1ZPUuSA?si=T7uAnB9yhjjpxvcT" 
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
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyatlar_burunestetik2.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(32, 20, 107, 0.8)'}}>
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

              {/* Kepçe Kulak Estetiği */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2><strong>Kepçe Kulak Estetiği</strong></h2>
                  <h5>Kulakların kafadan dışarı doğru olması gerekenden daha dik şekilde uzanmaları ve özellikle karşıdan ya da arkadan bakışta belirgin olarak görülmeleri "kepçe kulak deformitesi" olarak adlandırılmaktadır.</h5>
                  <h5>Toplumda farklı derece ve farklı tiplerde olmak üzere yaklaşık %5 oranında görülen bu durum tek ya da her iki kulakta birden izlenebilmekte ve herhangi bir sağlık sorununa neden olmamasına karşın önemli psikolojik sıkıntılara yol açabilmektedir.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h5><strong>Kepçe Kulak Ameliyatı Ne Zaman Yapılır?</strong></h5>
                        <h5>Kulak kepçesinin gelişiminin tamamlanması 10 yaşı bulmakla beraber 4-5 yaşlarında büyük ölçüde tamamlanmaktadır.</h5>
                        <h5>Kepçe kulak ameliyatının hayatın herhangi bir dönemlinde yapılmasında sakınca bulunmamaktadır ancak bu problem özellikle çocuklarda okul çağlarında çevresel faktörlere bağlı olarak psikolojik problemlere yol açabildiğinden otoplasti ameliyatları da sıklıkla okul dönemindeki çocuklarda uygulanmaktadır.</h5>
                        <h5><strong>Kepçe Kulak Ameliyatı Nasıl Yapılır?</strong></h5>
                        <h5>Otoplasti ameliyatı için tanımlanmış çok sayıda farklı teknik ve yaklaşım mevcuttur. Bunların bir kısmı kıkırdaklara dikişler kullanılarak şekil vermek bir kısmı kıkırdaklar üzerinde şekil almalarını kolaylaştıracak inceltmeler yapmak bir kısmı da kıkırdakları kısmen çıkartmak şeklinde uygulanmaktadır.</h5>
                      </div>
                    </div>
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a>
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyatlar_kepcekulak.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(32, 20, 107, 0.6)'}}>
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

              {/* Göz Kapağı Estetiği */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2><strong>Göz Kapağı</strong> Estetiği</h2>
                  <h5>Göz kapağı estetiği, göz kapaklarındaki doğuştan veya daha çok yaşlanmayla ortaya çıkan deri sarkmalarının ve yağ dokusu torbalanmalarının düzeltildiği ve daha estetik bir görünüme kavuşturulduğu operasyonlardır.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a>
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyatlar_gozkapagi.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(32, 20, 107, 0.6)'}}>
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
                        <h5><strong>Göz kapağı estetiği hangi durumlarda yapılır?</strong></h5>
                        <h5>Doğuştan gelen üst göz kapağı düşüklüğü, üst göz kapağının işlevini yitirmesi hatta bazen görme alanını etkilemesi, yaşlılığa bağlı gelişen ilerlemiş kırışıklıklar ve sarkmalar, göz altı bölgesinde torbalanmalar ve elastikiyet kayıpları nedeniyle alt ve üst kapak estetiği yapılmaktadır.</h5>
                        <div style={{marginTop: '20px'}}>
                          <a 
                            className="button button_stroke_custom button_js" 
                            target="_blank" 
                            href="https://youtube.com/embed/USVNK4_1rJE?si=N2CjBH6hDcxgoZob" 
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

              {/* Bişektomi */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2>Yanak İnceltme Ameliyatı <strong>Bişektomi</strong></h2>
                  <h5>Bişektomi, yanak bölgesinde bulunan bukkal yağ dokusunun alınmasıyla elmacık kemiklerinin daha belirgin ve yüz hatlarının daha keskin hale getirilmesi amacıyla uygulanan estetik cerrahi işlemlerden biridir.</h5>
                  <h5>Bişektomi işlemi, ağız içerisinden yapılan küçük bir kesiyle lokal anestezi altında gerçekleştirilebilir. Kolay iyileşme süresi de avantajları arasındadır.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h5><strong>Yanak İnceltme Ameliyatı Kimlere Uygulanabilir?</strong></h5>
                        <h5>Bişektomi operasyonu, 25 yaşın üzerindeki ve yüz hatları oturmuş her bireye uygulanabilir. Ancak, bu operasyon aşırı kilolu olanlar için iyi birer aday olmadığı gibi, yanakları ince olan kişilere ilerleyen yaşlarda olumsuz sonuçlarla karşılaşmamaları için önerilmez.</h5>
                        <div style={{marginTop: '20px'}}>
                          <a 
                            className="button button_stroke_custom button_js" 
                            target="_blank" 
                            href="https://youtube.com/embed/e-NuvGReN-Q?si=gWbm9tiwM5AhOjsF" 
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
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyatlar_bisektomi.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(32, 20, 107, 0.6)'}}>
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

              {/* Lip Lift */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2><strong>Lip Lift</strong> Dudak Kaldırma Ameliyatı</h2>
                  <h5>Yüzdeki belirli oranların korunması estetik görünüm açısından önemlidir.</h5>
                  <h5>Dudak burun mesafesi de bu oranların belirlenmesinde kritik bir rol oynar.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a>
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyatlar_liplift.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(32, 20, 107, 0.6)'}}>
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
                        <h5><strong>Dudak kaldırma (Lip lift) ameliyatı kimler için uygundur?</strong></h5>
                        <h5>İdeal dudak burun mesafesi 12-15 milimetre civarındadır ve üst dişlerin bir miktar görünmesi gençlik göstergesidir.</h5>
                        <h5>15 milimetrenin üzerindekiler diğer yüz oranlarıyla birlikte değerlendirilerek işlemin uygunluğuna karar verilebilir.</h5>
                        <h5>Dudak burun mesafesinin uzunluğu kişinin alt yüzünün uzun görünmesine ve üst dudağının ince görünmesine neden olabilir.</h5>
                        <div style={{marginTop: '20px'}}>
                          <a 
                            className="button button_stroke_custom button_js" 
                            target="_blank" 
                            href="https://www.youtube.com/embed/vrV_BgCxI_I?si=YV1li55vx9n2CKRj" 
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

              {/* Kaş Kaldırma */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2>Kaş Kaldırma <strong>Ameliyatı</strong></h2>
                  <h5>Kaşlar yüze anlam katan ve yüz ifadesini belirleyen yapılar olarak kabul edilir.</h5>
                  <h5>Kaşlarımızın yapısı, şekli ve seviyesi doğuştan belirlense de zamanla bu bölgedeki yağ, bağ ve kemik dokudaki değişimler, kaşlarımızda belirgin düşüklüğe neden olabilir.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h5><strong>Kaş kaldırma ameliyatı nedir?</strong></h5>
                        <h5>Kaş düşüklüğü estetik görünümü bozduğu gibi, göz kapağı üzerine yığılma yaparak görme kalitesini de etkileyebilir. Bu durumda kaş kaldırma ameliyatı ile yorgun, mutsuz görünüm düzeltilirken gözün üzerindeki ağırlık hissinden kurtulmak da mümkündür.</h5>
                        <h5>Kaş kaldırma ameliyatları, yüz felci veya kesici yaralanmalar geçiren ve kalıcı hasar gelişen hastalarda da yapılmaktadır. Kaş kaldırma ameliyatı tekniklere göre lokal ya da genel anesteziyle gerçekleştirilebilir.</h5>
                        <h5>Kesiler direkt kaş üstünden ya da saçlı deriden yapılarak kaş bölgesi saçlı deriye doğru çekilip sabitlenir.</h5>
                      </div>
                    </div>
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a>
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyatlar_kaskaldirma.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(32, 20, 107, 0.6)'}}>
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

              {/* Face Lift */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2><strong>Face Lift</strong> Yüz Germe Ameliyatı</h2>
                  <h5>Yüz germe ameliyatı (facelift), cilt üzerinde cerrahi tekniklerin uygulanması ile kişilerin yüzünde istedikleri formda gerginlik ve estetik bir görünüm sağlanması sürecini içermektedir.</h5>
                  <h5>Facelift olarak da isimlendirilen bu cerrahi uygulama tek başına veya diğer prosedürlerle birlikte yapılabilen başarılı işlemlerdendir.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a>
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyatlar_facelift.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(32, 20, 107, 0.6)'}}>
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
                        <h5><strong>Yüz Germe Nedir ve Kimler İçin Uygundur?</strong></h5>
                        <h5>Yüz germe kavramı, cildi gençleştirmek ve yüzde ameliyatlı veya ameliyatsız belirli tekniklerle gerginlik sağlamak amaçlı yapılan uygulamaları kapsamaktadır.</h5>
                        <h5>Yüz germe uygulamalarını 18 yaşını tamamlamış ve estetik yaptırmaya yönelik kendi başına karar alabilecek erginliğe erişmiş herkes yaptırabilmektedir.</h5>
                        <div style={{marginTop: '20px'}}>
                          <a 
                            className="button button_stroke_custom button_js" 
                            target="_blank" 
                            href="https://www.formsante.com.tr/fransiz-askisi-nedir-ip-aski-ile-yuz-germe-ve-genclestirme/" 
                            style={{borderColor: 'rgb(32, 20, 107)', color: 'rgb(32, 20, 107)'}}
                          >
                            <span className="button_label">Detaylı Bilgi İçin Tıklayınız</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gamze Estetiği */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2>Gamze <strong>Estetiği</strong></h2>
                  <h5>Yanakta belirli mimik hareketleriyle oluşan çukurlar olarak tanımlanabilen gamze artık sonradan da yapılabiliyor.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h5><strong>Gamze</strong> Estetiği</h5>
                        <h5>Dimpleplasty olarak adlandırılan bu işlem sayesinde gülümseme sırasında yanaklarda gamzeler oluşması mümkündür. Son dönemde yıldızı parlayan girişimler arasındadır. Gün geçtikçe daha fazla kişi bu işlemlerden faydalanmaktadır. Gamze yüz ifadesini daha çekici kılmakla kalmayıp aynı zamanda daha sempatik hale de getiriyor.</h5>
                        <h5>Lokal anesteziyle ağız içi yanak bölgesinden bir kesiyle yapılabilen gamze estetiği kalıcı bir işlem olup 20-25 dakikada yapılarak sosyal hayata hemen dönüş yapılabilmektedir. Tek ya da çift taraflı olarak yapılabilmektedir</h5>
                      </div>
                    </div>
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <a>
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyatlar_gamze.jpg" alt="" />
                          </div>
                          <div className="desc" style={{backgroundColor: 'rgba(32, 20, 107, 0.6)'}}>
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

              {/* Fiyat İste Formu */}
              <PriceRequestForm />

              {/* Resim Galerisi */}
              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_divider">
                      <hr className="no_line" />
                    </div>
                    <div className="column one-four column_zoom_box">
                      <div className="zoom_box">
                        <Link href="/tr-kimdir">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyat-1.jpg" alt="" />
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
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyat-2.jpg" alt="" />
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
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyat-3.jpg" alt="" />
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
                            <img className="scale-with-grid" src="/web/content/webdesign/res/ameliyat-4.jpg" alt="" />
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
