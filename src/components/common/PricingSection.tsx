import React from 'react'

const PricingSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Free Plan</h3>
            <p className="text-gray-600 mb-4">Basic access to features</p>
            <p className="text-3xl font-bold mb-4">$0/month</p>
            <button className="py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700">Get Started</button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Basic Plan</h3>
            <p className="text-gray-600 mb-4">More features for you</p>
            <p className="text-3xl font-bold mb-4">$19.99/month</p>
            <button className="py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700">Get Started</button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Premium Plan</h3>
            <p className="text-gray-600 mb-4">All features unlocked</p>
            <p className="text-3xl font-bold mb-4">$39.99/month</p>
            <button className="py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
