import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faPlayCircle, faBookmark, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-lg">
      <div className="h-16 flex items-center justify-center">
        <h1 className="text-lg font-bold">aiweightcoach</h1>
      </div>
      <nav className="mt-10">
        <ul>
          <li>
            <a href="#" className="flex items-center py-2 px-8 bg-gray-200 text-gray-800">
              <FontAwesomeIcon icon={faHome} className="mr-3" />
              Home
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center py-2 px-8 text-gray-700 hover:bg-gray-200">
              <FontAwesomeIcon icon={faSearch} className="mr-3" />
              Search
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center py-2 px-8 text-gray-700 hover:bg-gray-200">
              <FontAwesomeIcon icon={faPlayCircle} className="mr-3" />
              Course
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center py-2 px-8 text-gray-700 hover:bg-gray-200">
              <FontAwesomeIcon icon={faBookmark} className="mr-3" />
              Saved
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center py-2 px-8 text-gray-700 hover:bg-gray-200">
              <FontAwesomeIcon icon={faUser} className="mr-3" />
              Profile
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
