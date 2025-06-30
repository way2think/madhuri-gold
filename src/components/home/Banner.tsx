import React from "react";
import classes from "./Banner.module.css"; // Assuming you have a CSS module for styles
import EarringCarousel from "./EarringCarousel";

const Banner = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-9 col-lg-9">
          <div className="banner text-center">
            <p className={classes.Bannerheading1}>EXQUISITE CRAFTSMANSHIP</p>
            <h1 className={classes.Bannerheading2}>
              <span className={classes.unleash}>Unleash</span>the
            </h1>
            <div className="d-flex align-items-center justify-content-center">
              {" "}
              <h1 className={classes.Bannerheading3}>shining</h1>
              <img
                src="/assets/images/gold ring banner.svg"
                alt="Banner Image"
                className={classes.ring}
              />
              <h1 className={classes.Bannerheading4}>beauty</h1>
            </div>

            <button className={`${classes.findstore} `}>Find Store</button>
            <img
              src="/assets/images/arrow_outward.svg"
              alt="Banner Image"
              className={classes.arrow}
            />
          </div>
        </div>
        <div className="col-12 col-md-3 col-lg-3">
          <EarringCarousel/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
