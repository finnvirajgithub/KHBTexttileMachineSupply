import React from 'react'
import './Carousel.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import Slider from 'react-slick';
import { Category01 } from './Category01';



const Carousal = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed:  500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {slidesToShow: 2},
            },
            {
                breakpoint: 768,
                settings: {slidesToShow: 1},
            }
        ]
    }

  return (
    <>
        <div className={props.class}>
        <p className='category-title text-[#9327C6] font-semibold text-4xl'>{props.title}</p>
        <Slider {...settings}>
            
            {Category01.map((item) => (
                
                    <div key={item.id} className='item-card z-10'>
                        
                        <div className="item-card bg-gray-100  rounded-4xl flex flex-col">
                            <img src={item.img} alt="" />
                            <p className='title'>{item.title}</p>
                            <p className='text-2xl font-semibold'>{item.price}</p>
                        </div>
                    </div>
                
                
            ))}
            
        </Slider>
        <button className='flex justify-center w-full'>
            <a href="/shop" className='herobtn decoration-0 bg-white text-[#9327C6] rounded-md hover:bg-[#9327C6] hover:text-white border-[#9327C6] border-2'>Shop Now</a>
        </button>
        </div>
        
    </>
    
  )
}

const NextArrow = ({ onClick }) => (
    <div className="arrows absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer z-10 text-4xl text-gray-600" onClick={onClick}>
        <MdNavigateNext />
    </div>
)

const PrevArrow = ({ onClick }) => (
    <div className="arrows absolute top-1/2 left-0 transform -translate-y-1/2 text-4xl cursor-pointer z-10 text-gray-600" onClick={onClick}>
        <GrFormPrevious />
    </div>
)

export default Carousal;
