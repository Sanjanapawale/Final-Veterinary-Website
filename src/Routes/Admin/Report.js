import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import AdminSidebar from "../../Components/AdminSidebar";
import { Card, CardBody, CardHeader } from "reactstrap";
import { Container } from "reactstrap";
import DoctorRepo from './DoctorRepo';
import "./Report.css";
import HospitalRepo from "./HospitalRepo";

const Report = () => {
  const myStyle = {
    display: "flex",
    color: "black"
  };

  const componentRef = useRef(null);
  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div style={myStyle}>
        <AdminSidebar />
          <div ref={componentRef}> 
          <Container style={{marginTop:'10px', width:'80rem', marginLeft:'4%'}}>
        <Card style={{width:'100%'}}>
          <CardHeader className="bloc-tabs">
            <div
              className={activeTab === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Hospital
            </div>
            <div
              className={activeTab === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Shop
            </div>
            <div
              className={activeTab === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              Doctor
            </div>
            <div
              className={activeTab === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(4)}
            >
              Shop Owner
            </div>
          </CardHeader>
          <CardBody className="content-tabs">
            <div
              className={
                activeTab === 1 ? "content active-content" : "content"
              }
            >
              <HospitalRepo />
            </div>
            <div
              className={
                activeTab === 2 ? "content active-content" : "content"
              }
            >
              
            </div>
            <div
              className={
                activeTab === 3 ? "content active-content" : "content"
              }
            >
              <DoctorRepo />
            </div>
            <div
              className={
                activeTab === 4 ? "content active-content" : "content"
              }
            >
            </div>
          </CardBody>
        </Card>
      </Container> 
          </div>
          <div>
            <ReactToPrint
              trigger={() => {
                return <button style={{height:'8%', marginLeft:'50%'}}>Print Document</button>;
              }}
              content={() => componentRef.current}
              documentTitle="new document"
              pageStyle="print"
            />
            </div>
      </div>
    </>
  );
};

export default Report;
