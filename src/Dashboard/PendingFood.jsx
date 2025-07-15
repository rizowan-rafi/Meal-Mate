import { useEffect, useState } from "react";
import Food from "../Pages/Food/Food";
const PendingFood = (props) => {
    const [pendingFoods, setPendingFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchPendingFoods = async () => {
            try {
                const response = await fetch(
                    "https://food-sharing-server-nine.vercel.app/pendingfoods"
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch pending foods");
                }
                const data = await response.json();
                setPendingFoods(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPendingFoods();
    }, []);
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
                Pending Foods
            </h1>
            <div>
                {pendingFoods.length === 0 && (
                    <p className="text-center text-xl mt-5">
                        No pending foods available
                    </p>
                )}
                {error ? (
                    <p className="text-red-500 text-center">{error}</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
                        {pendingFoods.map((food) => (
                            <Food key={food._id} food={food} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

PendingFood.propTypes = {};

export default PendingFood;
