import React from "react";
import "./Footer.scss";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <Helmet>
        <title>BlackBull Technologies</title>
        <meta
          name="description"
          content="Footer section is show our privacy and policy and other options"
        />
        <meta
          name="keywords"
          content="blackbull, blackbuck, black, technologies, blackbull technologies, welcome blackbull, technosoft, infotech, blackbull technosoft, blackbull infotech,Footer,footer,footer section, footer of blackbull,privacy,policy,policies,private"
        />
      </Helmet>
      <footer className="footer-20192">
        <div className="site-section">
          <div className="container">
            <div
              className="cta d-block d-md-flex align-items-center px-5"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div>
                <h2 className="mb-0">Join With Us</h2>
                <h3 className="text-dark">Grow your business</h3>
              </div>
              <div className="ml-auto contact-btn">
                <a
                  href="#ContactUs"
                  className="btn btn-dark rounded-0 py-3 px-5"
                >
                  Contact us
                </a>
              </div>
            </div>
            <div className="row">
              
              <div className="col-sm display texty">
                <div className="footer-main">
                  <img
                    referrerpolicy="no-referrer"
                    className="footer-logo-img"
                    src="../assets/blackbulllogo.png"
                    alt="footer-img"
                  />
                </div>

                <p className="copyright">
                  <small>&copy; 2021</small>
                </p>
              </div>
              <div className="small-view">
              <div className="col-sm display">
                <h3>Useful links</h3>
                <ul className="list-unstyled links">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <a href="#About">About us</a>
                  </li>
                  <li>
                    <a href="#Services">Service</a>
                  </li>
                  <li>
                    <a href="#Career">Career</a>
                  </li>
                  <li>
                    <a href="#Portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="#ContactUs">Contact us</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm display">
                <h3>Another Links links</h3>
                <ul className="list-unstyled links">
                  <li>
                    <a href="#StartUp">Start-Up</a>
                  </li>
                  <li>
                    <a href="#Testimonials">Testimonials</a>
                  </li>
                  <li>
                    <a href="#EngagementModel">Engagement Model</a>
                  </li>
                  <li>
                    <a href="#Career">Career</a>
                  </li>
                  <li>
                    <a href="#Company">Company</a>
                  </li>
                </ul>
              </div>
              </div>
              <div className="small-view">
              <div className="col-sm display">
                <h3>Further Information</h3>
                <ul className="list-unstyled links">
                  <li>
                    <Link to="/TermConditions">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link to="/PrivacyPolicy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 display">
                <h3>Follow us</h3>
                <ul className="list-unstyled social">
                  {/* <li>
                    <a href="https://www.facebook.com/profile.php?id=100094538292148&is_tour_dismissed=true">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </li> */}

                  <li>
                    <a href="https://www.linkedin.com/company/blackbull-technologies/">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/blackbull.technology?igshid=OGIzYTJhMTRmYQ==">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
