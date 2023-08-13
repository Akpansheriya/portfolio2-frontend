import React from "react";
import "./Engagement.scss";
import { Col, Row } from "react-bootstrap";
import { engageData } from "./engageData";
import { Helmet } from "react-helmet";
function EngagementModel() {
  return (
    <div className=" engage-main mt-5 " id="EngagementModel">
       <Helmet>
        <title>we are providing a best strategic ideas and team services for development - Blackbull Technologies</title>
        <meta name="description" content="Discover the power of growth with Blackbull Technologies! We offer top-notch strategic ideas and professional team services for seamless development. Unlock your business's potential with our tailored solutions, designed to elevate your success. Experience excellence in technology and innovation with Blackbull Technologies, your trusted partner for success , we are providing services like - Extend Your Team ,Build Your Idea From Scratch,Manage Team Service" />
        <meta name="keywords" content="best strategic ideas,team services,services for development,Extend Your Team ,Build Your Idea From Scratch,Manage Team Service" />
        </Helmet>
      <Row>
        <h1 className="main-heading">Our Engagement Model</h1>
        <h2 className="sub-heading">we are providing a best strategic ideas ,teams ,instructions and methods for build your products </h2>
      </Row>

      <Row>
        {engageData
          ? engageData.map((ele) => (
              <>
                <Col sm={12} md={4} lg={4}>
                  <div key={ele.title} className="book-main" data-aos="fade-up" data-aos-delay={ele.aos}>
                    <div className="book">
                      <p>{ele.description}</p>
                      <div className="cover">
                        <img
                         referrerpolicy="no-referrer"
                          className="img-width"
                          src={ele.image}
                          alt="engage"
                        />
                      </div>
                    </div>
                  </div>
                  <h4 className="h4-text">{ele.title}</h4>
                </Col>
              </>
            ))
          : ""}
      </Row>
    </div>
  );
}

export default EngagementModel;
