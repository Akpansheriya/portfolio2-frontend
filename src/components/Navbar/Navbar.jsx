import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Container, Nav, Navbar } from "react-bootstrap";

function Navbars() {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleLinkClick = () => {
    setExpanded(false);
  };
  const navControl = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navControl);
    return () => {
      window.removeEventListener("scroll", navControl);
    };
  }, []);
  return (
    <div className="Navbar-main">
      <Navbar
        fixed="top"
        className={`${show && "back"}`}
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        expanded={expanded}
      >
        <Container>
          <a href="/">
          <img
            referrerpolicy="no-referrer"
            src="../assets/blackbulllogo.png"
            alt="logo"
          /></a>
          <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ml-auto">
              <Nav.Link  spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleLinkClick} href="#hero">Home</Nav.Link>
              <Nav.Link  spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleLinkClick} href="#About">About</Nav.Link>
              <Nav.Link  spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleLinkClick} href="#Services">Services</Nav.Link>
              <Nav.Link  spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleLinkClick} href="#Career">Career</Nav.Link>
              <Nav.Link  spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleLinkClick} href="#Portfolio">Portfolio</Nav.Link>
              <Nav.Link  spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleLinkClick} href="#ContactUs">Contact Us</Nav.Link>
                 <Nav.Link   spy={true}
                 className="package-btn"
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleLinkClick} href="/works">Start Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;
