import React from "react";
import Header from "../component/header";
import { Link } from 'react-router-dom';

function AuthLayout({children}) {

  const navStyle = {
    backgroundColor: '#f0f0f0', // Light grey background
    padding: '10px 0', // Some padding around the navbar
    marginBottom: '20px', // Space between the navbar and content below
  };

  const ulStyle = {
    listStyleType: 'none', // Remove bullet points
    margin: 0,
    padding: 0,
    overflow: 'hidden', // Clear floats
    display: 'flex', // Display links in a row
    justifyContent: 'space-around', // Even space around the links
  };

  const liStyle = {
    float: 'left', // Float the list items to the left
  };

  const linkStyle = {
    display: 'block', // Display links as block for padding
    color: 'black', // Link color
    textAlign: 'center', // Center link text
    padding: '14px 16px', // Padding around links
    textDecoration: 'none', // Remove underline from links
  };  
  return (
    <div>
      <nav style={navStyle}>
      <ul style={ulStyle}>
      <li style={liStyle}><Link to="/*" style={linkStyle}>Login</Link></li>
      <li style={liStyle}><Link to="/signup" style={linkStyle}>Signup</Link></li>
      </ul>
    </nav>
      <br/>
      {children}
    </div>
  );
}

export default AuthLayout;