import React from 'react'
import "./MobileService.scss"
import { Col, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
function MobileService() {
  return (
    <div className='mobileService-main mt-5'>
       <Helmet>
        <title>BlackBull Technologies</title>
        <meta name="description" content="we are provide a various app and web development services" />
        <meta name="keywords" content="blackbull, blackbuck, black, technologies, blackbull technologies, welcome blackbull, technosoft, infotech, blackbull technosoft, blackbull infotech,mobile service,ui/ux, responsive design,web development,app development" />
        </Helmet>
         <Row >
        
        <h1 className="main-heading">Mobile App Development Services</h1>
        <h2 className="sub-text">At Blackbull Technology, we strive to develop mobile apps after
                careful planning and applying necessary methodology to create the
                perfect app for you.</h2>
    
    </Row>
        <Row className='mt-5'>
            <Col sm={12} md={6} lg={6}> <div class="cards">
    <div class="card ">
        <p class="tip">
                        Native mobile app development
                      </p>
       
    </div>
    <div class="card ">
        <p class="tip">
                      Hybrid mobile app development
                    </p>
       
    </div>
    <div class="card ">
        <p class="tip">
                      Mobile app maintenance
                    </p>
       
    </div>
</div></Col>
 <Col sm={12} md={6} lg={6}> <div class="cards">
    <div class="card ">
        <p class="tip">
                      Third party integration
                    </p>
       
    </div>
    <div class="card ">
        <p class="tip">
                      Mobile UI/UX development
                    </p>
       
    </div>
    <div class="card ">
        <p class="tip">
                      Mobile app testing
                    </p>
       
    </div>
</div></Col>
        </Row>
       
    </div>
  )
}

export default MobileService