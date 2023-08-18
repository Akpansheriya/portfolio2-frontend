import React, { useState } from "react";
import "./package.scss";
import { Button, Col, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import PackageModal from "./PackageModal";
function Package() {
  const [open,setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = ()  => setOpen(false)
  return (
    <>
      <div className="discuss-btn">
        <Button onClick={handleOpen}>Let's Discuss With Us -></Button>
      </div>
      <Row className="head-class">
        <h1 className="main-heading">Let's Discuss About Work </h1>
        <h2 className="sub-heading">
          {" "}
          we are one of the best strategic and successfull it solution company{" "}
        </h2>
      </Row>
      <div className="pricing-main">
        <Row className="row-class">
          <Row>
            <h1 className="main-heading2">
              {" "}
              <span>Apps</span> Development{" "}
            </h1>
            <h2 className="sub-heading2">
              {" "}
              let's <span>go</span> with <span>better</span> experience{" "}
            </h2>
          </Row>
          <Col sm={12} md={6} lg={6}>
            <div className="main-img">
              <img src="../assets/pack1.png" alt="app development" />
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="main-text">
              <p>
                {" "}
                <span> =></span> <span>BlackBull Technologies</span> is at the
                forefront of app development, excelling in both Flutter and
                native technologies to craft remarkable iOS and Android
                applications. Flutter, renowned for its cross-platform
                capabilities, empowers BlackBull to create consistent and
                visually appealing apps that operate seamlessly across various
                devices. Its single codebase minimizes development time and
                costs while delivering a native-like experience.
              </p>
              <p>
                {" "}
                <span> =></span>In addition, <span>BlackBull's</span>{" "}
                proficiency in native app development ensures the creation of
                apps finely tuned to the intricacies of each platform. The
                company's adeptness in iOS development guarantees applications
                that integrate seamlessly into the Apple ecosystem, leveraging
                the latest advancements for optimal performance. Likewise, their
                mastery of Android development results in apps that harness the
                unique features of the Android platform, enhancing user
                engagement and satisfaction.
              </p>
              <p>
                {" "}
                <span> =></span> <span>BlackBull Technologies</span> portfolio
                showcases their commitment to innovation, user-centered design,
                and technical excellence, making them the ideal partner for
                crafting cutting-edge applications that cater to diverse
                audiences on both iOS and Android platforms.
              </p>
            </div>
            <div className="discuss-btn cent">
              <Button  onClick={handleOpen}>Let's Discuss With Us -></Button>
            </div>
          </Col>
        </Row>
        
        <Row className="row-class">
          <Row>
            <h1 className="main-heading2">
              {" "}
              Web <span>Development</span>{" "}
            </h1>
            <h2 className="sub-heading2">
              {" "}
              let's <span>make</span> your <span>bussiness</span> with{" "}
              <span>astonishing</span> websites{" "}
            </h2>
          </Row>
          <Col sm={12} md={6} lg={6}>
            <div className="main-text">
              <p>
                {" "}
                <span> =></span> <span>Blackbull Technologies</span> is a
                leading tech firm adept in harnessing the power of various web
                technologies. Node.js, a server-side JavaScript runtime,
                empowers them to create scalable and efficient web applications.
                Their proficiency extends to Laravel and PHP, robust backend
                frameworks that underpin their web solutions with security and
                functionality.
              </p>
              <p>
                {" "}
                <span> =></span> React.js, Angular, and Vue.js, cutting-edge
                frontend frameworks, enable them to craft dynamic and
                interactive user interfaces, ensuring seamless user experiences.
              </p>
              <p>
                {" "}
                <span> =></span> In the realm of content management,{" "}
                <span>Blackbull</span> leverages WordPress, leveraging its
                versatility to develop user-friendly websites and blogs. Whether
                it's crafting real-time applications with Node.js, building
                responsive interfaces with React.js, Angular, and Vue.js, or
                utilizing PHP and Laravel for powerful backends,{" "}
                <span>Blackbull Technologies</span> amalgamates these
                technologies to craft digital solutions that align with modern
                business demands, user expectations, and industry standards.
                Their expertise fuels innovation, making them a go-to choice for
                businesses seeking exceptional web solutions.
              </p>
            </div>
            <div className="discuss-btn cent">
              <Button  onClick={handleOpen}>Let's Discuss With Us -></Button>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="main-img">
              <img src="../assets/pack2.png" alt="app development" />
            </div>
          </Col>
        </Row>
        <div className="body">
          <div className="wrapper">
            <div className="marquee">
              <div className="marquee-group">
                <img src="../assets/flutter.png" alt="flutter" />
                <img src="../assets/ios.png" alt="ios" />
                <img src="../assets/android1.png" alt="android" />
                <img src="../assets/react.png" alt="react" />
                <img src="../assets/laravel.svg" alt="laravel" />
                <img src="../assets/node.png" alt="node" />
                <img src="../assets/react.png" alt="react" />
                <img src="../assets/angular.png" alt="angular" />
                <img src="../assets/wordpress.png" alt="wordpress" />
                <img src="../assets/php.png" alt="php" />
              </div>
              <div aria-hidden="true" className="marquee-group">
                <img src="../assets/flutter.png" alt="flutter" />
                <img src="../assets/ios.png" alt="ios" />
                <img src="../assets/android1.png" alt="android1" />
                <img src="../assets/react.png" alt="react" />
                <img src="../assets/laravel.svg" alt="laravel" />
                <img src="../assets/node.png" alt="node" />
                <img src="../assets/react.png" alt="react" />
                <img src="../assets/angular.png" alt="angular" />
                <img src="../assets/wordpress.png" alt="wordpress" />
                <img src="../assets/php.png" alt="php" />
              </div>
            </div>
            <div className="marquee marquee-reverse">
              <div className="marquee-group">
                <img src="../assets/flutter.png" alt="flutter" />
                <img src="../assets/ios.png" alt="ios" />
                <img src="../assets/android1.png" alt="android" />
                <img src="../assets/react.png" alt="react" />
                <img src="../assets/laravel.svg" alt="laravel" />
                <img src="../assets/node.png" alt="node" />
                <img src="../assets/react.png" alt="react" />
                <img src="../assets/angular.png" alt="angular" />
                <img src="../assets/wordpress.png" alt="wordpress" />
                <img src="../assets/php.png" alt="php" />
              </div>
              <div aria-hidden="true" className="marquee-group ">
                <img src="../assets/flutter.png" alt="flutter" />
                <img src="../assets/ios.png" alt="ios" />
                <img src="../assets/android1.png" alt="android" />
                <img src="../assets/react.png" alt="react" />
                <img src="../assets/laravel.svg" alt="laravel" />
                <img src="../assets/node.png" alt="node" />
                <img src="../assets/react.png" alt="react" />
                <img src="../assets/angular.png" alt="angular" />
                <img src="../assets/wordpress.png" alt="wordpress" />
                <img src="../assets/php.png" alt="php" />
              </div>
            </div>
          </div>
        </div>
        <PackageModal show={open} handleClose={handleClose} />
      </div>
      <Footer />
    </>
  );
}

export default Package;
