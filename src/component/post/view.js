import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PostDetails() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  console.log('params', id);
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const [comments, setComments] = useState([]);
  
  const fetchPost = () => {
    fetch(`${baseUrl}/posts/${id}`)
      .then(response => response.json())
      .then(json => setPost(json));
  };

  useEffect(() => {
    fetchPost();
  },[id]); 

  const fetchComments = () => {
    fetch(`${baseUrl}/posts/${id}/comments`)
      .then(response => response.json())
      .then(json => setComments(json)); // Set comments with the fetched data
  };

  useEffect (() => {
   fetchComments(); 
  },[id]);
  
  return (
    <>
      <h1>Post Details Page</h1>
      {post && (
        <div>
          <h2>Title: {post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
      <h2>Comments</h2>
      {
        comments.length > 0 && comments.map((comment, index) => (
          <div key={index}>
            <ul>
              <li><h3>{comment.name}</h3></li>
              <li>{comment.email}</li>
              <li>{comment.body}</li>
            </ul>
          </div>
        ))
      }
    </>
  );
}

export default PostDetails;

