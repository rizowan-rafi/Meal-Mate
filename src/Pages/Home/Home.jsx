import React from "react";
import PropTypes from "prop-types";
import Banner from "./Banner";
import FeatherFood from "./FeatherFood";
import Practice from "../Practice/Practice";
import Recent from "../../components/Recent";

const Home = (props) => {
    return <div>
        <section className="mb-10">
            <Banner></Banner>
        </section>
        <section className="w-[90%] mx-auto">
            <FeatherFood></FeatherFood>
        </section>
        <section>
            <Practice></Practice>
        </section>
        <section>
            <Recent></Recent>
        </section>
    </div>;
};

Home.propTypes = {};

export default Home;
