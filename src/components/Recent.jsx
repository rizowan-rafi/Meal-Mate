import React from "react";
import { motion } from "framer-motion";

const Recent = () => {
    const cuisines = [
        {
            name: "Italian",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcpgZ-FErh1ln4ecPq18BuVlQiaKwZaeOsKw&s",
        },
        {
            name: "Japanese",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ4niyEBuRuwNiOJX2i3ePmpd4RfiMMbLIQQ&s",
        },
        {
            name: "Mexican",
            photo: "https://www.elrincontx.com/wp-content/uploads/2023/07/mexican-food-3-1000x550.jpg",
        },
        {
            name: "Indian",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJ25-hpeGPVRr0I9Ze8MBTagMnaW9RkLKsA&s",
        },
        {
            name: "French",
            photo: "https://www.thegoodfoodnetwork.com/wp-content/uploads/2023/06/shutterstock_1342147466.jpg",
        },
        {
            name: "Korean",
            photo: "https://images.yummy.ph/yummy/uploads/2022/04/koreanfoodramyunwithtteokbokki.jpg",
        },
        {
            name: "American",
            photo: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1273516682.jpg?c=16x9&q=h_833,w_1480,c_fill",
        },
        {
            name: "Turkish",
            photo: "https://www.thegoodfoodnetwork.com/wp-content/uploads/2023/06/shutterstock_1342147466.jpg",
        },
        {
            name: "Spanish",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtCO70_7eXoaBZIB0plw89RTiIOYlhYiXR6A&s",
        },
        {
            name: "Thai",
            photo: "https://www.thespruceeats.com/thmb/D9hctWPH31A5oiQ34J4Hknc6x0Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1042998066-518ca1d7f2804eb09039e9e42e91667c.jpg",
        },
    ];

    return (
        <div className="overflow-hidden  w-full bg-secondary py-10 -z-10 relative">
            <h3 className="text-3xl font-medium text-center mb-10">
                What's your favorite cuisine?
            </h3>
            <motion.div
                className="flex space-x-5 "
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                }}
            >
                {[...cuisines, ...cuisines, ...cuisines, ...cuisines].map(
                    (cuisine, index) => (
                        <div
                            key={index}
                            className="flex flex-col bg-primary p-3 justify-center items-center shadow-md border border-gray-200 text-center text-background"
                        >
                            <img
                                className="object-cover h-[100px] rounded-xl" // Set width, height, and control the object fit
                                src={cuisine.photo}
                                alt={cuisine.name}
                            />
                            <p className="mt-3 text-3xl">{cuisine.name}</p>
                        </div>
                    )
                )}
            </motion.div>
        </div>
    );
};

export default Recent;
