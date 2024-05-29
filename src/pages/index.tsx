import React from 'react'
import Header from '@/components/Layout/Header'
import HeroSection from '@/components/common/HeroSection'
import FeaturesSection from '@/components/common/FeaturesSection'
import HowItWorksSection from '@/components/common/HowItWorksSection'
import PricingSection from '@/components/common/PricingSection'
import CallToActionSection from '@/components/common/CallToActionSection'
import Footer from '@/components/Layout/Footer'
import JoinWaitlistSection from '@/components/common/JoinWaitlistSection'
import FAQ from '@/components/common/FAQ'
import { Element } from 'react-scroll';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Element name="home">
          <HeroSection />
        </Element>
        <Element name="features">
          <FeaturesSection />
        </Element>
        <Element name="how-it-works">
        <HowItWorksSection />
        </Element>
        <Element name="contact">
          <JoinWaitlistSection />
        </Element>
        <Element name="pricing">
          <PricingSection />
        </Element>
        <Element name="faq">
          <FAQ />
        </Element>
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
