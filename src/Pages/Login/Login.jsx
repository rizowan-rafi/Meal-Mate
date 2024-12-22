import React from "react";
import PropTypes from "prop-types";
import Lottie from "lottie-react";
import signin from "../../assets/Lottee/signin.json";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = (props) => {
    const { signInWithGoogle, signInUser, setUser } = useAuth();
    const navigate = useNavigate()
    const handlelogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then((res) => {
            setUser(res.user);
            navigate("/");
            Swal.fire({
                position: "top-right",
                icon: "success",
                title: "Login Successful",
                showConfirmButton: false,
                timer: 1500,
            });
            })
        .catch((err) => {
            Swal.fire({
                position: "top-right",
                icon: "error",
                title: "Login Failed.",
                text: "Invalid credentials",
                showConfirmButton: false,
                timer: 1500,
            });
            console.log(err);
        })
        
        
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                console.log(res.user);
                setUser(res.user);
                navigate("/");
                Swal.fire({
                    position: "top-right",
                    icon: "success",
                    title: "Login Successful",
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch((err) => console.error(err));
    };
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-[65%] lg:text-left">
                    <Lottie
                        className="object-cover"
                        animationData={signin}
                        loop={true}
                    ></Lottie>
                </div>
                <div className="card mr-5 bg-base-100 w-full py-5 max-w-md shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold text-center">
                        Signin now!
                    </h1>

                    <form onSubmit={handlelogin} className="card-body">
                        {/* email  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        {/* password  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <p className="text-center text-sm text-gray-600">
                                Doesn't have an account?{" "}
                                <Link
                                    className="btn btn-outline btn-info ml-3"
                                    to={"/signup"}
                                >
                                    Register
                                </Link>
                            </p>
                        </div>
                    </form>
                    <div className="divider w-[90%] mx-auto">OR</div>
                    <div className="flex justify-center">
                        <button
                            onClick={handleGoogleLogin}
                            className="flex items-center btn btn-info btn-outline justify-center"
                        >
                            <span>
                                <FaGoogle></FaGoogle>
                            </span>
                            <span>Signin with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Login.propTypes = {};

export default Login;
