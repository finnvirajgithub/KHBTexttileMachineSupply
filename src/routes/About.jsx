import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import heroImg from "../assets/heroHome.avif";
import Footer from '../components/Footer';
import Aboutus from '../components/Aboutus'
import ContactUsSection from '../components/ContactUsSection'

const About = () => {
    return (
      <>
              <Navbar />
              <Hero 
                  img = {heroImg}
                  classdiv1 = "h-100 w-full relative flex justify-center"
                  classimg = "h-full w-full object-cover"
                  classdiv2 = "h-full absolute inset-0 bg-black/20"
                  classdiv3 = "absolute top-1/2"
                  classh1 = "text-7xl font-extrabold text-white"
                  classp = "herop text-5xl text-white font-semibold"
                  title = "ABOUT"
              />
              <Aboutus/>
              <ContactUsSection/>
              <Footer />
          </>
    )
  }
  
  export default About;