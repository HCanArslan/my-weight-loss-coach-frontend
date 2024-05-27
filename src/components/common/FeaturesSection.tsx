import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faLightbulb, faChartLine, faComments, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

const FeaturesSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <FontAwesomeIcon icon={faUtensils} size="3x" className="text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Personalized Meal Plans</h3>
            <p className="text-gray-600">Get meal plans tailored to your preferences and goals.</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faLightbulb} size="3x" className="text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">AI-Driven Recommendations</h3>
            <p className="text-gray-600">Receive intelligent suggestions to optimize your nutrition.</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faChartLine} size="3x" className="text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
            <p className="text-gray-600">Track your progress and stay motivated on your journey.</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faComments} size="3x" className="text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Expert Advice</h3>
            <p className="text-gray-600">Get advice from nutrition and fitness experts.</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faMobileAlt} size="3x" className="text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Mobile-Friendly Access</h3>
            <p className="text-gray-600">Access your plans and track your progress on the go.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
