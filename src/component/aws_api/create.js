import React, { useState, useEffect } from "react";
import { Button, TextField, Container, Typography, Grid } from "@mui/material";

const CreateAWS = () => {
  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
    EMPNO: "",
    DOB: "",
    HiredDate: "",
    Salary: "",
    Bonus: "",
    WorkDept: "",
    PhoneNo: "",
    Job: "",
    EDLevel: "",
    Sex: "",
    Email: "",
  });

  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  const handleSubmit = (e) => {
    e.preventDefault();
    submitData(data);
  };

  // useEffect(() => {
  //     submitData();
  // }, []);

  const submitData = (data) => {
    fetch(`${baseUrl}/create_emp`, {
      method: "POST",
      body: JSON.stringify({ employee: data }),
      // body: JSON.stringify({FirstName: data.FirstName})
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("Success", data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Create AWS Data
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="First Name"
              name="FirstName"
              value={data.FirstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Last Name"
              name="LastName"
              value={data.LastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Employee Number"
              name="EMPNO"
              value={data.EMPNO}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Date of Birth"
              name="DOB"
              value={data.DOB}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Hired Date"
              name="HiredDate"
              value={data.HiredDate}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Salary"
              name="Salary"
              value={data.Salary}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Bonus"
              name="Bonus"
              value={data.Bonus}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Work Department"
              name="WorkDept"
              value={data.WorkDept}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone Number"
              name="PhoneNo"
              value={data.PhoneNo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Job"
              name="Job"
              value={data.Job}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Education Level"
              name="EDLevel"
              value={data.EDLevel}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Sex"
              name="Sex"
              value={data.Sex}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="Email"
              value={data.Email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Create Item
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CreateAWS;
