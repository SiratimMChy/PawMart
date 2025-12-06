import React from 'react';
import Slider from '../component/Slider';
import CategoryCards from './CategoryCards';
import LatestListings from './LatestListings';

const Home = () => {
    return (
        <div>
            <title>Home</title>
            <Slider/>
            <CategoryCards/>
            <LatestListings/>
        </div>
    );
};

export default Home;