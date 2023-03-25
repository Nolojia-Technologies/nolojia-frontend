import React, { useState } from 'react';
import './comp.css';
import NavbarSchool from './NavbarSchool';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Pagination from 'react-bootstrap/Pagination';
import Carousel from 'react-bootstrap/Carousel';
import kongoni2 from './images/kongoni2.jpeg';
import kongoni3 from './images/kongoni3.jpeg';

let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}


function Tutor() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    
    <div className="">
        <NavbarSchool/>
        <div className='tutor_box'>
        <Card className='card_tutor_bg'>
            <Card.Body>A livestream is scheduled to start at 15:00.
                <Button id='button-13' className='btn_float' variant="outline-primary">Enter</Button>{' '}
            </Card.Body>
        </Card>
        <Card>
            <ButtonGroup aria-label="Basic example">
                <Button className='school_pay_btn' variant="secondary">Pay</Button>
                <Button variant="primary" onClick={handleShow} className='school_add_btn'>Add Student</Button>
                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Shaun Daniel Machua"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Admission Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="0123456"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Guardian Phone Number</Form.Label>
              <Form.Control
                type="phone"
                placeholder="+254 712 345678"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Level</Form.Label>
              <Form.Control
                type="text"
                placeholder="Advance"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className='add_student_btn_cl' variant="primary" onClick={handleClose}>
            Add Student
          </Button>
        </Modal.Footer>
      </Modal>
            </ButtonGroup>
        </Card>
        <InputGroup className="mb-3">
            <Form.Control
                placeholder="Student's name"
                aria-label="Student's name"
                aria-describedby="basic-addon2"
            />
            <Button className='search_school_btn' variant="outline-secondary" id="button-addon2">
                Search
            </Button>
        </InputGroup>
        <Card className='table_school_card'>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Student Name</th>
                    <th>Admission Number</th>
                    <th>Status</th>
                    </tr>
                </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>0123456</td>
          <td>Active</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jane Doe</td>
          <td>0123457</td>
          <td>Inactive</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Jane Doe</td>
          <td>0123457</td>
          <td>Active</td>
        </tr>
      </tbody>
    </Table>
            <div className='pagination_school_tb'>
                <Pagination className='pagi_nation_cl' size="sm">{items}</Pagination>
            </div>
        </Card>
        <Carousel>
      <Carousel.Item interval={1000}>
       
        <img className="d-block w-100" src={kongoni2} alt="logo" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img className="d-block w-100" src={kongoni3} alt="logo" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    </div>
  );
}

export default Tutor;
