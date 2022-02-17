import React, { useState } from "react";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function Login() {
  return (
      <div className="login">
            <Row>
            <Col lg={6} sm={6} xs={12} className="p-0">
             <div className="login_section">
              <img alt="login" src="assets/login_den.png" />
             </div>
            </Col>
            <Col lg={6} sm={6} xs={12} className="p-0">
<Card>
    <div className="card-body">
        test login
    </div>
</Card>
            </Col>
            </Row>
      </div>
  )
}
export default Login