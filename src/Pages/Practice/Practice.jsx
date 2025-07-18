import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion, useScroll } from "motion/react";

const Practice = (props) => {
    const { data, isPending, isError, error } = useQuery({
        queryKey: ["foods"],
        queryFn: async () => {
            const response = await axios.get(
                "https://food-sharing-server-nine.vercel.app/featurefoods"
            );
            return await response.data;
        },
    });

    if (isPending) {
        return <span className="loading loading-spinner loading-md"></span>;
    }

    if (isError) {
        return <span>Error: {error.message}</span>;
    }
    return (
        <div className="bg-secondary my-10 py-5">
            <h2 className="text-3xl font-medium text-center py-3">
                Recently Viewed Foods
            </h2>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center w-[95%] mx-auto justify-center gap-4"
            >
                {data.map((food) => (
                    <div
                        key={food._id}
                        className="  space-y-3 h-[250px] p-2 rounded-xl my-2"
                    >
                        <img
                            src={food.fphoto}
                            className="w-[150px] h-[150px] rounded-full"
                            alt=""
                        />
                        <div>
                            <h3 className=" font-semibold ">{food.fname}</h3>
                            <p className="text-sm hidden lg:block">
                                {food.fnote}
                            </p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

Practice.propTypes = {};

export default Practice;
