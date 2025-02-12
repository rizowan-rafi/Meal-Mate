import React from "react";
import PropTypes from "prop-types";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";
import Home from "../Pages/Home/Home";
import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const MainLayout = (props) => {
    const { theme } = useAuth();
    console.log(theme);
    return (
        <div
            className={`${theme === "dark" ? "dark" : ""} `}
        >
            <nav className="sticky top-0">
                <NavBar></NavBar>
            </nav>
            <main className="">
                <Outlet></Outlet>
            </main>
            <footer className="mt-10">
                <Footer></Footer>
            </footer>
        </div>
    );
};

MainLayout.propTypes = {};

export default MainLayout;
