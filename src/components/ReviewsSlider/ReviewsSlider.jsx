import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


import Review1 from "./../../assets/images/review1.webp"

const ReviewsSlider = () => {
    const ReviewSliderData = [
        {
            heading: "“Saves time and effort”",
            para: "“Provides actionable insights facilitating effective decision making. Gives employees more control over their information, performance analytics and learning management saving time and boosting accountability.”",
            img: Review1,
            personName: "Harris K.",
            personPost: "Managing Partner",
            source: "Capterra",
            date: "June 24, 2024",
            companySize: "201-500 Employees"

        },
        {
            heading: "“Saves time and effort”",
            para: "“Provides actionable insights facilitating effective decision making. Gives employees more control over their information, performance analytics and learning management saving time and boosting accountability.”",
            img: Review1,
            personName: "Harris K.",
            personPost: "Managing Partner",
            source: "Capterra",
            date: "June 24, 2024",
            companySize: "201-500 Employees"

        },
        {
            heading: "“Saves time and effort”",
            para: "“Provides actionable insights facilitating effective decision making. Gives employees more control over their information, performance analytics and learning management saving time and boosting accountability.”",
            img: Review1,
            personName: "Harris K.",
            personPost: "Managing Partner",
            source: "Capterra",
            date: "June 24, 2024",
            companySize: "201-500 Employees"

        },
    ]
    return (
        <section className="reviewsSlider">

            <div className="container">
                <div className="heading center">
                    <h2>We believe in what we do – because 12,000 companies do, too</h2>
                </div>

                {/* Swiper Container */}
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 5000, // Time in milliseconds between slides (3 seconds)
                        disableOnInteraction: false, // Keeps autoplay running even after clicking next/prev
                        pauseOnMouseEnter: true, // Pauses autoplay when user hovers over the slider
                    }}
                    navigation={{
                        prevEl: '.slidePrev',
                        nextEl: '.slideNext',
                    }}
                    className="reviewSliderWrapper"
                >
                    {/* Slides*/}
                    {ReviewSliderData.map((item, idx) => {
                        return <SwiperSlide key={idx} className="reviewSlider">
                            <div className="reviewSliderLeft">
                                <h3>{item.heading}</h3>
                                <p>{item.para}</p>
                                <div className="review-Slider-info">
                                    <div className="review-slider-info-img">
                                        <img className='img-fluid' src={item.img} alt="User Review" />
                                    </div>
                                    <div className="review-slider-info-data">
                                        <h4>{item.personName}</h4>
                                        <p>{item.personPost}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="reviewSliderRight">
                                <div className="review-Slider-Right-Data">
                                    <p>Source</p>
                                    <h4>{item.source}</h4>
                                </div>
                                <div className="review-Slider-Right-Data">
                                    <p>Date</p>
                                    <h4>{item.source}</h4>
                                </div>
                                <div className="review-Slider-Right-Data">
                                    <p>Company Size</p>
                                    <h4>{item.companySize}</h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    })
                    }

                    {/* Duplicate this <SwiperSlide> block for more reviews */}

                </Swiper>
                {/* Custom Next and Previous Navigation Buttons */}
                <div className="reviewSliderBtn">
                    <div className="slidePrev reviewBtn">
                        <i className="ri-arrow-left-line"></i>
                    </div>
                    <div className="slideNext reviewBtn">
                        <i className="ri-arrow-right-line"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReviewsSlider
