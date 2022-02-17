import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col, Navbar, Nav, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MlcLandingPage() {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <div className="mlc_landing_page">
            <Row>
                <Col lg={12} sm={12} xs={12} className="pt-lg-3 pt-sm-3 pt-2 pb-lg-3 pb-sm-3 pb-2">
                    <Row>
                        <Col lg={6} sm={6} xs={6}>
                            <img alt="MLC" className="logo_mlc" src="https://fatneedle.com/mlc_marketplace/assets/logo-login.png" />
                        </Col>
                        <Col lg={6} sm={6} xs={6}>
                            <ul className="login_signup">
                                <li className="signup" onClick={handleShow}><a href="#">Sign up</a></li>
                                <li className="login"><a href="#">Log in</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col lg={12} sm={12} xs={12}>
                    <Carousel fade interval={6000}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://fatneedle.com/mlc_marketplace/assets/banner/1.png"
                                alt="First slide"
                            />
                            {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://fatneedle.com/mlc_marketplace/assets/banner/2.png"
                                alt="Second slide"
                            />
                            {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://fatneedle.com/mlc_marketplace/assets/banner/3.png"
                                alt="Third slide"
                            />
                            {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
                        </Carousel.Item>
                    </Carousel>
                    <ul role="nav" className='new_btm_navbar navbar navbar-expand navbar-dark bg-primary'>
                        <div className="me-auto navbar-nav">
                        <li className="nav-link"><Link to="/mlc_marketplace/about_lab_profile"><img alt="" src="assets/Asset_22.png" /> Profile</Link></li>
                        <li className="nav-link"><Link to="/mlc_marketplace/doctor_preference"> <img alt="" src="assets/Asset_23.png"/> Add New Cases</Link></li>
                        <li className="nav-link"> <Link to="/mlc_marketplace/about_lab_profile"><img alt="" src="assets/Asset_24.png"/> My Cases</Link></li>
                        </div>
                    </ul>
                </Col>
                <Col lg={12} sm={12} xs={12} className="">
                    <Row>
                        <Col lg={7} sm={7} xs={12}>
                            <Row>
                                <Col lg={6} sm={6} xs={12}>
                                    <div className="grid_card">
                                        <span className="top_corner"></span>
                                        <img alt="icon" src="https://fatneedle.com/mlc_marketplace/assets/Asset_icon_1.svg" />
                                        <h5>Search Doctor</h5>
                                    </div>
                                </Col>
                                <Col lg={6} sm={6} xs={12}>
                                    <div className="grid_card">
                                        <span className="top_corner"></span>
                                        <img alt="icon" src="https://fatneedle.com/mlc_marketplace/assets/Asset_icon_2.svg" />
                                        <h5>Lab Search</h5>
                                    </div>
                                </Col>
                                <Col lg={6} sm={6} xs={12}>
                                    <div className="grid_card">
                                        <span className="top_corner"></span>
                                        <img alt="icon" src="https://fatneedle.com/mlc_marketplace/assets/Asset_icon_3.svg" />
                                        <h5>Events</h5>
                                    </div>
                                </Col>
                                <Col lg={6} sm={6} xs={12}>
                                    <div className="grid_card">
                                        <span className="top_corner"></span>
                                        <img alt="icon" src="https://fatneedle.com/mlc_marketplace/assets/Asset_icon_4.svg" />
                                        <h5>News</h5>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={5} sm={5} xs={12} className="mb-3">
                            <div className="grid_card marquees">
                                <img alt="" className="top_border" src="https://fatneedle.com/mlc_marketplace/assets/top_border.png" />
                                <div className="grid_bx_parent">
                                    <h4>News / Events</h4>
                                    <div className="bg_grey">
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-4 col-4">
                                                <div className="grid_bx1">
                                                    <img alt="" src="https://fatneedle.com/mlc_marketplace/assets/Asset_event_2.png" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-sm-8 col-8">
                                                <div className="grid_content">
                                                    <p>The UNG Adams School of Dentistry shows dental care may reduce chances of a second stroke </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg_grey">
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-4 col-4">
                                                <div className="grid_bx1">
                                                    <img alt="" src="https://fatneedle.com/mlc_marketplace/assets/Asset_event_4.png" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-sm-8 col-8">
                                                <div className="grid_content">
                                                    <p>The UNG Adams School of Dentistry shows dental care may reduce chances of a second stroke </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg_grey">
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-4 col-4">
                                                <div className="grid_bx1">
                                                    <img alt="" src="https://fatneedle.com/mlc_marketplace/assets/Asset_event_5.png" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-sm-8 col-8">
                                                <div className="grid_content">
                                                    <p>The UNG Adams School of Dentistry shows dental care may reduce chances of a second stroke </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ul className="signup_link">
        <li><Link to="/mlc_marketplace/doctor_onboarding_profile">Doctor
        <br/>
         <img alt="Doctor" src="assets/doctor_signup.png" />
         </Link>
        </li>
        <li><Link to="/mlc_marketplace/lab_onboarding_profile">Lab
        <br/>
         <img alt="Doctor" src="assets/lab_signup.png" />
         </Link>
        </li>
        </ul>
        {/* <Link to="/doctor_onboarding_profile">
        <Button variant="outline-primary" size="lg">
        Doctor
        </Button>
        </Link>
        <Link to="/lab_onboarding_profile">
        <Button variant="outline-primary" size="lg">
        Lab
        </Button>
        </Link> */}
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
        </div>
    )
}
export default MlcLandingPage