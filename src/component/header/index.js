import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  // Inline CSS for basic styling
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
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}><Link to="Home" style={linkStyle}>Home</Link></li>
        <li style={liStyle}><Link to="/about" style={linkStyle}>About</Link></li>
        <li style ={liStyle}><Link to ="/posts" style={linkStyle}>Posts</Link></li>
        <li style={liStyle}><Link to="/users" style={linkStyle}>User</Link></li>
        <li style={liStyle}><Link to="/contact" style={linkStyle}>Contact</Link></li>
        <li style={liStyle}><Link to="/aws" style={linkStyle}>AWS</Link></li>
        <li style={liStyle}><Link to="/create_aws" style={linkStyle}>Create API Data</Link></li>
        {/* <li style={liStyle}><Link to="/update_aws" style={linkStyle}>Update API Data</Link></li>
        <li style={liStyle}><Link to="/delete_aws" style={linkStyle}>Delete API Data</Link></li> */}
      </ul>
    </nav>
  );
}

export default Header;


