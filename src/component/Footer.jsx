import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div className="w-full bg-base-100 px-6 pt-5 pb-5 ">
            <footer className="footer sm:footer-horizontal bg-base-100 text-base-content p-10">

              
                <aside>
                    <div className="flex items-center gap-2 font-extrabold text-2xl bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                        <img src={logo} alt="PawMart Logo" className="w-10 h-10" />
                        <span className="font-bold text-lg">PawMart</span>
                    </div>

                    <p className="max-w-[250px]">
                        PawMart connects local pet owners and buyers for adoption and pet care products.
                    </p>
                </aside>

              
                <nav>
                    <h6 className="text-base-content text-lg font-semibold mb-2">Useful Links</h6>

                    <Link
                        to="/"
                        className="text-base-content text-sm hover:text-primary transition-colors duration-200 block"
                    >
                        Home
                    </Link>

                    <Link
                        to="/contact"
                        className="text-base-content text-sm hover:text-primary transition-colors duration-200 block"
                    >
                        Contact
                    </Link>

                    <Link
                        to="/terms"
                        className="text-base-content text-sm hover:text-primary transition-colors duration-200 block"
                    >
                        Terms & Conditions
                    </Link>
                </nav>

            </footer>

        
            <div className="border-t border-base-content/20 mt-8 pt-4 text-center text-base-content text-sm">
                © 2025 PawMart — All Rights Reserved.
            </div>

        </div>
    );
};

export default Footer;
