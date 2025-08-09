import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './PrivacyPolicy.module.css'; // Reuse your CSS module

const PrivacyPolicy = () => {
  return (
    <Container fluid className="py-5 px-3 px-md-5">
      <Row>
        <Col xs={12} md={12} lg={12}>
          <h1
            className={`${classes.heading} fw-bold mb-4 text-center text-md-start`}
          >
            Privacy Policy
          </h1>

          <p className={classes.shippingpara}>
            Welcome to https://madhurigold.com/. This section explains the
            Privacy Policy of the https://madhurigold.com/ website. We would
            like to state that our privacy policy is subject to change without
            any prior intimation and you shall be required to review the same in
            a regular manner. <br />
            <br />
            https://madhurigold.com/ would not share any personal information
            like Name, Mobile No, email ID etc of our website user to others. It
            will be Madhuri Gold Palace first priority to maintain secrecy of
            the details of our website users.
          </p>

          <h5 className={`fw-bold mb-2 ${classes.shippingheading}`}>
            Please read the following terms of our privacy policy
          </h5>

          <h6 className={`fw-bold mt-4 mb-2`}>
            Personal Information Collected
          </h6>
          <p className={classes.shippingpara}>
            By accepting this privacy policy, you authorize Madhuri Gold Palace
            to collect, store and use any information that you provide on our
            Website. The information collected by us is all information
            submitted by you through our websites such as your name, address,
            contact number, email ID, and such other information sent by you via
            emails to our email ID.
          </p>

          <h6 className={`fw-bold mt-4 mb-2`}>Cookies</h6>
          <p className={classes.shippingpara}>
            Cookies are small pieces of information saved by your browser onto
            your computer. Cookies are used to record various aspects of your
            visit and assist Madhuri Gold Palace to provide you with
            uninterrupted service. Madhuri Gold Palace does not use cookies to
            save Personal Information for outside uses.
          </p>

          <h6 className={`fw-bold mt-4 mb-2`}>Use of information collected</h6>
          <p className={classes.shippingpara}>
            Madhuri Gold Palace owns all the information collected via the
            Website or applications installed on the website. As applicable, the
            information collected by Madhuri Gold Palace shall be used to
            contact you about the Website and online store-related news and
            Services available on the Website; monitor and improve the Website;
            calculate the number of visitors to the Website and to know the
            geographical locations of the visitors; update you on all the
            special offers available on the Website and provide you with a
            better shopping experience. This includes sending emails intimating
            the various offers on the online store. You may at any time choose
            to unsubscribe from such email. <br />
            <br />
            Some of your information may be shared with and used by third
            parties who shall need to have access to information, such as
            courier companies, credit card processing companies, vendors etc. to
            enable them and Madhuri Gold Palace perform their duties and fulfill
            your order requirements. Madhuri Gold Palace does not allow any
            unauthorized persons or organizations to use any information that
            Madhuri Gold Palace may collect from you through this Website.
            However, Madhuri Gold Palace is not responsible for any information
            collected or shared or used by any other third party website due to
            your browser settings. <br />
            <br />
            Madhuri Gold Palace reserves the right to share any of your personal
            information to comply with the orders of subpoenas, court orders or
            other legal processes. Your Personal Information may also be
            disclosed pursuant to such subpoenas, court orders or legal
            processes, which shall be without notice to you. <br />
            <br />
            Madhuri Gold Palace may share collective information such as
            demographics and Website usage statistics with our sponsors,
            advertisers or other third parties (such third parties do not
            include Madhuri Gold Palace marketing partners and network
            providers). When this type of information is shared, such parties do
            not have access to your Personal Information. <br />
            <br />
            When you contact Madhuri Gold Palace through any means such as chat
            / email, Madhuri Gold Palace reserves the right to include your
            email ID for marketing communications. You can unsubscribe from such
            communications anytime you wish to do so. <br />
            <br />
            This Website may contain links which may lead you to other Web
            sites. Please note that once you leave our Website you will be
            subjected to the Privacy Policy of the other website and this
            Privacy Policy will no longer apply. <br />
            <br />
            By using this website, you signify your agreement to the terms of
            this privacy policy. Madhuri Gold Palace reserves the right, in our
            sole discretion, to change, modify, add or delete portions of the
            terms of this Privacy Policy at any time. <br />
            If you have any questions about this privacy policy, feel free to
            Contact Us through our Website or write to us at
            https://madhurigold.com/
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicy;
