import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const RequestFood = (props) => {
    const axiosSecure = useAxiosSecure();
    const [manageFood, setManageFood] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        axiosSecure
            .get(`/requestfood?email=${user.email}`)
            .then((response) => {
                setManageFood(response.data);
            })
            .catch((error) => {
                // console.error("Error:", error);
            });
    }, []);
    return (
        <div>
            Requested : {manageFood.length}
            <div className="overflow-x-auto w-[90%] mx-auto">
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
                                    {food.fstatus === "available" ? (
                                        <span className="badge badge-success badge-sm">
                                            Available
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

                                    {/* <button
                                        className="btn btn-ghost"
                                        onClick={() => {
                                            axios
                                               .delete(`https://food-sharing-server-nine.vercel.app/requestfood/${food._id}`)
                                               .then((response) => {
                                                    console.log(response);
                                                    window.location.reload();
                                                })
                                               .catch((error) => {
                                                    console.error("Error:", error);
                                                });
                                        }}
                                    >
                                        Delete
                                    </button> */}
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
