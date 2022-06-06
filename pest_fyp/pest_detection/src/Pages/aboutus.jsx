import React from "react";
import title_bg from "../../public/upload/about-title-bg.jpg";
import Sstock from "../../public/upload/shutterstock_124871620.jpg";

const Aboutus = () => {
  return (
    <>
      <div className="content-wrapper">
        <div className="greennature-content">
          {/* <!-- Above Sidebar Section--> */}

          {/* <!-- Sidebar With Content Section--> */}
          <div className="with-sidebar-wrapper">
            <section id="content-section-1">
              <div
                className="greennature-parallax-wrapper greennature-background-image gdlr-show-all greennature-skin-dark-skin"
                id="greennature-parallax-wrapper-1"
                data-bgspeed="0"
                style={{
                  backgroundImage: `url(${title_bg})`,
                  paddingTop: "190px",
                }}
              >
                <div className="container">
                  <div className="greennature-title-item">
                    <div className="greennature-item-title-wrapper greennature-item  greennature-center greennature-extra-large ">
                      <div className="greennature-item-title-container container">
                        <div className="greennature-item-title-head">
                          <h3 className="greennature-item-title greennature-skin-title greennature-skin-border">
                           ABOUT US
                          </h3>
                          {/* <div className="greennature-item-title-caption greennature-skin-info">
                            about
                          </div> */}
                          <div className="clear"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clear"></div>
                  <div className="clear"></div>
                </div>
              </div>
              <div className="clear"></div>
            </section>
            <section id="content-section-2">
              <div
                className="greennature-color-wrapper  gdlr-show-all no-skin greennature-half-bg-wrapper"
                style={{ backgroundColor: "#ffffff" }}
              >
                <div
                  className="greennature-half-bg greennature-bg-solid"
                  style={{ backgroundImage: `url(${Sstock})` }}
                ></div>
                <div className="container">
                  <div className="six columns"></div>
                  <div className="six columns">
                    <div className="greennature-item greennature-about-us-item greennature-normal">
                      <div className="about-us-title-wrapper">
                        <h3 className="about-us-title">
                          PEST IDENTIFICATION AND CONTROL SYSTEM
                          
                        </h3>
                        <div className="about-us-caption greennature-title-font greennature-skin-info">
                          {/* By 2group of developer */}
                        </div>
                        <div className="about-us-title-divider"></div>
                      </div>
                      <div className="about-us-content-wrapper">
                        <div className="about-us-content greennature-skin-content">
                          <p>
                            PEST IDENTIFICATION AND CONTROL SYSTEM (PIC) is computer vision based
                            software application. This application build with
                            the following techs:
                          </p>
                          <ol>
                            <li>Computer vision (CNN,Transfer learning)</li>
                            <li>Flask (Python web servicies)</li>
                            <li>MongoDB (nosql database)</li>
                            <li>Reactjs (frontend)</li>
                          </ol>
                          <p>
                            Use case of this application in agriculture is very
                            important,its save the land of farmer, save money
                            and crops from pest.
                          </p>
                        </div>
                        <div className="clear"></div>
                      </div>
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>
              </div>
              <div className="clear"></div>
            </section>
          </div>
          {/* <!-- Below Sidebar Section--> */}
        </div>
        {/* <!-- greennature-content --> */}
        <div className="clear"></div>
      </div>
    </>
  );
};

export default Aboutus;
