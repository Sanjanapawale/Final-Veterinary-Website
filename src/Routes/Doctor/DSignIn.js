import React, { useState } from "react";
import {Card, Container, Label, Button, CardBody, CardHeader, Col, Form, Input, Row, FormGroup} from "reactstrap";
import { toast } from "react-toastify";
import {loginUser} from '../../Services/UserService';
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const DSignIn = () => {
const [loginDetail, setloginDetail] = useState({
  username:'',
  password:''
});

const handlChange=(event, field)=>{
  let actualValue = event.target.value;
  setloginDetail({
    ...loginDetail,
    [field]:actualValue
  })
}

const handleReset=()=>{
  setloginDetail({
    username: "",
    password: ""
  });
};

const handleFormSubmit = (event) =>{
  event.preventDefault();
  console.log(loginDetail);

  // Validation
  if(loginDetail.username.trim()==='' || loginDetail.password.trim()===''){
    // toast.error("Username or password is required !!");
    return;
  }

  // Submit thedata to server to generate token
  loginUser(loginDetail).then((jwtTokenData)=>{
    console.log("userlogin: ");
    console.log(jwtTokenData);
    // toast.success("Login Success");
  }).catch(error=>{
    console.log(error);
    if(error.response.status===400 || error.response.status===404){
      // toast.error(error.response.data.message);  
    }
    else{
      // toast.error("Something went wrong on server!!");
    }
  })
};
  return (
    <>
    <Navbar/>
      <Container>
        <Row style={{ marginTop: "10%" }}>
          <Col sm={{ size: 6, offset: 3 }}>
            <Card>
              <CardHeader style={{fontSize:'30px', backgroundColor:'#146ca4', color:'white'}}>
                <h4>Doctor Login !!</h4>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleFormSubmit}>
                  {/* emailId */}
                  <FormGroup>
                    <Label for="emailId">Enter Email ID</Label>
                    <Input type="email" placeholder="Enter Here" 
                    value={loginDetail.username}
                    onChange={(e) => handlChange(e,'username')}/>
                  </FormGroup>
                  {/* password */}
                  <FormGroup>
                    <Label for="password">Enter Password</Label>
                    <Input type="password" placeholder="Enter Here" 
                    value={loginDetail.password}
                    onChange={(e) => handlChange(e,'password')}/>
                  </FormGroup>
                  <Container className="text-center">
                    <Link to="/profile" className="btn" style={{width:'120px', backgroundColor:'#146ca4', color:'white'}}>Login</Link>
                    <Link to="" onClick={handleReset} className="ms-2 btn" style={{width:'90px', backgroundColor:'#146ca4', color:'white'}} type="reset">Reset</Link>
                    <Link to="" className="ms-2 btn" style={{width:'150px', backgroundColor:'#146ca4', color:'white'}}>Forgot Password</Link>
                    <p>Don't have an account? <Link to="/dsignup">Click here</Link></p>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
}

export default DSignIn;
