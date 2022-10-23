import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="bg-fcfbfb pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>What we offer?</h2>
            <p>
              We offer multiple services and are constantly expanding our repertoire.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="service-card-one">
                <i className="pe-7s-display2 bg-6610f2"></i>
                <h3>
                  <Link href="/service-details">
                    <a>Web Development</a>
                  </Link>
                </h3>
                <p>
                  Websites are a 24/7 marketing tool. No business is complete without a modern face.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="service-card-one">
                <i className="pe-7s-phone bg-fc3549"></i>
                <h3>
                  <Link href="/service-details">
                    <a>Mobile App Development</a>
                  </Link>
                </h3>
                <p>
                  Having clients use a local app made for the hardware/software they use is priceless.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              <div className="service-card-one">
                <i className="pe-7s-light bg-ffb700"></i>
                <h3>
                  <Link href="/service-details">
                    <a>SEO</a>
                  </Link>
                </h3>
                <p>
                  Making sure your site is found is a necessary component to having a digital presence. 88% of customers who conduct an online search visit a business within a week.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              <div className="service-card-one">
                <i className="pe-7s-file bg-fc3549"></i>
                <h3>
                  <Link href="/service-details">
                    <a>Security</a>
                  </Link>
                </h3>
                <p>
                  Keep things secure and looked after.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
