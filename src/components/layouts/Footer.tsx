import Link from "next/link";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={`${classes.section} mt-2`}>
      <img src="diamond.svg" alt="Logo" className={`${classes.diamond}`} />
      <img src="bangle.svg" alt="Logo" className={`${classes.bangle}`} />

      <footer
        className={`${classes.footer} bd-footer py-4 pt-md-5 mt-5  bg-body-tertiary`}
      >
        <div
          className={`${classes.container} container py-4 py-md-5  px-4 px-md-3 text-body-secondary`}
        >
          <img
            src="footer heading.svg"
            alt="Logo"
            className={`${classes.bangle2}`}
          />
          <div className="row mt-5">
            <div className="col-lg-3 mb-3">
              <Link
                className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none"
                href="/"
                aria-label="Bootstrap"
              ></Link>
              <ul className="list-unstyled small">
                <img
                  src="footerlogo.svg"
                  alt="Logo"
                  className={`${classes.footerlogo}`}
                />
              </ul>
            </div>
            <div className="col-lg-4  mb-3">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <img
                    src="call.svg"
                    alt="Logo"
                    className={`${classes.calllogo} me-2`}
                  />
                  <a href="tel:+919951338666" className={classes.link}>
                    +91 9951338666
                  </a>
                </li>
                <li className="mb-2">
                  <img
                    src="schedule.svg"
                    alt="Logo"
                    className={`${classes.calllogo} me-2`}
                  />
                  <a href="" className={classes.link}>
                    Mon-Sun: 09:30 AM - 08:30 PM
                  </a>
                </li>
                <li className="mb-2">
                  <img
                    src="location_on.svg"
                    alt="Logo"
                    className={`${classes.calllogo} me-2`}
                  />
                  <a href="" className={classes.link}>
                    3/671 , Bazaar street , Srikalahasthi
                  </a>
                </li>
              </ul>
              <h6 className="mb-2">Follow Us</h6>
              <div className="d-flex">
                <a href="">
                  <img
                    src="uil_facebook.svg"
                    alt="Logo"
                    className={`${classes.calllogo} me-2`}
                  />
                </a>

                <a href="">
                  <img
                    src="Vector.svg "
                    alt="Logo"
                    className={`${classes.calllogo} me-2`}
                  />
                </a>

                <a href="" target="_blank" rel="noopener">
                  <img
                    src="Vector-1.svg"
                    alt="Logo"
                    className={`${classes.calllogo} me-2`}
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-2 mb-3">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="" className={classes.link}>
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="" className={classes.link}>
                    Collections
                  </a>
                </li>
                <li className="mb-2">
                  <a href="" className={classes.link}>
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="" className={classes.link}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 mb-3">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link
                    href="/privacy-policy"
                    target="_blank"
                    rel="noopener"
                    className={classes.link}
                  >
                    Privacy Policy
                  </Link>
                </li>
                {/* <li className="mb-2">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener"
                    className={classes.link}
                  >
                    Refund Policy
                  </a>
                </li> */}
                <li className="mb-2">
                  <Link
                    href="/terms-conditions"
                    target="_blank"
                    rel="noopener"
                    className={classes.link}
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/delivery-shipping-policy"
                    target="_blank"
                    rel="noopener"
                    className={classes.link}
                  >
                    Delivery & Shipping Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/cancellation-and-return-policy"
                    target="_blank"
                    rel="noopener"
                    className={classes.link}
                  >
                    Cancellation and Return Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className={classes.Copyright}>
          Copyright © 2025 Madhuri Gold. All rights reserved! Design and
          developed by <strong>Proppify Solutions</strong>
        </p>
      </footer>
    </section>
  );
};

export default Footer;
