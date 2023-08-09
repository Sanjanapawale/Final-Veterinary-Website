import React from "react";
import { Button, Card, CardBody, CardHeader, Container } from "reactstrap";

const HospitalRepo = () => {
    const tableBorderStyle = {
        border: "1px solid black",
        textAlign: "left",
        paddingLeft:'10px',
        fontSize: "20px",
      };
      const tableStyle = {
        border: "1px solid black",
        width: "100%",
      };
  return (
    <Container>
      <Card style={{ marginTop: "3%" }}>
        <CardHeader
          style={{
            fontSize: "30px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          Hospital Report
        </CardHeader>
        <CardBody>
          <table style={tableStyle}>
            <thead
              style={{
                backgroundColor: "blue",
                color: "white",
                height: "60px",
              }}
            >
              <tr>
                <th style={tableBorderStyle}>Sr.No.</th>
                <th style={tableBorderStyle}>Hospital Id</th>
                <th style={tableBorderStyle}>Hospital Name</th>
                <th style={tableBorderStyle}>Doctors</th>
                <th style={tableBorderStyle}>Location</th>
                <th style={tableBorderStyle}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tableBorderStyle}>1</td>
                <td style={tableBorderStyle}>2564</td>
                <td style={tableBorderStyle}>BMC Animal Hospital</td>
                <td style={tableBorderStyle}>
                  Dr. John Doe
                  <br />
                  Dr. Jenniffer Green
                  <br />
                  Dr. Jane Smith
                </td>
                <td style={tableBorderStyle}>Mumbai</td>
                <td style={tableBorderStyle}>Approved</td>
              </tr>
              <tr>
                <td style={tableBorderStyle}>2</td>
                <td style={tableBorderStyle}>8758</td>
                <td style={tableBorderStyle}>Pet Clinic And Care Centre</td>
                <td style={tableBorderStyle}>
                  Dr. Sarah Lee
                  <br />
                  Dr. Jenniffer Green
                </td>
                <td style={tableBorderStyle}>Nashik</td>
                <td style={tableBorderStyle}>Approved</td>
              </tr>
              <tr>
                <td style={tableBorderStyle}>3</td>
                <td style={tableBorderStyle}>7567</td>
                <td style={tableBorderStyle}>Pet Paradise Veterinary Clinic</td>
                <td style={tableBorderStyle}>
                  Dr. Jenniffer Green
                  <br />
                  Dr. Michael Brown
                </td>
                <td style={tableBorderStyle}>Dombivli</td>
                <td style={tableBorderStyle}>Pending</td>
              </tr>
              <tr>
                <td style={tableBorderStyle}>4</td>
                <td style={tableBorderStyle}>1935</td>
                <td style={tableBorderStyle}>Myvets4Pets</td>
                <td style={tableBorderStyle}>
                  Dr. Sarah Lee
                  <br />
                  Dr. Robert White
                  <br />
                  Dr. Lisa Thomas
                </td>
                <td style={tableBorderStyle}>Kharghar</td>
                <td style={tableBorderStyle}>Block</td>
              </tr>
              <tr>
                <td style={tableBorderStyle}>5</td>
                <td style={tableBorderStyle}>4628</td>
                <td style={tableBorderStyle}>Metro Animals Clinic</td>
                <td style={tableBorderStyle}>
                  Dr. John Doe
                  <br />
                  Dr. William Clark
                  <br />
                  Dr. Christopher Turner
                </td>
                <td style={tableBorderStyle}>Nagpur</td>
                <td style={tableBorderStyle}>Pending</td>
              </tr>
            </tbody>
          </table>
        </CardBody>
      </Card>
    </Container>
  );
};

export default HospitalRepo;
