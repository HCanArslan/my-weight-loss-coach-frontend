import React from 'react'
import Header from '../Layout/Header'
import Sidebar from '../Layout/Sidebar'
import Footer from '../Layout/Footer'

const Settings = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-8">
          <h1 className="text-3xl font-bold mb-8">Subscription Plan</h1>
          <section className="mb-8">
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
              <div className="flex items-center mb-4">
                
                <div className="ml-4">
                  <h2 className="text-xl font-bold">Billing Information</h2>
                  <p className="text-gray-600">Your Custom Plan</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                  <span className="font-bold">John Doe</span>
                  <span className="text-gray-600">subscriber</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                  <span className="font-bold">Jane Smith</span>
                  <span className="text-gray-600">subscriber</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                  <span className="font-bold">Alex Johnson</span>
                  <span className="text-gray-600">subscriber</span>
                </div>
                <input type="text" placeholder="Enter payment details" className="mt-4 w-full p-2 border rounded-md" />
                <button className="mt-4 w-full py-2 px-4 bg-black text-white font-bold rounded-md">Pay Now</button>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
              <h2 className="text-xl font-bold mb-4">Premium</h2>
              <p className="text-gray-600 mb-4">Unlock unlimited coaching sessions. Ready for an upgrade?</p>
              <button className="w-full py-2 px-4 bg-black text-white font-bold rounded-md">Upgrade</button>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
              <h2 className="text-xl font-bold mb-4">Billing Settings</h2>
              <p className="text-gray-600 mb-4">Manage your billing preferences and history.</p>
              <div className="flex space-x-4">
                <button className="w-full py-2 px-4 bg-black text-white font-bold rounded-md">Update Payment</button>
                <button className="w-full py-2 px-4 bg-black text-white font-bold rounded-md">View Transactions</button>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <p className="text-gray-600 mb-4">Stay on track with your nutrition goals. Ready to switch plans?</p>
              <button className="w-full py-2 px-4 bg-black text-white font-bold rounded-md">Change Plan</button>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Settings
