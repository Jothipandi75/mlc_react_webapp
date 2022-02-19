import React, { useState } from "react";
import {Container, Row, Col, Card, Form, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

function DoctorOnboardingProfile() {

/* modal popup */

const [show, setShow] = useState(false);
const handleClose  = () => setShow(false);
const lab_send_request = () => setShow(true);

/* modal popup */
  const [type, setType]= useState('');

  const [visible, SetVisible] = useState(false);

    const [selectedFile, setSelectedFile] = useState(null);
    const [ form, setForm ] = useState([])
    const [ add_append, setAddAppend ] = useState([{
  
    }])
  
  const Element =() => <div className="add_append">
  <Row>
            <Col lg={12} sm={12} xs={12}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address Name</Form.Label>
            <Form.Control type="text" value="Lab Address" />
            </Form.Group>
            </Col>
            <Col lg={6} sm={6} xs={12}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control type="text" value="Address Line 1" />
            </Form.Group>
            </Col>
            <Col lg={6} sm={6} xs={12}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control type="text" value="Address Line 1" />
            </Form.Group>
            </Col>
            <Col lg={6} sm={6} xs={12}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" value="City" />
            </Form.Group>
            </Col>
            <Col lg={6} sm={6} xs={12}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" value="TN" />
            </Form.Group>
            </Col>
            <Col lg={6} sm={6} xs={12}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" value="62406" />
            </Form.Group>
            </Col>
            <Col lg={6} sm={6} xs={12}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" value="US" />
            </Form.Group>
            </Col>
            </Row>
  </div>;
  return (
    <div className="doctor_onboarding_profile">
     <Row>
     <Col lg={12} sm={12} xs={12} >
         <div className="pt-lg-4 pb-sm-4 pt-sm-4 pt-3 pb-sm-4 pb-3">
          <h4 className="text-center" >Welcome Doctor! Register to Join MLC</h4>
         </div>
     </Col>
      <Col lg={12} sm={12} xs={12}>
      <div className="card mb-lg-5 mb-sm-5 mb-3">
        <div className="card-body">
        <Form>
        <Row>
        <Col lg={6} sm={6} xs={12}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name.." />
        </Form.Group>
        </Col>
        <Col lg={6} sm={6} xs={12}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Password" />
        </Form.Group>
        </Col>
        <Col lg={12} sm={12} xs={12}>
          <label>Location</label>
        <div className="inner_card">
        <div className="card-body">
        <Row>
        <Col lg={6} sm={6} xs={12}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" placeholder="US" />
        </Form.Group>
        </Col>
        <Col lg={6} sm={6} xs={12}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="IL" />
        </Form.Group>
        </Col>
        </Row>
        </div>
        </div>
        </Col>
            <Col lg={12} sm={12} xs={12}>
            <Row>
            <Col lg={3} sm={3} xs={12}>
            <label>Multilocation Practice</label>
            </Col>
            <Col lg={9} sm={9} xs={12}>
            {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
            <Form.Check
            inline
            label="Yes"
            name="group1"
            value="1"
            type={type}
            id={`inline-${type}-1`}
            onClick={()=>SetVisible(true)}
            />
            <Form.Check
            inline
            label="No"
            name="group1"
            value="0"
            type={type}
            id={`inline-${type}-2`}
            onClick={()=>SetVisible(false)}
            />
            </div>
            ))}
            </Col>
            </Row>
            </Col>
            <Col lg={12} sm={12} xs={12}>
            {
              visible &&
            <Card className="border_blue">
            
            { add_append.map((element)=>

<Element />
    )}
            <Row>
            <Col lg={12} sm={12} xs={12}>
            <div className="text-left mb-3">
            <button className="btn btn-primary btn_white" onClick={()=>{
                setAddAppend([...add_append, {}])
              }}><i class="fa fa-plus" aria-hidden="true"></i>
              Add another address </button>
            <p id="test"></p>
            </div>
            </Col>
            </Row>
            </Card>
            }
            </Col>
            <Col lg={12} sm={12} xs={12} className="pt-lg-3 pt-sm-3 pt-2">
            <Row>
            <Col lg={6} sm={6} xs={12}>
            <Form.Group className="mb-3" controlId="">
            <Form.Label>Mail ID</Form.Label>
            <Form.Control type="email" placeholder="" />
            </Form.Group>
            </Col>
            <Col lg={6} sm={6} xs={12}>
            <Form.Group className="mb-3" controlId="">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="text" placeholder="" />
            </Form.Group>
            </Col>
            <Col lg={6} sm={6} xs={12}>
            <Form.Group className="mb-3" controlId="">
            <Form.Label>No. of years in practice</Form.Label>
            <Form.Control type="text" placeholder="" />
            </Form.Group>
            </Col>
            </Row>
            </Col>
        </Row>
        </Form>
        </div>
       </div>
       <div className="card mb-lg-5 mb-sm-5 mb-3">
        <div className="card-body border-bottom-dotted">
                <h3>Select Type of Dentistry</h3>
                <div className="form">
                  <Form>
                  <Row>
                  <Col lg={5} sm={5} xs={12}>
                  <div className="checkbox_right_align">
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="General_Dentistry">
                  <Form.Check label="General Dentistry" type="checkbox"  />
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
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Others">
                  <Form.Check data-toggle="collapse" data-target="#others" type="checkbox" label="Others" />
                  </Form.Group>
                  </div>
                  </Col>
                  <Col lg={1} sm={1} xs={12}></Col>
                  <Col lg={5} sm={5} xs={12}>
                  <div className="checkbox_right_align">
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
                  </div>
                  </Col>
                  <Col lg={1} sm={1} xs={12}></Col>
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
              <div>
              <div className="card-body pt-0 pb-0">
              <Row>
              <Col lg={6} sm={6} xs={12}>
              <Form.Group controlId="formBasicSelect">
              <Form.Label>Type of Practice</Form.Label>
              <Form.Control
                as="select"
                value={type}
                onChange={e => {
                  console.log("e.target.value", e.target.value);
                  setType(e.target.value);
                }}
              >
                <option value="DSO">DSO</option>
                <option value="Lab">Lab</option>
                <option value="Practices">Practices</option>
              </Form.Control>
              </Form.Group>
              </Col>
              <Col lg={6} sm={6} xs={12}>
              <Form.Group className="mb-3" controlId="">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="text" placeholder="" />
              </Form.Group>
              </Col>
              </Row>
              </div>
              </div>
              <div className="card-body border-bottom-dotted">
                <h3>Case Type</h3>
                <div className="form">
                  <Form>
                  <Row>
                  <Col lg={5} sm={5} xs={12}>
                  <div className="checkbox_right_align">
                  <Form.Group className="mb-2 custom-control custom-checkbox" controlId="Traditional">
                  <Form.Check type="checkbox" label="Traditional" />
                  </Form.Group>
                 </div>
                  </Col>
                  <Col lg={1} sm={1} xs={12}></Col>
                  <Col lg={5} sm={5} xs={12}>
                  <div className="checkbox_right_align">
                  <Form.Group className="mb-2 custom-control custom-checkbox" controlId="Digital">
                  <Form.Check type="checkbox" label="Digital" />
                  </Form.Group>
                  </div>
                  </Col>
                  <Col lg={1} sm={1} xs={12}></Col>
                  <Col lg={12} sm={12} xs={12} className="mt-lg-3 mt-sm-3 mt-3">
                  <p><strong>Scanner Name</strong></p>
                  </Col>
                  <Col lg={5} sm={5} xs={12}>
                  <div className="checkbox_right_align">
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="iTero">
                  <Form.Check type="checkbox" label="iTero" />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Trios">
                  <Form.Check type="checkbox" label="Trios" />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Other">
                  <Form.Check type="checkbox" data-toggle="collapse" data-target="#others_"  label="Other" />
                  </Form.Group>
                  </div>
                  </Col>
                <Col lg={1} sm={1} xs={12}></Col>
                <Col lg={5} sm={5} xs={12}>
                <div className="checkbox_right_align">
                <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Carestream">
                <Form.Check type="checkbox" label="Carestream" />
                </Form.Group>
                <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Planmeca">
                <Form.Check type="checkbox" label="Planmeca" />
                </Form.Group>
                </div>
                </Col>
                <Col lg={1} sm={1} xs={12}></Col>
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
            <Form.Group className="mb-3" controlId="">
            <Form.Label>What Practice Management System do you use:​</Form.Label>
            <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
            <Form.Label>Which labs currently do you work with:​</Form.Label>
            <Form.Control type="text" placeholder="" />
            </Form.Group>
            </div>
        </div>
        <div className="card mb-lg-5 mb-sm-5 mb-3">
            <div className="card-body">
            <h3>Case details <i class="fa fa-question-circle" aria-hidden="true"></i></h3>
            <Row className="border-bottom-dotted grey_dotted">
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
            <option>No. of cases per month </option>
            <option value="1">23</option>
            <option value="2">25</option>
            <option value="3">30</option>
            </Form.Select>
            </Col>
            </Row>
              <Row>
              <Col>
              <button className="btn btn-primary btn_white"><i class="fa fa-plus" aria-hidden="true"></i>
              Add Restoration​ Details​ </button>
              </Col>
              </Row> 
            </div>
        </div>
     </Col>
     <Col lg={12} sm={12} xs={12} className="text-center mb-lg-4 mb-sm-4 mb-3">
      <Button variant="primary" type="submit" onClick={lab_send_request}>
      Send Request
      </Button>
      </Col>
    </Row>
    <Modal show={show} onHide={handleClose} className="onboarding_modal">
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <div className="img_success">
            <img alt="success" src="assets/login_success.png" className="success_img"/>
            <h2>Thank you for registering </h2>
            <small>We will contact you soon</small>
            <Link to="/mlc_marketplace"><button className="btn btn-primary">Back to home</button></Link>
          </div>
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
export default DoctorOnboardingProfile