import React from 'react'
import Header from '@/components/Layout/Header'
import HeroSection from '@/components/common/HeroSection'
import FeaturesSection from '@/components/common/FeaturesSection'
import HowItWorksSection from '@/components/common/HowItWorksSection'
import TestimonialsSection from '@/components/common/TestimonialsSection'
import PricingSection from '@/components/common/PricingSection'
import AboutUsSection from '@/components/common/AboutUsSection'
import CallToActionSection from '@/components/common/CallToActionSection'
import Footer from '@/components/Layout/Footer'

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <AboutUsSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
