'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
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

              {/* Title */}
              <div className="section" style={{paddingTop: '70px', paddingBottom: '30px'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_column">
                      <div className="column_attr align_center">
                        <h3>About <strong>Op.Dr.Betül Şahin</strong></h3>
                      </div>
                    </div>
                    <div className="column one column_column">
                      <div className="column_attr align_center">
                        <hr className="no_line hrmargin_b_30"/>
                        <h4 style={{marginBottom: '20px'}}>Biography</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image and Text 1 */}
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
                        <h5>Op. Dr. Betül Şahin is a specialist in Ear, Nose, and Throat (ENT) diseases.</h5>
                        <h5>Born in Istanbul, Op. Dr. Betül Şahin graduated at the top of her class from Istanbul Erenköy Girls High School and then went on to attend Istanbul University Faculty of Medicine, graduating with honors. She completed her specialization training at Istanbul Fatih Sultan Mehmet Training and Research Hospital.</h5>
                        <h5>She is a founding member of the Turkish Ear Nose Throat Foundation and a member of the Turkish Society of Facial Plastic Surgery. She has presented at numerous national and international congresses on facial aesthetics, conducted workshops, practical training on cadavers, and organized minimal invasive facial rejuvenation camps. Additionally, she served as the editor of the medical journal "Mavi Kod" from 2013 to 2016. Since 2010, she has also been a member of the board of directors of the Private Royal Hospital.</h5>
                        <h5>Dr. Betül Şahin has successfully performed many surgeries in the field of ear, nose, and throat, primarily focusing on facial and nasal aesthetics between 2018 and 2022 within the Acıbadem Hospitals Health Group. Currently, she practices at her own clinic on Istanbul's Bağdat Avenue.</h5>
                        <h5>In her clinic practice, she not only diagnoses and treats ear, nose, and throat diseases but also performs facial and neck aesthetic procedures.</h5>
                        <h5>With completed training in this field, which requires an aesthetic perspective and artistic talent, she combines her knowledge and experience at her practice. Giving individual attention to all patients, from the planning stage through the procedure and post-operative period, is one of her fundamental working principles.</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seminars and Trainings Title */}
              <div className="section" style={{paddingTop: '70px', paddingBottom: '30px'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_column">
                      <div className="column_attr align_center">
                        <h3>Seminars and <strong>Trainings</strong></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Training Seminar 1 */}
              <div className="section section-border-top" style={{paddingTop: '80px', paddingBottom: '40px'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr" style={{marginLeft: '4%', marginTop: '15px'}}>
                        <h6>12-15 April 2018 - Workshop Instructor at the Turkish Ear Nose Throat and Head and Neck Surgery Foundation 3rd Spring Meeting, Antalya</h6>
                        <h6>6-8 December 2018 - Workshop Instructor on Botox, Fillers, and Mesotherapy at the 12th National Meeting of the Facial Plastic Surgery Association, Adana</h6>
                        <h6>25 May 2019 - Instructor on Facial Filling Applications at the Rhinoplasty and Facial Aesthetic Applications Panel during the Istanbul ENT Specialists Meeting, Istanbul</h6>
                        <h6>26-29 September 2019 - Instructor on Filling Applications, Workshops, and Complication Presentations at the 11th Congress of the Istanbul ENT-BBC Specialists Association, Istanbul</h6>
                        <h6>13-15 September 2019 - Instructor on Filling and Mesotherapy Applications at the Four Seasons Cappadocia Facial Plastic Panel, Cappadocia</h6>
                        <h6>Instructor on filler and Botox applications in the TKBBV 2018-2019 Education Program</h6>
                        <h6>18-20 October 2019 - Workshop Instructor at the Facial Plastic Surgery Çeşme Günleri, Çeşme</h6>
                        <h6>5-7 December 2019 - Instructor at the Minimal Invasive Applications Workshop at the Istanbul Facial Plastic Surgery National Meeting, Istanbul</h6>
                        <h6>9-10 March 2019 - Presentation at the Mezotherapy and Filler Workshops at the Faceminima Meeting, Ankara</h6>
                        <h6>18-21 April 2019 - Instructor on Facial Filling Applications and Botulinum Toxin Applications at the TKBBV 4th Spring Meeting, Antalya</h6>
                        <h6>13 November 2019 - Instructor on Non-invasive Procedures for Facial Rejuvenation at the 41st National ENT Congress, Antalya</h6>
                        <h6>28-29 February 2020 - Instructor on Minimal Invasive Interventions in Facial Aesthetics at the Faceminima Meeting, Ankara</h6>
                        <h6>16-19 April 2021 - Instructor at the Non-invasive Facial Rejuvenation Course during the 5th Spring Meeting, Antalya</h6>
                        <h6>12-13 December 2020 - Online Presentations at the 14th National 1st Virtual Facial Plastic Surgery Association Meeting</h6>
                        <h6>Instructor at Novel Academy between 2019 and 2021</h6>
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

              {/* Training Seminar 2 */}
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
                        <h6>16 April 2022 - Workshop Instructor on Fillers and Toxins at Harran University, Urfa</h6>
                        <h6>17 April 2022 - Workshop Instructor on Fillers and Toxins at Dicle University, Diyarbakır</h6>
                        <h6>15-18 May 2022 - Presentation and Course Instructor on Minimal Invasive Facial Applications at the 7th Spring Meeting, Antalya</h6>
                        <h6>30 May 2022 - Workshop Instructor on Minimal Invasive Procedures at the Konya ENT BBC Association, Konya Başkent University</h6>
                        <h6>10-12 June 2022 - Meeting Chairmanship and Instructor at the 2nd Comprehensive Facial Rejuvenation Camp, Antakya</h6>
                        <h6>5 September 2022 - Workshop Instructor on Fillers and Toxins at the Torlak Cadaver Workshop, Ankara</h6>
                        <h6>18-21 September 2022 - Presentation and Course Instructor on Minimal Invasive Facial Applications at Meditrio 6, TRNC</h6>
                        <h6>23-25 September 2022 - Camp Chairmanship and Instructor at the 3rd Comprehensive Facial Rejuvenation Camp, TRNC</h6>
                        <h6>16 October 2022 - Workshop Instructor on Minimal Invasive Facial Rejuvenation at Istanbul Sultangazi Haseki Training and Research Hospital, Istanbul</h6>
                        <h6>16-20 November 2022 - Presentation on Face Lift with Thread Lift at the 16th National ENT Congress, Antalya</h6>
                        <h6>5 December 2022 - Presentation and Workshop Instructor on Minimal Invasive Procedures at Kahramanmaraş Sütçü İmam University, Kahramanmaraş</h6>
                        <h6>9-11 December 2022 - Instructor on Facial Fat Filling and Nasal Filling Applications, Course Instruction, and Presentations at the Facial Plastic Surgery Association, Istanbul</h6>
                        <h6>4 January 2023 - Instructor at the TKBBV Meetings on Minimal Invasive Facial Applications Course</h6>
                        <h6>19-21 May 2023 - Camp Chairmanship and Instructor at the 4th Facial Rejuvenation Face to Face Camp, Cappadocia</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Remaining Training Seminars */}
              <div className="section" style={{paddingTop: '70px', paddingBottom: '30px'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_column">
                      <div className="column_attr" style={{marginLeft: '4%', marginTop: '15px'}}>
                        <h6>18-19 February 2023 - Instructor at the 5th Fresh Cadaver Aesthetic Facial Anatomy Workshop at Ege University, Izmir</h6>
                        <h6>25 March 2023 - Presentation at the Istanbul Medeniyet University ENT Department Minimal Invasive Facial Surgery Meeting, Istanbul</h6>
                        <h6>28-30 April 2023 - Presentation and Workshop Instructor at the 8th Spring Meeting, Antalya</h6>
                        <h6>9-11 June 2023 - 15th International ENT and Head Neck Surgery Congress.</h6>
                        <h6>18-19 June 2023 - Instructor at the Ege University Cadaver Workshop, Izmir</h6>
                        <h6>8-10 September 2023 - Presentation on Mid-Facial Rejuvenation, Moderation of Energy-Based Device Panels, Presentation at Vidroconferences, Workshop at Faceminima International, Adana</h6>
                        <h6>21-22 October 2023 - Workshop Instructor on Rhinoplasty and Minimal Invasive Facial Rejuvenation Course, Bursa</h6>
                        <h6>16 November 2023 - Instructor at the Recep Tayyip Erdoğan University ENT Department Minimal Invasive Facial Rejuvenation Workshop, Rize</h6>
                        <h6>15-19 November 2023 - Presentation and Workshop Instructor at the 44th National ENT Head and Neck Surgery Congress, Antalya</h6>
                        <h6>30 November - 2 December 2023 - Instructor at the Euphrates Tigris ENT Association Rhinoplasty and Facial Aesthetics Cadaver Dissection Course, Elazığ</h6>
                        <h6>11-12 December 2023 - Instructor at the Face to Face Cadaver Workshop, Torlak - Ankara</h6>
                        <h6>8-10 December 2023 - Presentations and Panel Chairmanship at the 17th Facial Plastic Surgery Association International Meeting, Izmir</h6>
                        <h6>8-10 March 2024 - Camp Chairmanship and Instructor at the 5th Face to Face Facial Rejuvenation Camp, Sapanca</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Publications */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <hr className="no_line hrmargin_b_30"/>
                  <h3><strong>PUBLICATIONS</strong></h3>
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

              {/* Book Translation */}
              <div className="column one column_column">
                <div className="column_attr align_center">
                  <hr className="no_line hrmargin_b_30"/>
                  <h3><strong>BOOK TRANSLATION</strong></h3>
                </div>
              </div>

              <div className="column one column_column">
                <div className="column_attr align_center">
                  <h4>FUNDAMENTAL FACE FOR AESTHETIC INJECTIONS <strong>2022</strong></h4>
                  <h4>DIAGNOSIS AUTORHYNOLARINGOLOGY <strong>2023</strong>(Translation Editor)</h4>
                  <h4>MAYO CLINIC - Guide to Integrative Medicine- Making Wellness the Focus of Your Self-Care <strong>2023</strong></h4>
                  <h4>MAYO CLINIC - Integrative Medicine Guide - Mind Body Relaxation Techniques <strong>2023</strong></h4>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="section" style={{paddingTop: '70px', paddingBottom: '30px'}}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-four column_zoom_box">
                      <div className="zoom_box">
                        <Link href="/en/about">
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
                        </Link>
                      </div>
                    </div>
                    <div className="column one-four column_zoom_box">
                      <div className="zoom_box">
                        <Link href="/en/about">
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
                        </Link>
                      </div>
                    </div>
                    <div className="column one-four column_zoom_box">
                      <div className="zoom_box">
                        <Link href="/en/about">
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
                        </Link>
                      </div>
                    </div>
                    <div className="column one-four column_zoom_box">
                      <div className="zoom_box">
                        <Link href="/en/about">
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
