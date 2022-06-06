import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const useremail = localStorage.getItem("email");

  const onLogout = () => {
    localStorage.removeItem("email");
    window.location.reload(false);
  };

  return (
    <>
      <header className="greennature-header-wrapper header-style-5-wrapper greennature-header-with-top-bar">
        {/* <!-- top navigation --> */}
        <div className="top-navigation-wrapper">
          <div className="top-navigation-container container">
            <div className="top-navigation-left">
              <div className="top-navigation-left-text">
                Phone : +92 3466093960      Email : zainqadri32@gmail.com{" "}
              </div>
            </div>
            <div className="top-navigation-right">
              <div className="top-social-wrapper">
                <div className="social-icon">
                  <a href="#" target="_blank">
                    <i className="fa fa-facebook"></i>
                  </a>
                </div>
                <div className="social-icon">
                  <a href="#" target="_blank">
                    <i className="fa fa-flickr"></i>
                  </a>
                </div>
                <div className="social-icon">
                  <a href="#" target="_blank">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
                <div className="social-icon">
                  <a href="#" target="_blank">
                    <i className="fa fa-pinterest-p"></i>
                  </a>
                </div>
                <div className="social-icon">
                  <a href="#" target="_blank">
                    <i className="fa fa-tumblr"></i>
                  </a>
                </div>
                <div className="social-icon">
                  <a href="#" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>
                </div>
                <div className="social-icon">
                  <a href="#" target="_blank">
                    <i className="fa fa-vimeo"></i>
                  </a>
                </div>
                <div className="clear"></div>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
        <div id="greennature-header-substitute"></div>
        <div className="greennature-header-inner header-inner-header-style-5">
          <div className="greennature-header-container container">
            <div className="greennature-header-inner-overlay"></div>
            {/* <!-- logo --> */}
            <div className="greennature-logo">
              <div className="greennature-logo-inner">
                <a href="index-2.html">
                  <img src="images/logo.png" alt="" />
                </a>
              </div>
              <div
                className="greennature-responsive-navigation dl-menuwrapper"
                id="greennature-responsive-navigation"
              >
                <button className="dl-trigger">Open Menu</button>
                <ul
                  id="menu-main-menu"
                  className="dl-menu greennature-main-mobile-menu"
                >
                  <li className="menu-item menu-item-home current-menu-item page_item page-item-5680 current_page_item">
                    <Link to="/" aria-current="page">
                      Home
                    </Link>
                  </li>
                  <li className="menu-item menu-item-has-children menu-item-15">
                    <Link to="/Pest_detils" aria-current="page">
                      PEST Details
                    </Link>
                  </li>
                  <li className="menu-item menu-item-has-children menu-item-15">
                    <Link to="/crops_season">Crops Season</Link>
                  </li>
                  <li className="menu-item menu-item-has-children menu-item-15">
                    <Link to="/crops_season">Blogs</Link>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <Link to="/aboutus">About</Link>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <Link to="/ContactUs">Contact</Link>
                  </li>
                  {!useremail ? (
                    <li className="menu-item menu-item-has-childrenmenu-item menu-item-has-children greennature-normal-menu">
                      <Link to="/signup" className="sf-with-ul-pre">
                        <button>Signup</button>
                      </Link>
                    </li>
                  ) : (
                    <li className="menu-item menu-item-has-childrenmenu-item menu-item-has-children greennature-normal-menu">
                      <Link
                        to="/"
                        className="sf-with-ul-pre"
                        onClick={onLogout}
                      >
                        Logout
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* <!-- navigation --> */}
            <div className="greennature-navigation-wrapper">
              <nav
                className="greennature-navigation"
                id="greennature-main-navigation"
              >
                <ul
                  id="menu-main-menu-1"
                  className="sf-menu greennature-main-menu"
                >
                  <li className="menu-item menu-item-home  greennature-normal-menu">
                    <Link to="/">
                      <i className="fa fa-home"></i>Home
                    </Link>
                  </li>
                  <li className="menu-item menu-item-has-children greennature-normal-menu">
                    <Link to="/Pest_detils" className="sf-with-ul-pre">
                      <i className="fa fa-file-text-o"></i>PEST Details
                    </Link>
                  </li>

                  <li className="menu-item menu-item-has-children menu-item-15">
                    <Link to="/crops_season" className="sf-with-ul-pre">
                      <i className="fa fa-file-text-o"></i>Crops Season
                    </Link>
                  </li>
                  <li className="menu-item menu-item-has-children menu-item-15">
                    <Link to="/Blogs" className="sf-with-ul-pre">
                      <i className="fa fa-file-text-o"></i>Blogs
                    </Link>
                  </li>
                  <li className="menu-item menu-item-has-childrenmenu-item menu-item-has-children greennature-mega-menu">
                    <Link to="/aboutus" className="sf-with-ul-pre">
                      <i className="fa fa-globe"></i>about
                    </Link>
                  </li>
                  <li className="menu-item menu-item-has-childrenmenu-item menu-item-has-children greennature-normal-menu">
                    <Link to="/ContactUs" className="sf-with-ul-pre">
                      Contact
                    </Link>
                  </li>
                  {!useremail ? (
                    <li className="menu-item menu-item-has-childrenmenu-item menu-item-has-children greennature-normal-menu">
                      <Link to="/signup" className="sf-with-ul-pre">
                        Sign Up/ Sign In
                      </Link>
                    </li>
                  ) : (
                    <li className="menu-item menu-item-has-childrenmenu-item menu-item-has-children greennature-normal-menu">
                      <Link
                        to="/Signup"
                        className="sf-with-ul-pre"
                        onClick={onLogout}
                      >
                        Logout
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
              <div
                className="greennature-navigation-gimmick"
                id="greennature-navigation-gimmick"
              ></div>
              <div className="clear"></div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
