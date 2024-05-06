import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";

const PrivateRoute = ({ element, ...props }) => {
   var auth = null
    const [cookies] = useCookies(["token"]);
    auth = cookies.token;

    return auth ? <Outlet /> : <Navigate to="/signIn" />;
}

export default PrivateRoute;
