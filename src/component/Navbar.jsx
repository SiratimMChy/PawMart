import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import logo from '../assets/logo.png';
import Swal from 'sweetalert2';
import { MdDashboard } from 'react-icons/md';

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
        Swal.fire({
            title: "Successfully Logged Out",
            icon: "success"
        });
    }

    const navLinkClass = ({ isActive }) => {
        return `relative px-4 py-2 rounded-lg font-semibold text-base transition-all duration-300 ease-in-out ${isActive
            ? "bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/30"
            : "text-base-content hover:bg-base-200 hover:text-blue-600"
            }`;
    };

    const mobileNavLinkClass = ({ isActive }) => {
        return `relative px-4 py-2.5 rounded-lg font-semibold text-base transition-all duration-300 ${isActive
            ? "bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
            : "text-base-content hover:bg-base-200"
            }`;
    };

    return (
        <div className="navbar px-3.5 lg:px-25 bg-base-100 border-b border-base-content/10 shadow-sm sticky top-0 z-50 backdrop-blur-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-lg border border-base-content/10 space-y-1"
                    >
                        <li>
                            <NavLink to="/" className={mobileNavLinkClass}>
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/PetsAndSupplies" className={mobileNavLinkClass}>
                                Pets & Supplies
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/bd-org" className={navLinkClass}>
                                Animal Welfare
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/tips' className={navLinkClass}>
                                PetCare Tips
                            </NavLink>
                        </li>



                        <li className="block lg:hidden pt-2 border-t border-base-content/10 mt-2">
                            <div className='flex items-center justify-between px-4 py-2'>
                                <span className="font-semibold text-sm">Theme</span>
                                <label className="toggle text-base-content">
                                    <input type="checkbox" checked={isChecked}
                                        onChange={handleThemeChange} value="synthwave" className="theme-controller" />

                                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>

                <Link to="/" className="flex items-center gap-2 font-extrabold text-[18px] lg:text-2xl bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                    <img src={logo} alt="PawMart Logo" className="w-10 h-10" />
                    <span>PawMart</span>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <div className="flex items-center gap-2">
                    <NavLink to="/" className={navLinkClass}>
                        Home
                    </NavLink>

                    <NavLink to="/PetsAndSupplies" className={navLinkClass}>
                        Pets & Supplies
                    </NavLink>

                    <NavLink to="/bd-org" className={navLinkClass}>
                        Animal Welfare
                    </NavLink>

                    <NavLink to='/tips' className={navLinkClass}>
                        PetCare Tips
                    </NavLink>
                </div>
            </div>

            <div className="navbar-end lg:flex items-center gap-3">
                <div className='shrink-0 lg:block hidden'>
                    <label className="toggle text-base-content cursor-pointer hover:scale-110 transition-transform duration-200">
                        <input type="checkbox" checked={isChecked}
                            onChange={handleThemeChange} value="synthwave" className="theme-controller" />

                        <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                        <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
                    </label>
                </div>

                {user && (
                    <div className='flex gap-2 items-center'>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:scale-110 transition-transform duration-200">
                                <div className="w-10 rounded-full ring-2 ring-blue-500 ring-offset-base-100 ring-offset-2 hover:ring-4 transition-all duration-300">
                                    <img
                                        alt="User Avatar"
                                        src={user?.photoURL || "https://via.placeholder.com/150"}
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-72 p-4 shadow-xl border border-base-content/10">
                                <li className="menu-title px-0 py-2 mb-2">
                                    <div className="flex flex-col gap-1 w-full">
                                        <span className="text-base font-bold text-blue-600 truncate">
                                            {user?.displayName || 'User'}
                                        </span>
                                        <span className="text-xs text-base-content/70 wrap-break-word leading-relaxed">
                                            {user?.email}
                                        </span>
                                    </div>
                                </li>
                                <div className="divider my-1"></div>
                                <li>
                                    <Link to="/profile" className="hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 py-2.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        <span className="font-semibold">Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard" className="hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200 py-2.5">
                                        <MdDashboard className='w-5 h-5 shrink-0' />
                                        <span className="font-semibold">Dashboard</span>
                                    </Link>
                                </li>
                                <div className="divider my-1"></div>
                                <li>
                                    <button onClick={handleSignOut} className="hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors duration-200 py-2.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                        <span className="font-semibold">Logout</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}

                {!user && (
                    <Link
                        to={'/login'}
                        className="btn bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-none shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-lg font-bold px-6"
                    >
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;