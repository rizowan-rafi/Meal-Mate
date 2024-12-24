import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Food from "../Food/Food";
import { Link } from "react-router-dom";

const FeatherFood = (props) => {
    const [featureFood, setFeatureFood] = useState([]);
    // Fetch featured foods from API or local storage
    useEffect(() => {
        axios
            .get("https://food-sharing-server-nine.vercel.app/featurefoods")
            .then((response) => setFeatureFood(response.data))
            .catch((error) => {
                
                // console.error("Error fetching featured foods:", error)
            }
            );
    }, []);
    return (
        <div>
            <h2 className="text-3xl font-bold">
                Featured Foods : {featureFood.length}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {featureFood.map((food) => (
                    <Food key={food._id} food={food}></Food>
                ))}
            </div>
            <div className="text-center mt-8">
                <Link to={"/availablefood"} className="btn">
                    See All Food
                </Link>
            </div>
        </div>
    );
};

FeatherFood.propTypes = {};

export default FeatherFood;
