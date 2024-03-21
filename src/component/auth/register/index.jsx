
import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Alert } from '@mui/material';
import { useAuth } from '../../../lib/hooks/useAuth';

const Register = () => {
    const { handleRegister } = useAuth();
    const [userData, setUserData] = useState({
        'first_name': '',
        'last_name': '',
        'email': '',
        'password': '',
        'password_confirmation': '',
        'phone': ''
    });
    const [error, setError] = useState(''); // State to store error message

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({...userData, [name]: value});
        // Reset error message when user starts typing again
        setError('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check for empty fields
        const areFieldsEmpty = Object.values(userData).some(value => value.trim() === '');
        if (areFieldsEmpty) {
            setError('All fields are required. Please fill out the entire form.');
            return; 
        }

        // Check if passwords match
        if (userData.password !== userData.password_confirmation) {
            setError('Passwords do not match. Please try again.');
            return; // Stop the form submission if passwords do not match
        }

        // If all validations pass, proceed with the registration process
        handleRegister(userData);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Signup
                </Typography>
                {error && <Alert severity="error" sx={{ width: '100%', mt: 2 }}>{error}</Alert>}
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="first_name"
                        label="First Name"
                        name="first_name"
                        autoComplete="fname"
                        autoFocus
                        value={userData.first_name}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="last_name"
                        label="Last Name"
                        name="last_name"
                        autoComplete="lname"
                        value={userData.last_name}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={userData.email}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        value={userData.password}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password_confirmation"
                        label="Password_confirmation"
                        type="password"
                        id="password_confirmation"
                        autoComplete="new-password"
                        value={userData.password_confirmation}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="phone"
                        label="Phone"
                        name="phone"
                        autoComplete="tel"
                        value={userData.phone}
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Signup
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;

