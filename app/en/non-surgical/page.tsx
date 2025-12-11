'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PriceRequestForm from '@/components/PriceRequestForm'

export default function NonSurgicalPage() {
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
                        <h2 style={{fontWeight: 700}}>Non-surgical Procedures</h2>
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
                        <h3><strong>Non-surgical</strong> Procedures</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Toxin Treatments */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2>Toxin <strong>treatments</strong></h2>
                  <h5>Toxin of the bacteria Clostridium botulinum is used in the treatment of wrinkles. This toxin temporarily paralyzes muscles. Its first use was in the treatment of strabismus, but it gained popularity with its use for aesthetic purposes</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h5><strong>Areas of application of toxin on the face:</strong></h5>
                        <h5>Wrinkles between the eyebrows, around the eyes, and on the forehead. In some patients, it can also be applied to the longitudinal muscle bands on the neck.</h5>
                        <h5><strong>Duration of effect of toxin</strong></h5>
                        <h5>The effect lasts for 4-6 months. In repeated applications, the duration of this effect increases. If the application is performed too frequently outside the indications, tolerance may develop.</h5>
                        <h5><strong>How to prevent the "surprised look" after toxin application</strong></h5>
                        <h5>Toxin application should aim to soften facial expressions rather than freeze them. A natural result should be achieved. In patients over 50 years of age, blocking the function of the mimic muscles of the upper half of the face with toxin and not intervening in the middle and lower 1/3 sometimes leads to unnatural appearances.</h5>
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

              {/* Face Shaping Treatment with Fillers */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2><strong>Face Shaping Treatment</strong> with Fillers</h2>
                  <h5>Filler application is becoming increasingly important in aesthetic treatments. In particular, facial shaping, which we call non-surgical facial aesthetics, is an effective treatment method that has been frequently preferred recently.</h5>
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
                        <h5><strong>The Right Choice</strong></h5>
                        <h5>Just like choosing glasses or a hairstyle, personalization is important in facial filler applications. An application that suits you and complements the shape of your face is very valuable in terms of success. Since there are different face types, planning filler treatment according to the shape of the face is an important first step.</h5>
                        <h5>What makes a face beautiful is the harmony of all the proportions on the face. This doesn't mean perfect symmetry; rather, it implies balanced proportion. Due to gravity and the aging process, there can be volume loss and sagging in the face. Filler treatment performed in accordance with the personal assessment of your face's natural shape produces successful results.</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nose Filling and Lip Filling */}
              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h4><strong>Nose Filling</strong></h4>
                        <h5>It is crucial that nose filling is performed by doctors who are knowledgeable about nasal anatomy and have a good understanding of vascular structure. For those who do not want surgical nose shaping, nose filling also known as liquid rhinoplasty emerges as an alternative option. This procedure, which can be done painlessly and without discomfort under local anesthesia, takes about 15 minutes and stands out with its short recovery time. With appropriate techniques, it is possible to lift the nasal tip, conceal the nasal bridge, and shape the nose without causing growth. Suitability for filling is determined after a detailed examination.</h5>
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
                        <h4><strong>Lip Filling</strong></h4>
                        <h5>Lip filling, an aesthetic filler procedure, is a method that can be applied quickly and painlessly without requiring surgery. This method, which contributes to increased self-confidence, is one of the most preferred aesthetic applications especially among young people. Lip fillers make it possible to increase the volume of the lips, enhance lip contours, and correct lip asymmetries. With various types of fillers and application techniques available, lip filling typically provides results lasting around 8-12 months.</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fat Injection */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2>Fat <strong>Injection</strong></h2>
                  <h5>It is the process of applying fat tissue from the body that has undergone special procedures to desired areas of the face. Its biggest advantage is its naturalness. Another advantage is that it is known to be the richest source of stem cells, and it has a significant rejuvenating effect in addition to shaping.</h5>
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
                        <h5><strong>How is the Procedure Done?</strong></h5>
                        <h5>It is a procedure that can be performed with local or general anesthesia. The prepared fat cells are used both to shape the face and to brighten, shine, and renew the skin.</h5>
                        <h5>Fat injections are preferred mostly in the forehead, midface, nasolabial, and jawline areas. Fat filling is also a good alternative for neck deformations.</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Neck Wrinkle Treatment */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2>Neck Wrinkle <strong>Treatment</strong></h2>
                  <h5>With proper applications and technologies, it is possible to achieve a younger, tighter neck so that there are no years between your face and neck.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h5><strong>Botox in Neck Rejuvenation</strong></h5>
                        <h5>Vertical platysmal bands that become prominent with aging in the neck area negatively affect not only the neck but also the lower face. The easiest way to treat this problem is through Botox injections.</h5>
                        <h5>The loosening of these bands adhered to the platysma muscle with Botox injections is called the 'Nefertiti Lift.' This procedure not only reduces the prominence of these muscles but also enhances the contour of the jaw.</h5>
                        <h5>Additionally, successful results can be obtained in treating neck elasticity losses and horizontal lines with fillers containing special structures such as CaOH and collagen-based treatments.</h5>
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

              {/* Facial Rejuvenation and Stem Cell Treatments */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2><strong>Facial Rejuvenation and</strong> Stem Cell Treatments</h2>
                  <h5>Over time, the outer layers of our skin begin to show signs of wear and tear caused by environmental factors such as aging, injury, wrinkles, scars, age spots, and changes in color.</h5>
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
                          <span className="button_label">Click for Detailed Information</span>
                        </a>
                      </div>
                    </div>
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h5><strong>Stem Cells</strong></h5>
                        <h5>The use of stem cells and exosomes in facial rejuvenation is considered one of the most popular skin renewal procedures in recent years. Various techniques are used, such as fibrocell from behind the ear and SVF stem cell applications from adipose tissue. Based on the skin type determined by skin analysis, the most suitable procedure for your skin can be decided. Stem cell treatment is a great option for those who want to rejuvenate their skin from their own tissue and make a long-term investment in their skin. It can be applied painlessly and comfortably under local anesthesia.</h5>
                        <h5><strong>Skin Renewal</strong></h5>
                        <h5>With aging and gravity, the needs of the skin increase day by day. Various substances such as hyaluronic acid, collagen, salmon DNA, vitamins, and peptides are applied to the skin with tiny injections at regular intervals to meet these needs. Since the problems of every age and every skin type are different, digital skin analysis measurements are used to determine the skin age and needs, and a personalized skin renewal plan is created accordingly.</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Double Chin Reduction */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2>Double Chin <strong>Reduction</strong></h2>
                  <h5>Double chin reduction refers to the non-surgical removal of accumulated fat in the area between the jaw and neck.</h5>
                  <h5>Using correct techniques, successful results can be achieved within a short period. Getting rid of the double chin is not achievable through diet and exercise alone. In cases of sudden weight loss, this area may also sag.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h5><strong>What are Double Chin Aesthetic Procedures?</strong></h5>
                        <h5>One of the most popular methods in double chin aesthetic procedures is chemical double chin melting. Particularly, some substances containing Phosphatidylcholine and deoxycholic acid are injected into areas with increased fat accumulation.</h5>
                        <h5>This procedure is evaluated based on the amount of fat accumulation and typically involves 3-5 sessions.</h5>
                        <h5>In cases of excessive fat accumulation, surgical removal of excess fat tissue from that area is planned, which can be performed in a single session under local or general anesthesia. Following all double chin aesthetic procedures, massage and bandage application are crucial for the effectiveness of the outcome.</h5>
                        <div style={{marginTop: '20px'}}>
                          <a 
                            className="button button_stroke_custom button_js" 
                            target="_blank" 
                            href="https://www.youtube.com/embed/UxGFGTSOp_g?si=YuVuLl4s_Vatb5O_" 
                            style={{borderColor: 'rgb(32, 20, 107)', color: 'rgb(32, 20, 107)'}}
                          >
                            <span className="button_label">Click to Watch Video</span>
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

              {/* Importance of Ultrasound Use in Managing Complications in Facial Aesthetics */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h3><strong>Importance of Ultrasound</strong> Use in Managing Complications in Facial Aesthetics</h3>
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
                        <h5>Due to the increasing frequency of filler applications, unwanted or problematic applications are also increasing over time. Especially the use of permanent materials increases the possibility of complications. Nowadays, the use of ultrasound greatly strengthens our ability to manage these complications.</h5>
                        <h5>With specially designed ultrasound devices for facial aesthetic procedures, it is possible to accurately detect the layer where the filler is located and apply the dissolvers to the correct areas. It is also possible to determine whether the filler material has completely dissolved or not with these types of ultrasounds.</h5>
                        <div style={{marginTop: '20px'}}>
                          <a 
                            className="button button_stroke_custom button_js" 
                            target="_blank" 
                            href="https://www.youtube.com/embed/fQ-_EDk8Fa8?si=HS4OkUquuVbgMUK7" 
                            style={{borderColor: 'rgb(32, 20, 107)', color: 'rgb(32, 20, 107)'}}
                          >
                            <span className="button_label">Click to Watch Video</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skin Analysis */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2>Skin <strong>Analysis</strong></h2>
                  <h5>Skin analysis is an analysis that provides in-depth evaluation of the skin.</h5>
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
                        <h5>Skin analysis involves evaluating the skin to gain a better understanding of its health and to plan personalized treatments, as well as to aid in the early diagnosis of skin problems.</h5>
                        <h5><strong>How does a skin analysis device work?</strong></h5>
                        <h5>Skin analysis devices conduct detailed examinations on the skin using different technologies. These technologies may include imaging cameras, ultraviolet (UV) light usage, spectrophotometers, and lasers. These devices can penetrate into the deeper layers of the skin and measure various parameters such as skin type, moisture level, spots, and wrinkles.</h5>
                        <h5><strong>Personalized Skin Treatments</strong></h5>
                        <h5>Every individual has a different skin type and skin problems. While some individuals struggle with acne, others deal with signs of aging. Based on the results of skin analysis, experts can better understand a person's skin type, skin problems, and needs.</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price Request Form - Non-surgical Procedures specific */}
              <PriceRequestForm />

              {/* Resim Galerisi */}
              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-four column_zoom_box">
                      <div className="zoom_box">
                        <Link href="/en/about">
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
                        <Link href="/en/about">
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
                        <Link href="/en/about">
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
                        <Link href="/en/about">
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
