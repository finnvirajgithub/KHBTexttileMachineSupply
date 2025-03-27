import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import heroImg from "../assets/heroHome.avif"

function Home() {
    return(
        <>
            <Navbar />
            <Hero 
                img = {heroImg}
                classdiv1 = "h-screen w-full relative "
                classimg = "h-full w-full object-cover"
                classdiv2 = "absolute inset-0 bg-black/20"
                classdiv3 = "absolute top-1/2 left-20"
                classh1 = "heroh1 text-7xl font-extrabold bg-fuchsia-900  bg-clip-text text-transparent"
                classp = "herop text-5xl text-white font-semibold"
                classa = "herobtn decoration-0 bg-white text-fuchsia-900 rounded-md hover:bg-fuchsia-900 hover:text-white"
                title = "KHB Associates"
                text = "PRIVATE LIMITED"
                url = "/shop"
                btnText = "Shop Now"
            />
        </>
    );
}

export default Home;