import { div } from "motion/react-client";
import React,{useState} from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Food = ({ food }) => {
    const [loading, setLoading] = useState(false);
const handleApprove = async (id) => {
    setLoading(true);
    Swal.fire({
        title: "Are you sure to approve the food?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, approve it!",
    }).then(async (result) => {
        if (result.isConfirmed) {
                try {
        const response = await fetch(
            `https://food-sharing-server-nine.vercel.app/acceptfood/${id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const data = await response.json();

        if (data.success) {
            console.log("Food status updated successfully");
            // Optionally refresh data or show a success toast
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Food approved successfully",
                showConfirmButton: false,
                timer: 1500,
            });
        } else {
            console.error("Update failed:", data.message);
        }
    } catch (error) {
        console.error("Error approving food:", error);
            }
            finally {
                setLoading(false);
            }
        }
    });


    };
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="loading loading-spinner loading-lg"></div>
            </div>
        );
    }

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
                    {
                        food.fstatus === "pending" && (
                            <button onClick={()=>handleApprove(food._id)} className="btn bg-primary text-background hover:bg-primary hover:text-background">
                                Not Approve
                            </button>
                        ) 
                    }
                    <Link to={`/food/${food._id}`} className="btn  bg-primary text-background hover:bg-primary hover:text-background">
                        View Detail
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Food;
