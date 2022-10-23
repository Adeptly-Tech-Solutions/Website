import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const AboutContent = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="about-content about-content-two">
                <div className="section-title">
                  <h2>About Us</h2>
                  <p>
                    Adeptly is focused on bringing digital faces to businesses and
                  </p>
                </div>

                <div className="about-text">
                  <h4>Who We Are</h4>
                  <p>
                    We're a budding team located in Berlin, Germany. We thrive on making complex technical solutions, built on the newest technologies.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Our History</h4>
                  <p>
                    We have worked on many a site or app and are looking to work with clients locally and personally.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Our Mission</h4>
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Clean and modern sites for an ever changing world
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Close and personal work to ensure our partners stay happy
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Keeping an eye on vital data that runs the world
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
