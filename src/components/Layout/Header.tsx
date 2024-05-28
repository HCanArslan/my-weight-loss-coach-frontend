import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">weightcoachai</h1>
        <nav className="space-x-4">
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href="/features" className="text-gray-600 hover:text-gray-900">
            Features
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
            Pricing
          </Link>
          <Link href="/testimonials" className="text-gray-600 hover:text-gray-900">
            Testimonials
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </nav>
        <div className="space-x-4">
          <a href="#">
            <button className="py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700">Get Started</button>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
