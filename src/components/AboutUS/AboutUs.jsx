import React from 'react'
import "../Header/Header"
import { Col, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

function AboutUs() {
  return (
    <div className='mt-5' >
       <Helmet>
        <title>BlackBull Technologies</title>
        <meta name="description" content="Welcome To Blackbull technologies,Your Number One Source For All Things. We're Dedicated To Giving You The Best Of Work, With A Focus On Three Characteristics, Ie: Dependability,Customer Services And Uniquenessl." />
        <meta name="keywords" content="blackbull, blackbuck, black, technologies, blackbull technologies, welcome blackbull, technosoft, infotech, blackbull technosoft, blackbull infotech,about,aboutus,about us, blackbull about" />
        </Helmet>
         <div className="header-main" data-aos="zoom-in" data-aos-delay="1000">
         <Row id="About" >
        
        <h1 className="main-heading" >About Us</h1>
        <h2 className="sub-heading"> grow your business with us </h2>
    
    </Row>
            <Row className='row-main'  >
            <Col lg={4} xs={12} md={4}>
                    <div className='header-left'>
                        <div className='image-container-2'>
                        <img  src='../assets/blackbulllogo.png' alt='mobile-header' />
                        </div>
                    </div>
                </Col>
                <Col lg={8} xs={12} md={8}>
                <div className='header-right'>
                    <h1>WE ARE THE PROFESSIONAL DEVELOPER </h1>
                    <p>Welcome To <span class="bold-style"> Blackbull technologies</span>,
               Your Number One Source For All Things. We're Dedicated To Giving You The Best Of Work, With A Focus On Three Characteristics, Ie: Dependability,Customer Services And Uniquenessl.</p>
              <h2>WE WILL HELP YOU TO</h2>
              <h2>GROW YOUR BUSINESS</h2>
              <p>we are the team of <span class="bold-style">professional
                developer</span></p>
                </div>
                </Col>
                
            </Row>
        </div>
    
    </div>
  )
}

export default AboutUs