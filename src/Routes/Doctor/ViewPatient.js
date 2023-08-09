import React from "react";
import { useEffect, useState } from "react";
import TablePagination from "@mui/material/TablePagination";
import DoctorSidebar from "../../Components/DoctorSiderbar";
import { Button, Card, CardBody, CardHeader, Container } from "reactstrap";
import { Link } from "react-router-dom";
const ViewPatient = () => {
  const tableBorderStyle = {
    border: "1px solid black",
    textAlign: "center",
    fontSize: "20px",
  };
  const tableStyle = {
    border: "1px solid black",
    width: "100%",
  };
  const [searchQuery, setSearchQuery] = useState("");
  const filteredRows = rows.filter((row) =>
    row.some((cellValue) =>
      cellValue.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  <input
    type="text"
    placeholder="Search"
    value={searchQuery}
    onChange={(event) => setSearchQuery(event.target.value)}
  />;
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
      <Container style={{ marginTop: "5%" }}>
        <Card>
          <CardHeader
            style={{
              fontSize: "30px",
              backgroundColor: "#146ca4",
              color: "white",
            }}
          >
            Client Details
          </CardHeader>
          <CardBody>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={tableBorderStyle}>Sr.No.</th>
                  <th style={tableBorderStyle}>UserId</th>
                  <th style={tableBorderStyle}>Pet Owner</th>
                  <th style={tableBorderStyle}>Pet Name</th>
                  <th style={tableBorderStyle}>Date</th>
                  <th style={tableBorderStyle}>Appointment Slot</th>
                  <th style={tableBorderStyle}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tableBorderStyle}>1</td>
                  <td style={tableBorderStyle}>101</td>
                  <td style={tableBorderStyle}>Sanjana Pawale</td>
                  <td style={tableBorderStyle}>Dog(Tommy)</td>
                  <td style={tableBorderStyle}>03-07-2023</td>
                  <td style={tableBorderStyle}>04:00-04:30</td>
                  <td style={tableBorderStyle}>
                    <Link
                      to="/clientform"
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
                  <td style={tableBorderStyle}>102</td>
                  <td style={tableBorderStyle}>Vishwjeet Ujgare</td>
                  <td style={tableBorderStyle}>Cat(Manju)</td>
                  <td style={tableBorderStyle}>17-06-2023</td>
                  <td style={tableBorderStyle}>02:00-02:30</td>
                  <td style={tableBorderStyle}>
                    <Link
                      to="/clientform"
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
                  <td style={tableBorderStyle}>103</td>
                  <td style={tableBorderStyle}>Sakshi Nimbalkar</td>
                  <td style={tableBorderStyle}>Dog(Jacky)</td>
                  <td style={tableBorderStyle}>07-07-2023</td>
                  <td style={tableBorderStyle}>05:30-06:00</td>
                  <td style={tableBorderStyle}>
                    <Link
                      to="/clientform"
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
                  <td style={tableBorderStyle}>4</td>
                  <td style={tableBorderStyle}>104</td>
                  <td style={tableBorderStyle}>Shrinivas Sabde</td>
                  <td style={tableBorderStyle}>Cat(Charlie)</td>
                  <td style={tableBorderStyle}>02-05-2023</td>
                  <td style={tableBorderStyle}>07:00-07:30</td>
                  <td style={tableBorderStyle}>
                    <Link
                      to="/clientform"
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
                  <td style={tableBorderStyle}>5</td>
                  <td style={tableBorderStyle}>105</td>
                  <td style={tableBorderStyle}>Poorva Pijdurkar</td>
                  <td style={tableBorderStyle}>Dog(Coco)</td>
                  <td style={tableBorderStyle}>05-06-2023</td>
                  <td style={tableBorderStyle}>03:00-03:30</td>
                  <td style={tableBorderStyle}>
                    <Link
                      to="/clientform"
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
            <br />
            <TablePagination
              rowsPerPageOptions={[5, 10, 20]}
              component="div"
              count={20}
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

export default ViewPatient;
