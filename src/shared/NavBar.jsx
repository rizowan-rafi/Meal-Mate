import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../assets/logo3.png";
import useAuth from "../hooks/useAuth";

const NavBar = (props) => {
    const { user, SignOutUser } = useAuth();
    const links = (
        <>
            <li>
                <Link to={"/"}>Home</Link>
            </li>

            <li>
                <Link to={"/availablefood"}>Available Foods</Link>
            </li>

            <li>
                <Link to={"/addfood"}>Add Food</Link>
            </li>

            <li>
                <Link to={"/managefood"}>Manage My Foods</Link>
            </li>

            <li>
                <Link to={"/requestfood"}>My Food Request</Link>
            </li>
        </>
    );

    const handleSignOut = () => {
        SignOutUser()
            .then(() => {
                // console.log("sign out successfully");
            })
            .catch((err) => {
                // console.log(err);
            });
    };
    return (
        <div className="navbar bg-base-100 z-100 relative">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img src={logo} alt="" />
                    <span className="hidden sm:block">MealMate</span>
                </a>
            </div>
            <div className="navbar-center hidden z-100 relative lg:flex">
                <ul className="menu menu-horizontal z-100 relative px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                {user ? (
                    <>
                        <img
                            className="rounded-full w-11 h-11"
                            src={user.photoURL}
                            alt=""
                        />
                        <button onClick={handleSignOut} className="btn">
                            SignOut
                        </button>
                    </>
                ) : (
                    <>
                        <Link to={"/login"} className="btn">
                            Login
                        </Link>
                        <Link to={"/signup"} className="btn">
                            SignUp
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

NavBar.propTypes = {};

export default NavBar;
