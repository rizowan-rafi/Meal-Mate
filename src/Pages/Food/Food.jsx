import React from "react";
import { Link } from "react-router-dom";

const Food = ({food}) => {
    return (
        <div className="card bg-base-100  shadow-xl">
            <figure>
                <img
                    src={food.fphoto}
                    alt="Shoes"
                    className="object-cover w-full h-64"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{ food.fname}</h2>
                <p>{food.fnote}</p>
                <p>Quantity: {food.fquantity}</p>
                <p>Expiry Date : { food.fdate}</p>
                <p>Donar Name : { food.dname}</p>
                <p>Food Status : { food.fstatus}</p>
                <div className="card-actions justify-end">
                    <Link to={`/food/${food._id}`} className="btn btn-primary">View Detail</Link>
                </div>
            </div>
        </div>
    );
};

export default Food;
