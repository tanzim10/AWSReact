import AppLayout from "../../layout/application";
import Home from "../home";
import CreateAWS from "../aws_api/create";
import AWS from "../aws_api";
import { Navigate, Route, Routes } from "react-router-dom";

function Application() {
    return (
        <AppLayout>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/aws" element={<AWS />} />
            <Route path="/create_aws" element={<CreateAWS />} />
            <Route  path="*" element={<Navigate to="/home" />} />
        </Routes>
        </AppLayout>
    );
}

export default Application;

