import React from 'react'
import "./Footer.scss"
import { Helmet } from 'react-helmet'
function Footer() {
  return (
    <div>
       <Helmet>
        <title>BlackBull Technologies</title>
        <meta name="description" content="Footer section is show our privacy and policy and other options" />
        <meta name="keywords" content="blackbull, blackbuck, black, technologies, blackbull technologies, welcome blackbull, technosoft, infotech, blackbull technosoft, blackbull infotech,Footer,footer,footer section, footer of blackbull,privacy,policy,policies,private" />
        </Helmet>
         <footer className="footer-20192">
      <div className="site-section">
        <div className="container">

          <div className="cta d-block d-md-flex align-items-center px-5" data-aos="zoom-in"  data-aos-duration="2000">
            <div>
              <h2 className="mb-0">Join With Us</h2>
              <h3 className="text-dark">Grow your business</h3>
            </div>
            <div className="ml-auto contact-btn">
              <a href="#ContactUs" className="btn btn-dark rounded-0 py-3 px-5">Contact us</a>
            </div>
          </div>
          <div className="row">

            <div className="col-sm">
              <div className='footer-main'>
              <img className='footer-logo-img'   src='../assets/blackbulllogo.png' alt='footer-img' />
              
              </div>
             
              <p className="copyright">
                <small >&copy; 2019</small>
              </p>
            </div>
           
            <div className="col-sm">
              <h3  >Company</h3>
              <ul className="list-unstyled links">
                <li   ><a href="#hero">Home</a></li>
                <li ><a href="#About">About us</a></li>
                <li ><a href="#Services">Service</a></li>
                <li ><a href="#Career">Career</a></li>
                <li ><a href="#Portfolio">Portfolio</a></li>
                <li  ><a href="#ContactUs">Contact us</a></li>
              </ul>
            </div>
            <div className="col-sm">
              <h3  >Further Information</h3>
              <ul className="list-unstyled links">
                <li ><a href="/">Terms &amp; Conditions</a></li>
                <li  ><a href="/">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3>Follow us</h3>
              <ul className="list-unstyled social">
                <li ><a href="/"><i className="fa-brands fa-facebook"></i></a></li>
                <li><a href="/"><i class="fa-brands fa-twitter"></i></a></li>
                <li ><a href="https://www.linkedin.com/company/blackbull-technologies/"><i class="fa-brands fa-linkedin"></i></a></li>
                <li><a href="https://instagram.com/blackbull.technology?igshid=OGIzYTJhMTRmYQ=="><i class="fa-brands fa-instagram"></i></a></li>
              
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer