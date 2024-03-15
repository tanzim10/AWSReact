import React, { useState } from 'react';
import { useAuth } from '../../../lib/hooks/useAuth';

const Register = () => {
    const { email, setEmail, password, setPassword, handleRegister } = useAuth();
    const [userData, setUserData] = useState({
        'first_name': '',
        'last_name': '',
        'email': '',
        'password': '',
        'phone': ''
    });

    const handleChange = (value, type) => {
        setUserData({...userData, [type]: value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegister(userData);
    };

    return (
        <div>
            <h2>Register</h2>
            <form  onSubmit={handleSubmit} method='POST'>
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="first_name"
                        value={userData.first_name}
                        onChange={(e) => handleChange(e.target.value, "first_name")}
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="last_name"
                        value={userData.last_name}
                        onChange={(e) => handleChange(e.target.value, "last_name")}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={(e) => handleChange(e.target.value, "email")}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={(e) => handleChange(e.target.value, "password")}
                    />
                </div>
                <div>
                    <label>Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={userData.phone}
                        onChange={(e) => handleChange(e.target.value, "phone")}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
