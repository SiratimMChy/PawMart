import React from 'react';
import Slider from '../component/Slider';
import CategoryCards from './CategoryCards';
import LatestListings from './LatestListings';
import WhyAdopt from './WhyAdopt';
import PetHeroes from './PetHeros';
import About from './About';
import ModernFAQSection from './ModernFAQSection';

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
             <ModernFAQSection />
        </div>
    );
};

export default Home;