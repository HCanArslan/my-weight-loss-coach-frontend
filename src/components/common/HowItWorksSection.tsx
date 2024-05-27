import React from 'react'

const HowItWorksSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Step 1</h3>
            <p className="text-gray-600">Sign up and set your goals</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Step 2</h3>
            <p className="text-gray-600">Get personalized meal plans</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Step 3</h3>
            <p className="text-gray-600">Track your progress and adjust plans</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
