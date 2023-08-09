// import { useEffect, useState } from "react";
// import React from "react";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import AdminSidebar from "../../Components/AdminSidebar";
// import "./AdminManageHospital.css";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import { CardContent } from "@mui/material";
// import axios from "axios";
// import Data from '../../Data.json';

// // const columns = [
// //   { id: "name", label: "Name", minWidth: 170 },
// //   { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
// //   {
// //     id: "population",
// //     label: "Population",
// //     minWidth: 170,
// //     align: "right",
// //     format: (value) => value.toLocaleString("en-US"),
// //   },
// //   {
// //     id: "size",
// //     label: "Size\u00a0(km\u00b2)",
// //     minWidth: 170,
// //     align: "right",
// //     format: (value) => value.toLocaleString("en-US"),
// //   },
// //   {
// //     id: "density",
// //     label: "Density",
// //     minWidth: 170,
// //     align: "right",
// //     format: (value) => value.toFixed(2),
// //   },
// // ];

// // function createData(name, code, population, size) {
// //   const density = population / size;
// //   return { name, code, population, size, density };
// // }

// //const rows = [
// //   createData("India", "IN", 1324171354, 3287263),
// //   createData("China", "CN", 1403500365, 9596961),
// //   createData("Italy", "IT", 60483973, 301340),
// //   createData("United States", "US", 327167434, 9833520),
// //   createData("Canada", "CA", 37602103, 9984670),
// //   createData("Australia", "AU", 25475400, 7692024),
// //   createData("Germany", "DE", 83019200, 357578),
// //   createData("Ireland", "IE", 4857000, 70273),
// //   createData("Mexico", "MX", 126577691, 1972550),
// //   createData("Japan", "JP", 126317000, 377973),
// //   createData("France", "FR", 67022000, 640679),
// //   createData("United Kingdom", "GB", 67545757, 242495),
// //   createData("Russia", "RU", 146793744, 17098246),
// //   createData("Nigeria", "NG", 200962417, 923768),
// //   createData("Brazil", "BR", 210147125, 8515767),
// //];

