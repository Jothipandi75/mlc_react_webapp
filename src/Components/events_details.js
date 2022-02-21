import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col, Card, Form, Button, Dropdown, Modal, } from "react-bootstrap";
import '../App.css';

function EventsDetails() {
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
          <h2 className='text-center pt-0 pb-3 mb-0'>Events</h2>
      </Col>
          <Col lg={12} sm={12} xs={12}>
              <Carousel className='carosel_events' fade>
                <Carousel.Item>
                <img
                className="d-block w-100"
                src="assets/banner/home-hero.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                className="d-block w-100"
                src="assets/banner/home-hero.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
             </Carousel>
          </Col>
      </Row>
    </div>
  )
}
export default EventsDetails