import React from 'react'
import Image from 'next/image'
import Sidebar from '../Layout/Sidebar'

const Profile = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />
      <main className="flex-grow p-8">
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Image src="/path-to-profile-image.jpg" alt="Profile" width={100} height={100} className="rounded-full" />
            <div>
              <h2 className="text-2xl font-bold">Personal Information</h2>
              <p className="text-gray-600">Update Location Preferences</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1 text-center">
              <p className="text-xl font-bold">Update</p>
              <p className="text-gray-600">2</p>
            </div>
            <div className="flex-1 text-center">
              <p className="text-xl font-bold">Manage</p>
              <p className="text-gray-600">Following</p>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Activity Overview</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold">3</span>
                  <span className="text-gray-600">Completed Courses</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold">Total Points</span>
                  <span className="text-gray-600">Learning Progress</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-bold">7</span>
                  <span className="text-gray-600">Achievements</span>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Progress Achievements</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-bold">Consistent Learner</span>
                  <span className="text-gray-600">Current Streak</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-bold">Points Progress</span>
                  <span className="text-gray-600">Points to Reach Goal</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Preferences</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-bold">Update Profile Picture</span>
                  <button className="py-1 px-2 bg-black text-white rounded-md">+</button>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-bold">Update Fitness Goals</span>
                  <button className="py-1 px-2 bg-black text-white rounded-md">+</button>
                </div>
              </div>
              <button className="mt-4 w-full py-2 px-4 bg-black text-white font-bold rounded-md">Update</button>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Friends List</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-bold">Exercise Buddy Suggestions</span>
                  <button className="py-1 px-2 bg-black text-white rounded-md">View Profile</button>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-bold">Nutritionist Recommendation</span>
                  <button className="py-1 px-2 bg-black text-white rounded-md">View Profile</button>
                </div>
              </div>
              <button className="mt-4 w-full py-2 px-4 bg-black text-white font-bold rounded-md">See All</button>
              <div className="flex justify-between mt-4">
                <button className="py-2 px-4 bg-black text-white font-bold rounded-md">Find Friends</button>
                <button className="py-2 px-4 bg-black text-white font-bold rounded-md">Invite Friends</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Profile
