import React from "react";
import "./Portfolio.scss";
import Carousel from "react-elastic-carousel";
import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Skeleton from "../body/Skeleton";


function Portfolio({ apps, onAppClick,appId,webData,handleId}) {
  
  return (
    <div className="portfolio-main mt-5" >
      <Helmet>
        <title>we are build a various products for our clients - Blackbull Technologies</title>
        <meta
          name="description"
          content="we are build a various products for our clients like a Baysten,wooberly,choira,easy fasting,scientific self discovery"
        />
        <meta
          name="keywords"
          content="various products,build a various products,products for our clients,Baysten,wooberly,choira,easy fasting,scientific self discovery"
        />
      </Helmet>
      
{
appId === "web"  && (
  <>
   <Carousel
   enableAutoPlay 
   autoPlaySpeed={2000}
        className="mt-5"
        itemsToShow={1}
        easing="cubic-bezier(1,.15,.55,1.54)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={700}
      >
        {
          webData ? webData.map((ele,ind) => (
            <>
             <div className="itemss">
        
        <Row className="row-class">
          <Col  sm={12} md={6} lg={6}>
          <img
                      className="web-img" src={ele?.image1} alt={ele?.title} />
          </Col>
          <Col sm={12} md={6} lg={6}> 
          <h2>{ele?.title}</h2>
                    <div className="description">
                      <p>{ele?.sub_description}</p>
                    </div>
                    <Link to="/webPortfolio" onClick={() => handleId(ele.id)}>
                      Show More
                    </Link>
          </Col>
        </Row>
      
       </div>
            </>
          )) : ""
        } 
       
         </Carousel>
  </>
) 
}
     
{
  appId === "apps" && (
    <>
    <Carousel
    enableAutoPlay 
    autoPlaySpeed={2000}
        className="mt-5"
        itemsToShow={1}
        easing="cubic-bezier(1,.15,.55,1.54)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={700}
      >

     
        {apps
          ? apps.map((v) => (
              <>
                <div key={v.title} className="itemss">
                  <Row className="row-class">
                    <Col sm={12} md={6} lg={6}>
                     
                     
                     {
                      v.image1 ? (
                        <img
                        className="port-img"
                        referrerpolicy="no-referrer"
                         src={v.image1}

loading="lazy"
                         alt={v.title}
                         data-aos="fade-up"
                         data-aos-duration="3000"
                       />
                      ) : (!v.image1 && (
                        <Skeleton/>
                      ))
                     }  
                     
                     
                     
                        
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                      <h2>{v.title}</h2>
                      <div className="description">
                        <p>{v.description1}</p>
                      </div>
                      <Link to="/portfolio" onClick={() => onAppClick(v.id)}>
                        Show More
                      </Link>
                    </Col>
                  </Row>
                </div>
              </>
            ))
          : ""}
      </Carousel>
    </>
  )
}
      
    </div>
  );
}

export default Portfolio;
