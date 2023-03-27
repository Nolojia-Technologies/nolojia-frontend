import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import bluelogo from './images/bluelogo.png';
import './comp.css';
import { VscAccount, VscReactions } from "react-icons/vsc";
import { CiCircleChevDown } from "react-icons/ci";
import {  BsBrightnessLowFill } from "react-icons/bs";


function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img className='navbar_logo' src={bluelogo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Schedule</Nav.Link>
            <Nav.Link href="#">Livestream</Nav.Link>
            <Nav.Link href="#">Chat</Nav.Link>
            
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <BsBrightnessLowFill className='night-day_mode' size={'2em'} ></BsBrightnessLowFill>
            <VscAccount size={'1.8em'} className='account_icon' ></VscAccount>
            <Navbar.Text>
                User Name
            </Navbar.Text>
            <CiCircleChevDown className='dropwonw' size={'1.8em'} >
                {/* add a dropdown to go to account settings, logout etc */}
            </CiCircleChevDown>
            

          </Navbar.Collapse>
         
            
            
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default BasicExample;