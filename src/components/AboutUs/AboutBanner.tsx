// components/Banner.tsx
"use client";

import Image from "next/image";
import classes from "./AboutBanner.module.css"; // Assuming you have a CSS module for styles

const AboutBanner = () => {
  return (
    <section className="bg-white py-8 px-4 mt-5 md:px-12 lg:px-24">
      <div className="row">
        <div className="col-md-4 col-lg-4">
          <Image
            src="/assets/images/trisha.svg"
            alt="Model 1"
            width={350}
            height={400}
            className="rounded-md object-cover"
          />
        </div>
        <div className="col-md-8 col-lg-8">
          <div className="text-center md:text-left mb-8">
            <h2 className={` ${classes.aboutUsHeading}`}>About us</h2>
            <div className="d-flex flex-col items-center">
              <h3 className={`${classes.aboutUsSubheading}`}>madhuri gold</h3>
              <div className="gap-2 ms-4 d-flex justify-content-space-between">
                <Image
                  src="/assets/images/mask1.svg"
                  alt="Gold 1"
                  width={40}
                  height={40}
                  className="rounded-circle"
                />
                <Image
                  src="/assets/images/mask2.svg"
                  alt="Gold 2"
                  width={40}
                  height={40}
                  className="rounded-circle"
                />
                <Image
                  src="/assets/images/Mask3.svg"
                  alt="Gold 2"
                  width={40}
                  height={40}
                  className="rounded-circle"
                />
              </div>
            </div>
            <p className={`${classes.aboutUsDescription}`}>Your Lucky Shop</p>
          </div>
          <div className={classes.actressImagesContainer}>
            <img
              src="/assets/images/actress2.svg"
              alt="Model 2"
              className={`${classes.actressImage1} rounded-md object-cover`}
            />
            <img
              src="/assets/images/actress3.svg"
              alt="Model 3"
              className={`${classes.actressImage2} rounded-md object-cover`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
