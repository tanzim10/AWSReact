import React from "react";
import { useAuth } from "../../../lib/hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";

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
     return (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => handleChange(e.target.value, "email")}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => handleChange(e.target.value, "password")}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      );

};

export default Login;


