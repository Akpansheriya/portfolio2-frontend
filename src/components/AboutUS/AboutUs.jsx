import React from 'react'
import "../Header/Header"
import { Col, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

function AboutUs() {
  return (
    <div className='mt-5' >
       <Helmet>
        <title>best it solution company in surat - Blackbull Technologies </title>
        <meta name="description" content="Welcome To Blackbull technologies,we are the team of best and professional developers with best expertise and experience, we are providing a best it solutions and strategic ideas to our clients for build a perfect and best product and make their business successful." />
        <meta name="keywords" content="professional it company,professional developers,best it solution," />
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
                        <img  referrerpolicy="no-referrer" src='../assets/blackbulllogo.png' alt='mobile-header' />
                        </div>
                    </div>
                </Col>
                <Col lg={8} xs={12} md={8}>
                <div className='header-right'>
                    <h1>WE ARE THE PROFESSIONAL DEVELOPERS </h1>
                    <h1>WE ARE PROVIDING A BEST IT SOLUTIONS </h1>
                    <p>Welcome To <span className="bold-style"> Blackbull technologies</span>,
               Your Number One Source For All Things. We're Dedicated To Giving You The Best Of Work, With A Focus On Three Characteristics, Ie: Dependability,Customer Services And Uniquenessl.</p>
               <p>we are the team of best and professional developers with best expertise and experience, we are providing a best it solutions and strategic ideas to our clients for build a perfect and best product and make their business successfull </p>
              <h2>WE WILL HELP YOU TO</h2>
              <h2>GROW YOUR BUSINESS</h2>
              <p>we are the team of <span className="bold-style">professional
                developers</span></p>
                </div>
                </Col>
                
            </Row>
        </div>
    
    </div>
  )
}

export default AboutUs