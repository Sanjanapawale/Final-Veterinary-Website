import React from "react";
import "./Dashboard.css"; // Make sure to create the corresponding CSS file
import AdminSidebar from "../../Components/AdminSidebar";
import { Button, Card, CardBody, CardHeader, Container } from "reactstrap";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />
      <Container>
      <Card  style={{width:'90%', backgroundColor:'greenyellow', marginTop:'2%', marginLeft:'5%'}}>
        <CardHeader style={{ backgroundColor: "black", color: "white", height:'70px', fontSize:'30px' }}>
          Admin Dashboard
        </CardHeader>
        <CardBody>
          <div className="dashboard">
            <div className="caard">
              <h2>Users</h2>
              <p>Total Users: 29</p>
            </div>

            <div className="caard">
              <h2>Products</h2>
              <p>Total Products: 30</p>
            </div>
            <div className="caard">
              <h2>Doctors</h2>
              <p>Total Doctors: 9</p>
            </div>
            <div className="caard">
              <h2>Hospitals</h2>
              <p>Total Hospitals: 10</p>
            </div>
            <div className="caard">
              <h2>Shops</h2>
              <p>Total Shops: 10</p>
            </div>
            <div className="caard">
              <h2>Shop Owner</h2>
              <p>Total Shop Owner: 10</p>
            </div>
          </div>
          <div style={{marginLeft:'43%'}}>
          <Button className="btn btn-light" style={{width:'100px'}}>Save</Button>
          <Button className="btn btn-light" style={{width:'100px', marginLeft:'30px'}}>Update</Button>
          </div>
        </CardBody>
      </Card>
      </Container>
      
    </div>
  );
};

export default Dashboard;
