import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat w-full h-screen" style={{ backgroundImage: "url('/hero-image.png')" }}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-left h-full">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-darkGray">Personalized <br/>Nutrition Coaching<br/>Powered by AI</h2>
          <p className="text-xl text-gray mb-8">Achieve your health goals with tailored plans designed just for you.</p>
          <button className="py-2 px-4 bg-ctaBlue text-white font-bold rounded-md hover:bg-ctaBlueHover">Get Started</button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
