import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () => {
  const state = useSelector((state) => state.handleCart)
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Nepayatri - Tour &amp; Travel Multipurpose Template</title>
      {/* Favicon */}
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="./assets/images/favicon.png"
      />
      {/* Bootstrap core CSS */}
      <link
        href="/assets/css/bootstrap.min.css"
        rel="stylesheet"
        type="text/css"
      />
      {/*Default CSS*/}
      <link href="/assets/css/default.css" rel="stylesheet" type="text/css" />
      {/*Custom CSS*/}
      <link href="/assets/css/style.css" rel="stylesheet" type="text/css" />
      {/*Color Switcher CSS*/}
      <link rel="stylesheet" href="/assets/css/color/color-default.css" />
      {/*Plugin CSS*/}
      <link href="/assets/css/plugin.css" rel="stylesheet" type="text/css" />
      {/*Flaticons CSS*/}
      <link
        href="/assets/fonts/flaticon.css"
        rel="stylesheet"
        type="text/css"
      />
      {/*Font Awesome*/}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
      />

      {/* header starts */}
      <header className="main_header_area">
        <div className="header-content">
          <div className="container" >
            <div className="links links-left">
              <ul>
                <li>
                  <NavLink to="#">
                    <i className="fa fa-phone-alt" /> (000)999-898-888
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#">
                    <i className="fa fa-envelope-open" /> email@gmail.com
                  </NavLink>
                </li>
                
              </ul>
            </div>
            <div className="links links-right pull-right">
              <ul>
                <li>
                  <ul className="social-links">
                    <li>
                      <NavLink to="#">
                        <i className="fab fa-facebook" aria-hidden="true" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <i className="fab fa-twitter" aria-hidden="true" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <i className="fab fa-instagram" aria-hidden="true" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <i className="fab fa-linkedin" aria-hidden="true" />
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/login" data-toggle="modal" data-target="#login">
                    <i className="fa fa-sign-in-alt" /> Login
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/register" data-toggle="modal" data-target="#register">
                    <i className="fa fa-sign-out-alt" /> Register
                  </NavLink>
                </li>
               

              </ul>
            </div>
          </div>
        </div>
        {/* Navigation Bar */}
        <div className="header_menu affix-top">
          <nav className="navbar navbar-default">
            <div className="container" style={{ display: 'block' }}>
              <div className="navbar-flex">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                  <NavLink className="navbar-brand" to="index.html">
                  <span>E-COMMERCE</span>
                  </NavLink>
                </div>
                {/* Collect the nav links, forms, and other content for toggling */}
                <div
                  className="collapse navbar-collapse"
                  id="bs-example-navbar-collapse-1"
                >
                  <ul className="nav navbar-nav" id="">
                    <li className="dropdown  ">
                      <NavLink to="/" className="dropdown">
                        Home
                      </NavLink>
                    </li>
                    <li className="dropdown  ">
                      <NavLink to="/products" className="dropdown">
                        Products
                      </NavLink>
                    </li>
                    <li className="dropdown  ">
                      <NavLink to="/contact" className="dropdown">
                        Contact
                      </NavLink>
                    </li>
                    <li className="dropdown  ">
                      <NavLink to="/about" className="dropdown">
                        About
                      </NavLink>
                    </li>
                    <li className="dropdown">
                  <NavLink to="/shop" className="mt_cart">
                    <i className="fa fa-shopping-cart" />({state.length})
                  </NavLink>
                </li>

                   

                  </ul>
                </div>
                {/* /.navbar-collapse */}
                <div id="slicknav-mobile" />
              </div>
            </div>
            {/* /.container-fluid */}
          </nav>
        </div>
        {/* Navigation Bar Ends */}
      </header>

      {/* *Scripts* */}
      <script src="js/jquery-3.3.1.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/color-switcher.js"></script>
      <script src="js/plugin.js"></script>
      <script src="js/main.js"></script>
      <script src="js/menu.js"></script>
      <script src="js/custom-swiper2.js"></script>
      <script src="js/custom-nav.js"></script>
      <script src="js/custom-date.js"></script>
    </>
  );
};

export default Navbar;
