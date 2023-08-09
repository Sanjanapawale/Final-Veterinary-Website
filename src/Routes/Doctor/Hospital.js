import React from "react";
import { useEffect, useState } from "react";
import TablePagination from "@mui/material/TablePagination";
import DoctorSidebar from "../../Components/DoctorSiderbar";
import { Button, Card, CardBody, CardHeader, Container } from "reactstrap";
import { Link } from "react-router-dom";
const Hospital = () => {
  const tableBorderStyle = {
    border: "1px solid black",
    textAlign: "center",
    fontSize: "20px",
  };
  const tableStyle = {
    border: "1px solid black",
    width: "100%",
  };
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div style={{ display: "flex" }}>
      <DoctorSidebar />
      <Container style={{marginTop:'50px'}}>
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
                  <th style={tableBorderStyle}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tableBorderStyle}>1</td>
                  <td style={tableBorderStyle}>2564</td>
                  <td style={tableBorderStyle}>BMC Animal Hospital</td>
                  <td style={tableBorderStyle}>Mumbai</td>
                  <td style={tableBorderStyle}>Approved</td>
                  <td style={tableBorderStyle}>
                  <Link
                      to="/hospitalform"
                      className="btn btn-success"
                      style={{ margin: "10px" }}
                    >
                      Update
                    </Link>
                    <Button
                      className="btn btn-danger"
                      style={{ margin: "10px" }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td style={tableBorderStyle}>2</td>
                  <td style={tableBorderStyle}>8758</td>
                  <td style={tableBorderStyle}>Pet Clinic And Care Centre</td>
                  <td style={tableBorderStyle}>Nashik</td>
                  <td style={tableBorderStyle}>Approved</td>
                  <td style={tableBorderStyle}>
                  <Link
                      to="/hospitalform"
                      className="btn btn-success"
                      style={{ margin: "10px" }}
                    >
                      Update
                    </Link>
                    <Button
                      className="btn btn-danger"
                      style={{ margin: "10px" }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td style={tableBorderStyle}>3</td>
                  <td style={tableBorderStyle}>7567</td>
                  <td style={tableBorderStyle}>Pet Paradise Veterinary Clinic</td>
                  <td style={tableBorderStyle}>Dombivli</td>
                  <td style={tableBorderStyle}>Pending</td>
                  <td style={tableBorderStyle}>
                    <Link
                      to="/hospitalform"
                      className="btn btn-success"
                      style={{ margin: "10px" }}
                    >
                      Update
                    </Link>
                    <Button
                      className="btn btn-danger"
                      style={{ margin: "10px" }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
                
              </tbody>
            </table>
            <br/>
            <TablePagination
              rowsPerPageOptions={[3, 10, 20]}
              component="div"
              count={3}
              rowsPerPage={rowsPerPage}
              page={0}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default Hospital;
