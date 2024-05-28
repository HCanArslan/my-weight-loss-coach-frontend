import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faClipboardList, faChartLine } from '@fortawesome/free-solid-svg-icons'

const HowItWorks = () => {
  return (
    <section className="py-section">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-darkGray mb-8 text-center">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/3 text-center mb-8 md:mb-0">
            <div className="bg-secondary rounded-full p-6 mb-4 mx-auto w-24 h-24 flex items-center justify-center">
              <FontAwesomeIcon icon={faUserPlus} className="text-4xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-darkGray mb-2">Step 1: Sign Up</h3>
            <p className="text-coolGray">Create an account and set your health goals.</p>
          </div>
          <div className="md:w-1/3 text-center mb-8 md:mb-0">
            <div className="bg-secondary rounded-full p-6 mb-4 mx-auto w-24 h-24 flex items-center justify-center">
              <FontAwesomeIcon icon={faClipboardList} className="text-4xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-darkGray mb-2">Step 2: Get Personalized Plans</h3>
            <p className="text-coolGray">Receive AI-driven nutrition plans tailored to your needs.</p>
          </div>
          <div className="md:w-1/3 text-center">
            <div className="bg-secondary rounded-full p-6 mb-4 mx-auto w-24 h-24 flex items-center justify-center">
              <FontAwesomeIcon icon={faChartLine} className="text-4xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-darkGray mb-2">Step 3: Track Your Progress</h3>
            <p className="text-coolGray">Monitor your progress and adjust your plans as needed.</p>
          </div>
        </div>
        <div className="text-center mt-16">
          <button className="py-3 px-6 bg-ctaBlue text-white font-bold rounded-md hover:bg-ctaBlueHover">Get Started Now</button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
