import React from "react";
import  {Navigate, Route, Routes} from "react-router-dom";
import AuthLayout from "../../layout/authLayout";
import Register from "./register";

const Login =  React.lazy(() => import('./login')); 

function Authentication (){
    return(
        <AuthLayout>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </AuthLayout>
    );
}
export default Authentication;

