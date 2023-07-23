import React, { useRef, useState } from "react";
import Carousel from "react-elastic-carousel";
import "./Startup.scss";
import { Row } from "react-bootstrap";
import Model from "../Modal/Model";
import { Helmet } from "react-helmet";
function Startup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6, itemsToScroll: 2 },
    { width: 2050, itemsToShow: 7 },
    { width: 2350, itemsToShow: 8 },
  ];
  const itemsPerPage = 2;
  const items = [
    {
        "image":"../assets/flutter.png",
        "title":"Flutter",
        "exp":"1-2 years",
        
      },
    {
      "image":"../assets/react.png",
      "title":"React Js",
      "exp":"1-2 years",

    },
    {
      "image":"../assets/ios.png",
      "title":"Ios",
      "exp":"1-2 years",
      
    },
    {
      "image":"../assets/react.png",
      "title":"React Native",
      "exp":"1-2 years",
      
    },
    {
        "image":"../assets/laravel.svg",
        "title":"Laravel",
        "exp":"1-2 years",
        
      },
      {
        "image":"../assets/node.png",
        "title":"Node Js",
        "exp":"1-2 years",
        
      },
      {
        "image":"../assets/android1.png",
        "title":"Android",
        "exp":"1-2 years",
        
      }
  ]
  const carouselRef = useRef(null);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  let resetTimeout;

  return (
    <div className="startup-main">
       <Helmet>
        <title>BlackBull Technologies</title>
        <meta name="description" content=" we are working in various technologies like flutter,node,react,react-native,laravel,wordpress,php,
        " />
        <meta name="keywords" content="blackbull, blackbuck, black, technologies, blackbull technologies, welcome blackbull, technosoft, infotech, blackbull technosoft, blackbull infotech,services,server,service,apps,webs,app development,web development" />
        </Helmet>
      <Row>
        <h1 className="main-heading">Current Openings</h1>
        <h2 className="sub-heading"> grow your business with us </h2>
      </Row>

      <Carousel
        className="caro-sel"
        easing="cubic-bezier(1,.15,.55,1.54)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={700}
        breakPoints={breakPoints}
        ref={carouselRef}
        enableAutoPlay
        autoPlaySpeed={3000} // same time
        onNextEnd={({ index }) => {
          clearTimeout(resetTimeout);
          if (index  === totalPages) {
            resetTimeout = setTimeout(() => {
              carouselRef.current.goTo(0);
            }, 2000); // same time
          }
        }}
        itemsToShow={itemsPerPage}
      >
        {items
          ? items.map((v) => (
              <div
              key={v.title}
                className="itemss"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
              <img src={v.image} alt="hu"/>
              <h2>{v.title}</h2>
              <p>{v.exp}</p>
              <button type="button" className="join-btn" onClick={handleShow}>join</button>
              </div>
            ))
          : ""}
      </Carousel>
      <Model show={show} handleClose={handleClose}/>
    </div>
  );
}

export default Startup;
