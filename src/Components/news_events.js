import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col, Card, Form, Button, Dropdown, Modal, } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../App.css';

function NewsEvents() {
    return (
        <div className="news_events p-3">
            <header className="header_top">
                <div className="row">
                    <div className="col-lg-6 col-sm-6 col-6">
                        <img alt="logo" className="logo" src="assets/logo-login.png" />
                    </div>
                    <div className="col-lg-6 col-sm-6 col-6 text-right">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <img alt="logo" className="user_icon" src="assets/user_icon.webp" /> Hi Jhon
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="">Profile</Dropdown.Item>
                                <Dropdown.Item href="">Log out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </header>
            <Row>
                <Col lg={12} sm={12} xs={12}>
                    <h2 className='text-center pt-0 pb-3 mb-0'>News / Events</h2>
                </Col>
                <Col lg={12} sm={12} xs={12}>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-6 col-12 offset-lg-3 offset-sm-3'>
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
                        </div>
                    </div>

                </Col>
            </Row>
        </div>
    )
}
export default NewsEvents