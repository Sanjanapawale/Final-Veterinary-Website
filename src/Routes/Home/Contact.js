import React from "react";
import {
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Button,
  Container,
  CardHeader,
  Input,
  Card,
  CardBody
} from "reactstrap";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <Container style={{ width: "55%" }}>
        <Row style={{ marginTop: "12%" }}>
          {/* {JSON.stringify(data)} */}
          <Card>
            <CardHeader>
              <h4 style={{marginLeft:'42%'}}>Contact Us</h4>
            </CardHeader>
            <CardBody>
              <Form style={{ marginTop: "4%" }}>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="fname">First Name</Label>
                      <Input id="fname" name="fname" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="lastname">Last Name</Label>
                      <Input id="lastname" name="lastname" />
                    </FormGroup>
                  </Col>
                </Row>
                <br />

                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="contact">Phonr Number</Label>
                      <Input type="number" id="contact" name="contact" />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="email">Email Id</Label>
                      <Input type="email" id="email" name="email" />
                    </FormGroup>
                  </Col>
                </Row>
                <br />

                <Row>
                  <Col md={12}>
                    <FormGroup>
                      <Label for="message">Message</Label>
                      <Input type="textarea" id="message" name="message"  rows={5}></Input>
                    </FormGroup>
                  </Col>
                </Row>
                <p className="btn btn-primary" style={{ marginLeft: "45%", marginTop: "5%", width:'100px' }}>
                  Send
                </p>
              </Form>
            </CardBody>
          </Card>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
