import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col, Navbar, Nav, Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function MlcLandingPage() {

    const [show, setShow] = useState(false);
    const [show_login, setShow_login] = useState(false);
    const [show_login_doctor, setShow_login_doctor] = useState(false);
    const [show_login_lab, setShow_login_lab] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleClose_login = () => setShow_login(false);
    const handleClose_login_doctor = () => {
        setShow_login_doctor(false);
      //   setShow_login(false);
    }
    const handleClose_login_lab = () => {
        setShow_login_lab(false);
      //   setShow_login(false);
    }
    const handleShow = () => setShow(true);
    const handleShow_login = () => setShow_login(true);
    const handleShow_doctor = () =>{
         setShow_login_doctor(true);
         setShow_login(false);
    }
    const handleShow_lab = () =>{
      setShow_login_lab(true);
      setShow_login(false);
  
    } 
    return (
        <div className="mlc_landing_page">
            <Row>
                <Col lg={12} sm={12} xs={12} className="pt-lg-3 pt-sm-3 pt-2 pb-lg-3 pb-sm-3 pb-2">
                    <Row>
                        <Col lg={6} sm={6} xs={6}>
                            <img alt="MLC" className="logo_mlc" src="assets/logo-login.png" />
                        </Col>
                        <Col lg={6} sm={6} xs={6}>
                            <ul className="login_signup">
                                <li className="signup" onClick={handleShow}><a href="#">Sign up</a></li>
                                <li className="login" onClick={handleShow_login}><a href="#">Login</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col lg={12} sm={12} xs={12}>
                    <Carousel fade interval={6000}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="assets/banner/1.png"
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
                                src="assets/banner/2.png"
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
                                src="assets/banner/3.png"
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
                            <li className="nav-link"><Link to="/about_lab_profile"><img alt="" src="assets/Asset_22.png" /> Profile</Link></li>
                            <li className="nav-link"><Link to="/add_new_case"> <img alt="" src="assets/Asset_23.png" /> Add New Cases</Link></li>
                            <li className="nav-link"> <Link to="/"><img alt="" src="assets/Asset_24.png" /> My Cases</Link></li>
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
                                        <Link to="/doctor_search">
                                        <img alt="icon" src="assets/Asset_icon_1.svg" />
                                        <h5>Search Doctor</h5>
                                        </Link>
                                    </div>
                                </Col>
                                <Col lg={6} sm={6} xs={12}>
                                    <div className="grid_card">
                                        <span className="top_corner"></span>
                                        <Link to="/lab_search">
                                            <img alt="icon" src="assets/Asset_icon_2.svg" />
                                            <h5>Lab Search</h5>
                                        </Link>
                                    </div>
                                </Col>
                                <Col lg={6} sm={6} xs={12}>
                                    <div className="grid_card">
                                        <span className="top_corner"></span>
                                        <Link to="/news_events">
                                        <img alt="icon" src="assets/Asset_icon_3.svg" />
                                        <h5>Events</h5>
                                        </Link>
                                    </div>
                                </Col>
                                <Col lg={6} sm={6} xs={12}>
                                    <div className="grid_card">
                                        <span className="top_corner"></span>
                                        <Link to="/news_events">
                                        <img alt="icon" src="assets/Asset_icon_4.svg" />
                                        <h5>News</h5>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={5} sm={5} xs={12} className="mb-3">
                            <div className="grid_card marquees">
                                <img alt="" className="top_border" src="assets/top_border.png" />
                                <div className="grid_bx_parent">
                                    <h4>News / Events</h4>
                                    <div className="bg_grey">
                                    <Link to="/events_details">
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-4 col-4">
                                                <div className="grid_bx1">
                                                    <img alt="" src="assets/Asset_event_2.png" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-sm-8 col-8">
                                                <div className="grid_content">
                                                    <p>The UNG Adams School of Dentistry shows dental care may reduce chances of a second stroke </p>
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                    </div>
                                    <div className="bg_grey">
                                    <Link to="/events_details">
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-4 col-4">
                                                <div className="grid_bx1">
                                                    <img alt="" src="assets/Asset_event_4.png" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-sm-8 col-8">
                                                <div className="grid_content">
                                                    <p>The UNG Adams School of Dentistry shows dental care may reduce chances of a second stroke </p>
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                    </div>
                                    <div className="bg_grey">
                                    <Link to="/events_details">
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-4 col-4">
                                                <div className="grid_bx1">
                                                    <img alt="" src="assets/Asset_event_5.png" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-sm-8 col-8">
                                                <div className="grid_content">
                                                    <p>The UNG Adams School of Dentistry shows dental care may reduce chances of a second stroke </p>
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
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
                        <li><Link to="/doctor_onboarding_profile">Doctor
                            <br />
                            <img alt="Doctor" src="assets/doctor_signup.png" />
                        </Link>
                        </li>
                        <li><Link to="/lab_onboarding_profile">Lab
                            <br />
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
            <Modal show={show_login} onHide={handleClose_login}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className="signup_link">
                        <li><Link to="#" onClick={handleShow_doctor}>Doctor
                            <br />
                            <img alt="Doctor" src="assets/doctor_signup.png" />
                        </Link>
                        </li>
                        <li><Link to="#" onClick={handleShow_lab}>Lab
                            <br />
                            <img alt="Doctor" src="assets/lab_signup.png" />
                        </Link>
                        </li>
                    </ul>
                </Modal.Body>
            </Modal>
            <Modal show={show_login_doctor} onHide={handleClose_login_doctor} className='doc_login'>
                <Modal.Header closeButton>
                    <Modal.Title className="login_title">Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="doctor_onboarding_profile">
                            <Row>
                                <Col lg={6} sm={6} xs={12} >
                                    <div className="pt-lg-4 pb-sm-4 pt-sm-4 pt-3 pb-sm-4 pb-3">
                                        <img alt="Doctor" class="img_circle" src="assets/dental-popup.png" />
                                    </div>
                                </Col>
                                <Col lg={6} sm={6} xs={12} >
                                    <Form.Group className="mb-3 login_doc_align" controlId="formBasicEmail">
                                        <h4 className="login_title">Doctor</h4>
                                        {/* <Form.Label>Email address</Form.Label> */}
                                        <Form.Control type="email" placeholder="Username" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <div className="row">
                                        <Row>
                                            <Form.Group className="mb-3 remember_doc" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Remember me" />
                                            </Form.Group>
                                            <Form.Group className="mb-3 forgot_doc" controlId="formBasicCheckbox">
                                                <p><Link to="/#">Forgot password</Link></p>
                                            </Form.Group>
                                        </Row>
                                    </div>
                                    <Button type="submit" className="doc_login_btn">
                                        Login
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </Form>

                </Modal.Body>
            </Modal>
            <Modal show={show_login_lab} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className="signup_link">
                        <li><Link to="/doctor_onboarding_profile">Doctor
                            <br />
                            <img alt="Doctor" src="assets/doctor_signup.png" />
                        </Link>
                        </li>
                        <li><Link to="/lab_onboarding_profile">Lab
                            <br />
                            <img alt="Doctor" src="assets/lab_signup.png" />
                        </Link>
                        </li>
                    </ul>
                </Modal.Body>
            </Modal>
            <Modal show={show_login_lab} onHide={handleClose_login_lab} className='doc_login'>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="doctor_onboarding_profile">
                            <Row>
                                <Col lg={6} sm={6} xs={12} >
                                    <div className="pt-lg-4 pb-sm-4 pt-sm-4 pt-3 pb-sm-4 pb-3">
                                        <img alt="Doctor" class="img_circle" src="assets/dental-popup.png" />
                                    </div>
                                </Col>
                                <Col lg={6} sm={6} xs={12} >
                                    <Form.Group className="mb-3 login_doc_align" controlId="formBasicEmail">
                                        <h4 className="login_title">Lab</h4>
                                        {/* <Form.Label>Email address</Form.Label> */}
                                        <Form.Control type="email" placeholder="Username" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <div className="row">
                                        <Row>
                                            <Form.Group className="mb-3 remember_doc" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Remember me" />
                                            </Form.Group>
                                            <Form.Group className="mb-3 forgot_doc" controlId="formBasicCheckbox">
                                                <p><Link to="/#">Forgot password</Link></p>
                                            </Form.Group>
                                        </Row>
                                    </div>
                                    <Button variant="primary" type="submit" className="doc_login_btn">
                                        Login
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </Form>

                </Modal.Body>
            </Modal>
        </div>
    )
}
export default MlcLandingPage