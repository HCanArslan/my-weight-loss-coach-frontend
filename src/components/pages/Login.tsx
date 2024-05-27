import React from 'react'

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-lg font-bold">aiweightcoach</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Login</a>
          </nav>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
          <h2 className="text-2xl font-bold text-center mb-6">Welcome back!</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input type="email" id="email" className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your email" />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input type="password" id="password" className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" />
            </div>
            <div className="flex justify-between items-center">
              <a href="#" className="text-sm text-gray-600 hover:underline">Forgot Password?</a>
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700">Login</button>
          </form>
        </div>
      </main>
      <footer className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <p className="text-gray-600">© 2022 aiweightcoach. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Login
