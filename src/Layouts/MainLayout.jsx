import React from "react";
import PropTypes from "prop-types";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";
import Home from "../Pages/Home/Home";
import { Outlet } from "react-router-dom";

const MainLayout = (props) => {
    return <>
        <nav className="md:w-[90%] mx-auto mt-4 mb-10">
            <NavBar></NavBar>
        </nav>
        <main>
            <Outlet></Outlet>
        </main>
        <footer className="mt-10">
            <Footer></Footer>
        </footer>
    </>;
};

MainLayout.propTypes = {};

export default MainLayout;
