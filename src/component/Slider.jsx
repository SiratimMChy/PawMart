import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import { Typewriter } from 'react-simple-typewriter';

const slides = [
    {
        img: img1,
        tagline: ["Find Your Furry Friend Today!"]
    },
    {
        img: img2,
        tagline: ["Adopt, Don't Shop — Give a Pet a Home."]
    },
    {
        img: img3,
        tagline: ["Love Deserves a Pet."]
    },
    {
        img: img4,
        tagline: ["Bring Home Happiness!"]
    }
];

const Slider = () => {
    return (
        <div className="w-full px-5 mt-2">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded-xl ">
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative">
                            <img className="w-full h-[550px] brightness-90" src={slide.img} alt="" />
                            <div className="absolute inset-0 flex items-end justify-center pb-5">
                                <p className='text-[22px] lg:text-4xl font-extrabold text-white  px-3 py-1 rounded-lg backdrop-blur-xs'>
                                    <Typewriter
                                        words={slide.tagline}
                                        loop={0}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={2000}
                                    />
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
