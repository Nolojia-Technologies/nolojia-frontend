import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './assets/sidebar.css';
import logo from './assets/logo.png';
import sun from './assets/sun.svg';
import moon from './assets/moon.svg';
import { FaComment } from "react-icons/fa"; 
import {FaSearch} from "react-icons/fa";
import {FaUserCircle} from "react-icons/fa";

// // Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";


export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false, // initial mode is light
    };
    this.toggleMode = this.toggleMode.bind(this);
  }

  toggleMode() {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  }
    toggleOffcanvas() {
        document.querySelector('.sidebar-offcanvas').classList.toggle('active');
      }
      toggleRightSidebar() {
        document.querySelector('.right-sidebar').classList.toggle('open');
      }
      render () {
        const modeIcon = this.state.isDarkMode ? (
          <img
            src={moon}
            alt="Dark mode icon"
            width="20"
            height="20"
          />
        ) : (
          <img
            src={sun}
            alt="Light mode icon"
            width="20"
            height="20"
          />
        );
        return (
          <Navbar  expand="lg" sticky="top">
            <Container fluid className='navigationbar'>
              <Navbar.Brand className="brand px-3">
                <img src={logo} alt="Logo" className="brand-logo" width={200} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto mx-2 my-lg-0 display-inline align-items-center justify-content-center" style={{ maxHeight: '80px'}} navbarScroll />
                  <Form className="search-form d-flex align-items-center justify-content-center px-3"  method="POST" action="#">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2 query search-input"
                        aria-label="Search"
                      />
                      <Button type="submit" title="Search" variant="outline-dark" className=' bg-light btn-sm'><FaSearch/></Button>
                  </Form>

                  <Nav.Link href="#" className=" px-3 nav-icon">
                    <i class="bi bi-bell"></i>
                    <span class="badge bg-danger badge-number"><FaComment />4</span>
                  </Nav.Link>

                  <Nav.Link onClick={this.toggleMode} className="px-3 bg-light" style={{ color: 'white'}}>
                    {modeIcon}
                  </Nav.Link>

                  <Nav.Link className="px-3 d-flex align-items-center justify-content-center"><FaUserCircle style={{width: "40px", height: "40px"}}/>
                  <NavDropdown href="#action4" className="admin-profile" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Login</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
                  </NavDropdown>
                  </Nav.Link>
              </Navbar.Collapse>
            </Container>
    </Navbar>
  
        );
    }
}