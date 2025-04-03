import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import heroImg from "../assets/heroHome.avif"
import Partners from "../components/partners";
import Carousal from "../components/Carousel";
import Footer from '../components/Footer';
import ContactUsSection from '../components/ContactUsSection';

function Home() {
    return(
        <>
            <Navbar />
            <Hero 
                img = {heroImg}
                classdiv1 = "h-screen w-full relative"
                classimg = "h-full w-full object-cover"
                classdiv2 = "absolute inset-0 bg-black/50"
                classdiv3 = "absolute top-1/2 left-20 -translate-y-1/2"
                classh1 = "heroh1 text-5xl sm:text-7xl font-extrabold text-white"
                classp = "herop text-3xl sm:text-4xl text-fuchsia-900 font-semibold "
                classa = "herobtn decoration-0 bg-white text-[#9327C6] rounded-md hover:bg-[#9327C6] hover:text-white"
                title = "KHB ASSOCIATES"
                text = "PRIVATE LIMITED"
                url = "/shop"
                btnText = "Shop Now"
                

            />
            <Partners />
            <Carousal 
                class="shop"
            />
            <ContactUsSection />
            <Footer />
        </>
    );
}

export default Home;