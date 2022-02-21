import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Dropdown, Modal, } from "react-bootstrap";
import DropdownButton from 'react-bootstrap/DropdownButton';
import FormCheck from 'react-bootstrap/FormCheck';
import { Link } from "react-router-dom";

import '../App.css';

function AddNewCase() {
    const [selectedFile, setSelectedFile] = useState(null);

    /* Modal popup */
    const [show, setShow] = useState(false);
    const add_restorationClose = () => setShow(false);
    const add_restorationShow = () => setShow(true);

    const [show_additionalservice, setShow__additionalservice] = useState(false);
    const additionalserviceClose = () => setShow__additionalservice(false);
    const additionalserviceShow = () => setShow__additionalservice(true);

    const [show_marketplace, setShow_marketplace] = useState(false);
    const marketplaceClose = () => setShow_marketplace(false);
    const marketplaceShow = () => setShow_marketplace(true);


    /* Modal popup */
    const [fname, setName] = useState("");
    const [lname, setName1] = useState("");

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
                        <Form>
                            <Row>
                                <Col lg={12} sm={12} xs={12}>
                                    <h3>Patient Details</h3>
                                </Col>
                                <Col lg={6} sm={6} xs={12}>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>First Name *</Form.Label>
                                        <Form.Control type="text" value={fname}
                                            onChange={(e) => setName(e.target.value)} placeholder="" />
                                    </Form.Group>
                                </Col>
                                <Col lg={6} sm={6} xs={12}>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Last Name *</Form.Label>
                                        <Form.Control type="text" value={lname}
                                            onChange={(e) => setName1(e.target.value)} placeholder="" />
                                    </Form.Group>
                                </Col>
                                <Col lg={6} sm={6} xs={12}>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Patient ID</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                </Col>
                                <Col lg={6} sm={6} xs={12}>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Due Date *</Form.Label>
                                        <Form.Control type="date" placeholder="" />
                                    </Form.Group>
                                </Col>
                                <Col lg={12} sm={12} xs={12}>
                                    <h3>Case Details</h3>
                                </Col>
                                <Col lg={12} sm={12} xs={12}>
                                    <label>Rush</label>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                inline
                                                label="Yes"
                                                name="group1"
                                                value="1"
                                                type={type}
                                                id={`inline-${type}-1`}
                                            />
                                            <Form.Check
                                                inline
                                                label="No"
                                                name="group1"
                                                value="0"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                        </div>
                                    ))}
                                </Col>
                                <Col lg={6} sm={6} xs={12}>
                                    <label>Restoration</label>
                                    <Form.Select aria-label="Default select example" className="form-control mb-3">
                                        <option>Select type</option>
                                        <option value="11">Composite</option>
                                        <option value="21">Composite</option>
                                    </Form.Select>
                                </Col>
                                <Col lg={6} sm={6} xs={12}>
                                    <label>Product</label>
                                    <Form.Select aria-label="Default select example" className="form-control mb-3">
                                        <option>Select Product</option>
                                        <option value="12">Veneer </option>
                                        <option value="22">Veneer </option>
                                    </Form.Select>
                                </Col>
                                <Col lg={12} sm={12} xs={12}>
                                    <h3>Order Details</h3>
                                </Col>
                                <Col lg={6} sm={6} xs={12}>
                                    <label>Order To</label>
                                    <div className="grid_bx_order">
                                        <span className="grey">Preferred :</span>  American Dental
                                    </div>
                                </Col>
                                <Col lg={6} sm={6} xs={12}>
                                    <label>Order From</label>
                                    <Form.Select aria-label="Default select example" className="form-control mb-3">
                                        <option>Select type</option>
                                        <option value="13">Composite</option>
                                        <option value="23">Composite</option>
                                    </Form.Select>
                                </Col>
                                <Col lg={6} sm={6} xs={12}>
                                    <Button className="btn btn-primary w-70 mb-3" onClick={marketplaceShow}>Market Place  <i className="fa fa-angle-right" aria-hidden="true"></i>
                                    </Button>
                                </Col>
                                <Col lg={12} sm={12} xs={12} className="mt-1">
                                    <h3>Restoration Details *</h3>
                                </Col>
                                <Col lg={3} sm={4} xs={12}>
                                    <Button variant="default" className="btn btn-default default" onClick={add_restorationShow}><i className="fa fa-plus-circle" aria-hidden="true"></i>
                                        Add Restoration</Button>
                                </Col>
                                <Col lg={3} sm={4} xs={12}>
                                    <Button variant="default" className="btn btn-default default" onClick={additionalserviceShow}><i className="fa fa-plus-circle" aria-hidden="true"></i>
                                        Additional Service
                                    </Button>
                                </Col>
                                <Col lg={12} sm={12} xs={12}>
                                    <div className="light_blue">
                                        <Card className="card mb-5">
                                            <div className="card-body">
                                                <Row>
                                                    <Col lg={12} sm={12} xs={12}>
                                                        <div className="title_h4">
                                                            <h4>Restoration <span className="float_right">
                                                                <i className="fa fa-pencil" aria-hidden="true"></i>
                                                                <i className="fa fa-trash" aria-hidden="true"></i>
                                                            </span>
                                                            </h4>
                                                        </div>
                                                    </Col>
                                                    <Col lg={12} sm={12} xs={12}>
                                                        <p><span className="grey">Restoration Type : </span>Ceramic</p>
                                                        <p><span className="grey">Tooth No : </span>Ceramic</p>
                                                        <p><span className="grey">Material​ Type : </span>Zirconia</p>
                                                        <p><span className="grey">Material​ Name : </span>Full Contour Layered</p>
                                                        <p><span className="grey">Shade : </span>A</p>
                                                        <p><span className="grey">Prep Shade : </span>A</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                        <Card className="card mb-5">
                                            <div className="card-body">
                                                <Row>
                                                    <Col lg={12} sm={12} xs={12}>
                                                        <div className="title_h4">
                                                            <h4>Additional Service <span className="float_right">
                                                                <i className="fa fa-pencil" aria-hidden="true"></i>
                                                                <i className="fa fa-trash" aria-hidden="true"></i>
                                                            </span>
                                                            </h4>
                                                        </div>
                                                    </Col>
                                                    <Col lg={12} sm={12} xs={12}>
                                                        <p><span className="grey">Service : </span>Study Model</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card>
                                    </div>
                                </Col>
                                <Col lg={12} sm={12} xs={12} className="mt-lg-5 mt-sm-5 mt-3">
                                    <h3 className="mb-0">Case Preference </h3>
                                    <small className="text_12">These case preferences will be sent with all your cases.</small>
                                </Col>
                                <Col lg={12} sm={12} xs={12} className="mt-3">
                                    <label>Interproximal Contact</label>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                inline
                                                label="Normal(default)"
                                                name="interproximal"
                                                type={type}
                                                id={`inline-${type}-1`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Broad/Tight"
                                                name="interproximal"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                        </div>
                                    ))}
                                </Col>
                                <Col lg={12} sm={12} xs={12} className="mt-3">
                                    <label>Occlusion</label>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                inline
                                                label="In Occlusion"
                                                name="occlusion"
                                                type={type}
                                                id={`inline-${type}-11`}
                                            />
                                            <Form.Check
                                                inline
                                                label="In Light Occlusion"
                                                name="occlusion"
                                                type={type}
                                                id={`inline-${type}-21`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Out 0.5 mm"
                                                name="occlusion"
                                                type={type}
                                                id={`inline-${type}-21`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Way out 1.0 mm"
                                                name="occlusion"
                                                type={type}
                                                id={`inline-${type}-21`}
                                            />
                                        </div>
                                    ))}
                                </Col>

                                <Col lg={12} sm={12} xs={12} className="mt-3">
                                    <label>Metal of choice</label>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                inline
                                                label="Noble(default)"
                                                name="metal"
                                                type={type}
                                                id={`inline-${type}-12`}
                                            />
                                            <Form.Check
                                                inline
                                                label="High noble white yellow "
                                                name="metal"
                                                type={type}
                                                id={`inline-${type}-22`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Base"
                                                name="metal"
                                                type={type}
                                                id={`inline-${type}-22`}
                                            />
                                        </div>
                                    ))}
                                </Col>
                                <Col lg={12} sm={12} xs={12} className="mt-3">
                                    <label>Metal of choice</label>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                inline
                                                label="Noble(default)"
                                                name="metal"
                                                type={type}
                                                id={`inline-${type}-12`}
                                            />
                                            <Form.Check
                                                inline
                                                label="High noble white yellow "
                                                name="metal"
                                                type={type}
                                                id={`inline-${type}-22`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Base"
                                                name="metal"
                                                type={type}
                                                id={`inline-${type}-22`}
                                            />
                                        </div>
                                    ))}
                                </Col>
                                <Col lg={12} sm={12} xs={12} className="mt-3">
                                    <label>Occlusal stain</label>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                inline
                                                label="Light(default)"
                                                name="occlusal"
                                                type={type}
                                                id={`inline-${type}-13`}
                                            />
                                            <Form.Check
                                                inline
                                                label="No"
                                                name="occlusal"
                                                type={type}
                                                id={`inline-${type}-23`}
                                            />
                                        </div>
                                    ))}
                                </Col>

                                <Col lg={12} sm={12} xs={12} className="mt-3">
                                    <label>Anatomy</label>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                inline
                                                label="Duplicated to adjacent anatomy(default)"
                                                name="anatomy"
                                                type={type}
                                                id={`inline-${type}-14`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Primary"
                                                name="anatomy"
                                                type={type}
                                                id={`inline-${type}-24`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Detailed"
                                                name="anatomy"
                                                type={type}
                                                id={`inline-${type}-34`}
                                            />
                                        </div>
                                    ))}
                                </Col>
                                <Col lg={12} sm={12} xs={12} className="mt-3">
                                    <label>If limited clearance</label>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                inline
                                                label="Reduce opposing"
                                                name="limited_clearance"
                                                type={type}
                                                id={`inline-${type}-15`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Reduction coping"
                                                name="limited_clearance"
                                                type={type}
                                                id={`inline-${type}-25`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Place Metal Island/Occlusal"
                                                name="limited_clearance"
                                                type={type}
                                                id={`inline-${type}-35`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Call/mention in Rx "
                                                name="limited_clearance"
                                                type={type}
                                                id={`inline-${type}-45`}
                                            />
                                        </div>
                                    ))}
                                </Col>
                                <Col lg={12} sm={12} xs={12} className="mt-3">
                                    <label>Metal collars</label>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                inline
                                                label="Buccal"
                                                name="metal_collars"
                                                type={type}
                                                id={`inline-${type}-16`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Lingual"
                                                name="metal_collars"
                                                type={type}
                                                id={`inline-${type}-26`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Mesial/Distal"
                                                name="metal_collars"
                                                type={type}
                                                id={`inline-${type}-36`}
                                            />
                                            <Form.Check
                                                inline
                                                label="None"
                                                name="metal_collars"
                                                type={type}
                                                id={`inline-${type}-46`}
                                            />
                                        </div>
                                    ))}
                                </Col>
                                <Col lg={12} sm={12} xs={12} className="mt-3">
                                    <label>Tissue Shade</label>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                inline
                                                label="Clear"
                                                name="tissue_shade"
                                                type={type}
                                                id={`inline-${type}-17`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Regular Pink"
                                                name="tissue_shade"
                                                type={type}
                                                id={`inline-${type}-27`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Light Pink"
                                                name="tissue_shade"
                                                type={type}
                                                id={`inline-${type}-37`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Dark Pink"
                                                name="tissue_shade"
                                                type={type}
                                                id={`inline-${type}-47`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Mild"
                                                name="tissue_shade"
                                                type={type}
                                                id={`inline-${type}-48`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Moderate"
                                                name="tissue_shade"
                                                type={type}
                                                id={`inline-${type}-49`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Heavy"
                                                name="tissue_shade"
                                                type={type}
                                                id={`inline-${type}-491`}
                                            />
                                            <Form.Check
                                                inline
                                                label="Ethnic(Meharry)"
                                                name="tissue_shade"
                                                type={type}
                                                id={`inline-${type}-492`}
                                            />
                                        </div>
                                    ))}
                                </Col>
                                <Col lg={12} sm={12} xs={12} className="mt-3">
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Any other expectations</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="White expectations" />
                                    </Form.Group>
                                </Col>
                                <Col lg={9} sm={8} xs={12} className="mt-3">
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Case Notes *</Form.Label>
                                        <Form.Control as="textarea" rows={5} className="textarea_minheight" placeholder="White expectations" />
                                    </Form.Group>
                                </Col>
                                <Col lg={3} sm={4} xs={12} className="mt-3">
                                    <div className="form-group inputDnD">
                                        <label>Document Attachment</label>
                                        <input
                                            type="file"
                                            className="form-control-file"
                                            value={selectedFile}
                                            onChange={(e) => setSelectedFile(e.target.files[0])}
                                        />
                                        <span>
                                            <img alt="file upload" className="grid_upload_img" src="assets/file_upload.png" />
                                            {/* <i class="fa fa-file-image-o" aria-hidden="true"></i> <br/> */}
                                            Attach File <br />
                                            <small>.pdf,.doc,docx <br />Multiple files will upload</small>
                                        </span>
                                    </div>
                                </Col>
                                <Col lg={12} sm={12} xs={12} >
                                    <Row>
                                        <Col lg={3} sm={4} xs={12}><button className="btn btn-primary w-100">Reset</button></Col>
                                        <Col lg={3} sm={4} xs={12}><button className="btn btn-primary w-100">Save as Darft</button></Col>
                                        <Col lg={3} sm={4} xs={12}><button className="btn btn-primary w-100">Submit</button></Col>

                                    </Row>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </Col>
            <div className="test">
                <Modal show={show} className="add_restoration" scrollable={true} onHide={add_restorationClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Restoration</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col lg={6} sm={6} xs={12}>
                                <Form className="text-left">
                                    <label>Restoration Type *</label>
                                    <Form.Select aria-label="Default select example" className="form-control mb-3">
                                        <option>Select </option>
                                        <option value="13">Restoration Type 1</option>
                                        <option value="23">Restoration Type 2</option>
                                    </Form.Select>
                                    <label>Material​ Type *</label>
                                    <Form.Select aria-label="Default select example" className="form-control mb-3">
                                        <option>Select </option>
                                        <option value="13">Material​ Type 1</option>
                                        <option value="23">Material​ Type 2</option>
                                    </Form.Select>
                                    <label>Material​ Name *</label>
                                    <Form.Select aria-label="Default select example" className="form-control mb-3">
                                        <option>Select </option>
                                        <option value="13">Material​ 1</option>
                                        <option value="23">Material​ 2</option>
                                    </Form.Select>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Shade *</Form.Label>
                                        <Form.Control type="text" placeholder="Enter" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Label>Prep Shade *</Form.Label>
                                        <Form.Control type="text" placeholder="Enter" />
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col lg={6} sm={6} xs={12}>
                                <Form>
                                    <Form.Group>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light" onClick={add_restorationClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={add_restorationClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={show_additionalservice} className="additionalservice" scrollable={true} onHide={additionalserviceClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className="text-capitalize">Additional Service</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="text-left">
                            <label>Service Name *</label>
                            <Form.Select aria-label="Default select example" className="form-control mb-3">
                                <option>Select type</option>
                                <option value="13">Service Type 1</option>
                                <option value="23">Service Type 2</option>
                            </Form.Select>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer className="text-center">
                        <Button variant="light" onClick={additionalserviceClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={additionalserviceClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={show_marketplace} className="marketplace drawer right-align" scrollable={true} onHide={marketplaceClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className="text-capitalize">Market Place</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="parent_grid">
                            <span className="blue">Best Matching</span>
                            <Form>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="90% Matching "
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                    </div>
                                ))}
                            </Form>
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
                                    </div>
                                </Col>
                                <Col lg={9} sm={9} xs={12} className="mb-4">
                                    <Link to="/add_lab_preference"> <Button className="btn btn-primary w-100 light_blue mr-lg-3 mr-sm-3 mr-0">View Profile</Button> </Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6} lg={6} xs={12}>
                                    <p className="gery">Type of Dentistry</p>
                                </Col>
                                <Col lg={6} lg={6} xs={12}>
                                    <p className="light_blue">Matched</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6} lg={6} xs={12}>
                                    <p className="gery">Case Type</p>
                                </Col>
                                <Col lg={6} lg={6} xs={12}>
                                    <p className="light_blue">Matched</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6} lg={6} xs={12}>
                                    <p className="gery">Scanner Name</p>
                                </Col>
                                <Col lg={6} lg={6} xs={12}>
                                    <p className="black">Not Matched</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6} lg={6} xs={12}>
                                    <p className="gery">Product Details</p>
                                </Col>
                                <Col lg={6} lg={6} xs={12}>
                                    <p className="light_blue">Matched</p>
                                </Col>
                            </Row>

                        </div>
                        <div className="parent_grid">
                            <span className="blue">Best Matching</span>
                            <Form>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="90% Matching "
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                    </div>
                                ))}
                            </Form>
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
                                    </div>
                                </Col>
                                <Col lg={9} sm={9} xs={12} className="mb-4">
                                    <Link to="/add_lab_preference"> <Button className="btn btn-primary w-100 light_blue mr-lg-3 mr-sm-3 mr-0">View Profile</Button> </Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6} lg={6} xs={12}>
                                    <p className="gery">Type of Dentistry</p>
                                </Col>
                                <Col lg={6} lg={6} xs={12}>
                                    <p className="light_blue">Matched</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6} lg={6} xs={12}>
                                    <p className="gery">Case Type</p>
                                </Col>
                                <Col lg={6} lg={6} xs={12}>
                                    <p className="light_blue">Matched</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6} lg={6} xs={12}>
                                    <p className="gery">Scanner Name</p>
                                </Col>
                                <Col lg={6} lg={6} xs={12}>
                                    <p className="black">Not Matched</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6} lg={6} xs={12}>
                                    <p className="gery">Product Details</p>
                                </Col>
                                <Col lg={6} lg={6} xs={12}>
                                    <p className="light_blue">Matched</p>
                                </Col>
                            </Row>

                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </div>


    )
}
export default AddNewCase