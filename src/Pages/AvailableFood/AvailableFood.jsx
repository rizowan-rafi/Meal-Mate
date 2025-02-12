import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Food from "../Food/Food";

const AvailableFood = (props) => {
    const [layout, setLayout] = useState(3);
    const [loading,setLoading] = useState(true);
    const [availableFood, setAvailableFood] = useState([]);
    const [allFoods, setAllFoods] = useState([]);
    const [sResult, setSResult] = useState(null);

    useEffect(() => {
        axios
            .get("https://food-sharing-server-nine.vercel.app/availablefoods")
            .then((response) => {
                setAvailableFood(response.data);
                setAllFoods(response.data);
                setLoading(false);
            })
            .catch((error) => {
                // console.error("Error fetching available foods: ", error);
            });
    }, []);
        if (loading) {
                return (
                    <div className="flex justify-center items-center h-screen">
                        <div className="loading loading-spinner loading-lg"></div>
                    </div>
                );
        }

    const handleLayout = () => {
        if (layout === 3) setLayout(2);
        else setLayout(3);
    };

const handleSort = () => {
    const sortedFoods = [...availableFood].sort(
        (a, b) => b.fquantity - a.fquantity
    );
    setAvailableFood(sortedFoods);
};

    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        // console.log(searchValue);

        if (searchValue === "") {
            setAvailableFood(allFoods);
            setSResult(0);
        } else {
            const filteredFoods = allFoods.filter((food) =>
                food.fname.toLowerCase().includes(searchValue)
            );
            setAvailableFood(filteredFoods);
            setSResult(filteredFoods.length);
        }
    };
    return (
        <div className="w-[90%] mx-auto ">
            {" "}
            {/* <div>AvailableFood : {availableFood.length}</div> */}
            <div className="flex">
                <button
                    onClick={handleLayout}
                    className="btn  mt-10 hidden bg-primary text-background lg:block"
                >
                    Change Layout
                </button>
                <button
                    onClick={handleSort}
                    className="btn  mt-10 hidden bg-primary text-background lg:block"
                >
                    Sort By Quantity
                </button>   
            </div>
            <div className="py-5">
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        onChange={handleSearch}
                        className="grow"
                        placeholder="Search"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </label>
            </div>
            {sResult ? (
                <div className=" text-xl font-semibold py-3">
                    Found {sResult} foods with the given name
                </div>
            ) : (
                ""
            )}
            {availableFood.length === 0 && (
                <div className="text-center">
                    No food available on this name
                </div>
            )}
            <div
                className={`grid justify-center md:grid-cols-2 lg:grid-cols-${layout} gap-5`}
            >
                {availableFood.map((food) => (
                    <Food key={food._id} food={food} />
                ))}
            </div>
        </div>
    );
};

AvailableFood.propTypes = {};

export default AvailableFood;
