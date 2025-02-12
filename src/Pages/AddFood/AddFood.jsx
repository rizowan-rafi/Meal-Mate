import React from "react";
import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddFood = (props) => {
    const { user } = useAuth()
    const handleAddFood = (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
        const newFood = Object.fromEntries(formData.entries());
        newFood.fquantity = parseInt(newFood.fquantity);
        // console.log(newFood);

        axios.post("https://food-sharing-server-nine.vercel.app/addfood", newFood, {
            withCredentials:true,
        })
            .then(res => {
                // console.log(res.data);
                e.target.reset();
                if (res.data.insertedId) {
                    
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "New Food Added",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
        .catch(err => {
                // console.error(err);
            });
    }
    return (
        <div className="lg:w-[90%] mx-auto bg-secondary p-5 mt-5 rounded-xl">
            <h2 className="text-3xl font-bold text-center">Add Food</h2>
            <div>
                <form onSubmit={handleAddFood} className="card-body">
                    {/* Food name  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Food Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Food Name"
                            name="fname"
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
                        <select name="fstatus" className="select select-bordered w-full max-w-xs">
                            <option disabled >
                                Food Status
                            </option>
                            <option defaultChecked>available</option>
                            <option>requested</option>
                        </select>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-primary text-background">Add Food</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

AddFood.propTypes = {};

export default AddFood;
