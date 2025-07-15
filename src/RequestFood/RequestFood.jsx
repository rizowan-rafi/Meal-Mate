import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const RequestFood = (props) => {
    const axiosSecure = useAxiosSecure();
    const [manageFood, setManageFood] = useState([]);
    const [loading,setLoading] = useState(true);
    const { user } = useAuth();
    useEffect(() => {
        axiosSecure
            .get(`/requestfoods?email=${user.email}`)
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
                            `/deleterequestfood/${id}`
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
        <div className=" ">
            <h1 className="w-[90%] mx-auto text-3xl font-medium mt-10">
                {" "}
                Requested : {manageFood.length}
            </h1>
            {manageFood.length === 0 && (
                <div className="flex justify-center items-center h-screen">
                    <div className="text-3xl text-center font-medium">
                        <span className="loading loading-infinity loading-lg"></span>
                        <div>
                            No food items is being requested at the moment.{" "}
                            <br /> Please request food items or wait while the
                            data is being loaded.
                        </div>
                    </div>
                </div>
            )}
            <div className="overflow-x-auto w-[90%]  mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Food Name</th>
                            <th>Food Data</th>
                            <th>Donar Detail</th>
                            <th>User Detail</th>
                            <th>Food Status</th>
                            <th>Request Date</th>
                            <th>Delete From Request</th>
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
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">
                                        Expire Data : {food.fdate}
                                    </span>
                                </td>
                                <td>
                                    <span>{food.dname}</span>
                                    <br />
                                    <span>{food.demail}</span>
                                </td>
                                <td>
                                    <span>{food.uemail}</span>
                                </td>
                                <td>
                                    {food.fstatus === "approved" ? (
                                        <span className="badge badge-success badge-sm">
                                            Approved
                                        </span>
                                    ) : (
                                        <span className="badge badge-error badge-sm">
                                            Requested
                                        </span>
                                    )}
                                </td>
                                <td>
                                    <span className="badge badge-ghost badge-sm">
                                        {food.rdate}
                                    </span>

                        
                                </td>
                                <td>
                                    <button className="btn btn-error btn-xs font-medium" onClick={() => handleDeleteFood(food._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

RequestFood.propTypes = {};

export default RequestFood;