// export default function AdminManageHospital() {
//   // "http://localhost:8082/patners/hospital"
//   const baseURL = "https://jsonplaceholder.typicode.com/posts";
//   const [page, setPage] = useState(0);
//   const [rows, setRows] = useState([]);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   useEffect(() => {
//     axios.get(baseURL).then(
//         (response)=>{
//             setRows(response.data);
//         }
//     )
//   }, []);
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <>
//       <div className="adminmanagehospital">
//         <div>
//           <AdminSidebar />
//         </div>
//         <div className="container">
//           <Card sx={{ minWidth: 900 }}>
//             <CardContent>
//               <Paper sx={{ width: "100%", overflow: "hidden" }}>
//                 <TableContainer sx={{ maxHeight: 440 }}>
//                   <Table stickyHeader aria-label="sticky table">
//                     <TableHead>
//                       <TableRow>
//                         {/* <TableCell align="left">Sr.No</TableCell>
//                         <TableCell align="left">Name</TableCell>
//                         <TableCell align="left">Qualification</TableCell>
//                         <TableCell align="left">Address</TableCell>
//                         <TableCell align="left">Status</TableCell>
//                         <TableCell align="left">Hospital</TableCell>
//                         <TableCell align="left">Action</TableCell> */}
//                         <TableCell align="left">id</TableCell>
//                         <TableCell align="left">title</TableCell>
//                         <TableCell align="left">body</TableCell>
//                       </TableRow>
//                     </TableHead>
//                     <TableBody>
//                       {rows
//                         .slice(
//                           page * rowsPerPage,
//                           page * rowsPerPage + rowsPerPage
//                         )
//                         .map((row) => {
//                           return (
//                             <TableRow
//                               hover
//                               role="checkbox"
//                               tabIndex={-1}
//                               key={row.code}
//                             >
//                               {/* <TableCell align="left">{row.name}</TableCell>
//                               <TableCell align="left">{row.qualification}</TableCell>
//                               <TableCell align="left">{row.location}</TableCell>
//                               <TableCell align="left">{row.status}</TableCell>
//                               <TableCell align="left">{row.hospitalName}</TableCell>
//                               <TableCell align="left">{row.action}</TableCell> */}
//                               <TableCell align="left">{row.id}</TableCell>
//                               <TableCell align="left">{row.title}</TableCell>
//                               <TableCell align="left">{row.body}</TableCell>
//                             </TableRow>
//                           );
//                         })}
//                     </TableBody>
//                   </Table>
//                 </TableContainer>
//                 <TablePagination
//                   rowsPerPageOptions={[10, 25, 100]}
//                   component="div"
//                   count={rows.length}
//                   rowsPerPage={rowsPerPage}
//                   page={page}
//                   onPageChange={handleChangePage}
//                   onRowsPerPageChange={handleChangeRowsPerPage}
//                 />
//               </Paper>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import { useEffect, useState } from "react";
import TablePagination from "@mui/material/TablePagination";
import AdminSidebar from "../../Components/AdminSidebar";
import { Button, Card, CardBody, CardHeader, Container } from "reactstrap";
import { Link } from "react-router-dom";
const AdminManageHospital = () => {
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
      <AdminSidebar />
      <Container>
        <Card style={{marginTop:'3%'}}>
          <CardHeader
            style={{
              fontSize: "30px",
              backgroundColor: "black",
              color: "white",
            }}
          >
            Hospital Information
          </CardHeader>
          <CardBody>
            <table style={tableStyle}>
              <thead style={{backgroundColor:'blue', color:'white', height:'60px'}}>
                <tr>
                  <th style={tableBorderStyle}>Sr.No.</th>
                  <th style={tableBorderStyle}>Hospital Id</th>
                  <th style={tableBorderStyle}>Hospital Name</th>
                  <th style={tableBorderStyle}>Doctors</th>
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
                  <td style={tableBorderStyle}>Dr. John Doe<br/>Dr. Jenniffer Green<br/>Dr. Jane Smith</td>
                  <td style={tableBorderStyle}>Mumbai</td>
                  <td style={tableBorderStyle}>Approved</td>
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
                  <td style={tableBorderStyle}>8758</td>
                  <td style={tableBorderStyle}>Pet Clinic And Care Centre</td>
                  <td style={tableBorderStyle}>Dr. Sarah Lee<br/>Dr. Jenniffer Green</td>
                  <td style={tableBorderStyle}>Nashik</td>
                  <td style={tableBorderStyle}>Approved</td>
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
                  <td style={tableBorderStyle}>7567</td>
                  <td style={tableBorderStyle}>Pet Paradise Veterinary Clinic</td>
                  <td style={tableBorderStyle}>Dr. Jenniffer Green<br/>Dr. Michael Brown</td>
                  <td style={tableBorderStyle}>Dombivli</td>
                  <td style={tableBorderStyle}>Pending</td>
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
                  <td style={tableBorderStyle}>1935</td>
                  <td style={tableBorderStyle}>Myvets4Pets</td>
                  <td style={tableBorderStyle}>Dr. Sarah Lee<br/>Dr. Robert White<br/>Dr. Lisa Thomas</td>
                  <td style={tableBorderStyle}>Kharghar</td>
                  <td style={tableBorderStyle}>Block</td>
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
                  <td style={tableBorderStyle}>4628</td>
                  <td style={tableBorderStyle}>Metro Animals Clinic</td>
                  <td style={tableBorderStyle}>Dr. John Doe<br/>Dr. William Clark<br/>Dr. Christopher Turner</td>
                  <td style={tableBorderStyle}>Nagpur</td>
                  <td style={tableBorderStyle}>Pending</td>
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
            <br/>
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

export default AdminManageHospital;

