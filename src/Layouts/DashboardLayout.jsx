import Footer from "../shared/Footer";
import {Outlet} from "react-router-dom";
import NavBar from "../shared/NavBar";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
const DashboardLayout = (props) => {
    const { user } = useAuth()
    return (
        <div className="">
            <div>
                <NavBar></NavBar>
            </div>
            <div className="flex h-screen">
                <div className="flex flex-col  h-[85%] p-5 justify-between  bg-secondary w-[20%]  ">
                    <div className="space-y-3">
                        <div className="flex text-2xl items-center justify-between">
                            <h2>Dashboard</h2>
                        </div>

                        <div className="flex-1">
                            <ul className="pt-2 pb-4 space-y-1 text-sm">
                                <li className="hover:text-white hover:font-bold hover:bg-primary p-1 rounded-xl">
                                    <Link
                                        to={"/dashboard"}
                                        rel="noopener noreferrer"
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="w-5 h-5 fill-current dark:text-gray-600"
                                        >
                                            <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                                        </svg>
                                        <span>Home</span>
                                    </Link>
                                </li>

                                <li className="hover:text-white hover:font-bold hover:bg-primary p-1 rounded-xl">
                                    <Link
                                        to={"/dashboard/allfood"}
                                        rel="noopener noreferrer"
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="w-5 h-5 fill-current dark:text-gray-600"
                                        >
                                            <path d="M203.247,386.414,208,381.185V355.4L130.125,191H93.875L16,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42A124.343,124.343,0,0,0,203.247,386.414ZM176,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,48,369.667V362.6l64-135.112L176,362.6Z"></path>
                                            <path d="M418.125,191h-36.25L304,355.4v27.042l4.234,4.595a124.347,124.347,0,0,0,91.224,39.982h.42a124.343,124.343,0,0,0,91.369-40.607L496,381.185V355.4ZM464,368.608a90.924,90.924,0,0,1-64.231,26.413h-.33A90.907,90.907,0,0,1,336,369.667V362.6l64-135.112L464,362.6Z"></path>
                                            <path d="M272,196.659A56.223,56.223,0,0,0,309.659,159H416V127H309.659a55.991,55.991,0,0,0-107.318,0H96v32H202.341A56.223,56.223,0,0,0,240,196.659V463H136v32H376V463H272ZM232,143a24,24,0,1,1,24,24A24,24,0,0,1,232,143Z"></path>
                                        </svg>
                                        <span>All Foods</span>
                                    </Link>
                                </li>

                                <li className="hover:text-white hover:font-bold hover:bg-primary p-1 rounded-xl">
                                    <Link
                                        to={"/dashboard/pendingfood"}
                                        rel="noopener noreferrer"
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="w-5 h-5 fill-current dark:text-gray-600"
                                        >
                                            <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                        </svg>
                                        <span>Pending Food</span>
                                    </Link>
                                </li>

                                <li className="hover:text-white hover:font-bold hover:bg-primary p-1 rounded-xl">
                                    <Link to={"/dashboard/requestfood"}
                                        rel="noopener noreferrer"
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="w-5 h-5 fill-current dark:text-gray-600"
                                        >
                                            <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                                        </svg>
                                        <span>Requested Food</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
                        <img
                            src={user?.photoURL}
                            alt=""
                            className="w-12 h-12 rounded-lg dark:bg-gray-500"
                        />
                        <div>
                            <h2 className="text-lg font-semibold">
                                {user?.displayName || "User Name"}
                            </h2>
                            <span className="flex items-center space-x-1">
                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="text-xs hover:underline dark:text-gray-600"
                                >
                                    Admin
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-[75%] h-[85%]">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

DashboardLayout.propTypes = {};

export default DashboardLayout;
