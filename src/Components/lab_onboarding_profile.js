import React, { useState } from "react";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function LabOnboardingProfile() {

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
            <Col lg={6} sm={6} xs={12}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Contact Name</Form.Label>
            <Form.Control type="text" value="Ram" />
            </Form.Group>
            </Col>
            <Col lg={6} sm={6} xs={12}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="text" value="987653210" />
            </Form.Group>
            </Col>
            </Row>
  </div>;
  return (
    <div className="lab_onboarding_profile">
     <Row>
     <Col lg={12} sm={12} xs={12} >
         <div className="pt-lg-4 pb-sm-4 pt-sm-4 pt-3 pb-sm-4 pb-3">
          <h4 className="text-center" >Welcome Lab! Register to Join MLC</h4>
         </div>
     </Col>
      <Col lg={12} sm={12} xs={12}>
      <div className="card mb-lg-5 mb-sm-5 mb-3">
        <div className="card-body">
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
        <Col lg={12} sm={12} xs={12} className="mb-lg-3 mb-sm-3 mb-2">
          <label>Head Quarters Location</label>
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
            <Col lg={12} sm={12} xs={12}>
            <Form.Group className="mb-3" controlId="" className="add_icon">
            <Form.Label>Other Links</Form.Label>
            <Form.Control type="text" placeholder="Example: https://www.facebook.com/MyLab-Connect-1996551703977858/" />
            <i class="fa fa-plus" aria-hidden="true"></i>
            </Form.Group>
            <div className="link_append_bx">
              <p><i class="fa fa-times" aria-hidden="true"></i> www.linkedin.com/MyLab-Connect</p>
            </div>
            </Col>
            <Col lg={6} sm={6} xs={12}>
            <Form.Group className="mb-3" controlId="">
            <Form.Label>Number of employees</Form.Label>
            <Form.Control type="text" placeholder="" />
            </Form.Group>
            </Col>
            <Col lg={6} sm={6} xs={12}>
            <Form.Group className="mb-3" controlId="">
            <Form.Label>Website URL</Form.Label>
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
                  <Col lg={6} sm={6} xs={12}>
                  <div className="checkbox_right_align">
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Maxillofacial_Surgery">
                  <Form.Check label="Maxillofacial Surgery" type="checkbox"  />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Prosthodontics">
                  <Form.Check type="checkbox" label="Prosthodontics" />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Cosmetic">
                  <Form.Check type="checkbox" label="Cosmetic" />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Implant">
                  <Form.Check type="checkbox" label="Implant" />
                  </Form.Group>
                  </div>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                  <div className="checkbox_right_align">
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Orthodontics">
                  <Form.Check type="checkbox" label="Orthodontics" />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Reconstructive_Restorative​">
                  <Form.Check type="checkbox" label="Reconstructive Restorative​" />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Orthodontics">
                  <Form.Check type="checkbox" label="Orthodontics" />
                  </Form.Group>
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="others">
                  <Form.Check type="checkbox" label="Others" />
                  </Form.Group>
                  </div>
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
              <div>
              </div>
              <div className="card-body border-bottom-dotted">
                <h3>Case Type</h3>
                <div className="form">
                  <Form>
                  <Row>
                  <Col lg={6} sm={6} xs={12}>
                  <div className="checkbox_right_align">
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Traditional">
                  <Form.Check type="checkbox" label="Traditional" />
                  </Form.Group>
                 </div>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                  <div className="checkbox_right_align">
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Digital">
                  <Form.Check type="checkbox" label="Digital" />
                  </Form.Group>
                  </div>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                  <div className="checkbox_right_align">
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Traditional_Domestic">
                  <Form.Check type="checkbox" label="Traditional Domestic" />
                  </Form.Group>
                 </div>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                  <div className="checkbox_right_align">
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Digital_Domestic">
                  <Form.Check type="checkbox" label="Digital Domestic" />
                  </Form.Group>
                  </div>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                  <div className="checkbox_right_align">
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Traditional_Offshore">
                  <Form.Check type="checkbox" label="Traditional Offshore" />
                  </Form.Group>
                  </div>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                  <div className="checkbox_right_align">
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Digital_Offshore​">
                  <Form.Check type="checkbox" label="Digital Offshore​" />
                  </Form.Group>
                  </div>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                  <div className="checkbox_right_align">
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Traditional_Aesthetic​">
                  <Form.Check type="checkbox" label="Traditional Aesthetic​" />
                  </Form.Group>
                  </div>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
                  <div className="checkbox_right_align">
                  <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Digital_Aesthetic">
                  <Form.Check type="checkbox" label="Digital Aesthetic​" />
                  </Form.Group>
                  </div>
                  </Col>
                  <Col lg={12} sm={12} xs={12} className="mt-lg-3 mt-sm-3 mt-3">
                  <p><strong>Scanner Name</strong></p>
                  </Col>
                  <Col lg={6} sm={6} xs={12}>
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
                <Col lg={6} sm={6} xs={12}>
                <div className="checkbox_right_align">
                <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Carestream">
                <Form.Check type="checkbox" label="Carestream" />
                </Form.Group>
                <Form.Group className="mb-3 custom-control custom-checkbox" controlId="Planmeca">
                <Form.Check type="checkbox" label="Planmeca" />
                </Form.Group>
                </div>
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
          <div className="card-body border-bottom-dotted">
            <h3>Lab Management Details​</h3>
            <Row>
              <Col lg={6} sm={6} xs={12}>
              <Form.Group controlId="formBasicSelect">
              <Form.Label>LMS Name</Form.Label>
              <Form.Control
                as="select"
                value={type}
                onChange={e => {
                  console.log("e.target.value", e.target.value);
                  setType(e.target.value);
                }}
              >
                <option value="Others">Others</option>
              </Form.Control>
              </Form.Group>
              </Col>
            <Col lg={12} sm={12} xs={12}>
            <Form.Group className="mb-3" controlId="">
            <Form.Label>No. of doctors you are working with</Form.Label>
            <Form.Control type="text" placeholder="123" />
            </Form.Group>
            </Col>
            <Col lg={12} sm={12} xs={12}>
            <Form.Group className="mb-3" controlId="">
            <Form.Label>No. of products you are working with</Form.Label>
            <Form.Control type="text" placeholder="123" />
            </Form.Group>
            </Col>
            </Row>
            </div>
            <div className="card-body">
            <Row className="">
            <Col lg={12} sm={12} xs={12}>
              <p>Manufacturing Location​</p>
            </Col>
            <Col lg={6} sm={6} xs={12}>
            <Form.Select aria-label="Default select example" className="form-control mb-3">
            <option>Select type</option>
            <option value="1">USA</option>
            <option value="2">USA</option>
            <option value="3">USA</option>
            </Form.Select>
            </Col>
            <Col lg={6} sm={6} xs={12}>
            <Form.Control type="text" placeholder="California​" />
            </Col>
            </Row>
            </div>
        </div>
        <div className="card mb-lg-5 mb-sm-5 mb-3">
            <div className="card-body">
            <h3>Case details <i class="fa fa-question-circle" aria-hidden="true"></i></h3>
            <Row className="border-bottom-dotted grey_dotted">
            <Col lg={6} sm={6} xs={12}>
              <label>Restoration</label>
            <Form.Select aria-label="Default select example" className="form-control mb-3">
            <option>Select type</option>
            <option value="1">Composite</option>
            <option value="2">Composite</option>
            </Form.Select>
            </Col>
            <Col lg={6} sm={6} xs={12}>
              <label>Product</label>
            <Form.Select aria-label="Default select example" className="form-control mb-3">
            <option>Select Product</option>
            <option value="1">Veneer </option>
            <option value="2">Veneer </option>
            </Form.Select>
            </Col>
          <Col lg={6} sm={6} xs={12}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>No. of cases per month</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="23" />
          </Form.Group>
          </Col>
          <Col lg={6} sm={6} xs={12}>
          <Form.Group className="mb-3" controlId="">
          <Form.Label>Average cost per case ($)</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="30" />
          </Form.Group>
          </Col>
            </Row>
              <Row>
              <Col>
              <button className="btn btn-primary btn_white"><i class="fa fa-plus" aria-hidden="true"></i>
              Add Case details​ </button>
              </Col>
              </Row> 
            </div>
        </div>
     </Col>
      <Col lg={12} sm={12} xs={12} className="text-center mb-lg-4 mb-sm-4 mb-3">
      <Button variant="primary" type="submit">
      Send Requset
      </Button>
      </Col>
    </Row>
    </div>
  )
}
export default LabOnboardingProfile