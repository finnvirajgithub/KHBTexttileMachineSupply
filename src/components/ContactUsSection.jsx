import React from 'react';

const ContactUsSection = () => {
    return (
      <section className="flex flex-col items-center justify-center  bg-white min-h-screen">
        <div className="text-center">
          <h1 className="text-8xl font-bold uppercase">
            GET <span className="text-[#9327C6]">in</span> TOUCH
          </h1>
          <p className=" text-lg text-gray-700 mx-auto  ">
            Want to get in touch? We'd love to hear from you. Here's how you can reach us.
          </p>
          <a href='/contact'>
          <button className=" bg-white text-[#9327C6] rounded-md hover:bg-[#9327C6] hover:text-white border-2 border-[#9327C6]" style={{ padding: '5px 10px 5px 10px', margin:'20px 0px 50px '}}>
            Contact Us
          </button> </a>
        </div>
      </section>
    );
  };
  
  export default ContactUsSection;