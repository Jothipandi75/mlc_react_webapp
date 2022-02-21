//import React from "react";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";


import './App.css';
import Sidebar from '../src/Components/sidebar';
import AddLab from "./Components/add_lab_preference";
import DoctorPrefernce from "./Components/doctor_preference";
import LabProfile from "./Components/lab_profile";
import AboutLabProfile from "./Components/about_lab_profile";
import DoctorOnboardingProfile from "./Components/doctor_onboarding_profile";
import LabOnboardingProfile from "./Components/lab_onboarding_profile";
import MlcLandingPage from "./Components/mlc_landing_page";
import Login from "./Components/login";
import LabSearch from "./Components/lab_search";
import AddNewCase from "./Components/add_new_case";
import EventsDetails from "./Components/events_details";

function App() {
  return (
    
    <Router>
      <div className="App">
        <Container fluid className="p-0 marketplace_web">
          <Row>
           {/* <Col lg={12} sm={12} xs={12} id="sidebar-wrapper" className="pl-0">
              <Sidebar />
            </Col>  */}
            <Col lg={12} sm={12} xs={12} id="page-content-wrapper">
              {/* <div className="row top_header_bx d-none">
                <div className="col-lg-4 col-sm-4 col-12">
                  <h1><i className="fa fa-angle-left" aria-hidden="true"></i> Doctor Preference</h1>
                </div>
                <div className="col-lg-8 col-sm-8 col-12 text-right">
                  <ul className="menu_list_top">
                    <li>
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search this blog" />
                        <div className="input-group-append">
                          <button className="btn btn-secondary" type="button">
                            <i className="fa fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </li>
                    <li><a href=""><i className="fa fa-bell-o" aria-hidden="true"></i></a></li>
                    <li>
                      <img alt="" className="user_img" src="assets/user_icon.webp" />
                    </li>
                  </ul>
                </div>
              </div> */}
              <Routes>
                <Route path="/" exact element={<MlcLandingPage />} />
                <Route path="/add_lab_preference" element={<AddLab />} />
                <Route path="/doctor_preference" element={<DoctorPrefernce />} />
                <Route path="/lab_profile" element={<LabProfile />} />
                <Route path="/about_lab_profile" element={<AboutLabProfile />} />
                <Route path="/mlc_landing_page" element={<MlcLandingPage />} />
                <Route path="/doctor_onboarding_profile" element={<DoctorOnboardingProfile />} />
                <Route path="/lab_onboarding_profile" element={<LabOnboardingProfile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/lab_search" element={<LabSearch />} />
                <Route path="/add_new_case" element={< AddNewCase />} />
                <Route path="/events_details" element={< EventsDetails />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
   
  );
}

export default App;
