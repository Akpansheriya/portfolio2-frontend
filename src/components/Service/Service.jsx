import React from 'react'
import "./Service.scss"
import { Col, Row } from 'react-bootstrap'
import { services } from './servicedata'
import { Helmet } from 'react-helmet'
function Service() {
  return (
    <div className='service mt-5' id="Services">
       <Helmet>
        <title>BlackBull Technologies</title>
        <meta name="description" content="we are provides a various type of services and we are working in various technologies" />
        <meta name="keywords" content="blackbull, blackbuck, black, technologies, blackbull technologies, welcome blackbull, technosoft, infotech, blackbull technosoft, blackbull infotech,services,server,service,apps,webs,app development,web development" />
        </Helmet>
         <Row >
        
        <h1 className="main-heading">Our Services</h1>
        <h2 className="sub-heading"> grow your business with us </h2>
    
    </Row>
    <Row cols="auto" className='mt-3 '>
     { services ? services.map((ele) => (<>
        <Col sm={12} lg={4} md={4} className="d-flex mb-5 ">
            <div key={ele.title} className='cardbox-main' data-aos="fade-up" data-aos-delay={ele.aos}>
        <div class="cardBox">
  <div class="card">
     <div class="h4">
        <img className='img' src={ele.image} alt='hello' />
        <div className='title'>{ele.title}</div>
     </div>
   
    <div class="content">
      <div class="h3">{ele.title}</div>
      <p>{ele.description}</p>
    </div>
  </div>
</div>
</div>
        </Col>
     </>)):""}  
    </Row>

    </div>
  )
}

export default Service