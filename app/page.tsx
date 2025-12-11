'use client'

import Header from '@/components/Header'
import HeroSlider from '@/components/HeroSlider'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import PriceRequestForm from '@/components/PriceRequestForm'
import NonSurgicalBanner from '@/components/NonSurgicalBanner'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div id="Wrapper">
      <div id="Header_wrapper">
        <Header />
        <HeroSlider />
      </div>
      
      <div id="Content">
        <div className="content_wrapper clearfix">
          <div className="sections_group">
            <div className="entry-content">
              <AboutSection />
              <ServicesSection />
              <PriceRequestForm />
              <NonSurgicalBanner />
              <TestimonialsSection />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
