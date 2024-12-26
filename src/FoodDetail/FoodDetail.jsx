import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";

const FoodDetail = (props) => {
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();
    const [food, setFood] = useState({});
    useEffect(() => {
        axiosSecure.get(`/food/${id}`).then((response) => {
            setFood(response.data);
        });
    }, []);
    // const food = useLoaderData();
    const { user } = useAuth();
    // console.log(user.email);
    // console.log(food.fname);
    const [currentDate, setCurrentDate] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const date = new Date(); // Get the current date
        const formattedDate = date.toISOString().split("T")[0]; // Format the date (optional)
        setCurrentDate(formattedDate);
    }, []);

    const handleRequestFood = () => {
        // console.log("requestFood");
        const updatedData = {
            fstatus: "requested",
            uname: user.username,
            uemail: user.email,
            rdate: currentDate,
            dname: food.dname,
            demail: food.demail,
            fphoto: food.fphoto,
            fdate: food.fdate,
            fname: food.fname,
            id: food._id,
        };
        axios
            .post(
                `https://food-sharing-server-nine.vercel.app/requestfood/${food._id}`,
                updatedData, {
                    withCredentials: true,
                }
            )
            .then((response) => {
                // console.log(response.data);
                const status = { fstatus: "requested" };
                axios.patch(
                    `https://food-sharing-server-nine.vercel.app/requestedfood/${food._id}`,
                    status,
                    {
                        withCredentials: true,
                    }
                )
                    .then((response) => { 
                        
                    })
                if (response.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your request was successfully submitted",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };
    return (
        <div className="w-[90%] mx-auto space-y-4 lg:space-y-0 lg:flex justify-center items-center gap-5">
            <div>
                <img className="h-[500px]" src={food.fphoto} alt="" />
            </div>
            <div className="space-y-2">
                <h2 className="text-4xl font-bold">{food.fname}</h2>
                <p className="text-xl font-medium">
                    <span className="text-xl font-semibold">Quantity</span> :{" "}
                    {food.fquantity}
                </p>
                <p className="text-xl font-medium">
                    <span className="text-xl font-semibold">
                        Pickup Location
                    </span>{" "}
                    : {food.flocation}
                </p>
                <p className="text-xl font-medium">
                    <span className="text-xl font-semibold">Expired Date</span>{" "}
                    : {food.fdate}
                </p>
                <p className="text-xl font-medium">
                    <span className="text-xl font-semibold">
                        Additional Note
                    </span>{" "}
                    : {food.fnote}
                </p>
                <p className="text-xl font-medium">
                    <span className="text-xl font-semibold">Food Status</span> :{" "}
                    {food.fstatus}
                </p>
                <p className="text-xl font-medium">
                    <span className="text-xl font-semibold">Donar Name</span> :{" "}
                    {food.dname}
                </p>
                <p className="text-xl font-medium">
                    <span className="text-xl font-semibold">Donar Email</span> :{" "}
                    {food.demail}
                </p>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                    className="btn btn-info btn-outline"
                    onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                    }
                >
                    Request Food
                </button>
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Request Food</h3>
                        <p className="py-4">
                            Press request food button to request food or click close button to close the modal
                        </p>
                        <div className="modal-action">
                            <form className="w-full" method="dialog">
                                {/* Food name  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Food Name
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Food Name"
                                        name="fname"
                                        value={food.fname}
                                        className="input input-bordered"
                                        required
                                    />
                                </div>

                                {/* Food Image  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Food Image
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Food Image"
                                        name="fphoto"
                                        value={food.fphoto}
                                        className="input input-bordered"
                                        required
                                    />
                                </div>

                                {/* Food Quantity  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Food Quantity
                                        </span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Food Quantity"
                                        name="fquantity"
                                        value={food.fquantity}
                                        className="input input-bordered"
                                        required
                                    />
                                </div>

                                {/* Pickup Location  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Pickup Location
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Pickup Location"
                                        name="flocation"
                                        value={food.flocation}
                                        className="input input-bordered"
                                        required
                                    />
                                </div>

                                {/* Expire Date  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Expire Date{" "}
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Expire Date "
                                        name="fdate"
                                        value={food.fdate}
                                        className="input input-bordered"
                                        required
                                    />
                                </div>

                                {/* Requested Date  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Expire Date{" "}
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Requested Date"
                                        name="fcdate"
                                        value={currentDate}
                                        className="input input-bordered"
                                        required
                                    />
                                </div>

                                {/* Additional Note  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Additional Note
                                        </span>
                                    </label>
                                    <textarea
                                        name="fnote"
                                        id=""
                                        defaultValue={food.fnote}
                                        className="resize-none outline rounded-xl outline-gray-200  p-3"
                                    ></textarea>
                                </div>

                                {/* Donator Name  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Donator Name
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Donator Name"
                                        name="dname"
                                        value={food.dname}
                                        className="input input-bordered"
                                        required
                                    />
                                </div>

                                {/* Donator Email  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Donator Email
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Donator Email"
                                        name="demail"
                                        value={food.demail}
                                        className="input input-bordered"
                                        required
                                    />
                                </div>

                                {/* Donator Photo URL  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            User Email
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder=""
                                        name="uemail"
                                        value={user.email}
                                        className="input input-bordered"
                                        required
                                    />
                                </div>

                                {/*  Food Status  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Food Id
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="fid"
                                        value={food._id}
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div>
                                    <div className="form-control space-y-3 mt-6">
                                        <button
                                            onClick={handleRequestFood}
                                            className="btn btn-primary"
                                        >
                                            Request Food
                                        </button>
                                        <button className="btn"> close</button>
                                    </div>
                                </div>
                                {/* if there is a button in form, it will close the modal */}
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

FoodDetail.propTypes = {};

export default FoodDetail;
