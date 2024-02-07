import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserDetails() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  console.log('params', id);
  const baseUrl = "https://jsonplaceholder.typicode.com";
  
  const fetchUser = () => {

    fetch(`${baseUrl}/users/${id}`)
      .then(response => response.json())
      .then(json => setUser(json));
  };

  useEffect(() => {
    fetchUser();
  },[id]);

  return (
    <>
      <h1>User Details Page</h1>
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <h3>Address</h3>
          <p>{user.address?.street}</p>
          <p>{user.address?.city}</p>
          <p>{user.address?.zipcode}</p>
        </div>
      )}
    </>
  );
}

export default UserDetails;
