import React from 'react'

const OurServices = () => {
  return (
    <div style={{padding:'5rem 0 0 0'}}>
        <p className='category-title text-[#9327C6] font-semibold text-4xl text-center'>Our Services</p>
        <div className='grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-2' style={{padding:'5rem'}}>
            <div className='bg-gray-200 rounded-tl-3xl min-h-[100px] text-center top-1/2'>
                <h3 className="text-3xl">
                    Service 01
                </h3>
            </div>
            <div className='bg-gray-200 rounded-tr-3xl min-h-[100px] sm:row-span-4 order-last sm:order-none h-[200px] sm:h-auto'></div>
            <div className='bg-gray-200 rounded-tl-3xl min-h-[100px] text-center top-1/2'>
                <h3 className="text-3xl ">
                    Service 02
                </h3>
            </div>
            <div className='bg-gray-200 rounded-tl-3xl min-h-[100px] text-center top-1/2'>
                <h3 className="text-3xl">
                    Service 03
                </h3>
            </div>
            <div className='bg-gray-200 rounded-tl-3xl min-h-[100px] text-center top-1/2'>
                <h3 className="text-3xl">
                    Service 04
                </h3>
            </div>
        </div>
      
    </div>
  )
}

export default OurServices
