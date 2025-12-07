import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import logo from '../assets/logo.png';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const [isChecked, setIsChecked] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "dark";
    });

    const handleThemeChange = () => {
        setIsChecked(prev => {
            const newState = !prev;
            const theme = newState ? "dark" : "light";
            localStorage.setItem("theme", theme);
            document.documentElement.setAttribute("data-theme", theme);
            return newState;
        });
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);


    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div className="navbar px-5 bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
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
                                        : "text-base-content font-bold text-lg hover:text-primary"
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
                                        : "text-base-content font-bold text-lg hover:text-primary"
                                }
                            >
                                Pets & Supplies
                            </NavLink>
                        </li>

                        {user && (
                            <>
                                <li>
                                    <NavLink
                                        to="/profile"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold"
                                                : "text-base-content font-bold text-lg hover:text-primary"
                                        }
                                    >
                                        My Profile
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/AddListing"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold"
                                                : "text-base-content font-bold text-lg hover:text-primary"
                                        }
                                    >
                                        Add Listing
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/MyListing"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold"
                                                : "text-base-content font-bold text-lg hover:text-primary"
                                        }
                                    >
                                        My Listing
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/MyOrders"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold"
                                                : "text-base-content font-bold text-lg hover:text-primary"
                                        }
                                    >
                                        My Orders
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

              
                <div className="flex items-center gap-2 font-extrabold text-2xl text-primary">
                    <img src={logo} alt="PawMart Logo" className="w-10 h-10" />
                    <span>PawMart</span>
                </div>
            </div>


            <div className="navbar-center hidden lg:flex">
                <div className="md:flex hidden items-center gap-6">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold"
                                : "text-base-content font-bold text-lg hover:text-primary"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/PetsAndSupplies"
                        className={({ isActive }) =>
                            isActive
                                ? "bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold"
                                : "text-base-content font-bold text-lg hover:text-primary"
                        }
                    >
                        Pets & Supplies
                    </NavLink>

                    {user && (
                        <>
                            <NavLink
                                to="/AddListing"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold"
                                        : "text-base-content font-bold text-lg hover:text-primary"
                                }
                            >
                                Add Listing
                            </NavLink>

                            <NavLink
                                to="/MyListing"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold"
                                        : "text-base-content font-bold text-lg hover:text-primary"
                                }
                            >
                                My Listing
                            </NavLink>

                            <NavLink
                                to="/MyOrders"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold"
                                        : "text-base-content font-bold text-lg hover:text-primary"
                                }
                            >
                                My Orders
                            </NavLink>
                        </>
                    )}
                </div>
            </div>

            <div className="navbar-end flex items-center gap-2">
                <label className="toggle text-base-content">
                    <input type="checkbox" checked={isChecked}
                        onChange={handleThemeChange} value="synthwave" className="theme-controller" />

                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                </label>



                {user && (
                    <div className='flex gap-2 items-center'>
                        <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold"
                                    : "flex items-center gap-2 text-base-content font-bold text-lg hover:text-primary"
                            }
                        >
                            {user?.photoURL && (
                                <img src={user.photoURL} className="w-12 h-12 rounded-full" />
                            )}
                        </NavLink>

                        <button
                            onClick={handleSignOut}
                            className="btn mt-1 bg-linear-to-r from-blue-600 to-cyan-600 text-white w-20 rounded-lg font-bold"
                        >
                            Logout
                        </button>
                    </div>
                )}

                {!user && (
                    <div className="navbar-end">
                        <Link
                            to={'/login'}
                            className="btn bg-linear-to-r from-blue-600 to-cyan-600 text-white w-20 rounded-lg font-bold"
                        >
                            Login
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
