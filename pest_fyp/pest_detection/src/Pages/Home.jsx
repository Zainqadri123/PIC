import React from "react";
import bg from "../../public/upload/shutterstock_133689230.jpg";
import newsL from "../../public/upload/newsletter-bg.jpg";
import slider1 from "../../public/upload/shutterstock_147266159-400x300.jpg";
const Home = () => {
  return (
    <>
      {/* <!-- is search --> */}
      <div className="content-wrapper">
        <div className="greennature-content">
          {/* <!-- Above Sidebar Section--> */}

          {/* <!-- Sidebar With Content Section--> */}
          <div className="with-sidebar-wrapper">
            <section id="content-section-1">
              <div
                className="greennature-full-size-wrapper gdlr-show-all no-skin"
                style={{ paddingBottom: "0px", backgroundColor: "#ffffff" }}
              >
                <div
                  className="greennature-master-slider-item greennature-slider-item greennature-item"
                  style={{ marginBottom: "0px" }}
                >
                  {/* <!-- MasterSlider --> */}
                  <div
                    id="P_slider_1"
                    className="master-slider-parent ms-parent-id-1"
                  >
                    {/* <!-- MasterSlider Main --> */}
                    <div
                      id="slider_1"
                      className="master-slider ms-skin-default"
                    >
                      <div
                        className="ms-slide"
                        data-delay="7"
                        data-fill-mode="fill"
                      >
                        <img
                          src="plugins/masterslider/public/assets/css/blank.gif"
                          alt=""
                          title=""
                          data-src={slider1}
                        />

                        <div
                          className="ms-layer  msp-cn-1-3"
                          data-effect="t(true,150,n,n,n,n,n,n,n,n,n,n,n,n,n)"
                          data-duration="437"
                          data-delay="625"
                          data-ease="easeOutQuint"
                          data-offset-x="0"
                          data-offset-y="105"
                          data-origin="ml"
                          data-position="normal"
                        >
                          The Crops
                        </div>

                        <div
                          className="ms-layer  msp-cn-1-2"
                          data-effect="t(true,150,n,n,n,n,n,n,n,n,n,n,n,n,n)"
                          data-duration="425"
                          data-delay="325"
                          data-ease="easeOutQuint"
                          data-offset-x="0"
                          data-offset-y="-5"
                          data-origin="ml"
                          data-position="normal"
                          style={{ color: "white" }}
                        >
                          We can save
                        </div>

                        <div
                          className="ms-layer  msp-cn-1-1"
                          data-effect="t(true,150,n,n,n,n,n,n,n,n,n,n,n,n,n)"
                          data-duration="350"
                          data-ease="easeOutQuint"
                          data-offset-x="0"
                          data-offset-y="-100"
                          data-origin="ml"
                          data-position="normal"
                          style={{ color: "black" }}
                        >
                          Together
                        </div>
                      </div>

                      <div
                        className="ms-slide"
                        data-delay="7"
                        data-fill-mode="fill"
                      >
                        <img
                          src="plugins/masterslider/public/assets/css/blank.gif"
                          alt=""
                          title=""
                          data-src="upload/slider-3.jpg"
                        />

                        <div
                          className="ms-layer  msp-cn-1-10"
                          data-effect="t(true,n,n,-500,n,n,n,n,n,n,n,n,n,n,n)"
                          data-duration="425"
                          data-delay="425"
                          data-ease="easeOutQuint"
                          data-offset-x="0"
                          data-offset-y="82"
                          data-origin="mc"
                          data-position="normal"
                          style={{ color: "white" }}
                        >
                          The Better Place
                        </div>

                        <div
                          className="ms-layer  msp-cn-1-13"
                          data-effect="t(true,n,n,500,n,n,n,n,n,n,n,n,n,n,n)"
                          data-duration="437"
                          data-ease="easeOutQuint"
                          data-offset-x="0"
                          data-offset-y="-15"
                          data-origin="mc"
                          data-position="normal"
                        >
                          Make This World
                        </div>
                      </div>
                    </div>
                    {/* <!-- END MasterSlider Main --> */}
                  </div>
                  {/* <!-- END MasterSlider --> */}
                </div>
              </div>
            </section>
            <section id="content-section-2">
              <div
                className="greennature-color-wrapper  gdlr-show-all greennature-skin-brown-column-service"
                style={{
                  backgroundColor: "#2d2418",
                  borderTop: "5px solid #3f3221",
                  paddingTop: "0px",
                  paddingBottom: "0px",
                }}
              >
                <div className="container">
                  <div className="four columns">
                    <div className="greennature-ux column-service-ux">
                      <div
                        className="greennature-item greennature-column-service-item greennature-type-2"
                        style={{ marginBottom: "0px" }}
                      >
                        <div className="column-service-image">
                          <img
                            src="upload/icon-service-1.png"
                            alt=""
                            width="80"
                            height="80"
                          />
                        </div>
                        <div className="column-service-content-wrapper">
                          <h3 className="column-service-title">
                            Save Our land
                          </h3>
                          <div className="column-service-content greennature-skin-content"
                          style={{ textAlign:"justify" }}>
                            <p>
                              By killing the PEST of our crops,we can save our
                              land from any type of issues i.e using the spry
                              wich is not recommended for this PEST destroy
                              land.
                            </p>
                          </div>
                          {/* <a className="column-service-read-more" href="#">
                            Learn More
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="four columns">
                    <div className="greennature-ux column-service-ux">
                      <div
                        className="greennature-item greennature-column-service-item greennature-type-2-bg"
                        style={{
                          marginBottom: "0px",
                          backgroundColor: "#3f3221",
                        }}
                      >
                        <div className="column-service-image">
                          <img
                            src="upload/icon-service-2.png"
                            alt=""
                            width="80"
                            height="80"
                          />
                        </div>
                        <div className="column-service-content-wrapper"
                        style={{ textAlign:"justify" }}>
                          <h3 className="column-service-title">
                            Protect Crops
                          </h3>
                          <div className="column-service-content greennature-skin-content">
                            <p>
                              Most of the farmors are un educated so they don't
                              know about the herbicides of pest killing and
                              protection from them.our system will help those
                              farmers on protection of crops.s
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="four columns">
                    <div className="greennature-ux column-service-ux">
                      <div
                        className="greennature-item greennature-column-service-item greennature-type-2"
                        style={{ marginBottom: "0px" }}
                      >
                        <div className="column-service-image">
                          <img
                            src="upload/icon-service-3.png"
                            alt=""
                            width="80"
                            height="80"
                          />
                        </div>
                        <div className="column-service-content-wrapper">
                          <h3 className="column-service-title">Save Money</h3>
                          <div className="column-service-content greennature-skin-content"
                          style={{ textAlign:"justify" }}>
                            <p>
                              Save your money by identification of PEST with our
                              application on time.And spry on those pest.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="clear"></div>
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>
              </div>
            </section>

            <section id="content-section-4">
              <div
                className="greennature-color-wrapper  gdlr-show-all no-skin"
                style={{ backgroundColor: "#ffffff", paddingBottom: "25px" }}
              >
                <div className="container">
                  <div className="greennature-item-title-wrapper greennature-item  greennature-left-divider greennature-medium ">
                    <div className="greennature-item-title-container container">
                      <div className="greennature-item-title-head"
                      style={{ textAlign:"justify" }}>
                        <h3 className="greennature-item-title greennature-skin-title greennature-skin-border">
                          <img
                            src="upload/icon-5.png"
                            alt=""
                            width="80"
                            height="80"
                          />
                          PEST TYPE
                        </h3>

                        <div className="clear"></div>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-item-wrapper type-classNameic-portfolio">
                    <div className="portfolio-item-holder  greennature-portfolio-column-4">
                      <div
                        className="greennature-isotope"
                        data-type="portfolio"
                        data-layout="fitRows"
                      >
                        <div className="clear"></div>
                        <div className="three columns">
                          <div className="greennature-item greennature-portfolio-item greennature-classNameic-portfolio">
                            <div className="greennature-ux greennature-classNameic-portfolio-ux">
                              <div className="portfolio-thumbnail greennature-image">
                                <img
                                  src="upload/shutterstock_161515241-540x326.jpg"
                                  alt=""
                                  width="540"
                                  height="326"
                                />
                                <span className="portfolio-overlay">
                                  &nbsp;
                                </span>
                                <a
                                  className="portfolio-overlay-icon"
                                  href="upload/shutterstock_161515241.jpg"
                                  data-rel="fancybox"
                                >
                                  <span className="portfolio-icon">
                                    <i className="fa fa-search"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="portfolio-classNameic-content">
                                <h3 className="portfolio-title">
                                  <a href="#">Rice Leaf Roller</a>
                                </h3>
                                <div className="greennature-portfolio-info">
                                  <div className="portfolio-info portfolio-tag">
                                    <span className="info-head greennature-title"
                                    style={{ textAlign:"justify" }}>
                                      Tags{" "}
                                    </span>
                                    <a href="#" rel="tag">
                                      Environment
                                    </a>
                                    <span className="sep">,</span>{" "}
                                    <a href="#" rel="tag">
                                      Rice
                                    </a>
                                  </div>
                                  <div className="clear"></div>
                                </div>
                                <div className="portfolio-excerpt"
                                style={{ textAlign:"justify" }}>
                                  The Rice leafroller, is a species of moth of
                                  the family Crambidae. It is found in
                                  south-east Asia, including Hong Kong, Sri
                                  Lanka, Taiwan, Thailand and most of Australia.
                                  The wingspan is about 16 millimetres.
                                  <div className="clear"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="three columns">
                          <div className="greennature-item greennature-portfolio-item greennature-classNameic-portfolio">
                            <div className="greennature-ux greennature-classNameic-portfolio-ux">
                              <div className="portfolio-thumbnail greennature-image">
                                <img
                                  src="upload/shutterstock_133689230-540x326.jpg"
                                  alt=""
                                  width="540"
                                  height="326"
                                />
                                <span className="portfolio-overlay">
                                  &nbsp;
                                </span>
                                <a className="portfolio-overlay-icon" href="#">
                                  <span className="portfolio-icon">
                                    <i className="fa fa-link"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="portfolio-classNameic-content">
                                <h3 className="portfolio-title">
                                  <a href="#">Paddy Stem Maggot</a>
                                </h3>
                                <div className="greennature-portfolio-info">
                                  <div className="portfolio-info portfolio-tag">
                                    <span className="info-head greennature-title">
                                      Tags{" "}
                                    </span>
                                    <a href="#" rel="tag">
                                      Paddy
                                    </a>
                                    <span className="sep">,</span>{" "}
                                    <a href="#" rel="tag">
                                      Crops
                                    </a>
                                  </div>
                                  <div className="clear"></div>
                                </div>
                                <div className="portfolio-excerpt"
                                style={{ textAlign:"justify" }}>
                                  The rice paddy stem maggot is semi-aquatic. It is
                                  common in irrigated fields and feeds on the
                                  central whorl leaf of the vegetative stage of
                                  the rice plant.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="three columns">
                          <div className="greennature-item greennature-portfolio-item greennature-classNameic-portfolio">
                            <div className="greennature-ux greennature-classNameic-portfolio-ux">
                              <div className="portfolio-thumbnail greennature-image">
                                <img
                                  src="upload/shutterstock_53600221-540x326.jpg"
                                  alt=""
                                  width="540"
                                  height="326"
                                />
                                <span className="portfolio-overlay">
                                  &nbsp;
                                </span>
                                <a
                                  className="portfolio-overlay-icon"
                                  href="https://vimeo.com/101707505"
                                  data-rel="fancybox"
                                  data-fancybox-type="iframe"
                                >
                                  <span className="portfolio-icon">
                                    <i className="fa fa-film"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="portfolio-classNameic-content">
                                <h3 className="portfolio-title">
                                  <a href="#">Asiatic Rice Borer</a>
                                </h3>
                                <div className="greennature-portfolio-info">
                                  <div className="portfolio-info portfolio-tag">
                                    <span className="info-head greennature-title">
                                      Tags{" "}
                                    </span>
                                    <a href="#" rel="tag">
                                      Asiatic
                                    </a>
                                    <span className="sep">,</span>{" "}
                                    <a href="#" rel="tag">
                                      Rice
                                    </a>
                                  </div>
                                  <div className="clear"></div>
                                </div>
                                <div className="portfolio-excerpt"
                                style={{ textAlign:"justify" }}>
                                  The Asiatic rice borer or striped rice
                                  stemborer, is a moth of the family Crambidae.
                                  It is a widespread species, known from eastern
                                  Asia, Malaysia to the Pacific. It is a serious
                                  pest of rice
                                  <div className="clear"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="three columns">
                          <div className="greennature-item greennature-portfolio-item greennature-classNameic-portfolio">
                            <div className="greennature-ux greennature-classNameic-portfolio-ux">
                              <div className="portfolio-thumbnail greennature-image">
                                <img
                                  src="upload/shutterstock_124871620-540x326.jpg"
                                  alt=""
                                  width="540"
                                  height="326"
                                />
                                <span className="portfolio-overlay">
                                  &nbsp;
                                </span>
                                <a className="portfolio-overlay-icon" href="#">
                                  <span className="portfolio-icon">
                                    <i className="fa fa-link"></i>
                                  </span>
                                </a>
                              </div>
                              <div className="portfolio-classNameic-content">
                                <h3 className="portfolio-title">
                                  <a href="#">Rice Gall Midge</a>
                                </h3>
                                <div className="greennature-portfolio-info">
                                  <div className="portfolio-info portfolio-tag">
                                    <span className="info-head greennature-title">
                                      Tags{" "}
                                    </span>
                                    <a href="#" rel="tag">
                                      gall
                                    </a>
                                    <span className="sep">,</span>{" "}
                                    <a href="#" rel="tag">
                                      midge
                                    </a>
                                  </div>
                                  <div className="clear"></div>
                                </div>
                                <div className="portfolio-excerpt"
                                style={{ textAlign:"justify" }}>
                                  It is a major insect pest of rice. The damage
                                  to the crop is done by the larvae which form
                                  galls commonly known as "silver shoots" or
                                  "onion shoots".
                                  <div className="clear"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="clear"></div>
                    </div>
                  </div>
                  <div className="clear"></div>
                  <div className="clear"></div>
                </div>
              </div>
              <div className="clear"></div>
            </section>
            <section id="content-section-5">
              <div
                className="greennature-color-wrapper  gdlr-show-all greennature-skin-service-half greennature-half-bg-wrapper"
                style={{ backgroundColor: " #f5f5f5", paddingBottom: "20px" }}
              >
                <div
                  className="greennature-half-bg greennature-bg-solid"
                  style={{ backgroundImage: `url(${bg})` }}
                ></div>
                <div className="container">
                  <div className="six columns">
                    <div className="greennature-item greennature-content-item"></div>
                  </div>
                  <div className="six columns">
                    <div className="greennature-item greennature-icon-with-list-item">
                      <div className="list-with-icon-ux greennature-ux">
                        <div className="list-with-icon greennature-left">
                          <div className="list-with-icon-image">
                            <img
                              src="upload/icon-1.png"
                              alt=""
                              width="80"
                              height="80"
                            />
                          </div>
                          <div className="list-with-icon-content">
                            <div className="list-with-icon-title greennature-skin-title">
                              Crops Sessons
                            </div>
                            <div className="list-with-icon-caption"
                            style={{ textAlign:"justify" }}>
                              <p>
                                Pakistan has two cropping seasons, "Kharif"
                                being the first sowing season starting from
                                April-June and is harvested during October-
                                December. Rice, sugarcane, cotton, maize, moong,
                                mash, bajra and jowar are “Kharif" crops.
                                "Rabi", the second sowing season, begins in
                                October-December and is harvested in April- May
                              </p>
                            </div>
                          </div>
                          <div className="clear"></div>
                        </div>
                      </div>
                      <div className="list-with-icon-ux greennature-ux">
                        <div className="list-with-icon greennature-left">
                          <div className="list-with-icon-image">
                            <img
                              src="upload/icon-2.png"
                              alt=""
                              width="80"
                              height="80"
                            />
                          </div>
                          <div className="list-with-icon-content">
                            <div className="list-with-icon-title greennature-skin-title">
                              Pest
                            </div>
                            <div className="list-with-icon-caption"
                            style={{ textAlign:"justify" }}>
                              <p>
                                A pest is any animal or plant harmful to humans
                                or human concerns. The term is particularly used
                                for creatures that damage crops, livestock, and
                                forestry or cause a nuisance to people,
                                especially in their homes.
                              </p>
                            </div>
                          </div>
                          <div className="clear"></div>
                        </div>
                      </div>
                      <div className="list-with-icon-ux greennature-ux">
                        <div className="list-with-icon greennature-left">
                          <div className="list-with-icon-image">
                            <img
                              src="upload/icon-3.png"
                              alt=""
                              width="80"
                              height="80"
                            />
                          </div>
                          <div className="list-with-icon-content">
                            <div className="list-with-icon-title greennature-skin-title">
                              Pest Detection Model
                            </div>
                            <div className="list-with-icon-caption"
                            style={{ textAlign:"justify" }}>
                              <p>
                                Pest Detection model is a deep learning based
                                model (also known as CNN),we have use Transfer
                                learning for training this model. Data set which
                                i have used is consists of 10 classes, divided
                                in training and testing parts.
                              </p>
                            </div>
                          </div>
                          <div className="clear"></div>
                        </div>
                      </div>
                      <div className="clear"></div>
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
      {/* <!-- content wrapper --> */}
    </>
  );
};

export default Home;
