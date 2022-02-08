//import React from "react";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";


import './App.css';
import Sidebar from '../src/Components/sidebar';
import AddLab  from "./Components/add_lab_preference";
import DoctorPrefernce from "./Components/doctor_preference";
import LabProfile from "./Components/lab_profile";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const Home = () => <h1>Home!</h1>;
  const NoMatch = () => <h1>404 Error: page does not exist!</h1>;

  return (
    <Router>
    <div className="App">
      <Container fluid className="">
      
        <Row>
        <Col lg={2} sm={2} xs={2} id="sidebar-wrapper" className="pl-0">      
        <Sidebar/>
        </Col>
        <Col lg={10} sm={10} xs={10} id="page-content-wrapper">
        <div className="row top_header_bx d-none">
        <div className="col-lg-4 col-sm-4 col-12">
        <h1><i class="fa fa-angle-left" aria-hidden="true"></i> Doctor Preference</h1>
        </div>
        <div className="col-lg-8 col-sm-8 col-12 text-right">
        <ul className="menu_list_top">
        <li>
        <div class="input-group">
        <input type="text" class="form-control" placeholder="Search this blog"/>
        <div class="input-group-append">
        <button class="btn btn-secondary" type="button">
        <i class="fa fa-search"></i>
        </button>
        </div>
        </div>
        </li>
        <li><a href=""><i class="fa fa-bell-o" aria-hidden="true"></i></a></li>
        <li>
            <img alt="" className="user_img" src="assets/user_icon.webp" />
        </li>
        </ul>
        </div>
        </div>
          <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/add_lab_preference" element={<AddLab />}/>
          <Route path="/doctor_preference" element={<DoctorPrefernce />}/>
          <Route path="/lab_profile" element={<LabProfile/>} />
          <Route component={NoMatch} />
          </Routes>
        </Col> 
        </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
