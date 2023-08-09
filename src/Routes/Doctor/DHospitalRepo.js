import React from "react";
import { Button, Card, CardBody, CardHeader, Container } from "reactstrap";

const DHospitalRepo = () => {
  const tableBorderStyle = {
    border: "1px solid black",
    textAlign: "center",
    fontSize: "20px",
  };
  const tableStyle = {
    border: "1px solid black",
    width: "100%",
  };
  return (
    <Container style={{ marginTop: "50px" }}>
      <Card>
        <CardHeader
          style={{
            fontSize: "30px",
            backgroundColor: "#146ca4",
            color: "white",
          }}
        >
          Hospital Details
        </CardHeader>
        <CardBody>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={tableBorderStyle}>Sr.No.</th>
                <th style={tableBorderStyle}>Hospital ID</th>
                <th style={tableBorderStyle}>Hospital Name</th>
                <th style={tableBorderStyle}>Location</th>
                <th style={tableBorderStyle}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tableBorderStyle}>1</td>
                <td style={tableBorderStyle}>2564</td>
                <td style={tableBorderStyle}>BMC Animal Hospital</td>
                <td style={tableBorderStyle}>Mumbai</td>
                <td style={tableBorderStyle}>Approved</td>
              </tr>
              <tr>
                <td style={tableBorderStyle}>2</td>
                <td style={tableBorderStyle}>8758</td>
                <td style={tableBorderStyle}>Pet Clinic And Care Centre</td>
                <td style={tableBorderStyle}>Nashik</td>
                <td style={tableBorderStyle}>Approved</td>
              </tr>
              <tr>
                <td style={tableBorderStyle}>3</td>
                <td style={tableBorderStyle}>7567</td>
                <td style={tableBorderStyle}>Pet Paradise Veterinary Clinic</td>
                <td style={tableBorderStyle}>Dombivli</td>
                <td style={tableBorderStyle}>Pending</td>
              </tr>
            </tbody>
          </table>
        </CardBody>
      </Card>
    </Container>
  );
};
export default DHospitalRepo;
