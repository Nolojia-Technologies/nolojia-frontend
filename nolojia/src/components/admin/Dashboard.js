import React from 'react';
import './assets/content.css';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import {Link} from 'react-router-dom';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";



function Dashboard() {
  return (
    <main id="main" className="main">
    <Container>
      <div className="pagetitle" style={{ position: 'sticky', top: '0' }}>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link  href="/">Home</Link></li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>

      {/* card-section */}
      <Row>
        <Col lg={3} md={6} sm={12}>
          <Card className="info-card school-card">
            <div className="filter">
              <Link  className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>
                <li><Link  className="dropdown-item" href="#">Today</Link></li>
                <li><Link  className="dropdown-item" href="#">This Month</Link></li>
                <li><Link  className="dropdown-item" href="#">This Year</Link></li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Schools <span>| This Month</span></h5>
              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-currency-dollar"></i>
                </div>
                <div className="ps-3">
                  <h6>$3,264</h6>
                  <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                </div>
              </div>
            </div>
          </Card>
        </Col>

        {/* card2 */}
        <Col lg={3} md={6} sm={12}>
          <Card className="info-card school-card">
          <div className="filter">
              <Link className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>
                <li><Link className="dropdown-item" href="#">Today</Link></li>
                <li><Link className="dropdown-item" href="#">This Month</Link></li>
                <li><Link className="dropdown-item" href="#">This Year</Link></li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Students <span>| This Month</span></h5>
              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-currency-dollar"></i>
                </div>
                <div className="ps-3">
                  <h6>$3,264</h6>
                  <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                </div>
              </div>
            </div>
          </Card>
        </Col>

        {/* card3 */}
        <Col lg={3} md={6} sm={12}>
          <Card className="info-card revenue-card">
          <div className="filter">
              <Link  className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>
                <li><Link  className="dropdown-item" href="#">Today</Link></li>
                <li><Link  className="dropdown-item" href="#">This Month</Link></li>
                <li><Link  className="dropdown-item" href="#">This Year</Link></li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Tutors <span>| This Month</span></h5>
              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-currency-dollar"></i>
                </div>
                <div className="ps-3">
                  <h6>$3,264</h6>
                  <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        
        {/* card4 */}
        <Col lg={3} md={6} sm={12}>
          <Card className="info-card revenue-card">
          <div className="filter">
              <Link  className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>
                <li><Link  className="dropdown-item" href="#">Today</Link></li>
                <li><Link  className="dropdown-item" href="#">This Month</Link></li>
                <li><Link  className="dropdown-item" href="#">This Year</Link></li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">Turnover <span>| This Month</span></h5>
              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-currency-dollar"></i>
                </div>
                <div className="ps-3">
                  <h6>$3,264</h6>
                  <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Students table */}
      <h4>Students</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>Doe</td>
            <td>17</td>
            <td>11th</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane</td>
            <td>Smith</td>
            <td>16</td>
            <td>10th</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Bob</td>
            <td>Johnson</td>
            <td>18</td>
            <td>12th</td>
          </tr>
        </tbody>
      </Table>

      {/* Recent Activity*/}
      <Card>
        <Card.Header>Recent Activity</Card.Header>
        <Card.Body>
        <ul>
        <li>User John Doe registered on March 10, 2023</li>
        <li>User Jane Smith logged in on March 9, 2023</li>
        <li>Admin User edited content page on March 8, 2023</li>
        <li>User Bob Johnson deleted their account on March 7, 2023</li>
        </ul>
        </Card.Body>
      </Card>
      
    </Container>
    </main>
  );
}

export default Dashboard;
