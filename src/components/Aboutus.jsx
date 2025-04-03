import React, { useState, useEffect } from "react";
import "./Aboutstyle.css";
import aboutpic1 from "../assets/about1.jpeg";
import aboutpic2 from "../assets/about2.jpg";
import aboutpic3 from "../assets/about3.jpg";

const images = [aboutpic1, aboutpic2, aboutpic3]; // Store only image URLs

const AboutCompany = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 p-8">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-6">
        {/* Left Section with Two Cards */}
        <div className="space-y-6">
          <div className="bg-gray-200 rounded-lg shadow-md p-4" style={{ marginBottom: "1rem" }}>
            <h3 className="text-lg font-bold" style={{ paddingLeft: "1rem" }}>
              Contrary to popular
            </h3>
            <p className="text-sm mt-2">
              belief, Lorem Ipsum is not simply random text. It has roots in
              a piece of classical Latin literature from 45 BC, making it over
              advance years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words.
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg shadow-md p-4">
            <h3 className="text-lg font-bold" style={{ paddingLeft: "1rem" }}>
              Contrary to popular
            </h3>
            <p className="text-sm mt-2">
              belief, Lorem Ipsum is not simply random text. It has roots in
              a piece of classical Latin literature from 45 BC, making it over
              advance years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words.
            </p>
          </div>
        </div>

        {/* Right Section with Auto Image Slideshow */}
        <div className="bg-gray-100 rounded-lg  h-full min-h-[250px] md:min-h-full overflow-hidden flex justify-center items-center">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`, // Slide left
              width: `${images.length * 100}%`, // Make the slider wide enough to fit all images
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
