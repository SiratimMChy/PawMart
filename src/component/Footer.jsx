import React from 'react';
import { Link } from 'react-router';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div className="w-full bg-base-200 px-6 pt-10 pb-5 border-t border-base-300 lg:px-25">
            <footer className="footer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-base-content pb-10">
                {/* Brand Section */}
                <aside>
                    <div className="flex items-center gap-2 font-extrabold text-2xl  bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                        <img src={logo} alt="PawMart Logo" className="w-10 h-10" />
                        <span className="font-bold text-lg">PawMart</span>
                    </div>
                    <p className="max-w-[250px] text-base-content/80 mb-4">
                        PawMart connects local pet owners and buyers for adoption and pet care products.
                    </p>
                    {/* Social Links */}
                    <div className="flex gap-3 mt-4">
                        <a 
                            href="https://facebook.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-circle btn-sm bg-primary/10 hover:bg-primary hover:text-white border-none"
                            aria-label="Facebook"
                        >
                            <FaFacebook className="w-4 h-4" />
                        </a>
                        <a 
                            href="https://twitter.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-circle btn-sm bg-primary/10 hover:bg-primary hover:text-white border-none"
                            aria-label="Twitter"
                        >
                            <FaTwitter className="w-4 h-4" />
                        </a>
                        <a 
                            href="https://instagram.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-circle btn-sm bg-primary/10 hover:bg-primary hover:text-white border-none"
                            aria-label="Instagram"
                        >
                            <FaInstagram className="w-4 h-4" />
                        </a>
                        <a 
                            href="https://linkedin.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-circle btn-sm bg-primary/10 hover:bg-primary hover:text-white border-none"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="w-4 h-4" />
                        </a>
                    </div>
                </aside>

                {/* Quick Links */}
                <nav>
                    <h6 className="text-base-content text-lg font-semibold mb-4">Quick Links</h6>
                    <Link
                        to="/"
                        className="text-base-content/80 text-sm hover:text-primary transition-colors duration-200 block mb-2"
                    >
                        Home
                    </Link>
                    <Link
                        to="/PetsAndSupplies"
                        className="text-base-content/80 text-sm hover:text-primary transition-colors duration-200 block mb-2"
                    >
                        Pets & Supplies
                    </Link>
                    <Link
                        to="/petheros"
                        className="text-base-content/80 text-sm hover:text-primary transition-colors duration-200 block mb-2"
                    >
                        Pet Heroes
                    </Link>
                </nav>

                {/* Resources */}
                <nav>
                    <h6 className="text-base-content text-lg font-semibold mb-4">Resources</h6>
                    <Link
                        to="/whyadopt"
                        className="text-base-content/80 text-sm hover:text-primary transition-colors duration-200 block mb-2"
                    >
                        Why Adopt
                    </Link>
                    <Link
                        to="/tips"
                        className="text-base-content/80 text-sm hover:text-primary transition-colors duration-200 block mb-2"
                    >
                        Pet Care Tips
                    </Link>
                    <Link
                        to="/faq"
                        className="text-base-content/80 text-sm hover:text-primary transition-colors duration-200 block mb-2"
                    >
                        FAQ
                    </Link>
                </nav>

                {/* Contact Info */}
                <nav>
                    <h6 className="text-base-content text-lg font-semibold mb-4">Contact Us</h6>
                    <div className="space-y-3">
                        <a 
                            href="mailto:info@pawmart.com"
                            className="flex items-center gap-2 text-base-content/80 text-sm hover:text-primary transition-colors duration-200"
                        >
                            <MdEmail className="w-5 h-5" />
                            <span>info@pawmart.com</span>
                        </a>
                        <a 
                            href="tel:+8801234567890"
                            className="flex items-center gap-2 text-base-content/80 text-sm hover:text-primary transition-colors duration-200"
                        >
                            <MdPhone className="w-5 h-5" />
                            <span>+880 1234-567890</span>
                        </a>
                        <div className="flex items-start gap-2 text-base-content/80 text-sm">
                            <MdLocationOn className="w-5 h-5 mt-0.5" />
                            <span>Sylhet, Bangladesh</span>
                        </div>
                    </div>
                </nav>
            </footer>

            {/* Bottom Bar */}
            <div className="border-t border-base-content/20 pt-6 text-center text-base-content/70 text-sm">
                <p>© 2025 PawMart — All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;