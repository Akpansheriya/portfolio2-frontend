import React from "react";
import "./Benefit.scss";
import { Col, Row } from "react-bootstrap";
import { benefits } from "./BenefitData";
import { Helmet } from "react-helmet";
function Benefit() {
  return (
    <div className="benefit-main mt-5" id="Career">
       <Helmet>
        <title>which company providing a various benefits to their employee? - Blackbull Technologies</title>
        <meta name="description" content="we are providing a various benefits and experience such as paid leave,paid vacation,performance bonus, career growth,employee training and friendly environment to our employee's" />
        <meta name="keywords" content="various benefits, paid leave, paid vacation career growth, employee training,performance bonus,friendly environment" />
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
      <div className="card">
        <div className="card-img">
            <img  referrerpolicy="no-referrer" src={ele.image} alt="vac" />
        </div>
        <div className="card-info">
            <p className="card-title">{ele.title}</p>
          <p className="text-body">
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
