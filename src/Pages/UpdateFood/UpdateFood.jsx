import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import { useLoaderData, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateFood = (props) => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    // const food = useLoaderData();
    const { id } = useParams();
    const [food, setFood] = useState({});
    useEffect(() => {
        axiosSecure.get(`/food/${id}`).then((response) => {
            setFood(response.data);
        });
    }, []);
    const mutation = useMutation({
        mutationFn: (UpdatedFood) => {
            return axiosSecure.patch(`/updatefood/${food._id}`, UpdatedFood);
        },
    });

    if (mutation.isSuccess) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Food Info updated successfully",
            showConfirmButton: false,
            timer: 1500,
        });
    }

    const handleUpdateFood = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const UpdatedFood = Object.fromEntries(formData.entries());
        UpdatedFood.fquantity = parseInt(UpdatedFood.fquantity);

        mutation.mutate(UpdatedFood);

        // axios
        //     .patch(`https://food-sharing-server-nine.vercel.app/updatefood/${food._id}`, UpdatedFood)
        //     .then((res) => {
        //         console.log(res.data);
        //         if (res.data.modifiedCount) {
        //             Swal.fire({
        //                 position: "top-end",
        //                 icon: "success",
        //                 title: "Food Info updated successfully",
        //                 showConfirmButton: false,
        //                 timer: 1500,
        //             });
        //         }
        //     });
    };
    return (
        <div className="w-[90%] mx-auto bg-gray-100 p-5 rounded-xl">
            <h2 className="text-3xl font-bold ">Update Food Information</h2>
            <div>
                <form onSubmit={handleUpdateFood} className="card-body">
                    {/* Food name  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Food Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Food Name"
                            name="fname"
                            defaultValue={food.fname}
                            className="input input-bordered"
                            required
                        />
                    </div>

                    {/* Food Image  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Food Image</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Food Image"
                            name="fphoto"
                            defaultValue={food.fphoto}
                            className="input input-bordered"
                            required
                        />
                    </div>

                    {/* Food Quantity  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Food Quantity</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Food Quantity"
                            name="fquantity"
                            defaultValue={food.fquantity}
                            className="input input-bordered"
                            required
                        />
                    </div>

                    {/* Pickup Location  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Pickup Location</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Pickup Location"
                            name="flocation"
                            defaultValue={food.flocation}
                            className="input input-bordered"
                            required
                        />
                    </div>

                    {/* Expire Date  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Expire Date </span>
                        </label>
                        <input
                            type="date"
                            placeholder="Expire Date "
                            name="fdate"
                            defaultValue={food.fdate}
                            className="input input-bordered"
                            required
                        />
                    </div>

                    {/* Additional Note  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Additional Note</span>
                        </label>
                        <textarea
                            name="fnote"
                            id=""
                            cols="30"
                            rows="5"
                            placeholder="Additional Note"
                            defaultValue={food.fnote}
                            className="resize-none h-[200px] p-3"
                        ></textarea>
                    </div>

                    {/* Donator Name  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Donator Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Donator Name"
                            name="dname"
                            defaultValue={user.displayName}
                            className="input input-bordered"
                            required
                        />
                    </div>

                    {/* Donator Email  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Donator Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Donator Email"
                            name="demail"
                            defaultValue={user.email}
                            className="input input-bordered"
                            required
                        />
                    </div>

                    {/* Donator Photo URL  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Donator Photo URL
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Donator Photo URL"
                            name="dphoto"
                            defaultValue={user.photoURL}
                            className="input input-bordered"
                            required
                        />
                    </div>

                    {/*  Food Status  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Food Status</span>
                        </label>
                        <select
                            name="fstatus"
                            className="select select-bordered w-full max-w-xs"
                        >
                            <option disabled>Food Status</option>
                            <option defaultChecked>available</option>
                            <option>requested</option>
                        </select>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update Food</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

UpdateFood.propTypes = {};

export default UpdateFood;
