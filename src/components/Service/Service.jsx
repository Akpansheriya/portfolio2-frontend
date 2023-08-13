import React from 'react'
import "./Service.scss"
import { Col, Row } from 'react-bootstrap'
import { services } from './servicedata'
import { Helmet } from 'react-helmet'
function Service() {
  return (
    <div className='service mt-5' id="Services">
       <Helmet>
        <title>Which company is provide best it services? - Blackbull Technologies</title>
        <meta name="description" content="we are provides a various type of it services ex. App development,web development,it solution,E-commerce development,digital marketing,graphic design" />
        <meta name="keywords" content="best it services,best it services company in surat, top 5 it company,app development, web development,E-commerce development, digital marketing,graphic design" />
        </Helmet>
         <Row >
        
        <h1 className="main-heading">Our Services</h1>
        <h2 className="sub-heading">we are providing best It services </h2>
    
    </Row>
    <Row cols="auto" className='mt-3 '>
     { services ? services.map((ele) => (<>
        <Col sm={12} lg={4} md={4} className="d-flex mb-5 ">
            <div key={ele.title} className='cardbox-main' data-aos="fade-up" data-aos-delay={ele.aos}>
        <div className="cardBox">
  <div className="card">
     <div className="h4">
        <img  referrerpolicy="no-referrer" className='img' src={ele.image} alt='hello' />
        <div className='title'>{ele.title}</div>
     </div>
   
    <div className="content">
      <div className="h3">{ele.title}</div>
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