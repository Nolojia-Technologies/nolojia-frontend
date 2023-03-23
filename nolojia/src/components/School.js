import './comp.css';
import NavbarSchool from './NavbarSchool';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function Tutor() {
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
                <Button className='school_add_btn' variant="secondary">Add Student</Button>
            </ButtonGroup>
        </Card>
        <Card>
            hello
        </Card>
        </div>
    </div>
  );
}

export default Tutor;
