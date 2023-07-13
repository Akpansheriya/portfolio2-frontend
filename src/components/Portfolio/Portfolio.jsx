import React from 'react'
import "./Portfolio.scss"
import Carousel from "react-elastic-carousel";
import { Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';


function Portfolio() {
    const items = [
        {
            "image":"../assets/slider-12.png",
            "title": "Emopin"
    
        },
        {
            "image":"../assets/slider-23.png",
            "title": "Task-List"
    
        },
        {
            "image":"../assets/slider-34.png",
            "title": "Snake Game"
    
        },
        {
            "image":"../assets/slider-45.png",
            "title": "Quizer"
    
        }
    ]
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
    <Carousel className='mt-5' verticalMode itemsToShow={1}   easing="cubic-bezier(1,.15,.55,1.54)"
  tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
  transitionMs={700}>
    {items
        ? items.map((v) => (
            <>
            <div
              className="itemss"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
            <img src={v.image} alt="hu"/>
            <h2>{v.title}</h2>
          
            </div>
            </>  ))
        : ""}
</Carousel>
    </div>
  )
}

export default Portfolio