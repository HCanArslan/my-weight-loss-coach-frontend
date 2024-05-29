import React from 'react'
import Header from '../Layout/Header'
import Sidebar from '../Layout/Sidebar'
import Footer from '../Layout/Footer'

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-8">
          <h1 className="text-3xl font-bold mb-8">User Progress</h1>
          <section className="mb-8">
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
              <h2 className="text-xl font-bold mb-4">User Progress</h2>
              <div className="bg-gray-200 h-4 rounded-full mb-2">
                <div className="bg-green-500 h-4 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="text-right text-gray-600">65% completed</p>
              <button className="mt-4 py-2 px-4 bg-black text-white font-bold rounded-md">View Progress</button>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
              <h2 className="text-xl font-bold mb-4">Timeline</h2>
              <p className="text-gray-600">No recent activities</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
              <h2 className="text-xl font-bold mb-4">Upcoming Tasks</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Workout at 7am</li>
                <li>Prepare healthy lunch</li>
                <li>Review meal plan for the week</li>
              </ul>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
              <h2 className="text-xl font-bold mb-4">Goals</h2>
              <p className="text-gray-600">No goals set yet</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
              <h2 className="text-xl font-bold mb-4">Nutrition Plan</h2>
              <p className="text-gray-600">No nutrition plan available</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
              <h2 className="text-xl font-bold mb-4">AI-generated Recommendations</h2>
              <p className="text-gray-600">No recommendations available</p>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard
