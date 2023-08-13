import React from "react";
import "./Home.scss";
import { Helmet } from "react-helmet";


function Home() {
  return (
    <>
      <Helmet>
        <title> blackbull technologies is one of the Best it company in surat</title>
        <meta name="description" content="welcome to blackbull technologies,we are providing a best it solutions in surat, Blackbull technologies is one of the best it company in surat" />
        <meta name="keywords" content="best it company in surat, blackbull, blackbull technologies,blackbull technosoft" />
        </Helmet>
        <div id="hero" className="hero">
          <div className="header-img"></div> 
          <h1 className="welcom-text">Welcome To BlackBull Technologies</h1>

          <div className="icon-boxes position-relative">
            <div className="box-pos container position-relative">
              <div className="row">
                <div
                  className="col-xl-3 col-md-6 small-width"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <h4 className="title">Search</h4>
                    <p>
                      Searching skills is very important for make a creative
                      contents for websites and applications it increases our
                      creativity and abilities
                    </p>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-md-6  small-width"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="fa-solid fa-bullhorn"></i>
                    </div>
                    <h4 className="title">Announcement</h4>
                    <p>
                      We are hiring a experienced developers for
                      Flutter,Reactjs,Nodejs,Angular, <br />
                      Laravel,React Native,Word Press,PHP.{" "}
                    </p>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-md-6  small-width"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="fa-solid fa-clock"></i>
                    </div>
                    <h4 className="title">Time</h4>
                    <p>
                      Time is a very important factor for web and app
                      development we are complete a web and app projects in
                      client's given time periods.{" "}
                    </p>
                  </div>
                </div>

                <div
                  className="col-xl-3 col-md-6  small-width"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className="icon-box">
                    <div className="icon">
                      <i className="fa-solid fa-bars-progress"></i>
                    </div>
                    <h4 className="title">Management</h4>
                    <p>
                      Management is a very important factor for web and app
                      development beacause without management we can't complete
                      any task or project at a time. we are manage any critical
                      condition for our client's project
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
}

export default Home;
