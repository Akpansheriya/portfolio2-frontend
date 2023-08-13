import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "./view.scss";
import { Link } from "react-router-dom";
import Skeleton from "../body/Skeleton";

function Veiw({ appsData, cookies }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const id = JSON.parse(cookies.selectedAppId);

  const selectedApp = appsData.find((app) => app.id === id);

  return (
    <div className="mainView">
      <div className="link-main">
        <Link to="/">Go Back </Link>
      </div>
      <div>
        {selectedApp
          ?  (
              <>
                <Row className="pt-5" id="main">
                  <h1 className="main-heading">{selectedApp.title}</h1>
                  <h2 className="sub-heading"> grow your business with us </h2>
                </Row>
                <Row>
                  <Col sm={12} md={ selectedApp?.image5 ? "3" : "4"} lg={ selectedApp?.image5 ? "3" : "4"}>
                    {selectedApp.image2 ? (
                      <img
                      className={selectedApp?.image5 ? "img-class" : "img-class2"}
                        data-aos-id="image1"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        src={selectedApp.image2}
                        alt={selectedApp.title}
                      />
                    ): (<><Skeleton /></>)}
                   
                  </Col>
                  <Col sm={12} md={ selectedApp?.image5 ? "3" : "4"} lg={ selectedApp?.image5 ? "3" : "4"}>
                    {selectedApp.image3 ? (
                      <img
                      className={selectedApp?.image5 ? "img-class" : "img-class2"}
                        data-aos-id="image2"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        src={selectedApp.image3}
                        alt={selectedApp.title}
                      />
                    ): (<Skeleton />)}
                   
                  </Col>
                  <Col sm={12} md={ selectedApp?.image5 ? "3" : "4"} lg={ selectedApp?.image5 ? "3" : "4"}>
                    {selectedApp.image4 ? (
                      <img
                      className={selectedApp?.image5 ? "img-class" : "img-class2"}
                        data-aos-id="image3"
                        data-aos="fade-up"
                        data-aos-duration="2500"
                        src={selectedApp.image4}
                        alt={selectedApp.title}
                      />
                    ): (<Skeleton />)}
                    
                  </Col>
                {
                  selectedApp?.image5 ?
                <Col sm={12} md={3} lg={3}>
                    {selectedApp.image5 ? (
                      <img
                      className={selectedApp?.image5 ? "img-class" : "img-class2"}
                        data-aos-id="image4"
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        src={selectedApp.image5}
                        alt={selectedApp.title}
                      />
                    ):(<Skeleton />)}
                   
                  </Col> : ""} 
                </Row>
                <Row className="pt-5">
                  <h1 className="main-heading">Description About This App</h1>
                  <div className="description">
                    <p>{selectedApp.description2} </p>
                  </div>
                </Row>

                <Row className="mt-5">
                  <h1 className="main-heading">View About App</h1>
                  <h2 className="sub-heading"> Let's Go For Screening </h2>
                </Row>

                <Row className="row-class">
                  <Col sm={12} md={6} lg={6}>
                    {selectedApp.image3 ? (
                      <img
                        className="port-img"
                        data-aos-id="image1-animation"
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        src={selectedApp.image2}
                        alt={selectedApp.title}
                      />
                    ):(<Skeleton/>)}
                   
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                    <h1 className="main-heading">{selectedApp.title1}</h1>
                    <div className="description">
                      <p> {selectedApp.data1}</p>
                    </div>
                  </Col>
                </Row>
                <Row className="row-class">
                  <Col sm={12} md={6} lg={6}>
                    <div className="description">
                      <h1 className="main-heading">{selectedApp.title2}</h1>
                      <p> {selectedApp.data2}</p>
                    </div>
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                    {selectedApp.image3 ? (
                      <img
                        className="port-img"
                        data-aos-id="image2-animation"
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        src={selectedApp.image3}
                        alt={selectedApp.title}
                      />
                    ):(<Skeleton />)}
                   
                  </Col>
                </Row>
                <Row className="row-class">
                  <Col sm={12} md={6} lg={6}>
                    {selectedApp.image3 ? (
                      <img
                        className="port-img"
                        data-aos="fade-up"
                        data-aos-id="image3-animation"
                        data-aos-duration="3000"
                        src={selectedApp.image4}
                        alt={selectedApp.title}
                      />
                    ):(<Skeleton />)}
                   
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                    <h1 className="main-heading">{selectedApp.title3}</h1>
                    <div className="description">
                      <p> {selectedApp.data3}</p>
                    </div>
                  </Col>
                </Row>
               {
                 selectedApp?.title4 ? 
             <Row className="row-class">
                  <Col sm={12} md={6} lg={6}>
                    <h1 className="main-heading">{selectedApp.title4}</h1>
                    <div className="description">
                      <p> {selectedApp.data4}</p>
                    </div>
                  </Col>
                  <Col sm={12} md={6} lg={6}>
                    {selectedApp.image5 ? (
                      <img
                        className="port-img"
                        data-aos-id="image4-animation"
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        src={selectedApp.image5}
                        alt={selectedApp.title}
                      />
                    ):(<Skeleton />)}
                    
                  </Col>
                </Row>
                 : "" } 
              </>
            )
          : ""}
      </div>
    </div>
  );
}

export default Veiw;
