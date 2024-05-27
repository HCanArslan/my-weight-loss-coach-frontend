import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Personalized Nutrition Coaching Powered by AI</h2>
          <p className="text-gray-600 mb-8">Achieve your health goals with tailored plans designed just for you.</p>
          <button className="py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700">Start Your Free Trial</button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image src="/path-to-hero-image.jpg" alt="Hero Image" width={600} height={400} />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
