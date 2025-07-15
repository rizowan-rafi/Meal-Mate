import { useEffect, useState } from "react";

const Allfoods = (props) => {
    const [loading, setLoading] = useState(true);
    const [allFoods, setAllFoods] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchAllFoods = async () => {
            try {
                const response = await fetch(
                    "https://food-sharing-server-nine.vercel.app/allfoods"
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
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-5">All Foods</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Donar Name</th>
                            <th>Quantity</th>
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
                                    <td>{ food.fquantity}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs font-medium">
                                            {
                                                food.fstatus === "available" ? (
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
                                                )
                                            }
                                        </button>
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

Allfoods.propTypes = {};

export default Allfoods;
