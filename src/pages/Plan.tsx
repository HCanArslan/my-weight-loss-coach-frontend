import React from 'react'
import Header from '../Layout/Header'
import Sidebar from '../Layout/Sidebar'
import Footer from '../Layout/Footer'
import Image from 'next/image'

const Plan = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-8">
          <section className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h1 className="text-3xl font-bold mb-4">Daily Nutrition Plan</h1>
            <p className="text-gray-600 mb-4">Date: June 15, 2023</p>
            <p className="text-gray-600 mb-4">Total Calories: 2000 kcal</p>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-bold">Carbs</p>
                <p className="text-gray-600">150g</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-bold">Proteins</p>
                <p className="text-gray-600">100g</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-bold">Fats</p>
                <p className="text-gray-600">70g</p>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4">Meal Suggestions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <Image src="/path-to-breakfast-image.jpg" alt="Breakfast" width={150} height={150} className="rounded-lg mb-2" />
                <p className="font-bold">Breakfast</p>
                <p className="text-gray-600">Scrambled Eggs with Avocado</p>
                <p className="text-gray-600">Calories: 300 kcal</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Image src="/path-to-lunch-image.jpg" alt="Lunch" width={150} height={150} className="rounded-lg mb-2" />
                <p className="font-bold">Lunch</p>
                <p className="text-gray-600">Grilled Chicken Salad</p>
                <p className="text-gray-600">Calories: 400 kcal</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Image src="/path-to-dinner-image.jpg" alt="Dinner" width={150} height={150} className="rounded-lg mb-2" />
                <p className="font-bold">Dinner</p>
                <p className="text-gray-600">Salmon with Veggies</p>
                <p className="text-gray-600">Calories: 500 kcal</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Image src="/path-to-snack-image.jpg" alt="Snack" width={150} height={150} className="rounded-lg mb-2" />
                <p className="font-bold">Snack</p>
                <p className="text-gray-600">Greek Yogurt with Berries</p>
                <p className="text-gray-600">Calories: 150 kcal</p>
              </div>
            </div>
          </section>
          <section className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Weekly Nutrition Plan</h2>
            <p className="text-gray-600 mb-4">Total Calories for the Week: 14000 kcal</p>
            <div className="mb-4">
              <Image src="/path-to-macronutrient-image.jpg" alt="Macronutrient Distribution" width={300} height={200} className="rounded-lg" />
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-200 text-left">Day</th>
                    <th className="py-2 px-4 border-b border-gray-200 text-left">Total Calories</th>
                    <th className="py-2 px-4 border-b border-gray-200 text-left">Carbs</th>
                    <th className="py-2 px-4 border-b border-gray-200 text-left">Proteins</th>
                    <th className="py-2 px-4 border-b border-gray-200 text-left">Fats</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Monday</td>
                    <td className="py-2 px-4 border-b border-gray-200">2000 kcal</td>
                    <td className="py-2 px-4 border-b border-gray-200">150g</td>
                    <td className="py-2 px-4 border-b border-gray-200">100g</td>
                    <td className="py-2 px-4 border-b border-gray-200">70g</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Tuesday</td>
                    <td className="py-2 px-4 border-b border-gray-200">1800 kcal</td>
                    <td className="py-2 px-4 border-b border-gray-200">140g</td>
                    <td className="py-2 px-4 border-b border-gray-200">90g</td>
                    <td className="py-2 px-4 border-b border-gray-200">60g</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Wednesday</td>
                    <td className="py-2 px-4 border-b border-gray-200">1900 kcal</td>
                    <td className="py-2 px-4 border-b border-gray-200">145g</td>
                    <td className="py-2 px-4 border-b border-gray-200">95g</td>
                    <td className="py-2 px-4 border-b border-gray-200">65g</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Thursday</td>
                    <td className="py-2 px-4 border-b border-gray-200">2100 kcal</td>
                    <td className="py-2 px-4 border-b border-gray-200">160g</td>
                    <td className="py-2 px-4 border-b border-gray-200">110g</td>
                    <td className="py-2 px-4 border-b border-gray-200">80g</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Friday</td>
                    <td className="py-2 px-4 border-b border-gray-200">2200 kcal</td>
                    <td className="py-2 px-4 border-b border-gray-200">170g</td>
                    <td className="py-2 px-4 border-b border-gray-200">120g</td>
                    <td className="py-2 px-4 border-b border-gray-200">90g</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Saturday</td>
                    <td className="py-2 px-4 border-b border-gray-200">2300 kcal</td>
                    <td className="py-2 px-4 border-b border-gray-200">180g</td>
                    <td className="py-2 px-4 border-b border-gray-200">130g</td>
                    <td className="py-2 px-4 border-b border-gray-200">100g</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Sunday</td>
                    <td className="py-2 px-4 border-b border-gray-200">2000 kcal</td>
                    <td className="py-2 px-4 border-b border-gray-200">150g</td>
                    <td className="py-2 px-4 border-b border-gray-200">100g</td>
                    <td className="py-2 px-4 border-b border-gray-200">70g</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Meal Suggestions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <Image src="/path-to-chicken-stir-fry.jpg" alt="Chicken Stir-Fry" width={150} height={150} className="rounded-lg mb-2" />
                <p className="font-bold">Chicken Stir-Fry</p>
                <p className="text-gray-600">A delicious blend of veggies and chicken in a savory sauce</p>
                <p className="text-gray-600">Ingredients: Chicken, Bell Peppers, Broccoli, Soy Sauce</p>
                <p className="text-gray-600">Calories: 350 kcal | Protein: 20g | Carbs: 30g | Fats: 15g</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Image src="/path-to-quinoa-salad.jpg" alt="Quinoa Salad" width={150} height={150} className="rounded-lg mb-2" />
                <p className="font-bold">Quinoa Salad</p>
                <p className="text-gray-600">A refreshing salad with quinoa, cucumbers, and tomatoes</p>
                <p className="text-gray-600">Ingredients: Quinoa, Cucumbers, Tomatoes, Feta Cheese</p>
                <p className="text-gray-600">Calories: 250 kcal | Protein: 15g | Carbs: 25g | Fats: 10g</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <Image src="/path-to-avocado-toast.jpg" alt="Avocado Toast" width={150} height={150} className="rounded-lg mb-2" />
                <p className="font-bold">Avocado Toast</p>
                <p className="text-gray-600">A simple yet satisfying breakfast option with creamy avocado on toast</p>
                <p className="text-gray-600">Ingredients: Avocado, Whole Grain Bread, Cherry Tomatoes</p>
                <p className="text-gray-600">Calories: 200 kcal | Protein: 10g | Carbs: 20g | Fats: 10g</p>
              </div>
            </div>
          </section>
          <section className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Nutritional Information</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-200 text-left">Nutrient</th>
                    <th className="py-2 px-4 border-b border-gray-200 text-left">Recommended Intake</th>
                    <th className="py-2 px-4 border-b border-gray-200 text-left">Consumed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Vitamin C</td>
                    <td className="py-2 px-4 border-b border-gray-200">80mg</td>
                    <td className="py-2 px-4 border-b border-gray-200">90mg</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Iron</td>
                    <td className="py-2 px-4 border-b border-gray-200">15mg</td>
                    <td className="py-2 px-4 border-b border-gray-200">18mg</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Fiber</td>
                    <td className="py-2 px-4 border-b border-gray-200">20g</td>
                    <td className="py-2 px-4 border-b border-gray-200">25g</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-200">Calcium</td>
                    <td className="py-2 px-4 border-b border-gray-200">800mg</td>
                    <td className="py-2 px-4 border-b border-gray-200">1000mg</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Plan
