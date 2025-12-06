import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.png';
const Footer = () => {
    return (
        <div className="w-full bg-linear-to-r from-blue-50 to-blue-100 px-6 pt-5 pb-5">
            <footer className="footer sm:footer-horizontal bg-linear-to-r from-blue-50 to-blue-100 text-base-content p-10">

                {/* Logo + Description */}
                <aside >
                    <div className="flex items-center gap-2 font-extrabold text-2xl bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        <img src={logo} alt="PawMart Logo" className="w-10 h-10" />
                        <span className="font-bold text-lg">PawMart</span>
                    </div>

                    <p className="max-w-[250px]">
                        PawMart connects local pet owners and buyers for adoption and pet care products.
                    </p>
                </aside>

                {/* Useful Links */}
                <nav>
                    <h6 className="text-black text-lg font-semibold mb-2">Useful Links</h6>

                    <Link
                        to="/"
                        className="text-black text-sm hover:text-blue-600 transition-colors duration-200 block"
                    >
                        Home
                    </Link>

                    <Link
                        to="/contact"
                        className="text-black text-sm hover:text-blue-600 transition-colors duration-200 block"
                    >
                        Contact
                    </Link>

                    <Link
                        to="/terms"
                        className="text-black text-sm hover:text-blue-600 transition-colors duration-200 block"
                    >
                        Terms & Conditions
                    </Link>
                </nav>

            </footer>

            {/* Divider */}
            <div className="border-t-2 border-gray-400 mt-8 pt-4 text-center text-black text-sm hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                © 2025 PawMart — All Rights Reserved.
            </div>

        </div>

    );
};

export default Footer;