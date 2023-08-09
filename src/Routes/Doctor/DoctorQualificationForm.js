import React from "react";
import DoctorSidebar from "../../Components/DoctorSiderbar";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

const DoctorQualificationForm = () => {
  const containerStyle = {
    margin: "4%",
    backgroundColor: "pink",
    padding: "20px",
    width: "80%",
  };
  return (
          <div className="Container" style={containerStyle}>
        <Form>
            <b style={{fontSize:'30px', marginLeft: '35%'}}>Qualification Form</b>
          <Row style={{marginTop:'5%'}}>
            <Col md={4}>
              <FormGroup>
                <Label for="college">College Name</Label>
                <Input id="college" name="college" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="degree">Degree</Label>
                <Input id="degree" name="degree" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="specialization">Specialization</Label>
                <br />
                <Input id="specialization" name="specialization"/>
              </FormGroup>
            </Col>
          </Row><br/><br/>

          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="completionyear">Year of Completion</Label>
                <Input type="number" id="completionyear" name="completionyear" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="experianceyear">Year of Experiance</Label>
                <Input type="number" id="experianceyear" name="experianceyear" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="regnumber">Registration Number</Label>
                <Input type="text" id="regnumber" name="regnumber" />
              </FormGroup>
            </Col>
          </Row><br/>

          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="state">State</Label>
                <Input id="state" name="state" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="country">Country</Label>
                <Input id="country" name="country" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="pincode">Pincode</Label>
                <Input type="number" id="pincode" name="pincode" />
              </FormGroup>
            </Col>
          </Row>
          <Button style={{marginLeft:'45%', marginTop:'5%'}}>Register</Button>
        </Form>
      </div>
  );
};

export default DoctorQualificationForm;
