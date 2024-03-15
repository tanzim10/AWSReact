import { AUTH } from "./actiontype";

// Updated to handle both user data and token
const login = (data) => ({
    type: AUTH.LOGIN,
    payload: { user: data.user, token: data.token }
});

const logout = () => ({
    type: AUTH.LOGOUT,
});


const authActions = { login, logout };

export default authActions;
