import { createBrowserRouter } from "react-router";
import Rootlayout from "../root/Rootlayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../pages/ViewDetails";
import ForgetPassword from "../pages/ForgetPassword";
import ErrorPage from "../pages/ErrorPage";
import AddListing from "../pages/AddListing";
import MyListings from "../pages/MyListings";
import PetsAndSupplies from "../pages/PetsAndSupplies";
import UpdateDetails from "../pages/UpdateDetails";
import MyOrders from "../pages/MyOrders";
import Pets from "../pages/Pets";
import Food from "../pages/Food";
import Accessories from "../pages/Accessories";
import CareProducts from "../pages/CareProducts";
import LatestListings from "../pages/LatestListings";
import WhyAdopt from "../pages/WhyAdopt";
import PetHeroes from "../pages/PetHeros";
import ModernFAQSection from "../pages/ModernFAQSection";
import PetCareTips from "../pages/PetCareTips";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Rootlayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/PetsAndSupplies',
                element: <PetsAndSupplies />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Register />
            },
            {
                path: '/profile',
                element: <PrivateRoute> <Profile /></PrivateRoute>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute> <ViewDetails /></PrivateRoute>
            },
            {
                path: '/forgetpassword/:email',
                element: <ForgetPassword />
            },
            {
                path: '/AddListing',
                element: <PrivateRoute> <AddListing /> </PrivateRoute>
            },
            {
                path: '/MyListing',
                element: <PrivateRoute><MyListings /></PrivateRoute>

            },
            {
                path: '/MyOrders',
                element: <PrivateRoute><MyOrders /></PrivateRoute>

            }
            ,
            {
                path: '/UpdateDetails/:id',
                element: <UpdateDetails />
            },
            {
                path: '/Pets/:category',
                element: <Pets />
            },
            {
                path: '/Food/:category',
                element: <Food />
            },
             {
                path: '/Accessories/:category',
                element: <Accessories />
            },
             {
                path: '/CareProducts/:category',
                element: <CareProducts />
            },
            {
                path: '/latestListing',
                element: <LatestListings />
            },
            {
                path: '/whyadopt',
                element: <WhyAdopt />
            },
             {
                path: '/petheros',
                element: <PetHeroes/>
            },
            {
                path:'/faq',
                element:<ModernFAQSection/>
            },
            {
                path:'/tips',
                element:<PetCareTips/>
            }
        ]
    },
]);

export default router;