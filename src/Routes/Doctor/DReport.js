import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import DoctorSidebar from "../../Components/DoctorSiderbar";
import './DReport.css';
import { Card, CardBody, CardHeader } from "reactstrap";
import { Container } from "reactstrap";
import ClientRepo from './ClientRepo';
import DHospitalRepo from "./DHospitalRepo";


const DReport = () =>{

    const myStyle = {
        display: "flex",
        color: "black",
    };
    const componentRef = useRef(null);
  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (index) => {
    setActiveTab(index);
  };
    return(
        <>
      <div style={myStyle}>
        <DoctorSidebar />
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
              Client
            </div>
          </CardHeader>
          <CardBody className="content-tabs">
            <div
              className={
                activeTab === 1 ? "content active-content" : "content"
              }
            >
              <DHospitalRepo />
            </div>
            <div
              className={
                activeTab === 2 ? "content active-content" : "content"
              }
            >
              <ClientRepo />
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
}

export default DReport;