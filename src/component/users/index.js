import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';


const Users = () => {
    const [users, setUsers] = useState([]);
    const baseUrl = "https://jsonplaceholder.typicode.com";

    const fetchUsers = () => {
        fetch(`${baseUrl}/users`)
            .then(response => response.json())
            .then(json => setUsers(json))
    }

    useEffect(() => {
        fetchUsers();
    }, []);
    return(
        <>
            <h2>Users</h2>
            <ul>
                {users && users.length > 0 && users.map((user,index) => (
                    <li key ={index}>
                        <h2><Link to={`${user.id}`}>{user.name}</Link></h2>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Users;
