import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../assets/logo3.png";
import useAuth from "../hooks/useAuth";

const NavBar = (props) => {
    const { user, SignOutUser } = useAuth();
    // const [theme, setTheme] = useState(
    //     localStorage.getItem('theme') || 'mytheme'
    // )
    
    // useEffect(() => {
    //     localStorage.setItem('theme', theme)
    //     const localTheme = localStorage.getItem('theme')
    //     document.querySelector('html').setAttribute('data-theme', localTheme)
    // }, [theme])

    // const toggleTheme = () => {
    //     theme === "mytheme" ? setTheme("darktheme") : setTheme("mytheme");
    //  }
    // const toggleTheme = () => { }
    const links = (
        <>
            <li className="text-text font-bold hover:text-background hover:bg-primary hover:font-semibold rounded-xl transition ease-linear duration-300">
                <Link to={"/"}>Home</Link>
            </li>

            <li className="text-text font-bold hover:text-background hover:bg-primary hover:font-semibold rounded-xl transition ease-linear duration-300">
                <Link to={"/availablefood"}>Available Foods</Link>
            </li>

            <li className="text-text font-bold hover:text-background hover:bg-primary hover:font-semibold rounded-xl transition ease-linear duration-300">
                <Link to={"/addfood"}>Add Food</Link>
            </li>

            <li className="text-text font-bold hover:text-background hover:bg-primary hover:font-semibold rounded-xl transition ease-linear duration-300">
                <Link to={"/managefood"}>Manage My Foods</Link>
            </li>

            <li className="text-text font-bold hover:text-background hover:bg-primary hover:font-semibold rounded-xl transition ease-linear duration-300">
                <Link to={"/requestfood"}>My Food Request</Link>
            </li>
            <li>

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
        <div className="navbar   bg-secondary     z-100 relative bg-opacity-80   px-10">
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
                    <Link to={"/"}>
                        <img src={logo} alt="" />
                    </Link>
                    <span className="hidden sm:block">
                        Meal<span className="text-primary">Mate</span>
                    </span>
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
                        <button
                            onClick={handleSignOut}
                            className="btn border-primary bg-transparent  border-2 text-text hover:bg-accent hover:text-background transition ease-out duration-500"
                        >
                            SignOut
                        </button>
                    </>
                ) : (
                    <>
                        <Link
                            to={"/login"}
                            className="btn border-primary bg-transparent  border-2 text-text hover:bg-accent hover:text-background transition ease-out duration-500"
                        >
                            Login
                        </Link>
                        <Link
                            to={"/signup"}
                            className="btn border-primary bg-transparent  border-2 text-text hover:bg-accent hover:text-background transition ease-out duration-500"
                        >
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
