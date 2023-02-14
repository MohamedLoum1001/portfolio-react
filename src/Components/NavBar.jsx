import { useState, useEffect } from "react";
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import {
  BrowserRouter as Router
} from "react-router-dom";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  
  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <div className="container-fluid">
      <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse className="justify-content-between">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>ACCUEIL</Nav.Link>
            <Nav.Link href="#presentation" className={activeLink === 'presentation' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('presenation')}>PRESENTATION</Nav.Link>
            <Nav.Link href="#portfolio" className={activeLink === 'portfolio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('portfolio')}>PORTFOLIO</Nav.Link>
            <Nav.Link href="#competences" className={activeLink === 'competences' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('competences')}>COMPETENCES</Nav.Link>
            <Nav.Link href="#experiences" className={activeLink === 'experiences' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experiences')}>EXPERIENCES</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    </Router>
  )
}

export default NavBar

