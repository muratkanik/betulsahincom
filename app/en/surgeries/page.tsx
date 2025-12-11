'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PriceRequestForm from '@/components/PriceRequestForm'

export default function SurgeriesPage() {
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
                        <h2 style={{fontWeight: 700, color: 'darkblue'}}>Surgeries</h2>
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
                        <h3><strong>Surgeries</strong></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nose Aesthetics */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2>Nose <strong>Aesthetics</strong></h2>
                  <h5>The nose is formed by cartilage and bone structures, and the procedure performed in nose aesthetics (rhinoplasty) is to reshape these structures for a more harmonious appearance with the face.</h5>
                  <h5>This involves filing the nasal bridge, correcting asymmetries, and sometimes reducing or narrowing the nose to achieve a more aesthetic shape.</h5>
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
                        <h4><strong>Rhinoplasty</strong></h4>
                        <h5>In rhinoplasty and all aesthetic procedures, patient-doctor communication and mutual trust are essential. In cases where this connection cannot be established, the rate of unhappiness and failure after surgery increases. The patient should clearly express their desires, and the doctor should explain what they can do based on their experience and surgical skills.</h5>
                        <h5>The patient's facial photographs are taken to conduct a facial analysis and determine a natural and beautiful nose shape that suits their face. Descriptions and explanations about the possible nose procedures are provided to the patient. Photo studies do not guarantee a specific outcome but show approximate results of the new nose that will form after surgery.</h5>
                      </div>
                    </div>
                  </div>
                  
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h4><strong>Nose Tip Surgery - Tip Plasty</strong></h4>
                        <h5>Nose tip surgery, also known as tip rhinoplasty (tip plasty), is a procedure that changes the size, shape, and proportions of the nose tip in three dimensions without intervening in the nasal bones. This surgery aims for aesthetic and functional success with millimetric changes. The surgery involves altering the nose-lip angle, nose tip height and width, size and shape of the nose tip cartilages, as well as the size and shape of the nostrils and nasal wings.</h5>
                        <h5>Nose tip lifting surgery aims to widen the narrow nose-lip angle to achieve the ideal angle and typically involves intervention only in the cartilage and soft tissues that make up the nose tip. After the surgery, it may take approximately 6 months to 1 year for swelling to decrease and for the nose to achieve its final appearance. Surgery prices vary depending on the degree of nasal deformity and additional aesthetic procedures to be performed.</h5>
                        <div style={{marginTop: '20px'}}>
                          <a 
                            className="button button_stroke_custom button_js" 
                            target="_blank" 
                            href="https://www.youtube.com/embed/aPXI1ZPUuSA?si=T7uAnB9yhjjpxvcT" 
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

              {/* Ear Pinning Surgery */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2><strong>Ear Pinning Surgery</strong></h2>
                  <h5>The condition where ears protrude outward from the head more vertically than they should, especially noticeable when viewed from the front or back, is referred to as "lop ear deformity."</h5>
                  <h5>This condition, seen in approximately 5% of the population in various degrees and types, can occur in one or both ears and, although it does not cause any health problems, it can lead to significant psychological distress.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h5><strong>When Is Ear Pinning Surgery Performed?</strong></h5>
                        <h5>While the development of the earlap (auricle) is completed around the age of 10, it largely finishes by the ages of 4-5.</h5>
                        <h5>There is no objection to performing ear pinning surgery at any stage of life; however, since this problem can lead to psychological issues in children, especially during school years due to environmental factors, otoplasty surgeries are often performed in school-age children.</h5>
                        <h5><strong>How Is Ear Pinning Surgery Done?</strong></h5>
                        <h5>There are numerous different techniques and approaches defined for otoplasty surgery. Some involve shaping the cartilage using stitches, some involve thinning the cartilage to facilitate shaping, and others involve partially removing the cartilage.</h5>
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

              {/* Eyelid Aesthetics */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2><strong>Eyelid</strong> Aesthetics</h2>
                  <h5>Eyelid surgery, also known as blepharoplasty, is a procedure that corrects sagging skin and fat deposits around the eyelids, which can occur due to aging or be present from birth, aiming to achieve a more aesthetic appearance.</h5>
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
                        <h5><strong>When is eyelid surgery performed?</strong></h5>
                        <h5>We can list many different reasons within this class. Our patients primarily apply to this method due to aesthetic concerns. Wrinkles due to aging are undoubtedly the most important detail at this point. To generalize;</h5>
                        <h5>Eyelid surgery is performed for conditions such as congenital drooping of the upper eyelid, loss of function in the upper eyelid affecting vision, advanced wrinkles and sagging due to aging, as well as bags and loss of elasticity in the lower eyelid area.</h5>
                        <div style={{marginTop: '20px'}}>
                          <a 
                            className="button button_stroke_custom button_js" 
                            target="_blank" 
                            href="https://youtube.com/embed/USVNK4_1rJE?si=N2CjBH6hDcxgoZob" 
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

              {/* Buccal Fat Removal */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2>Buccal Fat Removal <strong>Bichectomy</strong></h2>
                  <h5>Buccal fat removal, one of the aesthetic surgical procedures, aims to make the cheekbones more prominent and the facial features sharper by removing the buccal fat tissue located in the cheek area.</h5>
                  <h5>The buccal fat removal procedure can be performed through a small incision made inside the mouth under local anesthesia. Its easy recovery time is also among its advantages.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h5><strong>Who Can Benefit from Buccal Fat Removal?</strong></h5>
                        <h5>The buccal fat removal operation can be applied to individuals over the age of 25 with well-defined facial features.</h5>
                        <h5>However, this operation is not recommended for overweight individuals and those with thin cheeks to avoid negative outcomes in later years.</h5>
                        <div style={{marginTop: '20px'}}>
                          <a 
                            className="button button_stroke_custom button_js" 
                            target="_blank" 
                            href="https://youtube.com/embed/e-NuvGReN-Q?si=gWbm9tiwM5AhOjsF" 
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

              {/* Lip Lifting Surgery */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2><strong>Lip Lifting</strong> Surgery</h2>
                  <h5>Maintaining specific proportions on the face is crucial for aesthetic appearance. The distance between the lips and the nose also plays a critical role in determining these proportions.</h5>
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
                        <h5><strong>Who is suitable for lip lifting surgery?</strong></h5>
                        <h5>The ideal distance between the lips and the nose is around 12-15 millimeters, and the partial visibility of upper teeth is a sign of youthfulness.</h5>
                        <h5>Those with distances exceeding 15 millimeters can be evaluated in conjunction with other facial proportions to determine the suitability of the procedure.</h5>
                        <h5>The length of the lip-nose distance can cause the lower face to appear long and the upper lip to look thin. In such cases, incorrect lip augmentation can result in the upper lip appearing more prominent and longer. Extreme caution should be exercised during lip augmentation in these situations; therefore, planning a lip lift operation beforehand would be more appropriate. Lip lifting method can also be considered for smile aesthetics.</h5>
                        <div style={{marginTop: '20px'}}>
                          <a 
                            className="button button_stroke_custom button_js" 
                            target="_blank" 
                            href="https://www.youtube.com/embed/vrV_BgCxI_I?si=YV1li55vx9n2CKRj" 
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

              {/* Eyebrow Lift Surgery */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2>Eyebrow Lift <strong>Surgery</strong></h2>
                  <h5>Eyebrows are structures that give meaning to the face and determine facial expressions.</h5>
                  <h5>Although the structure, shape, and level of eyebrows are determined from birth, changes in fat, connective tissue, and bone tissue in this area over time can lead to noticeable drooping of the eyebrows.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h5><strong>What is eyebrow lift surgery?</strong></h5>
                        <h5>Eyebrow drooping not only disrupts the aesthetic appearance but can also affect vision quality by causing folding over the eyelids. In this case, with eyebrow lift surgery, it is possible to correct the tired, unhappy appearance and also get rid of the weight feeling over the eyes.</h5>
                        <h5>Eyebrow lift surgeries are also performed in patients who have experienced facial paralysis or suffered from cutting injuries resulting in permanent damage.</h5>
                        <h5>Eyebrow lift surgery can be performed under local or general anesthesia depending on the technique. Incisions are made directly above the eyebrows or on the hairy skin to pull and fix the eyebrow area towards the hairy skin.</h5>
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

              {/* Face Lift Surgery */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2><strong>Face Lift</strong> Face Lift Surgery</h2>
                  <h5>Facelift surgery involves the process of applying surgical techniques on the skin to provide the desired form of tension and aesthetic appearance on people's faces.</h5>
                  <h5>This surgical procedure, also called Facelift, is one of the successful procedures that can be performed alone or in combination with other procedures.</h5>
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
                        <h5><strong>What is a Face Lift and Who is It Suitable for?</strong></h5>
                        <h5>The concept of face lift covers applications aimed at rejuvenating the skin and providing tension on the face with certain surgical or non-surgical techniques. Face lift procedures are preferred in some areas of the face, especially to eliminate wrinkles and provide elasticity and tension in the skin.</h5>
                        <h5>Face lift procedures can be performed by anyone who is over 18 years of age and has reached adulthood to make decisions on their own regarding aesthetic surgery. Your personal expectations are evaluated during the preliminary meeting with your doctor before the operation, and if you do not have any disabling conditions, there is no harm in having facelift applications.</h5>
                        <div style={{marginTop: '20px'}}>
                          <a 
                            className="button button_stroke_custom button_js" 
                            target="_blank" 
                            href="https://www.formsante.com.tr/fransiz-askisi-nedir-ip-aski-ile-yuz-germe-ve-genclestirme/" 
                            style={{borderColor: 'rgb(32, 20, 107)', color: 'rgb(32, 20, 107)'}}
                          >
                            <span className="button_label">Click for Detailed Information</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dimple Aesthetics */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h2>Dimple <strong>Aesthetics</strong></h2>
                  <h5>Dimples, which can be defined as dimples on the cheeks formed by certain facial expressions, can now be made later.</h5>
                </div>
              </div>

              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr align_center">
                        <h5><strong>Dimple</strong> Aesthetics</h5>
                        <h5>Thanks to this procedure called Dimpleplasty, it is possible to form dimples on the cheeks when smiling. It is among the emerging startups in recent times. More and more people benefit from these procedures day by day. Dimples not only make the facial expression more attractive, but also more sympathetic.</h5>
                        <h5>Dimple aesthetics, which can be performed with an incision in the intraoral burn area under local anesthesia, is a permanent procedure and can be performed in 20-25 minutes, allowing an immediate return to social life. It can be done single or double sided.</h5>
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

              {/* Price Request Form */}
              <PriceRequestForm />

              {/* Image Gallery */}
              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_divider">
                      <hr className="no_line" />
                    </div>
                    <div className="column one-four column_zoom_box">
                      <div className="zoom_box">
                        <Link href="/en/about">
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
                        <Link href="/en/about">
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
                        <Link href="/en/about">
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
                        <Link href="/en/about">
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
