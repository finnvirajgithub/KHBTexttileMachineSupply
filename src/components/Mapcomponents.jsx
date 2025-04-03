import React from 'react';

const Mapcomponents = () => {
  return (
    <div className="containermap" style={{margin:'5rem 0 0 0'}}>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d392.7515243936043!2d79.87434989139516!3d7.162108462480057!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1729144405638!5m2!1sen!2slk"
        width="100%" 
        height="600"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
};
export default Mapcomponents;
