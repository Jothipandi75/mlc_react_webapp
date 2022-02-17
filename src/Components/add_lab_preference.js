// Add Lab Preference
import React, { useState } from "react";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function AddLab() {
  // function handleClick(e) {
  //   e.preventDefault();
  //   console.log('The link was clicked.');
  // }
  const [selectedFile, setSelectedFile] = useState(null);
  const [ form, setForm ] = useState([])
  const [ add_append, setAddAppend ] = useState([{

  }])

const Element =() => <div className="add_append">
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
</div>;

  return (
    <div className="addlabpreference">
      <Row>
      <Col lg={12} sm={12} xs={12}>
      <div className="row top_header_bx pt-3">
        <div className="col-lg-4 col-sm-4 col-12 text-left">
        <h1><i class="fa fa-angle-left" aria-hidden="true"></i> Add Lab Profile</h1>
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
            <img alt="" className="user_img" src="user_icon.webp" />
        </li>
        </ul>
        </div>
        </div>
</Col>
{/* <a href="#" onClick={handleClick}>
      Click me
    </a> */}
      <Col lg={12} sm={12} xs={12}>
        <div className="card mb-lg-4 mb-sm-4 mb-3">
        <div className="card-body border-bottom-dotted">
        <div className="form">
          <Form>
          <Row>
          <Col lg={6} sm={6} xs={12}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Lab Name</Form.Label>
          <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="" />
          </Form.Group>
          </Col>
          <Col lg={6} sm={6} xs={12}>
          <div className="row">
          <div className="col-lg-6 col-sm-6 col-12">
          <div className="form-group inputDnD">
            <label>Logo</label>
          <input
          type="file" 
          className="form-control-file"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <span>
          {/* <i class="fa fa-file-image-o" aria-hidden="true"></i>  */}
          <img alt="file upload" className="grid_upload_img" src="assets/pdfdoc_upload.png" />
          Attach File <br/>
          <small>.png,.jpg,jpeg</small>
          </span>
          </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-12">
          <div className="form-group inputDnD">
            <label>Brochure</label>
          <input
          type="file" 
          className="form-control-file"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <span>
            <img alt="file upload" className="grid_upload_img" src="assets/file_upload.png" />
          {/* <i class="fa fa-file-image-o" aria-hidden="true"></i> <br/> */}
          Attach File <br/>
          <small>.pdf,.doc,docx</small>
          </span>
          </div>
          </div>
          </div>
          </Col>
          </Row>
            <Row>
            <Col lg={12} sm={12} xs={12}>
            <p><strong>Address</strong></p>
            <Card className="border_blue">
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
            </Card>
            </Col>
            <Col lg={12} sm={12} xs={12}>
            <div className="text-left mb-3">
            <button className="btn btn-primary btn_white" ><i class="fa fa-plus" aria-hidden="true"></i>
            Add Preference com</button>
            </div>
            <p id="test"></p> 
            </Col>
            </Row>
            <Row>
            <Col lg={6} sm={6} xs={12}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="text" placeholder="" />
            </Form.Group>
            </Col>
            <Col lg={6} sm={6} xs={12}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Website Url</Form.Label>
            <Form.Control type="text" placeholder="" />
            </Form.Group>
            </Col>
            <Col lg={12} sm={12} xs={12}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Other Links</Form.Label>
            <Form.Control type="text" placeholder="Ex:www.facebook.com" />
            </Form.Group>
            </Col>
            <Col lg={6} sm={6} xs={12}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name of employees</Form.Label>
            <Form.Control type="text" placeholder="" />
            </Form.Group>
            </Col>
            </Row>
          </Form>
        </div>
        </div>
       
        </div>
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
        </div>
        <div className="card mb-lg-4 mb-sm-4 mb-3">
              <div className="card-body border-bottom-dotted">
              <h3>Product details  <i class="fa fa-question-circle" aria-hidden="true"></i></h3>
              <div className="form">
              <Form >
                { add_append.map((element)=>

            <Element />
                )}
                </Form>
              <div className="text-left mb-3">
              <button className="btn btn-primary btn_white" onClick={()=>{
                setAddAppend([...add_append, {}])
              }}><i class="fa fa-plus" aria-hidden="true"></i>
              Add Preference </button>
              </div>
              </div>
              </div>
              </div>
        </Col>
        </Row>
    </div>
  )
}
export default AddLab