'use client'

import Link from 'next/link'
import { useState } from 'react'
import HeroSlider from '@/components/HeroSlider'
import Footer from '@/components/Footer'

export default function EnglishHome() {
  return (
    <div id="Wrapper">
      <div id="Header_wrapper">
        {/* English Header */}
        <header id="Header">
          <div id="Action_bar">
            <div className="container">
              <div className="column one">
                <ul className="contact_details"></ul>
                <ul className="social"></ul>
              </div>
            </div>
          </div>

          <div id="Overlay">
            <nav id="overlay-menu">
              <ul id="menu-main-menu" className="overlay-menu">
                <li className="current_page_item">
                  <Link href="/en">Home Page</Link>
                </li>
                <li>
                  <Link href="/en/about">About</Link>
                </li>
                <li>
                  <Link href="/en/non-surgical">Non-Surgical Procedures</Link>
                </li>
                <li>
                  <Link href="/en/surgeries">Surgeries</Link>
                </li>
                <li>
                  <Link href="/en/ent">ENT Treatments</Link>
                </li>
                <li>
                  <Link href="/en/media">Media</Link>
                </li>
                <li>
                  <Link href="/en/academy">Academy</Link>
                </li>
                <li>
                  <Link href="/en/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/">Türkçe</Link>
                </li>
              </ul>
            </nav>
          </div>

          <a className="overlay-menu-toggle" href="#">
            <i className="open icon-menu"></i>
            <i className="close icon-cancel"></i>
          </a>

          <div id="Top_bar">
            <div className="container">
              <div className="column one">
                <div className="top_bar_left clearfix">
                  <div className="logo">
                    <Link href="/en" id="logo" title="Op.Dr.Betül Şahin">
                      <img className="logo-main scale-with-grid" src="/web/content/webdesign/res/logo.png" alt="Betül Şahin" />
                      <img className="logo-sticky scale-with-grid" src="/web/content/webdesign/res/logo.png" alt="" />
                    </Link>
                  </div>
                  <div className="menu_wrapper"></div>
                </div>

                <div className="top_bar_left">
                  <div className="alignright">
                    <Link href="/" style={{ color: 'white' }}>
                      <strong>Türkçe</strong>
                      <br />
                      <img src="/web/content/webdesign/res/turkce.png" alt="Türkçe" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <HeroSlider />
        </header>
      </div>
      
      <div id="Content">
        <div className="content_wrapper clearfix">
          <div className="sections_group">
            <div className="entry-content">
              {/* About Section */}
              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_divider">
                      <hr className="no_line" />
                    </div>
                    
                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <Link href="/en/about">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/kimdir.jpg" alt="" />
                          </div>
                          <div className="desc" style={{ backgroundColor: 'rgba(19, 79, 75, 0.8)' }}>
                            <div className="desc_wrap" style={{ paddingTop: '70px' }}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">About</div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    
                    <div className="column one-second column">
                      <div className="column_attr">
                        <h4 style={{ fontWeight: 700 }}>
                          <span style={{ display: 'inline-block', width: '25px', height: '25px', background: '#bf1717', overflow: 'hidden', marginRight: '15px' }}></span>
                          Who is Op.Dr.Betül ŞAHİN?
                        </h4>
                        <p className="big">
                          She graduated from Istanbul Medical Faculty with honors in 1997.
                          <br /> She is a founding board member of the Turkish Ear Nose Throat Foundation.
                          <br /> She is a member of the Turkish Facial Plastic Surgery Association.
                          <br /> Presentations at many national and international congresses on facial aesthetics,
                          <br /> workshop training, applied training on cadavers,
                          <br /> has conducted minimally invasive facial rejuvenation camps.
                        </p>
                        <a className="button button_stroke_custom button_js" href="/en/about" style={{ borderColor: 'rgb(233, 72, 12)', color: 'rgb(233, 72, 12)' }}>
                          <span className="button_label">About</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nose Aesthetics Section */}
              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one column_column">
                      <div className="column_attr align_center">
                        <h2>Nose <strong>Aesthetics</strong></h2>
                        <h5>Rhinoplasty is a surgical procedure performed to improve the appearance of the nose. Functional improvements can also be made. It is important to consult with a specialist surgeon.</h5>
                      </div>
                    </div>

                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <Link href="/en/surgeries">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan.jpg" alt="" />
                          </div>
                          <div className="desc" style={{ backgroundColor: 'rgba(12, 123, 175, 0.8)' }}>
                            <div className="desc_wrap" style={{ paddingTop: '70px' }}>
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Rhinoplasty</div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="column one-second column_zoom_box">
                      <div className="zoom_box">
                        <Link href="/en/surgeries">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan2.jpg" alt="" />
                          </div>
                          <div className="desc" style={{ backgroundColor: 'rgba(236, 46, 133, 0.8)' }}>
                            <div className="desc_wrap">
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">TypePlasty</div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="column one column_column">
                      <div className="column_attr align_center">
                        <h2>Surgical Procedures <strong></strong></h2>
                      </div>
                    </div>

                    <div className="column one column_divider">
                      <hr className="no_line" />
                    </div>

                    <div className="column one-third column_zoom_box">
                      <div className="zoom_box">
                        <Link href="/en/surgeries">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan3.jpg" alt="" />
                          </div>
                          <div className="desc" style={{ backgroundColor: 'rgba(232, 167, 53, 0.8)' }}>
                            <div className="desc_wrap">
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Prominent Ear Aesthetics (Otoplasty)</div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="column one-third column_zoom_box">
                      <div className="zoom_box">
                        <Link href="/en/surgeries">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan4.jpg" alt="" />
                          </div>
                          <div className="desc" style={{ backgroundColor: 'rgba(12, 50, 95, 0.8)' }}>
                            <div className="desc_wrap">
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Eyelid aesthetic</div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="column one-third column_zoom_box">
                      <div className="zoom_box">
                        <Link href="/en/surgeries">
                          <div className="photo">
                            <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan5.jpg" alt="" />
                          </div>
                          <div className="desc" style={{ backgroundColor: 'rgba(148, 132, 108, 0.8)' }}>
                            <div className="desc_wrap">
                              <div className="desc_img">
                                <img className="scale-with-grid" src="/web/content/webdesign/res/manset_arkaplan_icon.png" alt="" />
                              </div>
                              <div className="desc_txt">Nasal Polyp</div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price Request Form - English */}
              <div className="section sections_style_5">
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-five">
                      <label htmlFor="name">Name and Surname</label>
                      <input type="text" className="form-control" placeholder="Name and Surname" id="name" />
                    </div>
                    <div className="column one-five">
                      <label htmlFor="city">Where do you live</label>
                      <input type="text" className="form-control" placeholder="Where do you live" id="city" />
                    </div>
                    <div className="column one-five">
                      <label htmlFor="gsm">Gsm Number</label>
                      <input type="text" className="form-control" placeholder="Gsm" id="gsm" />
                    </div>
                    <div className="column one-five">
                      <label htmlFor="procedure">Select Transaction</label>
                      <select className="form-control" id="procedure">
                        <option>Select Transaction</option>
                        <option>*** surgeries ***</option>
                        <option value="rhinoplasty">rhinoplasty</option>
                        <option value="prominent-ear">Prominent ear aesthetics</option>
                        <option value="eyelid">Eyelid aesthetic</option>
                        <option value="bichectomy">Bichectomy/cheek aesthetics</option>
                        <option value="liplift">Liplift/lip lift aesthetics</option>
                        <option value="brow-lift">Eyebrow lift aesthetics</option>
                        <option value="facelift">Facelift</option>
                        <option value="sinusitis">Sinusitis surgery</option>
                        <option value="snoring">Snoring surgery</option>
                        <option value="adenoid">Adenoid surgery</option>
                        <option value="tonsil">Tonsil surgery</option>
                        <option value="septoplasty">Septoplasty</option>
                        <option>*** Non-Surgical Procedures ***</option>
                        <option value="neck-wrinkles">Neck wrinkles treatment</option>
                        <option value="double-chin">Double chin melting</option>
                        <option value="fillers">Face shaping with fillers</option>
                        <option value="toxin">Toxin treatments</option>
                        <option value="rejuvenation">Facial rejuvenation treatments</option>
                        <option>*** ENT Treatments ***</option>
                        <option value="pediatric">Pediatric ENT Diseases</option>
                        <option value="allergy">Allergy treatments</option>
                        <option value="vertigo">Vertigo</option>
                        <option value="hearing">Hearing loss</option>
                        <option value="hoarseness">Hoarseness treatments</option>
                        <option value="sinusitis-ent">Sinusitis</option>
                        <option value="nasal-congestion">Nasal congestion treatments</option>
                      </select>
                    </div>
                    <div className="column one-five">
                      <br />
                      <button className="btn btn-primary w-100 py-3">Request Price</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Non-Surgical Banner */}
              <div className="section" style={{ paddingTop: '100px', paddingBottom: '80px', backgroundImage: 'url(/web/content/webdesign/res/ortabanner.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center bottom' }}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr">
                        <h2 style={{ color: 'white' }}>
                          Non-Surgical<br /> <strong>Procedures</strong>
                        </h2>
                        <hr className="no_line hrmargin_b_40" />
                        <h4>Non-surgical procedures offer non-surgical ways to improve skin and facial appearance, offering options such as wrinkle reduction and fillers.</h4>
                        <hr className="no_line hrmargin_b_40" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* YouTube Section */}
              <div className="section" style={{ paddingTop: '100px', paddingBottom: '80px', backgroundImage: 'url(/web/content/webdesign/res/ortabanner2.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center bottom' }}>
                <div className="section_wrapper clearfix">
                  <div className="items_group clearfix">
                    <div className="column one-second column_column">
                      <div className="column_attr">
                        <h3 style={{ color: 'red' }}>
                          <strong>@dr.betulsahin</strong>
                        </h3>
                        <hr className="no_line hrmargin_b_40" />
                        <hr className="no_line hrmargin_b_40" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="action_button aligncenter">
                <a target="_blank" href="https://www.youtube.com/@dr.betulsahin" rel="noopener noreferrer">
                  Follow us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
