import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../Pages/AddFood/AddFood";
import AvailableFood from "../Pages/AvailableFood/AvailableFood";
import FoodDetail from "../FoodDetail/FoodDetail";
import ManageFood from "../Pages/ManageFood/ManageFood";
import RequestFood from "../RequestFood/RequestFood";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <Signup></Signup>,
            },
            {
                path: "/addfood",
                element: (
                    <PrivateRoute>
                        <AddFood></AddFood>
                    </PrivateRoute>
                ),
            },
            {
                path: "/availablefood",
                element: <AvailableFood></AvailableFood>,
            },
            {
                path: "/food/:id",
                element: (
                    <PrivateRoute>
                        <FoodDetail></FoodDetail>
                    </PrivateRoute>
                ),
                // loader: ({ params }) => {
                //     return fetch(`https://food-sharing-server-nine.vercel.app/food/${params.id}`);
                // },
            },
            {
                path: "/managefood",
                element: (
                    <PrivateRoute>
                        <ManageFood></ManageFood>
                    </PrivateRoute>
                ),
            },
            {
                path: "/requestfood",
                element: (
                    <PrivateRoute>
                        <RequestFood></RequestFood>
                    </PrivateRoute>
                ),
            },
            {
                path: "/updatefood/:id",
                element: (
                    <PrivateRoute>
                        <UpdateFood></UpdateFood>
                    </PrivateRoute>
                ),
                // loader: ({ params }) => {
                //     return fetch(`https://food-sharing-server-nine.vercel.app/food/${params.id}`);
                // },
            },
        ],
    },
    // {
    //     path: "*",
    //     element: <Error></Error>,
    // }
]);

export default router;
