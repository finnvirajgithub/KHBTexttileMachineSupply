import React from 'react';
import './footerStyles.css'

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-[#9327C6] mt-12 ">
      <div className="w-full mx-auto" style={{ padding: '50px 100px' }}>
        {/* Top Section */}
        <div className="grid grid-cols-4 gap-x-20  pb-8 ">
          {/* Column 1 */}
          <div className="space-y-4 flex flex-col "> <a href='#'></a>
            <h2 className="font-extrabold text-5xl" >KHB Associates</h2>
            <p className="text-sm " style={{ padding: '10px 0px' }}>PRIVATE LIMITED</p>
            <div className="flex space-x-2 mt-2">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="w-5 h-5 bg-white rounded-full" style={{ margin: '0px 20px' }}></div>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col "style={{ padding: '0px 50px' }}>
            <h2 className="font-bold text-xl mb-4">Brands</h2>
            <ul className="space-y-1 text-sm" style={{ padding: '0px 10px' }}>
              <li className="hover:text-purple-500">Juki</li>
              <li className="hover:text-purple-500">Seiko</li>
              <li className="hover:text-purple-500">Singer</li>
              <li className="hover:text-purple-500">Brother</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col ">
            <h2 className="font-bold text-xl mb-4">Categories</h2>
            <ul className="space-y-1 text-sm">
              <li className="hover:text-purple-500">Machines</li>
              <li className="hover:text-purple-500">Needles</li>
              <li className="hover:text-purple-500">Measuring Items</li>
              <li className="hover:text-purple-500">Accessories</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col ">
            <h2 className="font-bold text-xl mb-4">Quick Links</h2>
            <ul className="space-y-1 text-sm">
              <li><a href="/Home" className="hover:text-purple-500">HOME</a></li>
              <li><a href="/about" className="hover:text-purple-500">ABOUT</a></li>
              <li><a href="/shop" className="hover:text-purple-500">SHOP</a></li>
              <li><a href="/contact" className="hover:text-purple-500">CONTACT</a></li>
            </ul>
          </div>
        </div>

        
      </div>
      {/* Bottom Section */}
      <div className="bg-[#9327C6] text-white text-center">
          © 2025 KHB Associates (Pvt) Ltd. All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;
