import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({children}) => {
        const { user, loading } = useAuth();
        const location = useLocation();
        // console.log(loading,user)
        if (loading) {
            return <span className="loading loading-bars loading-lg"></span>;
        }

        if (user && user.email === "rizowanrafi71@gmail.com") {
            return children;
        }

        return <Navigate to={"/login"} state={location?.pathname}></Navigate>;
};

AdminRoute.propTypes = {};

export default AdminRoute;
