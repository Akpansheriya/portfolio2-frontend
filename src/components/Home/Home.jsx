import React from "react";
import "./Home.scss";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Welcom To BlackBull Technologies</title>
        <meta name="description" content="welcom to blackbull technologies." />
        <meta name="keywords" content="blackbull, blackbuck, black, technologies, blackbull technologies, welcome blackbull, technosoft, infotech, blackbull technosoft, blackbull infotech" />
        </Helmet>
        <div id="hero" class="hero">
          <div className="header-img"></div>
          <h1 className="welcom-text">Welcome To BlackBull Technologies</h1>

          <div class="icon-boxes position-relative">
            <div class="box-pos container position-relative">
              <div class="row">
                <div
                  class="col-xl-3 col-md-6 small-width"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div class="icon-box">
                    <div class="icon">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <h4 class="title">Search</h4>
                    <p>
                      Searching skills is very important for make a creative
                      contents for websites and applications it increases our
                      creativity and abilities
                    </p>
                  </div>
                </div>

                <div
                  class="col-xl-3 col-md-6  small-width"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div class="icon-box">
                    <div class="icon">
                      <i class="fa-solid fa-bullhorn"></i>
                    </div>
                    <h4 class="title">Announcement</h4>
                    <p>
                      We are hiring a experienced developers for
                      Flutter,Reactjs,Nodejs,Angular, <br />
                      Laravel,React Native,Word Press,PHP.{" "}
                    </p>
                  </div>
                </div>

                <div
                  class="col-xl-3 col-md-6  small-width"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div class="icon-box">
                    <div class="icon">
                      <i class="fa-solid fa-clock"></i>
                    </div>
                    <h4 class="title">Time</h4>
                    <p>
                      Time is a very important factor for web and app
                      development we are complete a web and app projects in
                      client's given time periods.{" "}
                    </p>
                  </div>
                </div>

                <div
                  class="col-xl-3 col-md-6  small-width"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div class="icon-box">
                    <div class="icon">
                      <i class="fa-solid fa-bars-progress"></i>
                    </div>
                    <h4 class="title">Management</h4>
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
