import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import "./Company.scss"
import {CompanyData,strips} from "./companyData"
import { Helmet } from 'react-helmet';

let timer;
let year;
let client;
function CompanyPage() {
  const [ counterState, setCounter ] = useState(0)
  const [ counterState2, setCounter2 ] = useState(0)
  const [ counterState3, setCounter3] = useState(0)
 
  useEffect(() => {
   clearInterval(timer)
   timer = setInterval(() => {
      if (counterState === 100 ) {
         clearInterval(timer)
         return
       }
      setCounter(prev => prev+1)
    
      
   },100)
  
   return () => clearInterval(timer)
  },[counterState])


  useEffect(() => {
    clearInterval(year)
    year = setInterval(() => {
       if (counterState3 === 4 ) {
          clearInterval(year)
          return
        }
        setCounter3(prev => prev+1)
     
       
    },2000)
   
    return () => clearInterval(year)
   },[counterState3])

   
   useEffect(() => {
    clearInterval(client)
    client = setInterval(() => {
       if (counterState2 === 50 ) {
          clearInterval(client)
          return
        }
        setCounter2(prev => prev+1)
     
       
    },200)
   
    return () => clearInterval(client)
   },[counterState2])

  return (
    <div className="mt-5">
       <Helmet>
        <title>best strategic and successfull it company in surat </title>
        <meta name="description" content="we are providing a best strategic ideas to our clients for make their businesses successfull,our projects,goals,story,success,history,features are given below, we are the best strategic and it company in surat " />
        <meta name="keywords" content="best strategic company in surat,successfull it company in surat,best strategic and successfull it company in surat,it company in surat" />
        </Helmet>
      <div className="company-main" id='Company'>
        <Row >
        
            <h1 className="main-heading"> Welcome To Our mission, story and goals </h1>
            <h2 className="sub-heading"> we are one of the best strategic and successfull it solution company </h2>
        
        </Row>
       
          <Row >
            {CompanyData
              ? CompanyData.map((ele,ind) => (
                  <>
                  
                    <Col xs={12} md={4} lg={4} >
                      <div key={ind} className="card">
                        <div className={ele?.className} data-aos="fade-up" data-aos-delay={ele.aos}>
                          <h3>{ele?.title}</h3>
                        </div>

                        <div className="card-side back">
                          <div className="back-text">
                            <h3>{ele?.title}</h3>
                            <p>{ele?.description}</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </>
                ))
              : ""}
          </Row>
        
        <div className="card-strip-main mt-5">
            <Row className='stripe-main-sec' >
                <Col xs={12} md={6} lg={6}>
                    <div className="ui-main" data-aos="fade-up" data-aos-delay="100">
                       <img  referrerpolicy="no-referrer" src="../assets/marketing.png" alt="ui-section" />
                    </div>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  {
                    strips ? strips.map((ele,ind) => (
                        <>
                     
                       
                            <div key={ind} className="strip-main" data-aos="fade-up" data-aos-delay={ele.aos}>
                            <div className="strip-sub">
                                <p className="upper-case">{ele?.title}</p>
                                <p className="down-case">{ele?.description}</p>
                            </div>
                            </div>
                        
                   
                        </>
                    ))
                  : ""}  
                </Col>
            </Row>
        </div>
          
            <div className="counter-main" data-aos="fade-up" data-aos-delay="100">
<div className="counter-sub">
  <Row className='row-class'>
    <div className="count-text">
    <h2>Our Achievements</h2>
    </div>
    <Col md={10} lg={10} className='col-class'>
      <div className='count-div'>
        <h2>{counterState}+</h2>
        <p className='count-p'>projects</p>
      </div>
      <div className='count-div'>
        <h2>{counterState2}+</h2>
        <p className='count-p'>clients</p>
      </div>
      <div className='count-div'>
        <h2>{counterState3}+</h2>
        <p className='count-p'>glotious <br/> years</p>
      </div>
    </Col>
  </Row>
</div>
            </div>
          
        
      </div>
    </div>
  )
}

export default CompanyPage