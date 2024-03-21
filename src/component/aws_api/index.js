import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import actions from "../../redux/actions";
import { useDispatch } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

function AWS() {
  const [aws, setAws] = useState([]);
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const dispatch = useDispatch();

  const fetchAws = () => {
    fetch(`${baseUrl}/all_emp`)
      .then((response) => response.json())
      .then((json) => {
        setAws(json);
        console.log(json);
        dispatch(actions.employee.getEmployee(json));
      });
  };

  useEffect(() => {
    fetchAws();
  }, []);

  return (
    <>
      <h1>AWS Page</h1>
      <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead
            sx={{
              // Apply a border at the bottom of the table head for separation
              borderBottom: 2,
              borderColor: "divider",
              borderTop: 2,
            }}
          >
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  borderRight: 1,
                  borderColor: "divider",
                }}
              >
                Name
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontWeight: "bold",
                  borderRight: 1,
                  borderColor: "divider",
                }}
              >
                Gender
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontWeight: "bold",
                  borderRight: 1,
                  borderColor: "divider",
                }}
              >
                Email
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontWeight: "bold",
                  borderRight: 1,
                  borderColor: "divider",
                }}
              >
                Education
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontWeight: "bold",
                  borderRight: 1,
                  borderColor: "divider",
                }}
              >
                Salary
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontWeight: "bold",
                  borderRight: 1,
                  borderColor: "divider",
                }}
              >
                Bonus
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontWeight: "bold",
                  borderRight: 1,
                  borderColor: "divider",
                }}
              >
                Phone no.
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontWeight: "bold",
                  borderRight: 1,
                  borderColor: "divider",
                }}
              >
                Date of birth
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontWeight: "bold",
                  borderRight: 1,
                  borderColor: "divider",
                }}
              >
                Hired date
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontWeight: "bold",
                  borderRight: 1,
                  borderColor: "divider",
                }}
              >
                Work Department
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontWeight: "bold",
                  borderRight: 1,
                  borderColor: "divider",
                }}
              >
                Job
              </TableCell>
              {/* Last cell without right border for aesthetics */}
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {aws ? (
              aws.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.FirstName} {item.LastName}
                  </TableCell>
                  <TableCell align="right">{item.Sex}</TableCell>
                  <TableCell align="right">{item.Email}</TableCell>
                  <TableCell align="right">{item.EDLevel}</TableCell>
                  <TableCell align="right">{item.Salary}</TableCell>
                  <TableCell align="right">{item.Bonus}</TableCell>
                  <TableCell align="right">{item.PhoneNo}</TableCell>
                  <TableCell align="right">{item.DOB}</TableCell>
                  <TableCell align="right">{item.HiredDate}</TableCell>
                  <TableCell align="right">{item.WorkDept}</TableCell>
                  <TableCell align="right">{item.Job}</TableCell>
                  <TableCell align="right">
                    <Button
                      component={Link}
                      to={`/update_aws/${item.EMPNO}`}
                      variant="contained"
                      color="primary"
                      size="small"
                    >
                      Edit
                    </Button>
                    <Button
                      component={Link}
                      to={`/delete_aws/${item.EMPNO}`}
                      variant="contained"
                      color="secondary"
                      size="small"
                      style={{ marginLeft: "10px" }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={12}>No data found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AWS;
