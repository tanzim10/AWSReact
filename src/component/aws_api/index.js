import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AWS() {
  const [aws, setAws] = useState([]);
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  const fetchAws = () => {
    fetch(`${baseUrl}/all_emp`)
      .then((response) => response.json())
      .then((json) => {
        setAws(json);
        console.log(json); 
      });
  };

  useEffect(() => {
    fetchAws();
  }, []);

  return (
    <>
      <h1>AWS Page</h1>
      {aws ? (
        <table>
          <tr>
            <td>Name </td>
            <td>Gender </td>
            <td>Email </td>
            <td>Education </td>
            <td>Salary </td>
            <td>Bonus </td>
            <td>Phone no. </td>
            <td>Date of birth </td>
            <td>Hired date </td>
            <td>Work Department </td>
            <td>Job </td>
              <td>Action</td>
            </tr>
          {aws.map((item, index) => (
            <tr key={index} style={{ marginBottom: '20px' }}>
              <td>{item.FirstName} {item.LastName}</td>
              <td> {item.Sex}</td>
              <td> {item.Email}</td>
              <td> {item.EDLevel}</td>
              <td> {item.Salary}</td>
              <td> {item.Bonus}</td>
              <td> {item.PhoneNo}</td>
              <td> {item.DOB}</td>
              <td> {item.HiredDate}</td>
              <td> {item.WorkDept}</td>
              <td> {item.Job}</td>
              <td>
                <button><Link to={`/update_aws/${item.EMPNO}`}>Edit</Link></button>
                <button><Link to ={`/delete_aws/${item.EMPNO}`}>Delete</Link></button>
            </td>
            </tr>

          ))}
        </table>
      ) : (
        <td>No data found</td>
      )}
    </>
);

}

export default AWS;
