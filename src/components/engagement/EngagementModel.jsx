import React from "react";
import "./Engagement.scss";
import { Col, Row } from "react-bootstrap";
import { engageData } from "./engageData";
import { Helmet } from "react-helmet";
function EngagementModel() {
  return (
    <div className=" engage-main mt-5 ">
       <Helmet>
        <title>BlackBull Technologies</title>
        <meta name="description" content="Our team comprises of some of the best professionals in the industry. You might only need to add a few people to your existing team or need a whole team. We have got you covered in both the cases!" />
        <meta name="keywords" content="blackbull, blackbuck, black, technologies, blackbull technologies, welcome blackbull, technosoft, infotech, blackbull technosoft, blackbull infotech,engagement,model,client,contact,clients,client of blackbull,how to find client" />
        </Helmet>
      <Row>
        <h1 className="main-heading">Our Engagement Model</h1>
        <h2 className="sub-heading"> grow your business with us </h2>
      </Row>

      <Row>
        {engageData
          ? engageData.map((ele) => (
              <>
                <Col sm={12} md={4} lg={4}>
                  <div className="book-main" data-aos="fade-up" data-aos-delay={ele.aos}>
                    <div class="book">
                      <p>{ele.description}</p>
                      <div class="cover">
                        <img
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
