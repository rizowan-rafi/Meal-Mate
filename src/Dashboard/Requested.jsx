import { useEffect, useState } from "react";
import Swal from "sweetalert2";
const Requested = (props) => {
    const [loading, setLoading] = useState(true);
    const [allFoods, setAllFoods] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchAllFoods = async () => {
            try {
                const response = await fetch(
                    "https://food-sharing-server-nine.vercel.app/requestfood"
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch all foods");
                }
                const data = await response.json();
                setAllFoods(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchAllFoods();
    }, []);

    const handleRequest =async (id,nid,quantity) => { 
Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, approve it!",
}).then(async (result) => {
    if (result.isConfirmed) {
        try {
                    setLoading(true);
            const response = await fetch(
                `https://food-sharing-server-nine.vercel.app/acceptrequest/${nid}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ quantity,id }),
                }
            );
            if (!response.ok) {
                throw new Error("Failed to approve request");
            }
            const data = await response.json();
            // Optionally, you can update the state to reflect the change
            setAllFoods((prevFoods) =>
                prevFoods.map((food) =>
                    food._id === id ? { ...food, fstatus: "approved" } : food
                )
            );
        } catch (error) {
            console.error("Error approving request:", error);
        }
        finally {
            setLoading(false);
        }
    }
});

    }
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="loading loading-spinner loading-lg"></div>
            </div>
        );
    }
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-5">
                Requested Foods
            </h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Donar Name</th>
                            <th>
                                Requested <br /> Quantity
                            </th>
                            <th>
                                Remaining <br /> Quantity
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* body */}
                        {loading ? (
                            <tr>
                                <td colSpan="4" className="text-center">
                                    <div className="loading loading-spinner loading-lg"></div>
                                </td>
                            </tr>
                        ) : error ? (
                            <tr>
                                <td
                                    colSpan="4"
                                    className="text-red-500 text-center"
                                >
                                    {error}
                                </td>
                            </tr>
                        ) : (
                            allFoods.map((food) => (
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
                                        {food.dname}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">
                                            {food.demail}
                                        </span>
                                    </td>
                                    <td>{food.fquantity}</td>
                                    <td>{food.aquantity}</td>
                                    <th>
                                        {
                                            food.fstatus === "requested" ? (<button
                                            onClick={() =>
                                                handleRequest(
                                                    food._id,
                                                    food.id,
                                                    parseInt(food.aquantity) -
                                                        parseInt(food.fquantity)
                                                )
                                            }
                                            className="btn btn-success btn-sm font-medium"
                                        >
                                            Approved <br /> request
                                        </button>): (
                                                <span className="badge badge-success badge-sm">
                                                    Approved
                                                </span>
                                            )
                                        }
                                        
                                    </th>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Requested.propTypes = {};

export default Requested;
