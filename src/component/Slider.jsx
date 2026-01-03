import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
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
        tagline: ["Adopt, Don't Shop - Give a Pet a Home."]
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
        <div className="w-full px-5  lg:px-25 mt-2">
            <Swiper
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper rounded-xl overflow-hidden shadow-2xl"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative group">
                             <img className="w-full h-[550px] brightness-90" src={slide.img} alt="" />
                          
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
                            <div className="absolute inset-0 flex items-end justify-center pb-8 px-4">
                                <p className="text-2xl lg:text-5xl font-bold text-white text-center drop-shadow-lg bg-black/20 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/20">
                                    <Typewriter
                                        words={slide.tagline}
                                        loop={true}
                                        typeSpeed={80}
                                        deleteSpeed={60}
                                        delaySpeed={3000}
                                        cursor
                                        cursorStyle="|"
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