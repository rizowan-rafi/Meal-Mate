import { div } from "motion/react-client";
import React from "react";
import { Link } from "react-router-dom";

const Food = ({food}) => {
    return (
        <div className="card bg-secondary static    shadow-xl">
            <figure>
                <img
                    src={food.fphoto}
                    alt="Shoes"
                    className="object-cover w-full h-64"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{food.fname}</h2>
                <p>{food.fnote}</p>
                <p>
                    <span className="font-semibold">Quantity</span>:{" "}
                    {food.fquantity}
                </p>
                <p>
                    <span className="font-semibold">Expiry Date</span> :{" "}
                    {food.fdate}
                </p>
                <p>
                    <span className="font-semibold">Donar Name</span> :{" "}
                    {food.dname}
                </p>
                <p>
                    <span className="font-semibold">Food Status</span> : {food.fstatus}
                </p>
                <div className="card-actions justify-end">
                    <Link to={`/food/${food._id}`} className="btn  bg-primary text-background hover:bg-primary hover:text-background">
                        View Detail
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Food;
