import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import heroImg from "../assets/heroHome.avif"
import Footer from '../components/Footer';
import ContactForm from "../components/ContactForm";
import Mapcomponents from "../components/Mapcomponents";


const Contact = () => {
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
                title = "CONTACT"
            />
            <ContactForm />
            <Mapcomponents/>
            <Footer />
        </>
  )
}

export default Contact
