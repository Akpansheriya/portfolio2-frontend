import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "./Header.scss"
import { Helmet } from 'react-helmet'



function Header() {
  return (
    <div>
      <Helmet>
        <title>BlackBull Technologies</title>
        <meta name="description" content="welcom to blackbull technologies.this is our header section" />
        <meta name="keywords" content="blackbull, blackbuck, black, technologies, blackbull technologies, welcome blackbull, technosoft, infotech, blackbull technosoft, blackbull infotech,header,head,home black home, blackbull home" />
        </Helmet>
        <div className="header-main "  data-aos-duration="1000" data-aos="zoom-in">
            <Row className='row-main' >
            <Col lg={4} xs={12} md={4}>
                    <div className='header-left'>
                        <div className='image-container'>
                        <img src='../assets/screen.jpg' alt='mobile-header' />
                        </div>
                    </div>
                </Col>
                <Col lg={8} xs={12} md={8}>
                <div className='header-right'>
                    <h1>Mobile App & Web App Development</h1>
                    <p>We are a premier web and mobile app development company
              with bases in India. With <span class="bold-style"> blackbull</span>, you work with handpicked brains from
              the app development industry, who also possess business acumen. Together, we help you roll out
              applications that not just clique among the masses but fetch you profits as well. We give shape to your
              intangible ideas, turning them into profit-generating applications that solve real-world concerns.</p>
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

export default Header