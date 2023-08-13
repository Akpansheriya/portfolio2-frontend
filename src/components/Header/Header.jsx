import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "./Header.scss"
import { Helmet } from 'react-helmet'



function Header() {
  return (
    <div>
      <Helmet>
        <title>best Mobile App & Web App Development company</title>
        <meta name="description" content="welcome to blackbull technologies.we are providing best mobile app and web development  " />
        <meta name="keywords" content="app development, web development, best mobile app & web app development company, development,web app , app " />
        </Helmet>
        <div className="header-main "  data-aos-duration="1000" data-aos="zoom-in">
            <Row className='row-main' >
            <Col lg={4} xs={12} md={4}>
                    <div className='header-left'>
                        <div className='image-container'>
                        <img  referrerpolicy="no-referrer" src='../assets/screen.jpg' alt='Mobile App & Web App Development' />
                        </div>
                    </div>
                </Col>
                <Col lg={8} xs={12} md={8}>
                <div className='header-right'>
                    <h1>Mobile App & Web App Development</h1>
                    <p>We are a premier and one of the best Mobile App & Web App development company
              with bases in India. With <span className="bold-style"> blackbull</span>, you work with handpicked brains from
              the app development industry, who also possess business acumen. Together, we help you roll out
              applications that not just clique among the masses but fetch you profits as well. We give shape to your
              intangible ideas, turning them into profit-generating applications that solve real-world concerns.</p>
              <h2>WE WILL HELP YOU TO</h2>
              <h2>GROW YOUR BUSINESS</h2>
              <p>we are the team of <span className="bold-style">professional
                developer</span></p>
                </div>
                </Col>
                
            </Row>
        </div>
     
    </div>
  )
}

export default Header