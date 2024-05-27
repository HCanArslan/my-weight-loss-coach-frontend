import React from 'react'
import Image from 'next/image'

const AboutUsSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <p className="text-gray-600 text-center mb-8">Our mission is to help you achieve your health goals with personalized nutrition plans and expert advice.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Image src="/path-to-team-member1.jpg" alt="Team Member 1" width={150} height={150} className="rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="text-center">
            <Image src="/path-to-team-member2.jpg" alt="Team Member 2" width={150} height={150} className="rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold">Jane Smith</h3>
            <p className="text-gray-600">Head of Nutrition</p>
          </div>
          <div className="text-center">
            <Image src="/path-to-team-member3.jpg" alt="Team Member 3" width={150} height={150} className="rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold">Alex Johnson</h3>
            <p className="text-gray-600">Fitness Expert</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection
