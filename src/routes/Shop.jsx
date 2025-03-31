import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import heroImg from "../assets/heroHome.avif"
import Carousal from "../components/Carousel";
import SearchCategory from "../components/searchCategory";

const Shop = () => {
  return (
    <>
            <Navbar />
            <Hero 
                img = {heroImg}
                classdiv1 = "h-100 w-full relative flex justify-center"
                classimg = "h-full w-full object-cover"
                classdiv2 = "h-full absolute inset-0 bg-black/20"
                classdiv3 = "absolute top-1/2"
                classh1 = "text-7xl font-extrabold bg-white  bg-clip-text text-transparent"
                classp = "herop text-5xl text-white font-semibold"
                title = "Shop"
            />
            <SearchCategory />
            <Carousal 
                title = 'Category 1'
                class = 'shop-in-shop'
            />
            <Carousal 
                title = 'Category 2'
                class = 'shop-in-shop'
            />
            <Carousal 
                title = 'Category 3'
                class = 'shop-in-shop'
            />
            <Carousal 
                title = 'Category 4'
                class = 'shop-in-shop'
            />
        </>
  )
}

export default Shop
