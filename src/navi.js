import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './navi.css';

function Nav1() {
  return (
      <div >
   <Navbar ml="auto" bg="primary" variant="dark" expand="lg" >
  <Navbar.Brand href="#home">
    <div className="ulli">
<ul className="ul1">
  <li>P</li>
  <li>A</li>
  <li>R</li>
  <li>I</li>
  <li>M</li> 
  <li>A</li>
  <li>L</li>
</ul>
<ul className="ul1">
  <li>C</li>
  <li>H</li>
  <li>A</li>
  <li>N</li>
  <li>D</li>
  <li>R</li>
  <li>A</li>
  <li>K</li>
  <li>A</li>
  <li>R</li> 
</ul>
</div>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="nav-1" variant="pills"  >
      <Nav.Link ml="auto" className="link-1"  href='/'><a>Home</a></Nav.Link>
      <Nav.Link className="link-1"  href='/aboutme'>Skills</Nav.Link>
      <Nav.Link className="link-1"  href='/myprojects'>Applications</Nav.Link>
    </Nav>

  </Navbar.Collapse>
</Navbar>
</div>
  );
}

export default Nav1;
