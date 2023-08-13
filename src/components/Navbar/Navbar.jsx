import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import {Container,Nav,Navbar} from 'react-bootstrap'

function Navbars() {
  const [show,setShow] = useState(false)
 
  const navControl = () => {
    if(window.scrollY > 100){
     
      setShow(true)
    }else{
      setShow(false)
    }
  }
  
  useEffect(() => {
   window.addEventListener('scroll', navControl)
    return () => {
      window.removeEventListener('scroll', navControl)
    };
  }, []);
  return (
    <div className='Navbar-main'>
      
          <Navbar fixed='top' className={`${show && "back"}`} expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
         <img  referrerpolicy="no-referrer" src="../assets/blackbulllogo.png" alt='logo'/>
          <Nav className="ml-auto">
          <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav.Link  href="#hero">Home</Nav.Link>
            <Nav.Link  href="#About">About</Nav.Link>
            <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#Career">Career</Nav.Link>
            <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#ContactUs">Contact Us</Nav.Link>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Navbars