import Image from 'next/image'
import React from 'react'

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden max-w-4xl">
        <div className="flex items-center justify-center p-10 bg-gray-50">
          <Image src="/Signup.png" alt="Signup Illustration" width={300} height={300} />
        </div>
        <div className="flex flex-col p-8 md:p-16 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Sign up</h2>
          <p className="text-gray-600">Get personalized weight loss coaching now</p>
          <form className="space-y-4">
            <div>
              <label htmlFor="full-name" className="block text-gray-700">Your full name</label>
              <input type="text" id="full-name" className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="First Last name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input type="email" id="email" className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your email address" />
            </div>
            <div>
              <label htmlFor="username" className="block text-gray-700">Username</label>
              <input type="text" id="username" className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="Choose a username" />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700">Set up your secure password</label>
              <input type="password" id="password" className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="********************" />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-gray-700">Confirm your password</label>
              <input type="password" id="confirm-password" className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="********************" />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
              <label htmlFor="terms" className="ml-2 block text-gray-700">By signing up, you agree to our Terms and Privacy Policy.</label>
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700">Get started</button>
          </form>
          <p className="text-center text-gray-600">Already a member? <a href="/login" className="text-indigo-600 hover:underline">Log in</a></p>
        </div>
      </div>
    </div>
  )
}

export default Signup
