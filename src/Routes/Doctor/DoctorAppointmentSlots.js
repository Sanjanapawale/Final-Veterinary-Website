import React from "react";
import DoctorSidebar from "../../Components/DoctorSiderbar";
import { Form, Row, Col, FormGroup, Label, Input, Button, Card, CardHeader, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
const DoctorAppointmentSlots = () => {
  const containerStyle = {
    padding: "20px",
    width: "80%",
    marginLeft:'3%'
  };
  return (
    <div style={{ display: "flex"}}>
      <DoctorSidebar/>
      <div className="Container" style={containerStyle}>
        <Card>
          <CardHeader style={{fontSize:'30px', backgroundColor:'#146ca4', color:'white'}}>
          <b style={{marginLeft: '35%'}}>Appointment Slots</b>
          </CardHeader>
          <CardBody>
          <Form>
          <Row style={{marginTop:'5%'}}>
            <Col md={4}>
              <FormGroup>
                <Label for="doctorid">Doctor Id</Label>
                <Input type="number" id="doctorid" name="doctorid" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="appointmentdate">Appointment Date</Label>
                <Input type="date" id="appointmentdate" name="appointmentdate" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="hospitalname">Hospital Name</Label>
                <Input id="hospitalname" name="hospitalname"/>
              </FormGroup>
            </Col>
          </Row><br/><br/>

          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="stime">Start Time</Label>
                <Input type="time" id="stime" name="stime" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="etime">Closing Time</Label>
                <Input type="time" id="etime" name="etime" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="isdocavailable">Is Doctor Available?</Label>
                <Input type="select" id="isdocavailable" name="isdocavailable">
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                </Input>
              </FormGroup>
            </Col>
          </Row><br/>
          <Row>
          <Col md={4}>
              <FormGroup>
                <Label for="intervaltime">Interval Time</Label>
                <Input type="time" id="intervaltime" name="intervaltime"/>
              </FormGroup>
            </Col>
          </Row><br/>
          <div style={{display:'flex', flexDirection:'row'}}>
          <Button style={{marginLeft:'35%', marginTop:'5%', width:'12%', backgroundColor:'#146ca4'}}>Create Slots</Button>
          <Link to="/availableslots" className="btn" style={{marginLeft:'6%', marginTop:'5%', width:'12%', backgroundColor:'#146ca4', color:'white'}}>Show Slots</Link>
          </div>
        </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default DoctorAppointmentSlots;
