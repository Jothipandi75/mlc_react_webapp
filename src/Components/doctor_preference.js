// Add Lab Preference
import React, { useState } from "react";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function DoctorPrefernce() {
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <div className="addlabpreference">
      <Row>
      <Col lg={12} sm={12} xs={12}>
      <div className="row top_header_bx pt-3">
        <div className="col-lg-4 col-sm-4 col-12 text-left">
        <h1><i class="fa fa-angle-left" aria-hidden="true"></i> Doctor Preference</h1>
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
            <img alt="" className="user_img" src="https://fatneedle.com/mlc_marketplace/assets/user_icon.webp" />
        </li>
        </ul>
        </div>
        </div>
</Col>
          <Col lg={12} sm={12} xs={12}>
             <div className="card mb-lg-4 mb-sm-4 mb-3">
              <div className="card-body border-bottom-dotted">
                <h3>Select Type of Dentistry</h3>
                <div className="form">
                  <Form>
                  <Row>
                  <Col lg={6} sm={6} xs={12}>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="General_Dentistry">
                  <Form.Check type="checkbox" label="General Dentistry" />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Family_Dentistry">
                  <Form.Check type="checkbox" label="Family Dentistry" />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Maxillofacial_Surgery">
                  <Form.Check type="checkbox" label="Maxillofacial Surgery" />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Prosthodontics">
                  <Form.Check type="checkbox" label="Prosthodontics" />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Private_Practice">
                  <Form.Check type="checkbox" label="Private Practice" />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Practice_Group">
                  <Form.Check type="checkbox" label="Practice Group" />
                  </Form.Group>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Cosmetic">
                  <Form.Check type="checkbox" label="Cosmetic" />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Implant">
                  <Form.Check type="checkbox" label="Implant" />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Orthodontics">
                  <Form.Check type="checkbox" label="Orthodontics" />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Reconstructive_Restorative">
                  <Form.Check type="checkbox" label="Reconstructive Restorative" />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="DSO">
                  <Form.Check type="checkbox" label="DSO" />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Others">
                  <Form.Check data-toggle="collapse" data-target="#others" type="checkbox" label="Others" />
                  </Form.Group>
                  </Col>
                  <Col lg={12} sm={12} xs={12}>
                  <div id="others" className="collapse">
                  <Form.Group className="mb-3" controlId="">
                  <Form.Control type="text" placeholder="Specify" />
                  </Form.Group>
                  </div>
                  </Col>
                  </Row>
                  </Form>
                </div>
              </div>
              <div className="card-body border-bottom-dotted">
                <h3>Case Type</h3>
                <div className="form">
                  <Form>
                  <Row>
                  <Col lg={6} sm={6} xs={12}>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Traditional">
                  <Form.Check type="checkbox" label="Traditional" />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Traditional_Domestic">
                  <Form.Check type="checkbox" label="Traditional Domestic" />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Traditional_Offshore">
                  <Form.Check type="checkbox" label="Traditional Offshore" />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Traditional_Aesthetic">
                  <Form.Check type="checkbox" label="Traditional Aesthetic" />
                  </Form.Group>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Digital">
                  <Form.Check type="checkbox" label="Digital" />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Digital_Domestic">
                  <Form.Check type="checkbox" label="Digital Domestic" />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Digital_Offshore">
                  <Form.Check type="checkbox" label="Digital Offshore" />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Digital_Aesthetic">
                  <Form.Check type="checkbox" label="Digital Aesthetic" />
                  </Form.Group>
                  </Col>
                  <Col lg={12} sm={12} xs={12}>
                  <p><strong>Scanner Name</strong></p>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="iTero">
                  <Form.Check type="checkbox" label="iTero" />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Trios">
                  <Form.Check type="checkbox" label="Trios" />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Other">
                  <Form.Check type="checkbox" data-toggle="collapse" data-target="#others_"  label="Other" />
                  </Form.Group>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Carestream">
                  <Form.Check type="checkbox" label="Carestream" />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Planmeca">
                  <Form.Check type="checkbox" label="Planmeca" />
                  </Form.Group>
                  </Col>
                  <Col lg={12} sm={12} xs={12}>
                  <div id="others_" className="collapse">
                  <Form.Group className="mb-3" controlId="">
                  <Form.Control type="text" placeholder="Medit, Condor Intraoral" />
                  </Form.Group>
                  </div>
                  </Col>
                  </Row>
                  </Form>
                </div>
              </div>
              <div className="card-body">
                <div className="form">
                  <Form>
                  <Row>
                  <Col lg={12} sm={12} xs={12}>
                  <p><strong>Delivery Service </strong></p>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                  <Form.Select aria-label="Default select example" className="form-control">
                  <option>Others</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  </Form.Select>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="DTDC" />
                  </Form.Group>
                  </Col>
                  </Row>
                  </Form>
                </div>
              </div>
            </div>
              <div className="card mb-lg-4 mb-sm-4 mb-3">
              <div className="card-body border-bottom-dotted">
              <h3>Case Preference</h3>
              <div className="form">
              <Form>
                <Row>
                <Col lg={12} sm={12} xs={12}>
                <p><strong>Interproximal Contact</strong></p>
                {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                inline
                label="Normal (default)"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
                />
                <Form.Check
                inline
                label="Board"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
                />
                <Form.Check
                inline
                label="Tight"
                name="group1"
                type={type}
                id={`inline-${type}-3`}
                />
                </div>
                ))}
                </Col>
                <Col lg={12} sm={12} xs={12}>
                <p><strong>Occlusion</strong></p>
                {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                inline
                label="Out (default)"
                name="group2"
                type={type}
                id={`inline-${type}-21`}
                />
                <Form.Check
                inline
                label="In"
                name="group2"
                type={type}
                id={`inline-${type}-22`}
                />
                <Form.Check
                inline
                label="Out"
                name="group2"
                type={type}
                id={`inline-${type}-23`}
                />
                </div>
                ))}
                </Col>
                <Col lg={12} sm={12} xs={12}>
                <p><strong>Metal of choice</strong></p>
                {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                inline
                label="Noble (default)"
                name="group3"
                type={type}
                id={`inline-${type}-31`}
                />
                <Form.Check
                inline
                label="High noble white  yellow"
                name="group3"
                type={type}
                id={`inline-${type}-32`}
                />
                <Form.Check
                inline
                label="Base"
                name="group3"
                type={type}
                id={`inline-${type}-33`}
                />
                </div>
                ))}
                </Col>
                <Col lg={12} sm={12} xs={12}>
                <p><strong>Full gold crown choice</strong></p>
                {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                inline
                label="60% gold crown choice"
                name="group4"
                type={type}
                id={`inline-${type}-41`}
                />
                <Form.Check
                inline
                label="75% gold"
                name="group4"
                type={type}
                id={`inline-${type}-42`}
                />
                </div>
                ))}
                </Col>
                <Col lg={12} sm={12} xs={12}>
                <p><strong>Occlusal stain</strong></p>
                {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                inline
                label="Light (default)"
                name="group5"
                type={type}
                id={`inline-${type}-51`}
                />
                <Form.Check
                inline
                label="No"
                name="group5"
                type={type}
                id={`inline-${type}-52`}
                />
                </div>
                ))}
                </Col>
                <Col lg={12} sm={12} xs={12}>
                <p><strong>Anatomy</strong></p>
                {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                inline
                label="Duplicated to adjacent anatomy (default)"
                name="group6"
                type={type}
                id={`inline-${type}-61`}
                />
                <Form.Check
                inline
                label="Primary"
                name="group6"
                type={type}
                id={`inline-${type}-62`}
                />
                </div>
                ))}
                </Col>
                <Col lg={12} sm={12} xs={12}>
                <p><strong>If limited clearance</strong></p>
                {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                inline
                label="Call to discuss"
                name="group7"
                type={type}
                id={`inline-${type}-71`}
                />
                <Form.Check
                inline
                label="Reduce opposing"
                name="group7"
                type={type}
                id={`inline-${type}-72`}
                />
                <Form.Check
                inline
                label="Trim die & fabricate reduction coping"
                name="group7"
                type={type}
                id={`inline-${type}-73`}
                />
                </div>
                ))}
                </Col>
                <Col lg={12} sm={12} xs={12}>
                <p><strong>Metal collars</strong></p>
                {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                inline
                label="No metal to show (default)"
                name="group8"
                type={type}
                id={`inline-${type}-81`}
                />
                <Form.Check
                inline
                label="Buccal"
                name="group8"
                type={type}
                id={`inline-${type}-82`}
                />
                <Form.Check
                inline
                label="Lingual"
                name="group8"
                type={type}
                id={`inline-${type}-3`}
                />
                <Form.Check
                inline
                label="None"
                name="group8"
                type={type}
                id={`inline-${type}-4`}
                />
                </div>
                ))}
                </Col>
                <Col lg={12} sm={12} xs={12}>
                <p><strong>Any other expectations </strong></p>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} placeholder="Write expectations" />
                </Form.Group>
                </Col>
                </Row>
              </Form>
              </div>
              </div>
              </div>
              <div className="card mb-lg-4 mb-sm-4 mb-3">
              <div className="card-body border-bottom-dotted">
              <h3>Preference <i class="fa fa-question-circle" aria-hidden="true"></i></h3>
              <div className="form">
              <Form>
              <Row>
              <Col lg={4} sm={6} xs={12}>
              <Form.Select aria-label="Default select example" className="form-control mb-3">
              <option>Restoration</option>
              <option value="1">Crown & Bridge</option>
              <option value="2">Crown & Bridge</option>
              <option value="3">Crown & Bridge</option>
              </Form.Select>
              </Col>
              <Col lg={4} sm={6} xs={12}>
              <Form.Select aria-label="Default select example" className="form-control mb-3">
              <option>Product</option>
              <option value="1">Other</option>
              </Form.Select>
              </Col>
              <Col lg={4} sm={6} xs={12}>
              <Form.Select aria-label="Default select example" className="form-control mb-3">
              <option>Preferred Lab </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              </Form.Select>
              </Col>
              </Row>
              <Row>
              <Col lg={4} sm={6} xs={12}>
              <Form.Select aria-label="Default select example" className="form-control mb-3">
              <option>Budget </option>
              <option value="1">Standard</option>
              <option value="2">Standard</option>
              <option value="3">Standard</option>
              </Form.Select>
              </Col>
              <Col lg={4} sm={6} xs={12}>
              <Form.Select aria-label="Default select example" className="form-control mb-3">
              <option>Lab Location </option>
              <option value="1">Domestic</option>
              <option value="2">International </option>
              </Form.Select>
              </Col>
              <Col lg={4} sm={6} xs={12}>
              <Form.Select aria-label="Default select example" className="form-control mb-3">
              <option>Design</option>
              <option value="1">In-office Design</option>
              <option value="2">In-office Design</option>
              </Form.Select>
              </Col>
              <Col lg={4} sm={6} xs={12}>
              <Form.Select aria-label="Default select example" className="form-control mb-3">
              <option>Design Approval</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </Form.Select>
              </Col>
              <Col lg={4} sm={6} xs={12}>
              <Form.Select aria-label="Default select example" className="form-control mb-3">
              <option>ETA of case (days)</option>
              <option value="">1-10 days</option>
              <option value="">10-15 days</option>
              </Form.Select>
              </Col>
              </Row>
              </Form>
              <div className="text-left mb-3">
              <button className="btn btn-primary btn_white"><i class="fa fa-plus" aria-hidden="true"></i>
              Add Preference </button>
              </div>
              </div>
              </div>
              </div>
          </Col>
        </Row>
        <Row>
        <Col lg={12} sm={12} xs={12} className="mb-3">
        <button className="btn btn-primary btn_blue">
        Update Preference </button>
        </Col>
        </Row>
    </div>
  )
}
export default DoctorPrefernce