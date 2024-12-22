import React, { useState } from "react";
import PropTypes from "prop-types";
import signup from "../../assets/Lottee/Signup.json";
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
const Signup = (props) => {
    const { signInWithGoogle, setUser, createUser, updateUser } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const handleSignUp = (e) => {
        e.preventDefault();
        // Get form values
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        // password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError(
                "Password must contain at least 6 characters, including uppercase and lowercase letters"
            );
            return;
        }

        const user = { name, email, password, photo };
        createUser(email, password)
            .then((res) => {
                updateUser(name, photo).then(() => {
                    console.log("register successful", res.user);
                    setUser(res.user);
                    navigate("/");
                    Swal.fire({
                        position: "top-right",
                        icon: "success",
                        title: "Registration Successful",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                });
            })
            .catch((err) => console.error(err));
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
                    title: "Registration Successful",
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch((err) => console.error(err));
    };
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-[45%] lg:text-left">
                    <Lottie animationData={signup} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full py-5 max-w-lg shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold text-center">
                        Register now!
                    </h1>

                    <form onSubmit={handleSignUp} className="card-body">
                        {/* name  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="input input-bordered"
                                required
                            />
                        </div>

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

                        {/* Photo URL  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Photo URL"
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
                        {error ? (
                            <div className="text-red-500">{error}</div>
                        ) : (
                            ""
                        )}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">
                                Register
                            </button>
                        </div>
                        <div>
                            <p className="text-center text-sm text-gray-600">
                                Already have an account?{" "}
                                <Link
                                    className="btn btn-outline btn-info ml-3"
                                    to={"/login"}
                                >
                                    Login
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
                            <span>SignUp with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Signup.propTypes = {};

export default Signup;
