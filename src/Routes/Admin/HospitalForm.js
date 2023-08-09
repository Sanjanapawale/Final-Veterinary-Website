import React from "react";
import DoctorSidebar from "../../Components/DoctorSiderbar";
import {
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";

const HospitalForm = () => {
  const containerStyle = {
    padding: "20px",
    width: "80%",
    marginLeft: "3%",
  };
  return (
    <div style={{ display: "flex" }}>
      <DoctorSidebar />
      <div className="Container" style={containerStyle}>
        <Card>
          <CardHeader
            style={{
              fontSize: "30px",
              backgroundColor: "#146ca4",
              color: "white",
            }}
          >
            <b style={{ marginLeft: "45%" }}>Hospital Details</b>
          </CardHeader>
          <CardBody>
            <Form>
              <Row style={{ marginTop: "5%" }}>
                <Col md={4}>
                  <FormGroup>
                    <Label for="hospitalid">Hospital Id</Label>
                    <Input type="number" id="hospitalid" name="hospitalid" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="hospitalname">Hospital Name</Label>
                    <Input id="hospitalname" name="hospitalname" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="location">Location</Label>
                    <Input id="location" name="location" />
                  </FormGroup>
                </Col>
              </Row>
              <br />
              <br />

              <Row>
                <Col md={4}>
                  <FormGroup> 
                    <Label for="wtsnum">WhatsApp Number</Label>
                    <Input
                      type="number"
                      id="wtsnum"
                      name="wtsnum"
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="opentime">Opening Time</Label>
                    <Input type="time" id="opentime" name="opentime" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="closetime">Closing Time</Label>
                    <Input type="time" id="closetime" name="closetime" />
                  </FormGroup>
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={4}>
                  <FormGroup> 
                    <Label for="email">Email Id</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="opendate">Hospital Opening Date</Label>
                    <Input type="date" id="opendate" name="opendate" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="isverified">Is Verified</Label>
                    <Input type="select" id="isverified" name="isverified">
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row><br/>
              
              <Row>
                <Col md={8}>
                <FormGroup>
                    <Label for="about">About</Label>
                    <Input type="textarea" id="isverified" name="isverified" cols={30} rows={7}>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Button
                  style={{
                    marginLeft: "43%",
                    marginTop: "5%",
                    width: "12%",
                    backgroundColor: "#146ca4",
                  }}
                >
                  Save
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default HospitalForm;
