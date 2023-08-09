import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../Services/UserService";
import { toast } from "react-toastify";
import { Card, FormGroup, Form } from "react-bootstrap";
import { Button, CardHeader, Col, FormFeedback, Input, Row } from "reactstrap";
import { CardBody } from "reactstrap";
import Container from "react-bootstrap/esm/Container";
import { Label } from "reactstrap";
import Feedback from "react-bootstrap/esm/Feedback";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

function SignUp() {
  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    cityNation: "",
    mblNo: "",
    emailId: "",
    password: "",
    userRole: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleChange = (event, property) => {
    setdata({ ...data, [property]: event.target.value });
    console.log("name Changed");
  };

  // Submit the Form
  const submitForm = (event) => {
    event.preventDefault();
    if (error.isError) {
      setError({...data, isError:false});
      toast.error("Form data is invalid!!");
      return;
    }
    console.log(data);
    // Call Server API for Sending Data
    signUp(data)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        toast.success("User is registered suceessfully!! User id" + resp.id);
        setdata({
          firstName: "",
          lastName: "",
          cityNation: "",
          mblNo: "",
          emailId: "",
          password: "",
          userRole: "",
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("Error log");
        setError({
          errors: error,
          isError: true,
        });
      });
  };

  // Reset the Data
  const resetData = () => {
    setdata({
      firstName: "",
      lastName: "",
      cityNation: "",
      mblNo: "",
      emailId: "",
      password: "",
      userRole: "",
    });
  };
  return (
    <>
    <Navbar/>
      <Container style={{width:'55%'}}>
        <Row style={{ marginTop: "12%" }}>
          {/* {JSON.stringify(data)} */}
            <Card>
              <CardHeader>
                <h4>Fill information to Register !!</h4>
              </CardHeader>
              <CardBody>
                <Form onSubmit={submitForm}>
                <Row>
                <Col md={6}>
                  {/* First Name */}
                  <FormGroup>
                    <Label for="firstame">First Name</Label>
                    <Input 
                    style={{width:'100%'}}
                      type="text"
                      placeholder="Enter Here"
                      id="firstname"
                      onChange={(e) => handleChange(e, 'firstName')}
                      value={data.firstName}
                      invalid={
                        error.errors?.response?.data?.firstName ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.firstName}
                    </FormFeedback>
                  </FormGroup><br/>
                  </Col>
                  <Col md={6}>
                    {/* Last Name */}
                  <FormGroup>
                    <Label for="lastname">Last Name</Label>
                    <Input
                    style={{width:'100%'}}
                      type="text"
                      placeholder="Enter Here"
                      id="lastname"
                      onChange={(e) => handleChange(e, "lastName")}
                      value={data.lastName}
                      invalid={
                        error.errors?.response?.data?.lastName ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.lastName}
                    </FormFeedback>
                  </FormGroup><br/>
                  </Col>
                </Row>

                  <Row>
                    <Col md={6}>
                      {/* cityNation */}
                  <FormGroup>
                    <Label for="cityNation">City</Label>
                    <Input
                    style={{width:'100%'}}
                      type="text"
                      placeholder="Enter Here"
                      id="cityNation"
                      onChange={(e) => handleChange(e, "cityNation")}
                      value={data.cityNation}
                      invalid={
                        error.errors?.response?.data?.cityNation ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.cityNation}
                    </FormFeedback>
                  </FormGroup><br/>
                    </Col>
                    <Col md={6}>
                      {/* mblNo */}
                  <FormGroup>
                    <Label for="mblNo">Mobile Number</Label>
                    <Input
                    style={{width:'100%'}}
                      type="number"
                      placeholder="Enter Here"
                      id="mblNo"
                      onChange={(e) => handleChange(e, "mblNo")}
                      value={data.mblNo}
                      invalid={
                        error.errors?.response?.data?.mblNo ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.mblNo}
                    </FormFeedback>
                  </FormGroup><br/>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      {/* emailId */}
                  <FormGroup>
                    <Label for="emailId">Email ID</Label>
                    <Input
                    style={{width:'100%'}}
                      type="email"
                      placeholder="Enter Here"
                      id="emailId"
                      onChange={(e) => handleChange(e, "emailId")}
                      value={data.emailId}
                      invalid={
                        error.errors?.response?.data?.emailId ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.emailId}
                    </FormFeedback>
                  </FormGroup><br/>
                    </Col>
                    <Col md={6}>
                      {/* password */}
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                    style={{width:'100%'}}
                      type="password"
                      placeholder="Enter Here"
                      id="password"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                      invalid={
                        error.errors?.response?.data?.password ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.password}
                    </FormFeedback>
                  </FormGroup><br/>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md={6}>
                      {/* userRole */}
                  <FormGroup>
                    <Label for="userRole">User Role</Label>
                    <Input
                    style={{width:'100%'}}
                      type="text"
                      placeholder="Enter Here"
                      id="userRole"
                      onChange={(e) => handleChange(e, "userRole")}
                      value={data.userRole}
                      invalid={
                        error.errors?.response?.data?.userRole ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.userRole}
                    </FormFeedback>
                  </FormGroup><br/>
                    </Col>
                  </Row>
                  <Container className="text-center m-0 p-0">
                    <p className="btn btn-secondary" style={{width:'90px'}}>Register</p>
                    <p onClick={resetData} className="ms-5 btn btn-secondary" type="reset" style={{width:'90px'}}>
                      Reset
                    </p>
                    <p>
                      Already have an account?
                      <Link to="/login">Click here</Link>
                    </p>
                  </Container>
                </Form>
              </CardBody>
            </Card>
        </Row>
      </Container>
      <Footer/>
    </>
  );
}

export default SignUp;
