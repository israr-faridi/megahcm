import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';

const BrandSlider = () => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                loop={true}

                speed={5000}

                autoplay={{
                    delay: 0,
                    disableOnInteraction: false, // UNCOMMENTED: Keeps loop running even if you tap/click it
                    pauseOnMouseEnter: false,     // Prevents cursor hover from freezing the slider
                }}

                modules={[FreeMode, Autoplay]}
                className="BrandSlider"
            >
                <SwiperSlide>
                    <div className="BrandImage">
                        <p>Brand Name</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="BrandImage">
                        <p>Brand Name</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="BrandImage">
                        <p>Brand Name</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="BrandImage">
                        <p>Brand Name</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="BrandImage">
                        <p>Brand Name</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="BrandImage">
                        <p>Brand Name</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="BrandImage">
                        <p>Brand Name</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="BrandImage">
                        <p>Brand Name</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default BrandSlider
