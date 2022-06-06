import React from "react";
import titlebg from "../../public/upload/about-title-bg.jpg";
import "./cropseason.css";
import wheat from "./images/wheat.jpg";
import grasspea from "./images/grasspea.jpg";
import urad from "./images/urad.jpg";
import lentil from "./images/lentil.jpg";
import linseed from "./images/linseed.jpg";
import paddy from "./images/paddy.jpg";
import gram from "./images/gram.jpg";
import maize from "./images/maize.jpg";
import peasbeans from "./images/peasbeans.jpg";
import mustared from "./images/mustared.jpeg";
import potato from "./images/potato.jpg";
// import UserRating from "../Components/UserRating";
const Cropsseason = () => {
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
                            CROPS SEASONS AND PEST LIST
                          </h3>
                          {/* <div className="greennature-item-title-caption greennature-skin-info">
                            Crops according to season
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
              {/* start */}
              <section class="ftco-section">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-md-6 text-center mb-4">
                      {/* <h2 class="heading-section">PIC</h2> */}
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      {/* <h3 class="h5 mb-4 text-center">
                        CROPS SEASONS AND PEST DETAILS
                      </h3> */}
                      <div class="table-wrap">
                        <table class="table">
                          <thead class="thead-primary">
                            <tr>
                              <th>#</th>
                              <th>Crop Name</th>
                              <th>Crop Image</th>
                              <th>Sowing/Planting Month</th>
                              <th>Harvesting Month</th>
                              <th>Attcking Pest</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Wheat</td>
                              <td>
                                <img
                                  style={{ width: "50px" }}
                                  src={wheat}
                                ></img>
                              </td>
                              <td>November-December</td>
                              <td>March-April</td>
                              <td>HESSIAN FLY</td>
                            </tr>

                            <tr>
                              <td>2</td>
                              <td>Paddy</td>
                              <td>
                                <img
                                  style={{ width: "50px" }}
                                  src={paddy}
                                ></img>
                              </td>
                              <td>November-December</td>
                              <td>April-May</td>
                              <td>Paddy stemborer</td>
                            </tr>

                            <tr>
                              <td>3</td>
                              <td>Maize</td>
                              <td>
                                <img
                                  style={{ width: "50px" }}
                                  src={maize}
                                ></img>
                              </td>
                              <td>November</td>
                              <td>March</td>
                              <td>Maize leafhoppers</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>Lentil</td>
                              <td>
                                <img
                                  style={{ width: "50px" }}
                                  src={lentil}
                                ></img>
                              </td>
                              <td>October-November</td>
                              <td>March-April</td>
                              <td>Grasshoppers</td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>Gram/Chick pea</td>
                              <td>
                                <img style={{ width: "50px" }} src={gram}></img>
                              </td>
                              <td>November-December</td>
                              <td>March</td>
                              <td>Gram pod borer</td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>Urad/Black gram</td>
                              <td>
                                <img style={{ width: "50px" }} src={urad}></img>
                              </td>
                              <td>Feburary-April</td>
                              <td>May-June</td>
                              <td>urad dal bugs</td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td>Khesari/Grass pea</td>
                              <td>
                                <img
                                  style={{ width: "50px" }}
                                  src={grasspea}
                                ></img>
                              </td>
                              <td>October november</td>
                              <td>March-April</td>
                              <td>Pea leaf weevils</td>
                            </tr>
                            <tr>
                              <td>8</td>
                              <td>Peas&beans</td>
                              <td>
                                <img
                                  style={{ width: "50px" }}
                                  src={peasbeans}
                                ></img>
                              </td>
                              <td>October-november</td>
                              <td>March-April</td>
                              <td>Bruchid beetle</td>
                            </tr>
                            <tr>
                              <td>9</td>
                              <td>Rapessed&Mustered</td>
                              <td>
                                <img
                                  style={{ width: "50px" }}
                                  src={mustared}
                                ></img>
                              </td>
                              <td>October</td>
                              <td>Feburary-March</td>
                              <td>Flea beetle adults</td>
                            </tr>
                            <tr>
                              <td>10</td>
                              <td>Linseed</td>
                              <td>
                                <img
                                  style={{ width: "50px" }}
                                  src={linseed}
                                ></img>
                              </td>
                              <td>October-November</td>
                              <td>March-April</td>
                              <td>Flax weevils</td>
                            </tr>
                            <tr>
                              <td>11</td>
                              <td>Potato</td>
                              <td>
                                <img
                                  style={{ width: "50px" }}
                                  src={potato}
                                ></img>
                              </td>
                              <td>October-November</td>
                              <td>March</td>
                              <td>Colorado Potato Beetle</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* end */}

              {/* <UserRating /> */}
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

export default Cropsseason;
