import React, { useState } from 'react';
import './SearchCategory.css'
import { RiArrowDropDownLine } from "react-icons/ri";


const SearchCategory = () => {

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      <div className='div1 bg-black h-20 flex items-center z-100'>
        <div className='flex space-x-4'>
          <div className='relative group'>
            <button
              onClick={() => toggleDropdown("brands")}
              className="btn flex rounded-md border-2 border-gray-200 text-gray-700 w-34 sm:w-52 bg-white shadow-md justify-between items-center px-4 py-2"
            >
                Brands
                <RiArrowDropDownLine className='text-2xl'/>
            </button>
            {openDropdown === "brands" && (
            <ul className="dropdown-menu absolute bg-gray-200 text-gray-700 shadow-md w-full rounded-md mt-1">
              <li><a href="#" className="brands-category block px-4 py-2 hover:bg-gray-300">Juki</a></li>
              <li><a href="#" className="brands-category block px-4 py-2 hover:bg-gray-300">Seiko</a></li>
              <li><a href="#" className="brands-category block px-4 py-2 hover:bg-gray-300">Singer</a></li>
              <li><a href="#" className="brands-category block px-4 py-2 hover:bg-gray-300">Brother</a></li>
            </ul>
          )}
          </div>

          <div className='relative group'>
            <button
              onClick={() => toggleDropdown("category")}
              className="btn flex rounded-md border-2 border-gray-200 text-gray-700 w-34 sm:w-52 bg-white shadow-md justify-between items-center px-4 py-2"
            >
                Category
                <RiArrowDropDownLine className='text-2xl'/>
            </button>
            {openDropdown === "category" && (
            <ul className="dropdown-menu absolute bg-gray-200 text-gray-700 shadow-md w-full rounded-md mt-1">
              <li><a href="#" className="brands-category block px-4 py-2 hover:bg-gray-300">Machines</a></li>
              <li><a href="#" className="brands-category block px-4 py-2 hover:bg-gray-300">Needles</a></li>
              <li><a href="#" className="brands-category block px-4 py-2 hover:bg-gray-300">Measuring Items</a></li>
              <li><a href="#" className="brands-category block px-4 py-2 hover:bg-gray-300">Accessories</a></li>
            </ul>
          )}
          </div>
        </div>
        
      </div>
    </>
  )
}

export default SearchCategory
