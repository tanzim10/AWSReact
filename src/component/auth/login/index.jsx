import React from "react";
import { useAuth } from "../../../lib/hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { Container, Box, TextField, Button, Typography } from '@mui/material';

const Login =() => {
    const { email, setEmail, password, setPassword, handleLogin, logout } = useAuth();
    const handleChange = (value,type) => {
        switch(type){
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
     }
    return(
      <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 2,
                    boxShadow: 3,
                    borderRadius: 1,
                    backgroundColor: 'background.paper',
                }}
            >
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        type = "email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => handleChange(e.target.value, "email")}
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
                        value={password}
                        onChange={(e) => handleChange(e.target.value, "password")}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Login
                    </Button>
                </Box>
            </Box>
        </Container>
    );

};

export default Login;