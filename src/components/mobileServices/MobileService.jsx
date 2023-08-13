import React from 'react'
import "./MobileService.scss"
import { Col, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
function MobileService() {
  return (
    <div className='mobileService-main mt-5'>
       <Helmet>
        <title>whoose to help for develop best mobile apps? - Blackbull Technologies</title>
        <meta name="description" content="we are provide a various app development sevices like - Native mobile app development,Third party integration,Hybrid mobile app development,Mobile UI/UX development,Mobile app maintenance,Mobile app testing" />
        <meta name="keywords" content="best mobile apps,help for develop best mobile apps, develop best mobile apps, Native mobile app development,Third party integration,Hybrid mobile app development,Mobile UI/UX development,Mobile app maintenance,Mobile app testing" />
        </Helmet>
         <Row >
        
        <h1 className="main-heading">Mobile App Development Services</h1>
        <h2 className="sub-text">At Blackbull Technology, we strive to develop mobile apps after
                careful planning and applying necessary methodology to create the
                perfect app for you.</h2>
    
    </Row>
        <Row className='mt-5'>
            <Col sm={12} md={6} lg={6}> <div className="cards">
    <div className="card ">
        <p className="tip">
                        Native mobile app development
                      </p>
       
    </div>
    <div className="card ">
        <p className="tip">
                      Hybrid mobile app development
                    </p>
       
    </div>
    <div className="card ">
        <p className="tip">
                      Mobile app maintenance
                    </p>
       
    </div>
</div></Col>
 <Col sm={12} md={6} lg={6}> <div className="cards">
    <div className="card ">
        <p className="tip">
                      Third party integration
                    </p>
       
    </div>
    <div className="card ">
        <p className="tip">
                      Mobile UI/UX development
                    </p>
       
    </div>
    <div className="card ">
        <p className="tip">
                      Mobile app testing
                    </p>
       
    </div>
</div></Col>
        </Row>
       
    </div>
  )
}

export default MobileService