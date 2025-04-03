import React from 'react';
import './contactformstyle.css';

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold mb-4" style={{ padding: '10px 0px' }}>Connect With Us</h2>
          <div className="grid grid-cols-2 gap-4">
            <input className="p-1 mb-4 bg-gray-200 rounded-xl w-full"  placeholder="First Name " />
            <input className="p-4 bg-gray-200 rounded-xl w-full"  placeholder="Last Name " />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input className="p-4 bg-gray-200 rounded-xl w-full" placeholder="E mail *" />
            <input className="p-4 bg-gray-200 rounded-xl w-full"  placeholder="Phone Number" />
          </div>
          <input className="p-4 bg-gray-200 rounded-xl w-full"  placeholder="Subject" />
          <textarea className="p-4 bg-gray-200 rounded-xl w-full h-32" style={{ padding: '10px 0px 10px 20px',  marginBottom:'30px' }} placeholder="Message *" />
          <button className="w-full p-4v bg-[#9327C6] text-white font-semibold rounded-xl"style={{ padding: '10px 0px 10px 20px',  marginBottom:'10px' }}>Send Message</button>
        </div>

         <div className="bg-[#9327C6] text-white rounded-2xl p-4 space-y-6" style={{ padding: '30px 30px 30px 30px' }}>
        <div>
        <h3 className="font-semibold text-xl mb-4 block">Address</h3>
            <p>advance years old. Richard McClintock, a Latin professor</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Contact</h3>
            <p>advance years old. Richard McClintock, a Latin professor</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Open Time</h3>
            <p>advance years old. Richard McClintock, a Latin professor</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Stay Connected</h3>
            <div className="flex gap-2 mt-2">
              <div className="w-8 h-8 bg-white rounded-full"></div>
              <div className="w-8 h-8 bg-white rounded-full"></div>
              <div className="w-8 h-8 bg-white rounded-full"></div>
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
