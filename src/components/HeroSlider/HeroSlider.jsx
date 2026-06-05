import React, { useRef, useState } from 'react';

// Slide images
import slide1 from "@/assets/images/slide1.webp"
import slide2 from "@/assets/images/slide2.webp"
import slide3 from "@/assets/images/slide3.webp"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
const HeroSlider = () => {
    const swiperRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    // Toggle Play/Pause function
    const toggleAutoplay = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiperInstance = swiperRef.current.swiper;
            if (isPlaying) {
                swiperInstance.autoplay.stop();
            } else {
                swiperInstance.autoplay.start();
            }
            setIsPlaying(!isPlaying);
        }
    };
    return (
        <div className='heroSliderMain'>
            <Swiper
                ref={swiperRef}
                slidesPerView={4}
                spaceBetween={40}
                centeredSlides={true}
                loop={true}
                loopAdditionalSlides={3} // Increased to 3 to handle 5 slides flawlessly
                watchSlidesProgress={true} // CRITICAL: Forces swiper to keep track of animating slides

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false, // UNCOMMENTED: Keeps loop running even if you tap/click it
                    pauseOnMouseEnter: false,     // Prevents cursor hover from freezing the slider
                }}
                // Bind custom buttons to Swiper classes
                navigation={{
                    nextEl: '.hero-btn-next',
                    prevEl: '.hero-btn-prev',
                }}


                // Responsive Breakpoints configuration
                breakpoints={{
                    // Small devices / Landscape Phones (576px and up)
                    206: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        centeredSlides: true // Keeps items grid-aligned on smaller screens if desired
                    },
                    406: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        centeredSlides: true // Keeps items grid-aligned on smaller screens if desired
                    },
                    // Medium devices / Tablets (768px and up)
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        centeredSlides: true
                    },
                    // Large devices / Desktops (992px and up)
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                        centeredSlides: true
                    }
                }}

                modules={[Autoplay, Navigation]}
                className="heroSlider"
            >
                {/* Doubling the items to 12 slides ensures Swiper has plenty of elements to clone */}
                <SwiperSlide><div className="slideImge"><img className='img-fluid' src={slide1} /></div></SwiperSlide>
                <SwiperSlide><div className="slideImge"><img className='img-fluid' src={slide2} /></div></SwiperSlide>
                <SwiperSlide><div className="slideImge"><img className='img-fluid' src={slide3} /></div></SwiperSlide>
                <SwiperSlide><div className="slideImge"><img className='img-fluid' src={slide1} /></div></SwiperSlide>
                <SwiperSlide><div className="slideImge"><img className='img-fluid' src={slide2} /></div></SwiperSlide>
                <SwiperSlide><div className="slideImge"><img className='img-fluid' src={slide3} /></div></SwiperSlide>

                {/* Added duplicates below to fix the layout engine math */}
                <SwiperSlide><div className="slideImge"><img className='img-fluid' src={slide1} /></div></SwiperSlide>
                <SwiperSlide><div className="slideImge"><img className='img-fluid' src={slide2} /></div></SwiperSlide>
                <SwiperSlide><div className="slideImge"><img className='img-fluid' src={slide3} /></div></SwiperSlide>
                <SwiperSlide><div className="slideImge"><img className='img-fluid' src={slide1} /></div></SwiperSlide>
                <SwiperSlide><div className="slideImge"><img className='img-fluid' src={slide2} /></div></SwiperSlide>
                <SwiperSlide><div className="slideImge"><img className='img-fluid' src={slide3} /></div></SwiperSlide>
            </Swiper>

            {/* Custom Navigation Controls matching your UI image layout */}
            <div className="hero-slider-controls">
                <button className="hero-btn-prev">
                    <i className="ri-arrow-left-s-line"></i>
                </button>
                <button className="hero-btn-toggle" onClick={toggleAutoplay}>
                    {isPlaying ? (
                        <i className="ri-pause-line"></i>
                    ) : (
                        <i className="ri-play-fill"></i>
                    )}
                </button>
                <button className="hero-btn-next">
                    <i className="ri-arrow-right-s-line"></i>
                </button>
            </div>
        </div>
    )
}

export default HeroSlider
