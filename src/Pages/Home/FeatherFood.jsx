import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Food from "../Food/Food";
import { Link } from "react-router-dom";

const FeatherFood = (props) => {
    const [featureFood, setFeatureFood] = useState([]);
    const [loading,setLoading] = useState(true);
    // Fetch featured foods from API or local storage
    useEffect(() => {
        axios
            .get("https://food-sharing-server-nine.vercel.app/featurefoods")
            .then((response) =>
                setFeatureFood(response.data),
                setLoading(false)    
        )
            .catch((error) => {
                
                // console.error("Error fetching featured foods:", error)
            }
            );
    }, []);
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="loading loading-spinner loading-lg"></div>
            </div>
        );
    }
    
    return (
        <div className="">
            <h2
                className={`text-3xl font-bold py-5 text-center`}
            >
                Featured Foods
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {featureFood.map((food) => (
                    <Food key={food._id} food={food}></Food>
                ))}
            </div>
            <div className="text-center  mt-8">
                <Link
                    to={"/availablefood"}
                    className="btn bg-primary text-background hover:bg-primary hover:text-background"
                >
                    See All Food
                </Link>
            </div>
        </div>
    );
};

FeatherFood.propTypes = {};

export default FeatherFood;
