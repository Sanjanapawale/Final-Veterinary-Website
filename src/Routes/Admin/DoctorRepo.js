import React from "react";
import { Button, Card, CardBody, CardHeader, Container } from "reactstrap";
const DoctorRepo=()=>{
    const tableBorderStyle = {
        border: "1px solid black",
        textAlign: "center",
        fontSize: "20px",
      };
      const tableStyle = {
        border: "1px solid black",
        width: "100%",
      };
    return(
        <Container style={{ marginTop: "50px" }}>
        <Card>
          <CardHeader
            style={{
              fontSize: "30px",
              backgroundColor: "black",
              color: "white",
            }}
          >
            Doctor Details
          </CardHeader>
          <CardBody>
            <table style={tableStyle}>
              <thead style={{backgroundColor:'blue', color:'white', height:'60px'}}>
                <tr>
                  <th style={tableBorderStyle}>Sr.No.</th>
                  <th style={tableBorderStyle}>Doctor Name</th>
                  <th style={tableBorderStyle}>Hospital ID</th>
                  <th style={tableBorderStyle}>Hospital Name</th>
                  <th style={tableBorderStyle}>Location</th>
                  <th style={tableBorderStyle}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tableBorderStyle}>1</td>
                  <td style={tableBorderStyle}>Dr. Jenniffer Green</td>
                  <td style={tableBorderStyle}>
                    2564
                    <br />
                    8758
                    <br />
                    7567
                  </td>
                  <td style={tableBorderStyle}>
                    BMC Animal Hospital
                    <br />
                    Pet Clinic And Care Centre
                    <br />
                    Pet Paradise Veterinary Clinic
                  </td>
                  <td style={tableBorderStyle}>
                    Mumbai
                    <br />
                    Nashik
                    <br />
                    Dombivli
                  </td>
                  <td style={tableBorderStyle}>
                    Approved
                    <br />
                    Approved
                    <br />
                    Pending
                  </td>
                  
                </tr>
                <tr>
                  <td style={tableBorderStyle}>2</td>
                  <td style={tableBorderStyle}>Dr. John Doe</td>
                  <td style={tableBorderStyle}>2564<br/>4628</td>
                  <td style={tableBorderStyle}>
                    BMC Animal Hospital<br/>Metro Animals Clinic
                  </td>
                  <td style={tableBorderStyle}>Mumbai<br/>Nagpur</td>
                  <td style={tableBorderStyle}>Approved<br/>Pending</td>
                  
                </tr>
                <tr>
                  <td style={tableBorderStyle}>3</td>
                  <td style={tableBorderStyle}>Dr. Sarah Lee</td>
                  <td style={tableBorderStyle}>8758<br/>1935</td>
                  <td style={tableBorderStyle}>
                  Pet Clinic And Care Centre<br/>Myvets4Pets
                  </td>
                  <td style={tableBorderStyle}>Nashik<br/>Kharghar</td>
                  <td style={tableBorderStyle}>Approved<br/>Block</td>
                  
                </tr>
              </tbody>
            </table>
            <br />
            
          </CardBody>
        </Card>
      </Container>
    );
}

export default DoctorRepo;