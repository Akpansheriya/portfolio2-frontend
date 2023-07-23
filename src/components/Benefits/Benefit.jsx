import React from "react";
import "./Benefit.scss";
import { Col, Row } from "react-bootstrap";
import { benefits } from "./BenefitData";
import { Helmet } from "react-helmet";
function Benefit() {
  return (
    <div className="benefit-main mt-5" id="Career">
       <Helmet>
        <title>BlackBull Technologies</title>
        <meta name="description" content="this section show benefits of join BlackBull Technologies" />
        <meta name="keywords" content="blackbull, blackbuck, black, technologies, blackbull technologies, welcome blackbull, technosoft, infotech, blackbull technosoft, blackbull infotech,benefit,career,vacation,paid leave,blackbull benefits,fayda," />
        </Helmet>
      <Row>
        <h1 className="main-heading"> Career</h1>
        <h2 className="sub-text">
          {" "}
          We always wish to keep our team young, energetic and creative. We are
          motivated to provide value and high performance to our client
        </h2>
        <h1 className="main-heading">
          Benefits to join Blackbull Technologies
        </h1>
      </Row>
      <Row cols="auto">
       {benefits ? benefits.map((ele) => (
        <>
        <Col sm={12} lg={4} md={4} className="mt-5">
        <div key={ele.title} className="wrapper"  data-aos="fade-up" data-aos-delay={ele.aos}>
      <div class="card">
        <div class="card-img">
            <img src={ele.image} alt="vac" />
        </div>
        <div class="card-info">
            <p className="card-title">{ele.title}</p>
          <p class="text-body">
            {ele.description}
          </p>
        
        </div>
      </div>
      </div>
      </Col>
        </>
       )): ""} 
      </Row>
      
    </div>
  );
}

export default Benefit;
