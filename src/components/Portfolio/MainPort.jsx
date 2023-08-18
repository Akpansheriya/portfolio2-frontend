import React from 'react'
import { Button, Row } from 'react-bootstrap'
import Portfolio from './Portfolio'

import "./Portfolio.scss"
import { useState } from 'react'

function MainPort({apps,onAppClick,webData,handleId}) {
    const [appId,setAppId] = useState("apps")
console.log("appId",appId)
const handleAppClick = () => {
    setAppId('apps');
  };
  
  const handleWebClick = () => {
    setAppId('web');
  };

  return (
    <div className='portfolio-section-main' id="Portfolio">
      <Row>
        <h1 className="main-heading">Our Portfolio</h1>
        <h2 className="sub-heading">we are build a various products for our clients</h2>
      </Row>
         <div className='main-btn'>
        <Button onClick={handleAppClick}>Apps</Button>
        <Button onClick={handleWebClick} >Web</Button>
      </div>
     
            <Portfolio apps={apps} onAppClick={onAppClick} appId={appId} webData={webData} handleId={handleId} />
       
       
       
  
    </div>
  )
}

export default MainPort