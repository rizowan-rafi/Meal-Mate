import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageFood = (props) => {
    const [manageFood, setManageFood] = useState([]);
    const { user } = useAuth();
    const [loading,setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        // axios
        //     .get(`https://food-sharing-server-nine.vercel.app/managefood?email=${user.email}`, {
        //         withCredentials: true,
        //     })
        //     .then((response) => {
        //         setManageFood(response.data);
        //     })
        //     .catch((error) => {
        //         console.error("Error:", error);
        //     });

        axiosSecure
            .get(`/managefood?email=${user.email}`)
            .then((response) => {
                setManageFood(response.data);
                setLoading(false);
            })
            .catch((error) => {
                // console.error("Error:", error);
            });
    }, []);
            if (loading) {
                return (
                    <div className="flex justify-center items-center h-screen">
                        <div className="loading loading-spinner loading-lg"></div>
                    </div>
                );
            }

    const handleDeleteFood = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure
                    .delete(
                        `/deletefood/${id}`
                    )
                    .then((response) => {
                        setManageFood(
                            manageFood.filter((food) => food._id !== id)
                        );
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                        });
                    })
                    .catch((error) => {
                        // console.error("Error:", error);
                    });
            }
        });
    };
    return (
        <div className="">
            <h1 className="w-[90%] mx-auto text-3xl font-medium mt-10">
                ManageFood : {manageFood.length}
            </h1>
            {manageFood.length === 0 && (
                <div className="flex justify-center items-center h-screen">
                    <div className="text-3xl text-center font-medium">
                        <span className="loading loading-infinity loading-lg"></span>
                        <div>
                            No food items available at the moment. <br /> Please
                            add food items or wait while the data is being
                            loaded.
                        </div>
                    </div>
                </div>
            )}
            <div>
                <div className="overflow-x-auto lg:w-[90%] mx-auto">
                    <table className="table table-sm">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Food Name</th>
                                <th>Food Data</th>
                                <th>Donar Detail</th>
                                <th>Food Status</th>
                                <th>Update Food</th>
                                <th>Delete Food</th>
                            </tr>
                        </thead>
                        <tbody>
                            {manageFood.map((food) => (
                                <tr key={food._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={food.fphoto}
                                                        alt="Avatar Tailwind CSS Component"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">
                                                    {food.fname}
                                                </div>
                                                <div className="text-sm opacity-50">
                                                    {food.flocation}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Quantity: {food.fquantity}
                                        <br />
                                        <span className="badge badge-ghost  badge-sm">
                                            Expire Data : {food.fdate}
                                        </span>
                                    </td>
                                    <td>
                                        <span>{food.dname}</span>
                                        <br />
                                        <span>{food.demail}</span>
                                    </td>
                                    <td>
                                        {food.fstatus === "available" ? (
                                            <span className="badge badge-success badge-sm">
                                                Available
                                            </span>
                                        ) : food.fstatus === "pending" ? (
                                            <span className="badge badge-warning badge-sm">
                                                Pending
                                            </span>
                                        ) : (
                                            <span className="badge badge-error badge-sm">
                                                Requested
                                            </span>
                                        )}
                                    </td>
                                    <th>
                                        <Link
                                            to={`/updatefood/${food._id}`}
                                            className="btn btn-warning btn-xs"
                                        >
                                            Update
                                        </Link>
                                    </th>
                                    <th>
                                        <button
                                            onClick={() => {
                                                handleDeleteFood(food._id);
                                            }}
                                            className="btn btn-error btn-xs"
                                        >
                                            delete
                                        </button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

ManageFood.propTypes = {};

export default ManageFood;
