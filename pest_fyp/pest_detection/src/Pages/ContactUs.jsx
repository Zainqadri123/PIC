import React from "react";
import titlebg from "../../public/upload/about-title-bg.jpg";
// import Sstock from "../../public/upload/shutterstock_124871620.jpg";
import {useState } from "react";
import { Link, Router, useNavigate } from "react-router-dom";
import axios from "axios";


const ContactUs = () => {
  const history = useNavigate();
  const [uemail, setuemail] = useState();
  const [username, setusername] = useState();
  const [message, setmessage] = useState();
  const handleSubmit = () => {
    console.log("cliked");
    console.log(uemail, username,message);
    axios
      .post("http://127.0.0.1:5000/feedback", {
        name: username,
        feedback: message,
        email:uemail
      })
      .then((res) => console.log(res))
      .catch((err) => console.warn(err));
      history('/');
  };
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
                  backgroundImage: `url(${titlebg})`,
                  paddingTop: "190px",
                }}
              >
                <div className="container">
                  <div className="greennature-title-item">
                    <div className="greennature-item-title-wrapper greennature-item  greennature-center greennature-extra-large ">
                      <div className="greennature-item-title-container container">
                        <div className="greennature-item-title-head">
                          <h3 className="greennature-item-title greennature-skin-title greennature-skin-border">
                           CONTACT US
                          </h3>
                          {/* <div className="greennature-item-title-caption greennature-skin-info">
                            about 3group developers
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
              {/* <div
                  className="greennature-half-bg greennature-bg-solid"
                  style={{ backgroundImage: `url(${Sstock})` }}
                ></div> */}
            </section>
            <form className="quform" action="#" method="post" encType="multipart/form-data" onclick>
                                <div className="quform-elements">
                                  <div className="quform-element">
                                    <p>
                                      <br />
                                      <span className="wpcf7--wrap your-name">
                                         <input
                                          type="text"
                                          name=""
                                          required
                                          className=" input_pass"
                                          value={username}
                                          onChange={(e) => setusername(e.target.value)}
                                          placeholder="Name"
                                        />

                                      </span> 
                                    </p>
                                  </div>
                                  <div className="quform-element">
                                    <p>
                                      <br />
                                      <span className="wpcf7--wrap your-email">
                                      <input
                                          type="email"
                                          name=""
                                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                          className=" input_pass"
                                          value={uemail}
                                          onChange={(e) => setuemail(e.target.value)}
                                          placeholder="email"
                                        />
                                      </span> 
                                    </p>
                                  </div>
                                  <div className="quform-element">
                                    <p>
                                      <br />
                                      <span className="wpcf7--wrap your-message">
                                        <textarea 
                                        id="message"
                                        name="message" 
                                        cols={40} 
                                        rows={10} 
                                        className="input1" 
                                        aria-invalid="false" 
                                        placeholder="Message*" 
                                        value={message}
                                        onChange={(e) => setmessage(e.target.value)}
                                        defaultValue={""} />
                                      </span>
                                    </p>
                                  </div>
                                  <p>
                                    {/* Begin Submit button */}
                                   </p><div className="quform-submit">
                                    <div className="quform-submit-inner">
                                      <button 
                                      onClick={handleSubmit}
                                      type="submit"
                                      className="submit-button">
                                        Send
                                      </button>
                                    </div>
                                    <div className="quform-loading-wrap"><span className="quform-loading" /></div>
                                  </div>
                                  <p />
                                </div>
                              </form>
            <section id="content-section-2">
              <div className="greennature-sidebar greennature-right-sidebar four columns">
                <div className="greennature-item-start-content sidebar-right-item">
                  <div
                    id="text-6"
                    className="widget widget_text greennature-item greennature-widget"
                  >
                    <h2 className="greennature-widget-title">
                      Before Contacting Us
                    </h2>
                    <div className="clear"></div>
                    <div className="textwidget">
                      Available from 6am to 4pm.Can contact any time
                    </div>
                  </div>
                  <div
                    id="text-7"
                    className="widget widget_text greennature-item greennature-widget"
                  >
                    <h3 className="greennature-widget-title">
                      Contact Information
                    </h3>
                    <div className="clear"></div>
                    <div className="textwidget">
                      <p>PIC DEVELOPERS,WAH CANTT</p>
                      <p>
                        <i
                          className="greennature-icon fa fa-phone"
                          style={{
                            verticalAlign: "middle",
                            color: "#444444",
                            fontSize: "16px",
                          }}
                        ></i>{" "}
                        1800-222-222
                      </p>
                      <p>
                        <i
                          className="greennature-icon fa fa-envelope"
                          style={{
                            verticalAlign: "middle",
                            color: "#444444",
                            fontSize: "16px",
                          }}
                        ></i>{" "}
                        zainqadri32@gmail.com
                      </p>
                      <p>
                        <i
                          className="greennature-icon fa fa-clock-o"
                          style={{
                            verticalAlign: "middle",
                            color: "#444444",
                            fontSize: "16px",
                          }}
                        ></i>{" "}
                        Everyday 9:00-04:00
                      </p>
                    </div>
                  </div>
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

export default ContactUs;
