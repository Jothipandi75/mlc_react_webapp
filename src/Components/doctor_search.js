import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Dropdown } from "react-bootstrap";
import DropdownButton from 'react-bootstrap/DropdownButton';
import RangeSlider from 'react-bootstrap-range-slider';
import Table from 'react-bootstrap/Table';
import '../App.css';

function DoctorSearch() {
  const [value, setValue_year] = useState(0);
  const [value_cases, setValue_cases] = useState(0);
  return (
    <div className="lab_search grid_mlc_common pt-4">
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
      <Col lg={12} sm={12} xs={12}>
        <div className="card mb-lg-5 mb-sm-5 mb-3">
          <div className="card-body p-4">
            <h3>Doctor Search </h3>
            <Row className="grid_search">
              <Col lg={3} sm={4} xs={12}>
                <Form.Select aria-label="Default select example" className="form-control mb-3">
                  <option>Selct State</option>
                  <option value="1">Florida</option>
                </Form.Select>
              </Col>
              <Col lg={3} sm={4} xs={12}>
                <Form.Select aria-label="Default select example" className="form-control mb-3">
                  <option>Type of dentistry</option>
                  <option value="1">Cosmetic</option>
                </Form.Select>
              </Col>
              <Col lg={3} sm={4} xs={12}>
                <button className="btn btn-primary">Search</button>
              </Col>
            </Row>
            <Row className="filter_view">
              <Col lg={3} sm={4} xs={12} className="border-right">
                <h4 className="h4_title">Filter</h4>
                <Form>
                  <h5>No.of year in practice </h5>
                  <RangeSlider
                    value={value}
                    onChange={changeEvent => setValue_year(changeEvent.target.value)}
                  />
                  <div className="grid_range_slider">
                    <span className="left_span">0</span>
                    <span className="right_span">100</span>
                  </div>

                  <h5 className="mt-2 mb-2">No.of case per month</h5>
                  <RangeSlider
                    value={value_cases}
                    onChange={changeEvent => setValue_cases(changeEvent.target.value)}
                  />
                  <div className="grid_range_slider">
                    <span className="left_span">0</span>
                    <span className="right_span">100</span>
                  </div>
                  <h5 className="mt-3 mb-3">Case type</h5>
                  {['radio'].map((type) => (
                    <div key={`eta-${type}`} className="mb-3">
                      <Form.Check
                        default
                        label="Digital"
                        name="case_type"
                        type={type}
                        id={`eta-${type}-1`}
                      />
                      <Form.Check
                        default
                        label="Traditional"
                        name="case_type"
                        type={type}
                        id={`eta-${type}-2`}
                      />
                    </div>
                  ))}
                  <h5 className="mt-3 mb-3">Scanner</h5>
                  {['radio'].map((type) => (
                    <div key={`delivery-${type}`} className="mb-3">
                      <Form.Check
                        default
                        label="iTero"
                        name="scanner"
                        type={type}
                        id={`delivery-${type}-1`}
                      />
                      <Form.Check
                        default
                        label="Trios"
                        name="scanner"
                        type={type}
                        id={`delivery-${type}-2`}
                      />
                      <Form.Check
                        default
                        label="Planmeca"
                        name="scanner"
                        type={type}
                        id={`delivery-${type}-3`}
                      />
                      <Form.Check
                        default
                        label="Carestream"
                        name="scanner"
                        type={type}
                        id={`delivery-${type}-3`}
                      />
                    </div>
                  ))}
                </Form>
              </Col>
              <Col lg={9} sm={8} xs={12}>
                <h4 className="h4_title">Search result</h4>
                <Card className="mb-4">
                  <div className="card-body p-3">
                    <Row className="product_list doctor_list">
                      <Col lg={3} sm={4} xs={12}>
                        <img alt="" src="assets/flag.png" className="img-fluid product_img" />
                      </Col>
                      <Col lg={9} sm={8} xs={12}>
                        <h3>Kevin </h3>
                        <p><span className="grey">State</span> Florida</p>
                        <p><span className="grey">Type of dentistry</span> Cosmetic</p>
                        <hr />
                        <Row>
                            <Col lg={6} sm={6} xs={12}>
                            <p><span className="grey w-100 pr-0">No.of year in practice </span></p>
                            <p>25</p>
                            </Col>
                            <Col lg={6} sm={6} xs={12}>
                            <p><span className="grey w-100 pr-0">Case type</span></p>
                            <p>Digital</p>
                            </Col>
                            <Col lg={6} sm={6} xs={12}>
                            <p><span className="grey w-100 pr-0">No.of Case per month</span></p>
                            <p>100</p>
                            </Col>
                            <Col lg={6} sm={6} xs={12}>
                            <p><span className="grey w-100 pr-0">Scanner</span></p>
                            <p>Trios</p>
                            </Col>
                        </Row>
                        <button className="btn btn-primary mr-lg-3 mr-sm-3 mr-0">View Profile</button>
                      </Col>
                    </Row>
                  </div>
                </Card>
                <Card className="mb-4">
                  <div className="card-body p-3">
                    <Row className="product_list doctor_list">
                      <Col lg={3} sm={4} xs={12}>
                        <img alt="" src="assets/flag.png" className="img-fluid product_img" />
                      </Col>
                      <Col lg={9} sm={8} xs={12}>
                        <h3>Kevin </h3>
                        <p><span className="grey">State</span> Florida</p>
                        <p><span className="grey">Type of dentistry</span> Cosmetic</p>
                        <hr />
                        <Row>
                            <Col lg={6} sm={6} xs={12}>
                            <p><span className="grey w-100 pr-0">No.of year in practice </span></p>
                            <p>25</p>
                            </Col>
                            <Col lg={6} sm={6} xs={12}>
                            <p><span className="grey w-100 pr-0">Case type</span></p>
                            <p>Digital</p>
                            </Col>
                            <Col lg={6} sm={6} xs={12}>
                            <p><span className="grey w-100 pr-0">No.of Case per month</span></p>
                            <p>100</p>
                            </Col>
                            <Col lg={6} sm={6} xs={12}>
                            <p><span className="grey w-100 pr-0">Scanner</span></p>
                            <p>Trios</p>
                            </Col>
                        </Row>
                        <button className="btn btn-primary mr-lg-3 mr-sm-3 mr-0">View Profile</button>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </div>
  )
}
export default DoctorSearch