import React from 'react'
import Image from 'next/image'

const TestimonialsSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Image src="/path-to-user1.jpg" alt="User 1" width={50} height={50} className="rounded-full" />
              <div className="ml-4">
                <p className="font-bold">Alice Johnson</p>
                <p className="text-gray-600">"I've never felt better! The guidance and support are amazing."</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Image src="/path-to-user2.jpg" alt="User 2" width={50} height={50} className="rounded-full" />
              <div className="ml-4">
                <p className="font-bold">Michael Smith</p>
                <p className="text-gray-600">"Thanks to aiweightcoach, I've achieved my fitness goals faster than ever."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
