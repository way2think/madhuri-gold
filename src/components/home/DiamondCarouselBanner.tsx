"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import classes from "./DiamondCarouselBanner.module.css";
import { useRouter } from "next/navigation";

const DiamondCarouselBanner: React.FC = () => {
  const navigate = useRouter();

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
          <div className={`${classes.carouselWrap} row`}>
            {/* Left Text Side */}
            <div className="col-md-8">
              <div
                className={`${classes.Diamondbanner} px-6 md:px-16 py-12 text-center md:text-left`}
              >
                <h4 className={`${classes.latest}`}>LATEST ADDITIONS</h4>
                <h2 className={classes.Bannerheading2}>
                  Diamond jewellery
                </h2>{" "}
                <p className={classes.glow}>
                  Glow forever in style with our exquisite new designs
                </p>
                <button className={classes.shop} onClick={() => navigate.push("/collections?metal=diamond&sort=latest")}>Shop Now</button>
              </div>
            </div>
            {/* Right Image Side */}
            <div className="col-md-4">
              <div className={`${classes.overallimage} relative w-full h-full`}>
                <Image
                  src="/assets/images/dimondjfif.svg" // Ensure this image is in public/
                  alt="Diamond Model"
                  width={0} // set width/height to 0 if you're controlling with CSS
                  height={0}
                  className={classes.diamondmodalimage}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${classes.carouselWrap} row`}>
            {/* Left Text Side */}
            <div className="col-md-8">
              <div
                className={`${classes.Diamondbanner} px-6 md:px-16 py-12 text-center md:text-left`}
              >
                <h4 className={`${classes.latest}`}>LATEST ADDITIONS</h4>
                <h2 className={classes.Bannerheading2}>
                  Gold jewellery
                </h2>{" "}
                <p className={classes.glow}>
                  Glow forever in style with our exquisite new designs
                </p>
                <button className={classes.shop} onClick={() => navigate.push("/collections?metal=gold&sort=latest")}>Shop Now</button>
              </div>
            </div>
            {/* Right Image Side */}
            <div className="col-md-4">
              <div className={`${classes.overallimage} relative w-full h-full`}>
                <Image
                  src="/assets/images/trishapng.png" // Ensure this image is in public/
                  alt="Diamond Model"
                  width={0} // set width/height to 0 if you're controlling with CSS
                  height={0}
                  className={classes.diamondmodalimage}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${classes.carouselWrap} row`}>
            {/* Left Text Side */}
            <div className="col-md-8">
              <div
                className={`${classes.Diamondbanner} px-6 md:px-16 py-12 text-center md:text-left`}
              >
                <h4 className={`${classes.latest}`}>LATEST ADDITIONS</h4>
                <h2 className={classes.Bannerheading2}>
                  Silver jewellery
                </h2>{" "}
                <p className={classes.glow}>
                  Glow forever in style with our exquisite new designs
                </p>
                <button className={classes.shop} onClick={() => navigate.push("/collections?metal=silver&sort=latest")}>Shop Now</button>
              </div>
            </div>
            {/* Right Image Side */}
            <div className="col-md-4">
              <div className={`${classes.overallimage} relative w-full h-full`}>
                <Image
                  src="/assets/images/trishapng.png" // Ensure this image is in public/
                  alt="Diamond Model"
                  width={0} // set width/height to 0 if you're controlling with CSS
                  height={0}
                  className={classes.diamondmodalimage}
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
