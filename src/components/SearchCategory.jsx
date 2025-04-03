import React from 'react'
import './SearchCategory.css'
import { RiArrowDropDownLine } from "react-icons/ri";


const SearchCategory = () => {
  return (
    <>
      <div className='div1 bg-black h-20 flex items-center z-100'>
        <div className='flex space-x-4'>
          <div className='relative group'>
            <button className='btn flex rounded-md border-2 border-gray-200 text-gray-700 w-34 sm:52 bg-white shadow-md justify-between items-center'>
                Brands
                <RiArrowDropDownLine className='text-2xl'/>
            </button>
            <ul className='dropdown-menu rounded-t bg-gray-200 group-hover:block hidden absolute text-gray-700 shadow-md w-full'>
              <li><a href="" className='brands-category  hover:bg-gray-300 block whitespace-no-wrap'>Juki</a></li>
              <li><a href="" className='brands-category rounded-t bg-gray-200 hover:bg-gray-300 block whitespace-no-wrap'>Seiko</a></li>
              <li><a href="" className='brands-category rounded-t bg-gray-200 hover:bg-gray-300 block whitespace-no-wrap'>Singer</a></li>
              <li><a href="" className='brands-category rounded-t bg-gray-200 hover:bg-gray-300 block whitespace-no-wrap'>Brother</a></li>
            </ul>
          </div>

          <div className='relative group'>
            <button className='btn flex rounded-md border-2 border-gray-200 text-gray-700 w-34 sm:52 bg-white shadow-md justify-between items-center'>
                Category
                <RiArrowDropDownLine className='text-2xl'/>
            </button>
            <ul className='dropdown-menu rounded-t bg-gray-200 group-hover:block hidden absolute text-gray-700 shadow-md w-full'>
              <li><a href="" className='brands-category  hover:bg-gray-300 block whitespace-no-wrap'>Machines</a></li>
              <li><a href="" className='brands-category rounded-t bg-gray-200 hover:bg-gray-300 block whitespace-no-wrap'>Needles</a></li>
              <li><a href="" className='brands-category rounded-t bg-gray-200 hover:bg-gray-300 block whitespace-no-wrap'>Measuring Items</a></li>
              <li><a href="" className='brands-category rounded-t bg-gray-200 hover:bg-gray-300 block whitespace-no-wrap'>Accessories</a></li>
            </ul>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default SearchCategory
