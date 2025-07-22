

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./DiamondCarouselBanner.module.css";

const DiamondCarouselBanner: React.FC = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        loop
        className="w-full "
      >
        <SwiperSlide>
          <div className={`${styles.carouselWrap} row`}>
            {/* Left Text Side */}
            <div className="col-md-8">
              <div className="px-6 md:px-16 py-12 text-center md:text-left">
                <h4 className="text-gray-700 text-sm tracking-widest font-semibold mb-2">
                  LATEST ADDITIONS
                </h4>
                <h2 className="text-4xl md:text-5xl font-serif italic font-medium mb-4">
                  <span className="text-black">Diamond</span>{" "}
                  <span className="text-yellow-600">jewellery</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  Glow forever in style with our exquisite new designs
                </p>
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-6 py-2 rounded-full shadow-md text-sm font-medium">
                  Shop Now
                </button>
              </div>
            </div>
            {/* Right Image Side */}
            <div className="col-md-4">
              <div className="relative w-full h-full">
                <Image
                  src="/assets/images/dimondjfif.svg" // Ensure this image is in public/
                  alt="Diamond Model"
                  width={400}
                  height={450}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.carouselWrap} row`}>
            {/* Left Text Side */}
            <div className="col-md-8">
              <div className="px-6 md:px-16 py-12 text-center md:text-left">
                <h4 className="text-gray-700 text-sm tracking-widest font-semibold mb-2">
                  LATEST ADDITIONS
                </h4>
                <h2 className="text-4xl md:text-5xl font-serif italic font-medium mb-4">
                  <span className="text-black">Diamond</span>{" "}
                  <span className="text-yellow-600">jewellery</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  Glow forever in style with our exquisite new designs
                </p>
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-6 py-2 rounded-full shadow-md text-sm font-medium">
                  Shop Now
                </button>
              </div>
            </div>
            {/* Right Image Side */}
            <div className="col-md-4">
              <div className="relative w-full h-full">
                <Image
                  src="/assets/images/trishapng.png" // Ensure this image is in public/
                  alt="Diamond Model"
                  width={320}
                  height={450}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Add more <SwiperSlide> items as needed */}
      </Swiper>

      {/* Navigation Arrows */}

      <Image
        src="/assets/images/arrow_left_banner.svg" // Ensure this image is in public/
        alt="Diamond Model"
        width={150}
        height={150}
        className="swiper-button-prev absolute left-4 "
        style={{ top: "60%", width: "5%" }}
      />

      <Image
        src="/assets/images/arrow_right_banner.svg" // Ensure this image is in public/
        alt="Diamond Model"
        width={150}
        height={150}
        className="swiper-button-next absolute right-4 "
        style={{ top: "60%", width: "5%" }}
      />
    </div>
  );
};

export default DiamondCarouselBanner;
