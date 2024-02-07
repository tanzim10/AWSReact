import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const Post = () => {
    const [posts, setPosts] = useState([]);
    const baseUrl = "https://jsonplaceholder.typicode.com";

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = () => {
        fetch(`${baseUrl}/posts`)
            .then(response => response.json())
            .then(json => setPosts(json))
    }
    return (
        <>
            <h2>Posts</h2>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>
                        <Link to={`${post.id}`}>{post.title}</Link>
                        {/* <p>{post.body}</p> */}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Post;

