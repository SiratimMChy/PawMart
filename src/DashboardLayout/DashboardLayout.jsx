import React, { useContext, useEffect, useState } from 'react';
import { Outlet, Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import logo from '../assets/logo.png';
import Aside from '../component/Aside/Aside';
import Swal from 'sweetalert2';
import { MdDashboard } from 'react-icons/md';

const DashboardLayout = () => {
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

    // Apply saved theme on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const handleLogout = () => {
        signOut(auth);
        Swal.fire({
            title: "Successfully Logged Out",
            icon: "success"
        });
    }

    return (
        <div className="min-h-screen bg-base-200">
            {/* Top Navbar - Simple & Clean */}
            <nav className="bg-base-100 border-b border-base-content/10 sticky top-0 z-30 shadow-sm">
                <div className="px-4 lg:px-6">
                    <div className="flex items-center justify-between h-16">
                        {/* Left: Logo & Brand */}
                        <Link to="/" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                            <img src={logo} alt="PawMart Logo" className="w-8 h-8" />
                            <span className="text-xl font-extrabold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                PawMart
                            </span>
                        </Link>

                        {/* Right: Theme Toggle & Profile Dropdown */}
                        <div className="flex items-center gap-3">
                            {/* Theme toggle */}
                            <div className='shrink-0'>
                                <label className="toggle text-base-content cursor-pointer hover:scale-110 transition-transform duration-200">
                                    <input type="checkbox" checked={isChecked}
                                        onChange={handleThemeChange} value="synthwave" className="theme-controller" />

                                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
                                </label>
                            </div>

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
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-9999 mt-3 w-80 p-0 shadow-2xl border border-base-content/10 overflow-hidden">
                                    {/* User Info Header */}
                                    <li className="px-6 py-4 bg-linear-to-r from-blue-600 to-cyan-600 mb-2">
                                        <div className="flex flex-col gap-1.5 w-full pointer-events-none">
                                            <span className="text-base font-bold text-white truncate">
                                                {user?.displayName || 'User'}
                                            </span>
                                            <span className="text-xs text-white/95 break-all leading-relaxed">
                                                {user?.email}
                                            </span>
                                        </div>
                                    </li>
                                    
                                    {/* Menu Items */}
                                    <div className="px-2 pb-2">
                                        <li>
                                            <Link to="/" className="flex items-center gap-3 px-4 py-3 hover:bg-base-200 hover:text-blue-600 rounded-lg transition-all duration-200 group">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                                </svg>
                                                <span className="font-semibold">Home</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/profile" className="flex items-center gap-3 px-4 py-3 hover:bg-base-200 hover:text-blue-600 rounded-lg transition-all duration-200 group">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                                <span className="font-semibold">Profile</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 hover:bg-base-200 hover:text-blue-600 rounded-lg transition-all duration-200 group">
                                                <MdDashboard className='w-5 h-5 shrink-0 group-hover:scale-110 transition-transform' />
                                                <span className="font-semibold">Dashboard Home</span>
                                            </Link>
                                        </li>
                                        
                                        <div className="divider my-1"></div>
                                        
                                        {/* Logout Button */}
                                        <li>
                                            <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 hover:text-red-600 rounded-lg transition-all duration-200 w-full group">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                </svg>
                                                <span className="font-semibold">Logout</span>
                                            </button>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className='flex'>
                {/* Sidebar - Always visible, has its own toggle */}
                <Aside />

                {/* Main Content */}
                <div className='flex-1 p-5 overflow-auto'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;