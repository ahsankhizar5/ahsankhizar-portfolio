import { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll <= 50) {
        // At top of page - always show
        setHidden(false);
        setScrolled(false);
      } else {
        setScrolled(true);
        // Scroll down detection
        if (currentScroll > lastScroll.current && !hidden) {
          setHidden(true);
        } 
        // Scroll up detection
        else if (currentScroll < lastScroll.current && hidden) {
          setHidden(false);
        }
      }
      lastScroll.current = currentScroll;

      // Close mobile menu on scroll
      if (window.innerWidth <= 768 && expanded) {
        setExpanded(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [hidden, expanded]);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar 
        expand="md" 
        className={`${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link 
                href="#home" 
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                href="#skills" 
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link 
                href="#projects" 
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/ahsankhizar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
                  <img src={navIcon1} alt="LinkedIn"  />
                </a>
                <a href="https://www.facebook.com/share/18AKXnz78v/" target="_blank" rel="noreferrer">
                  <img src={navIcon2} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/toolverse1?igsh=MWRqdHV5NmFsajU1ZQ==" target="_blank" rel="noreferrer">
                  <img src={navIcon3} alt="Instagram" />
                </a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}