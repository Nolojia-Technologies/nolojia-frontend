import './comp.css';
import NavbarTop from './NavbarTop';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Tutor() {
  return (
    
    <div className="">
        <NavbarTop/>
        <div className='tutor_box'>
        <Card className='card_tutor_bg'>
            <Card.Body>A livestream is scheduled to start at 15:00.
                <Button id='button-13' className='btn_float' variant="outline-primary">Start</Button>{' '}
            </Card.Body>
        </Card>
        <Card>
            hello
        </Card>
        </div>
    </div>
  );
}

export default Tutor;
