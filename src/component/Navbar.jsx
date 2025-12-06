import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router';
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import logo from '../assets/logo.png';

const Navbar = () => {

    const { user } = useContext(AuthContext);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div className="navbar px-5 bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
                    >

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold"
                                        : "text-gray-800 font-bold text-lg hover:text-blue-500"
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/PetsAndSupplies"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold"
                                        : "text-gray-800 font-bold text-lg hover:text-blue-500"
                                }
                            >
                                Pets & Supplies
                            </NavLink>
                        </li>

                        {
                            user && (
                                <> <li>
                                    <NavLink
                                        to="/profile"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold"
                                                : "text-gray-800 font-bold text-lg hover:text-blue-500"
                                        }
                                    >
                                        My Profile
                                    </NavLink>
                                </li>
                                    <li>
                                        <NavLink to="/AddListing" className={({ isActive }) => isActive ? "bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold" : "text-gray-800 font-bold text-lg hover:cursor-pointer hover:text-blue-500"}>
                                            Add Listing
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/MyListing" className={({ isActive }) => isActive ? "bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold" : "text-gray-800 font-bold text-lg hover:cursor-pointer hover:text-blue-500"}>
                                            My Listing
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/MyOrders" className={({ isActive }) => isActive ? "bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold" : "text-gray-800 font-bold text-lg hover:cursor-pointer hover:text-blue-500"}>
                                            My Orders
                                        </NavLink>
                                    </li>

                                </>
                            )
                        }

                    </ul>
                </div>
                <div className="flex items-center gap-2 font-extrabold text-2xl bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    <img src={logo} alt="PawMart Logo" className="w-10 h-10" />
                    <span>PawMart</span>
                </div>


            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="md:flex hidden items-center gap-6">
                    <NavLink to="/" className={({ isActive }) => isActive ? "bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold" : "text-gray-800 font-bold text-lg hover:cursor-pointer hover:text-blue-500"}>
                        Home
                    </NavLink>
                    <NavLink to="/PetsAndSupplies" className={({ isActive }) => isActive ? "bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold" : "text-gray-800 font-bold text-lg hover:cursor-pointer hover:text-blue-500"}>
                        Pets & Supplies
                    </NavLink>
                    {
                        user && (
                            <>
                                <NavLink to="/AddListing" className={({ isActive }) => isActive ? "bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold" : "text-gray-800 font-bold text-lg hover:cursor-pointer hover:text-blue-500"}>
                                    Add Listing
                                </NavLink>
                                <NavLink to="/MyListing" className={({ isActive }) => isActive ? "bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold" : "text-gray-800 font-bold text-lg hover:cursor-pointer hover:text-blue-500"}>
                                    My Listing
                                </NavLink>
                                 <NavLink to="/MyOrders" className={({ isActive }) => isActive ? "bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold" : "text-gray-800 font-bold text-lg hover:cursor-pointer hover:text-blue-500"}>
                                    My Orders
                                </NavLink>
                                <NavLink to="/profile" className={({ isActive }) => isActive ? "flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold"
                                    : "flex items-center gap-2 text-gray-800 font-bold text-lg hover:cursor-pointer hover:text-blue-500"}>
                                    {user?.photoURL && (
                                        <img src={user.photoURL} alt="Profile" className="w-7 h-7 rounded-full" />
                                    )}
                                    My Profile
                                </NavLink>
                               
                            </>
                        )
                    }

                </div>
            </div>
            {
                user && <div className="navbar-end">
                    <button onClick={handleSignOut} className="btn bg-linear-to-r from-blue-600 to-cyan-600 text-white w-20 rounded-lg font-bold">Logout</button>
                </div>
            }
            {
                !user && <div className="navbar-end">
                    <Link to={'/login'} className="btn bg-linear-to-r from-blue-600 to-cyan-600 text-white w-20 rounded-lg font-bold">Login</Link>
                </div>
            }

        </div>
    );
};

export default Navbar;