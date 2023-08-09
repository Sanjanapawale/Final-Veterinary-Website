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

const ClientForm = () => {
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
            <b style={{ marginLeft: "35%" }}>Client Details</b>
          </CardHeader>
          <CardBody>
            <Form>
              <Row style={{ marginTop: "5%" }}>
                <Col md={4}>
                  <FormGroup>
                    <Label for="userid">User Id</Label>
                    <Input type="number" id="userid" name="userid" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="petowner">Pet Owner</Label>
                    <Input id="petowner" name="petowner" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="petname">Pet Name</Label>
                    <Input id="petname" name="petname" />
                  </FormGroup>
                </Col>
              </Row>
              <br />
              <br />

              <Row>
                <Col md={4}>
                  <FormGroup>
                    <b style={{ fontSize: "30px" }}>Appointment Slot</b>
                    <br />
                    <br />
                    <Label for="appointmentdate">Appointment Date</Label>
                    <Input
                      type="date"
                      id="appointmentdate"
                      name="appointmentdate"
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <br />
                    <br />
                    <br/>
                    <Label for="stime">Start Time</Label>
                    <Input type="time" id="stime" name="stime" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <br />
                    <br />
                    <br/>
                    <Label for="etime">Closing Time</Label>
                    <Input type="time" id="etime" name="etime" />
                  </FormGroup>
                </Col>
              </Row>
              <br />
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

export default ClientForm;
