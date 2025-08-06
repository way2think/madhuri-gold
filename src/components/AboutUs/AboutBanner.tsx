// components/Banner.tsx
'use client';

import Image from 'next/image';
import classes from './AboutBanner.module.css'; // Assuming you have a CSS module for styles

const AboutBanner = () => {
  return (
    <section className="bg-white py-8 px-4 mt-5 md:px-12 lg:px-24">
      <div className="row">
        <div className="col-md-4 col-lg-4">
          <Image
            // src="/assets/images/gold-model.png"
            // src="/assets/images/trisha.svg"
            // src="/assets/images/trisha.jpg"
            // src="/assets/images/model-closeup/model-closeup-with-bg.jpeg"
            src="/assets/images/model-full/model-full5.jpeg"
            alt="Model 1"
            width={400}
            height={600}
            className="rounded object-cover"
          />
        </div>
        <div className="col-md-8 col-lg-8">
          <div className="text-center md:text-left mb-8">
            <h2 className={` ${classes.aboutUsHeading}`}>About us</h2>
            <div className="d-flex flex-col items-center">
              <h3 className={`${classes.aboutUsSubheading}`}>madhuri gold</h3>
              <div className="gap-2 ms-4 d-flex justify-content-space-between">
                <Image
                  src="/assets/images/mask1.png"
                  alt="Gold 1"
                  width={40}
                  height={40}
                  className="rounded-circle"
                />
                <Image
                  src="/assets/images/mask2.png"
                  alt="Gold 2"
                  width={40}
                  height={40}
                  className="rounded-circle"
                />
                <Image
                  src="/assets/images/mask3.png"
                  alt="Gold 3"
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
              // src="/assets/images/diamond-model.jpg"
              // src="/assets/images/model-closeup/gold-model-closeup.png"
              src="/assets/images/model-full/model-full3.jpeg"
              alt="Model 2"
              className={`${classes.actressImage1} rounded object-cover`}
            />
            {/* <Image
              src="/assets/images/model-closeup/gold-model-closeup.png"
              alt="Model 2"
              width={400}
              height={600}
              className="rounded-md object-cover"
            /> */}

            <img
              // src="/assets/images/silver-model.png"
              // src="/assets/images/actress3.svg"
              // src="/assets/images/model-closeup/silver-model-closeup.png"
              src="/assets/images/model-full/model-full2.jpeg"
              alt="Model 3"
              className={`${classes.actressImage2} rounded object-cover`}
            />
            {/* <Image
              src="/assets/images/model-closeup/silver-model-closeup.png"
              alt="Model 2"
              width={400}
              height={600}
              className="rounded-md object-cover"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
