import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

const Banner = (props) => {
    return (
        <div className="h-screen ">
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000, // 3 seconds per slide
                    disableOnInteraction: false, // Keep autoplay even after user interaction
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className="">
                    <div className="bg-[url('https://upmeals.com/wp-content/uploads/2021/05/dinner-together.jpg')] w-full h-full flex bg-no-repeat bg-cover justify-center items-center">
                        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
                        <h3 className="lg:text-5xl md:text-3xl text-xl relative z-10  font-bold text-white">
                            Connecting Communities,
                            <br /> Reducing Waste, Sharing Meals.
                        </h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[url('https://cdn.prod.website-files.com/6447f7ea620f065ef492b3ac/6447f7ea620f06599792bc47_5ed609baf722b825410adb9c_5ec3714af9aaf9787943a936_sharing-a-meal-opti.jpg')] w-full h-full flex bg-no-repeat bg-cover justify-center items-center">
                        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
                        <h3 className="lg:text-5xl md:text-3xl text-xl relative z-10  font-bold text-white">
                            Where Surplus Meets Purpose
                        </h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-[url('https://images.squarespace-cdn.com/content/v1/59bc4b7f017db254b3b5b7f7/1535398797696-I6SPYCUJBE0VCHO5UKY9/4938.jpg')] w-full h-full flex bg-no-repeat bg-cover justify-center items-center">
                        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
                        <h3 className="lg:text-5xl md:text-3xl relative z-10  font-bold text-white">
                            Meals That Bring Us Together.
                        </h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

Banner.propTypes = {};

export default Banner;
