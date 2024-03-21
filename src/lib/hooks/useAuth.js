import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import actions from '../../redux/actions';

export const useAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const baseUrl = process.env.REACT_APP_API_ENDPOINT_URL;

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${baseUrl}/login`, {
                email,
                password,
            });

            if (response && response.data && response.data.token && response.data.user) {
                const { token, user } = response.data;
                dispatch(actions.auth.login({ user, token }));
                localStorage.setItem('token', token);
                navigate('/home');

            } else {
                throw new Error('Login failed: Unexpected response structure');
            }
        } catch (error) {
            console.error("Login Error", error.response?.data?.message || error.message);
        }
    };

    const logout = () => {
        
        dispatch(actions.auth.logout());
        
        localStorage.removeItem('token');
        
        navigate('/login');
    };

    const handleRegister = async (data) => {
        console.log("Register Data", data);
        try {
            const response = await axios.post(`${baseUrl}/signup`, {'user': data});
            console.log("Register Response", response);


            if (response.data) {
                const { status } = response.data;
                alert(status);
                navigate('/login');
            } else {
                throw new Error('Something went wrong! Please try again.');
            }
        } catch (error) {
            console.error("Registration Error", error.response?.data?.message || error.message);
        }
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        logout,
        handleRegister,
    };
};
