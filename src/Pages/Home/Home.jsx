import React from "react";
import PropTypes from "prop-types";
import Banner from "./Banner";
import FeatherFood from "./FeatherFood";
import Practice from "../Practice/Practice";
import Recent from "../../components/Recent";
import Testimonial from "./Testimonial/Testimonial";
import useAuth from "../../hooks/useAuth";

const Home = (props) => {
    const { theme } = useAuth();
    return <div className="">
        <section className="mb-10">
            <Banner></Banner>
        </section>
        <section className="w-[90%] mx-auto ">
            <FeatherFood></FeatherFood>
        </section>
        <section className="">
            <Practice></Practice>
        </section>
        <section>
            <Recent></Recent>
        </section>
        <section className="">
            <Testimonial></Testimonial>
        </section>
    </div>;
};

Home.propTypes = {};

export default Home;
