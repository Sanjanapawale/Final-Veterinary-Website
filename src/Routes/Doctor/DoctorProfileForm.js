import React from "react";
import DoctorSidebar from "../../Components/DoctorSiderbar";
import Profile from "../../Assets/ProfileImg.png";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

const DoctorProfileForm = () => {
  const containerStyle = {
    margin: "1% 4%",
    backgroundColor: "pink",
    padding: "20px",
    width: "80%",
  };
  return (
      <div className="Container" style={containerStyle}>
        <Form>
        <b style={{fontSize:'30px', marginLeft: '35%'}}>Doctor Profile Form</b>
          <Row style={{marginTop:'3%'}}>
            <Col md={4}>
              <FormGroup>
                <Label for="profilephoto">Profile photo</Label>
                <br />
                <img src={Profile} style={{ width: "25%" }} />
                <br />
                <br />
                <Input
                  style={{ width: "80%" }}
                  id="profilephoto"
                  name="profilephoto"
                  placeholder="Pick a photo from your computer"
                  type="file"
                />
              </FormGroup>
            </Col>

            <Col md={8}>
              <FormGroup>
                <Label for="fname">First Name</Label>
                <Input style={{ width: "50%" }} id="fname" name="fname" />
              </FormGroup>
              <Row>
                <FormGroup>
                  <Label for="lname">Last Name</Label>
                  <Input style={{ width: "50%" }} id="lname" name="lname" />
                </FormGroup>
              </Row>
            </Col>
          </Row>
          <br />

          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="phonenumber">Phone Number</Label>
                <Input type="number" id="phonenumber" name="phonenumber" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="emailid">Email Address</Label>
                <Input type="email" id="emailid" name="emailid" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="gender">Gender</Label>
                <Input type="select">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Input>
              </FormGroup>
            </Col>
          </Row><br/>

          <Row>
            <Col md={4}>
              <FormGroup>
                <b>Address</b><br/>
                <Label for="houseno">House No./Street Name/Area</Label>
                <Input id="houseno" name="houseno" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup><br/>
                <Label for="locality">Colony/Street/Locality</Label>
                <Input id="locality" name="locality" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup><br/>
                <Label for="city">City</Label>
                <Input id="city" name="city" />
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
          <Button style={{marginLeft:'45%', marginTop:'2%', width:'100px'}}>Save</Button>
        </Form>
      </div>
  );
};

export default DoctorProfileForm;
