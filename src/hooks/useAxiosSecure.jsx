import axios from "axios";
import React from "react";
import PropTypes from "prop-types";
const axiosInstance = axios.create({
    baseURL: "https://food-sharing-server-nine.vercel.app",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

const useAxiosSecure = (props) => {
    return axiosInstance;
};

useAxiosSecure.propTypes = {};

export default useAxiosSecure;
