import React from 'react';
import Slider from '../component/Slider';
import CategoryCards from './CategoryCards';
import LatestListings from './LatestListings';
import WhyAdopt from './WhyAdopt';
import PetHeroes from './PetHeros';
import About from './About';

const Home = () => {
    return (
        <div>
            <title>Home</title>
            <Slider/>
            <CategoryCards/>
            <LatestListings/>
            <PetHeroes/>
            <WhyAdopt/>
            <About/>
        </div>
    );
};

export default Home;