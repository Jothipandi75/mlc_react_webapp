import React, { useState } from "react";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import {Tabs, Tab} from 'react-bootstrap-tabs';
import { Link } from "react-router-dom";
import '../App.css';

function AboutLabProfile() {
  return (
      <div className="about_lab_preference">
        <Row>
        <Col lg={12} sm={12} xs={12}>
        <div className="row top_header_bx pt-3">
        <div className="col-lg-4 col-sm-4 col-12 text-left">
        <h1><Link to="/mlc_marketplace"><i class="fa fa-angle-left" aria-hidden="true"></i></Link> Lab Profile</h1>
        </div>
        <div className="col-lg-8 col-sm-8 col-12 text-right">
        <ul className="menu_list_top">
        <li>
        <div class="input-group">
        <input type="text" class="form-control" placeholder="Search"/>
        <div class="input-group-append">
        <button class="btn btn-secondary" type="button">
        <i class="fa fa-search"></i>
        </button>
        </div>
        </div>
        </li>
        <li><a href=""><i class="fa fa-bell-o" aria-hidden="true"></i><i class="fa fa-circle" aria-hidden="true"></i>
        </a></li>
        <li>
        <img alt="" className="user_img" src="assets/user_icon.webp" />
        </li>
        </ul>
        </div>
        </div>
        </Col>
        <Col lg={12} sm={12} xs={12}>
        <div className="card mb-lg-4 mb-sm-4 mb-3">
        <div className="card-body">
        <Row>
        <Col lg={12} sm={12} xs={12} className="mb-lg-4 mb-sm-4 mb-3">
        <Row>
        <Col lg={3} sm={3} xs={12}>
        <div className="card_bx">
        <img alt="img" src="assets/user_icon.webp" />
        </div>
        </Col>
        <Col lg={9} sm={9} xs={12}>
        <div className="right_content">
            <h3>American Dental Lab</h3>
            <div className="grid_star">
            <span className="font_20px">4.0</span>
            <span className="star"><i class="fa fa-star" aria-hidden="true"></i></span>
            <span className="star"><i class="fa fa-star" aria-hidden="true"></i></span>
            <span className="star"><i class="fa fa-star" aria-hidden="true"></i></span>
            <span className="star"><i class="fa fa-star" aria-hidden="true"></i></span>
            <span className="star"><i class="fa fa-star-o" aria-hidden="true"></i></span>
            </div>
            <Link to="/add_lab_preference"> <button className="btn btn-primary light_blue mr-lg-3 mr-sm-3 mr-0">Add Lab</button> </Link> 
            <Link to="/">  <button className="btn btn-default light_white">Download Brochure</button></Link>
        </div>
        </Col>
        </Row>
        </Col>
        <Col lg={12} sm={12} xs={12}>
                <div className="tab_bx">
                <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
                <Tab label="Products and Services offered">
                    <div className="light_blue">
                     <div className="tab_grid_content mb-lg-4 mb-sm-4 mb-3">
                        <div className="mb-lg-3 mb-sm-3 mb-2">
                        <h3>Type of Dentistry </h3>
                        <p>General Dentistry, Maxillofacial Surgery, Cosmetic, Reconstructive Restorative​</p>
                        </div>
                        <div className="mb-lg-3 mb-sm-3 mb-2">
                        <h3>Other </h3>
                        <div className="row">
                        <div className="col-lg-5 col-sm-5 col-12">
                        <p className="p_grey">Case Type </p>
                        </div>
                        <div className="col-lg-5 col-sm-5 col-12">
                        <p className="p_black">Both​ (Traditional, Digital)</p>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-5 col-sm-5 col-12">
                        <p className="p_grey">Type of Scanner </p>
                        </div>
                        <div className="col-lg-5 col-sm-5 col-12">
                        <p className="p_black">iTero, Trios</p>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-5 col-sm-5 col-12">
                        <p className="p_grey">Manufacturing Location​ </p>
                        </div>
                        <div className="col-lg-5 col-sm-5 col-12">
                        <p className="p_black">USA, California​</p>
                        </div>
                        </div>
                        </div>
                        <div className="mb-lg-3 mb-sm-3 mb-2">
                        <h3>Service Areas  </h3>
                        <p>Digital Business Solution, Practice Consulting, In-office solutions and materials​</p>
                        </div>
                    </div>
                   
                    <div className="tab_grid_content mb-lg-4 mb-sm-4 mb-3">
                        <div className="mb-lg-3 mb-sm-3 mb-2">
                        <h3>Product Details​  <i class="fa fa-info-circle" aria-hidden="true"></i></h3>
                        <div className="row">

                        <div className="col-lg-4 col-sm-4 col-12">
                        <p className="p_grey">Restoration </p>
                        <p className="p_black">Crown & Bridge</p>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-12">
                        <p className="p_grey">Product</p>
                        <p className="p_black">Zirconia</p>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-12">
                        <p className="p_grey">Budget</p>
                        <p className="p_black">Standard</p>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-12">
                        <p className="p_grey">Price Range​</p>
                        <p className="p_black">1000</p>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-12">
                        <p className="p_grey">ETA of case (days)</p>
                        <p className="p_black">10 – 15 days​ </p>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-12">
                        <p className="p_grey">Delivery Service​</p>
                        <p className="p_black">FedEx </p>
                        </div>
                        
                        </div>
                        </div>
                        <div className="border_dotted mt-lg-4 mt-sm-4 mt-3 mb-lg-4 mb-sm-4 mb-3"></div>
                        <div className="mb-lg-3 mb-sm-3 mb-2">
                        <div className="row">
                        <div className="col-lg-12">
                         <button className="btn btn-primary best_btn mb-3">Best Matching</button>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-12">
                        <p className="p_grey">Restoration </p>
                        <p className="p_black">Crown & Bridge</p>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-12">
                        <p className="p_grey">Product</p>
                        <p className="p_black">Zirconia</p>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-12">
                        <p className="p_grey">Budget</p>
                        <p className="p_black">Standard</p>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-12">
                        <p className="p_grey">Price Range​</p>
                        <p className="p_black">1000</p>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-12">
                        <p className="p_grey">ETA of case (days)</p>
                        <p className="p_black">10 – 15 days​ </p>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-12">
                        <p className="p_grey">Delivery Service​</p>
                        <p className="p_black">FedEx </p>
                        </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </Tab>
                <Tab label="About">
                <div className="grid_about">
                <h4 className="text-center font_h4">25</h4>
                <p className="text-center">employees work here</p>
                </div>
                <div className="light_blue">
                <div className="tab_grid_content mb-lg-4 mb-sm-4 mb-3">
                <div className="mb-lg-3 mb-sm-3 mb-2">
                <h3>Contact </h3>
                <div className="row">
                <div className="col-lg-5 col-sm-5 col-12">
                <p className="p_grey">Mail ID </p>
                </div>
                <div className="col-lg-5 col-sm-5 col-12">
                <p className="p_black">example@gmail.com</p>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-5 col-sm-5 col-12">
                <p className="p_grey">Contact Number </p>
                </div>
                <div className="col-lg-5 col-sm-5 col-12">
                <p className="p_black">9876543210</p>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-5 col-sm-5 col-12">
                <p className="p_grey">Website </p>
                </div>
                <div className="col-lg-5 col-sm-5 col-12">
                <p className="p_black">www.example.com</p>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-5 col-sm-5 col-12">
                <p className="p_grey">Other Link</p>
                </div>
                <div className="col-lg-5 col-sm-5 col-12">
                <p className="p_black">www.linkedin.com</p>
                </div>
                </div>
                </div>
                </div>
                <div className="tab_grid_content mb-lg-4 mb-sm-4 mb-3">
                <div className="mb-lg-3 mb-sm-3 mb-2">
                <h3>Address</h3>
                <div className="row">
                <div className="col-lg-12 col-sm-12 col-12">
                <p className="p_grey">Illinois Lab Address </p>
                </div>
                <div className="col-lg-12 col-sm-12 col-12">
                <p className="p_black">Street Address 23, Effingham, IL, US, 62401</p>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-12 col-sm-12 col-12">
                <p className="p_grey">New York Lab Address </p>
                </div>
                <div className="col-lg-12 col-sm-12 col-12">
                <p className="p_black">Street Address 21, Example, NY, US, 62401</p>
                </div>
                </div>
                </div>
                </div>
                </div>
                </Tab>
                </Tabs>
                </div>
        </Col>
        </Row>
        </div>
        </div>
        </Col>
        </Row>
      </div>
  )
}
export default AboutLabProfile