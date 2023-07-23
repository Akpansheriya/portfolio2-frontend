import React from 'react'
import "./Portfolio.scss"
import Carousel from "react-elastic-carousel";
import { Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';



function Portfolio({ apps, onAppClick}) {
   
  return (
    <div className='portfolio-main mt-5' id="Portfolio">
       
    
       <Helmet>
        <title>BlackBull Technologies</title>
        <meta name="description" content="our portfolio section show a various type of applications which" />
        <meta name="keywords" content="blackbull, blackbuck, black, technologies, blackbull technologies, welcome blackbull, technosoft, infotech, blackbull technosoft, blackbull infotech,portfolio, black port,port,portf,portfolios" />
        </Helmet>
         <Row >
        
        <h1 className="main-heading">OurPortfolio</h1>
        <h2 className="sub-heading"> grow your business with us </h2>
    
    </Row>
    <Carousel className='mt-5'  itemsToShow={1}   easing="cubic-bezier(1,.15,.55,1.54)"
  tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
  transitionMs={700}>
    {apps
        ? apps.map((v) => (
            <>
            <div
            key={v.title}
              className="itemss"
             
            >
              <Row className='row-class'>
                <Col sm={12} md={6} lg={6}>  <img src={v.image1}   alt="hu"  data-aos="fade-up"
     data-aos-duration="3000"/></Col>
                <Col sm={12} md={6} lg={6}> 
                <h2>{v.title}</h2>
                <div className='description'>
                  <p>{v.description1}</p>
                </div>
                <Link to="/portfolio" onClick={() => onAppClick(v.id)} >Show More</Link>
                </Col>
              </Row>
          
          
          
            </div>
            </>  ))
        : ""}
</Carousel>
    </div>
  )
}

export default Portfolio