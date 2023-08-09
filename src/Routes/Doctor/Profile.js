import React, { useState } from "react";
import DoctorSidebar from "../../Components/DoctorSiderbar";
import { Card, CardBody, CardHeader } from "reactstrap";
import { Container } from "reactstrap";
import DoctorQualificationForm from "./DoctorQualificationForm";
import DoctorProfileForm from "./DoctorProfileForm";
import "./ProfileStyle.css";

const Profile = () => {
  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div style={{ display: "flex"}}>
      <DoctorSidebar />
      <Container style={{marginTop:'10px'}}>
        <Card>
          <CardHeader className="bloc-tabs">
            <div
              className={activeTab === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Basic Info
            </div>
            <div
              className={activeTab === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Qualification
            </div>
          </CardHeader>
          <CardBody className="content-tabs">
            <div
              className={
                activeTab === 1 ? "content active-content" : "content"
              }
            >
              <DoctorProfileForm />
            </div>
            <div
              className={
                activeTab === 2 ? "content active-content" : "content"
              }
            >
              <DoctorQualificationForm />
            </div>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default Profile;
