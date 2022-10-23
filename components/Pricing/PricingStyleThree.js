import React from "react";
import Link from "next/link";

const PricingStyleThree = () => {
  return (
    <>
      <div className="pricing-area pt-100 pb-70 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Pick Your Plan</h2>
            <p>
              We offer a range of pricing plans to suit your needs. Whether you're looking for a modern site, reliable mobile app or to look after your information.
            </p>
          </div>

          <div className="row justify-content-center">
            {/* Single pricing table */}
            <div className="col-lg-4 col-sm-6">
              <div
                className="single-pricing-table"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="pricing-header">
                  <h3>Website plan</h3>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Web Development
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Hosting
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Email Setup
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Google Analytics
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Running service
                  </li>
                </ul>

                <div className="btn-box">
                  <Link href="#">
                    <a className="btn btn-primary">Contact us</a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Single pricing table */}
            <div className="col-lg-4 col-sm-6">
              <div
                className="single-pricing-table"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <div className="pricing-header">
                  <h3>App plan</h3>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    App Development
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Messenger Integration
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Quick Responses
                  </li>
                </ul>

                <div className="btn-box">
                  <Link href="#">
                    <a className="btn btn-primary">Contact us</a>
                  </Link>
                </div>
              </div>
            </div>

            {/* Single pricing table */}
            <div className="col-lg-4 col-sm-6">
              <div
                className="single-pricing-table"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="pricing-header">
                  <h3>Security plan</h3>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Data leak check
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Security research
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Quick Responses
                  </li>
                </ul>

                <div className="btn-box">
                  <Link href="#">
                    <a className="btn btn-primary">Contact us</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingStyleThree;
