import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-white shadow py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900">
            Privacy Policy
          </Link>
          <span className="mx-2">|</span>
          <Link href="/terms" className="text-gray-600 hover:text-gray-900">
            Terms of Service
          </Link>
        </div>
        <div className="space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
