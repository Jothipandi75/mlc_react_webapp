import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Dropdown } from "react-bootstrap";
import DropdownButton from 'react-bootstrap/DropdownButton';
import RangeSlider from 'react-bootstrap-range-slider';
import Table from 'react-bootstrap/Table';
import '../App.css';

function LabSearch() {
  const [value, setValue] = useState(0);
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
          <div className="card-body">
            <h3>Lab Search </h3>
            <Row className="grid_search">
              <Col lg={3} sm={4} xs={12}>
                <Form.Select aria-label="Default select example" className="form-control mb-3">
                  <option>Restoration</option>
                  <option value="1">Crown & Bridge</option>
                  <option value="2">Crown & Bridge</option>
                  <option value="3">Crown & Bridge</option>
                </Form.Select>
              </Col>
              <Col lg={3} sm={4} xs={12}>
                <Form.Select aria-label="Default select example" className="form-control mb-3">
                  <option>Product</option>
                  <option value="1">Zirconia</option>
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
                  <h5>Budget</h5>
                  {['radio'].map((type) => (
                    <div key={`budget-${type}`} className="mb-3">
                      <Form.Check
                        default
                        label="Premium"
                        name="group1"
                        type={type}
                        id={`budget-${type}-1`}
                      />
                      <Form.Check
                        default
                        label="Standard"
                        name="group1"
                        type={type}
                        id={`budget-${type}-2`}
                      />
                      <Form.Check
                        default
                        label="Value"
                        name="group1"
                        type={type}
                        id={`budget-${type}-3`}
                      />
                    </div>
                  ))}
                  <h5 className="mt-2 mb-2">Price Range ($)</h5>
                  <RangeSlider
                    value={value}
                    onChange={changeEvent => setValue(changeEvent.target.value)}
                  />
                  <div className="grid_range_slider">
                    <span className="left_span">0</span>
                    <span className="right_span">100</span>
                  </div>
                  <h5 className="mt-3 mb-3">ETA of Case (days)</h5>
                  {['radio'].map((type) => (
                    <div key={`eta-${type}`} className="mb-3">
                      <Form.Check
                        default
                        label="<5 days"
                        name="eta_case1"
                        type={type}
                        id={`eta-${type}-1`}
                      />
                      <Form.Check
                        default
                        label="5-10 days"
                        name="eta_case1"
                        type={type}
                        id={`eta-${type}-2`}
                      />
                      <Form.Check
                        default
                        label="10-15days"
                        name="eta_case1"
                        type={type}
                        id={`eta-${type}-3`}
                      />
                      <Form.Check
                        default
                        label=">15 days"
                        name="eta_case1"
                        type={type}
                        id={`eta-${type}-3`}
                      />
                    </div>
                  ))}
                  <h5 className="mt-3 mb-3">Delivery Service</h5>
                  {['radio'].map((type) => (
                    <div key={`delivery-${type}`} className="mb-3">
                      <Form.Check
                        default
                        label="FedEx"
                        name="delivery_service"
                        type={type}
                        id={`delivery-${type}-1`}
                      />
                      <Form.Check
                        default
                        label="UPS"
                        name="delivery_service"
                        type={type}
                        id={`delivery-${type}-2`}
                      />
                      <Form.Check
                        default
                        label="DHL"
                        name="delivery_service"
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
                    <Row className="product_list">
                      <Col lg={3} sm={4} xs={12}>
                        <img alt="" src="assets/flag.png" className="img-fluid product_img" />
                      </Col>
                      <Col lg={9} sm={8} xs={12}>
                        <h3>Lab ABC <span className="blue">90% Matching</span></h3>
                        <p><span className="grey">Restoration</span> Crown & Bridge</p>
                        <p><span className="grey">Product</span> Zirconia</p>
                        <hr />
                        <Table responsive="lg">
                          <thead>
                            <tr>
                              <th>Budget</th>
                              <th>Price Range</th>
                              <th>ETA of Case (days)</th>
                              <th>Delivery Service</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Premium</td>
                              <td>$100</td>
                              <td>10 - 15 days</td>
                              <td>DHL</td>
                            </tr>
                          </tbody>
                        </Table>
                        <button className="btn btn-primary mr-lg-3 mr-sm-3 mr-0">View Profile</button>
                        <button className="btn btn-primary">Submit a case</button>
                      </Col>
                    </Row>
                  </div>
                </Card>
                <Card className="mb-4">
                  <div className="card-body">
                    <Row className="product_list">
                      <Col lg={3} sm={4} xs={12}>
                        <img alt="" src="assets/flag.png" className="img-fluid product_img" />
                      </Col>
                      <Col lg={9} sm={8} xs={12}>
                        <h3>Lab ABC <span className="blue">90% Matching</span></h3>
                        <p><span className="grey">Restoration</span> Crown & Bridge</p>
                        <p><span className="grey">Product</span> Zirconia</p>
                        <hr />
                        <Table responsive="lg">
                          <thead>
                            <tr>
                              <th>Budget</th>
                              <th>Price Range</th>
                              <th>ETA of Case (days)</th>
                              <th>Delivery Service</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Premium</td>
                              <td>$100</td>
                              <td>10 - 15 days</td>
                              <td>DHL</td>
                            </tr>
                          </tbody>
                        </Table>
                        <button className="btn btn-primary mr-lg-3 mr-sm-3 mr-0">View Profile</button>
                        <button className="btn btn-primary">Submit a case</button>
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
export default LabSearch