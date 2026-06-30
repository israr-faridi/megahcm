import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

// Images
import Img1 from "../../assets/images/item1.webp";
import Img2 from "../../assets/images/item2.webp";
import Img3 from "../../assets/images/item3.webp";
import Img4 from "../../assets/images/item4.webp";
import Img5 from "../../assets/images/item5.webp";

// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';

const BrandSlider = () => {
    const BrandImage = [Img1, Img2, Img3, Img4, Img5, Img1, Img2, Img3, Img4, Img5];

    return (
        <div className="brand-slider-wrapper">
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                freeMode={true}
                loop={true}
                speed={5000} // Speed of continuous scroll (adjust as needed)
                allowTouchMove={false} // Prevents user dragging from breaking the linear flow
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                modules={[FreeMode, Autoplay]}
                className="BrandSlider"
            >
                {BrandImage.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="BrandImage">
                            <img className='img-fluid' src={item} alt={`brand-${idx}`} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BrandSlider;