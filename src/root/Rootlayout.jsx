import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Rootlayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Rootlayout;