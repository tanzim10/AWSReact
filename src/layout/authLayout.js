import React from "react";
import { Link } from 'react-router-dom';

function AuthLayout({children}) {
  
  const navStyle = {
    backgroundColor: '#f0f0f0', // Light grey background
    padding: '10px 0', // Some padding around the navbar
    marginBottom: '20px', // Space between the navbar and content below
    display: 'flex', // Use flexbox for layout
    justifyContent: 'space-between', // Space between site name and links
    alignItems: 'center', // Vertically center items
  };

  const siteNameStyle = {
    marginLeft: '20px', // Space from the left edge
    fontWeight: 'bold', // Make the site name bold
  };

  const ulStyle = {
    listStyleType: 'none', // Remove bullet points
    margin: 0,
    padding: 0,
    display: 'flex', // Display links in a row
    justifyContent: 'flex-end', // Align links to the right
    alignItems: 'center', // Vertically center items
    marginRight: '20px', // Space from the right edge
  };

  const liStyle = {
    marginLeft: '10px', // Space between each link
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
        <div style={siteNameStyle}>AWS OPS</div>
        <ul style={ulStyle}>
          <li style={liStyle}><Link to="/login" style={linkStyle}>Login</Link></li>
          <li style={liStyle}><Link to="/signup" style={linkStyle}>Signup</Link></li>
        </ul>
      </nav>
      {children}
    </div>
  );
}

export default AuthLayout;
