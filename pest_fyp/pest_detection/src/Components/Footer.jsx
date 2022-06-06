import React from "react";
const Footer = () => {
  return (
    <>
      <footer className="footer-wrapper">
        <div className="footer-container container">
          <div className="footer-column three columns" id="footer-widget-1">
            <div
              id="text-5"
              className="widget widget_text greennature-item greennature-widget"
            >
              <div className="textwidget">
                <p>
                  <img
                    src="images/logo.png"
                    style={{ width: "170px" }}
                    alt=""
                  />
                </p>
                {/* <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Morbi leo risus, porta. Etiam porta
                  sem malesuada magna mollis euismod.
                </p> */}
              </div>
            </div>
          </div>
          <div className="footer-column three columns" id="footer-widget-2">
            <div
              id="text-9"
              className="widget widget_text greennature-item greennature-widget"
            >
              <h3 className="greennature-widget-title">Contact Info</h3>
              <div className="clear"></div>
              <div className="textwidget">
                <span className="clear"></span>
                <span
                  className="greennature-space"
                  style={{ marginTop: "-6px", display: "block" }}
                ></span>
                Address: COMSATS University Islamabad(wah campus GT-road taxila)
                <span className="clear"></span>
                <span
                  className="greennature-space"
                  style={{ marginTop: "10px", display: "block" }}
                ></span>
                <i
                  className="greennature-icon fa fa-phone"
                  style={{
                    verticalAlign: "middle",
                    color: "#fff",
                    fontSize: "16px",
                  }}
                ></i>
                +92 3466093960
                <span className="clear"></span>
                <span
                  className="greennature-space"
                  style={{ marginTop: "10px", display: "block" }}
                ></span>
                <i
                  className="greennature-icon fa fa-mobile"
                  style={{
                    verticalAlign: "middle",
                    color: " #fff",
                    fontSize: "20px",
                  }}
                ></i>
                +92 3466093960
                <span className="clear"></span>
                <span
                  className="greennature-space"
                  style={{ marginTop: "10px", display: "block" }}
                ></span>
                <i
                  className="greennature-icon fa fa-envelope-o"
                  style={{
                    verticalAlign: "middle",
                    color: "#fff",
                    fontSize: "16px",
                  }}
                ></i>
                zainqadri32@gmail.com
              </div>
            </div>
          </div>

          <div className="footer-column three columns" id="footer-widget-4">
            <div
              id="gdlr-recent-portfolio2-widget-6"
              className="widget widget_gdlr-recent-portfolio2-widget greennature-item greennature-widget"
            >
              {/* <h3 className="greennature-widget-title">Recent Works</h3> */}
              <div className="clear"></div>
              <div className="greennature-recent-port2-widget">
                <div className="recent-port-widget-thumbnail">
                  <a href="#">
                    {/* <img
                      src="upload/shutterstock_161515241-150x150.jpg"
                      alt=""
                      width="150"
                      height="150"
                    /> */}
                  </a>
                </div>
                <div className="recent-port-widget-thumbnail">
                  <a href="#">
                    {/* <img
                      src="upload/shutterstock_133689230-150x150.jpg"
                      alt=""
                      width="150"
                      height="150"
                    /> */}
                  </a>
                </div>
                <div className="recent-port-widget-thumbnail">
                  <a href="#">
                    {/* <img
                      src="upload/shutterstock_53600221-150x150.jpg"
                      alt=""
                      width="150"
                      height="150"
                    /> */}
                  </a>
                </div>
              
               
                <div className="recent-port-widget-thumbnail">
                  <a href="#">
                    {/* <img
                      src="upload/shutterstock_256181956-150x150.jpg"
                      alt=""
                      width="150"
                      height="150"
                    /> */}
                  </a>
                </div>
                <div className="clear"></div>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
