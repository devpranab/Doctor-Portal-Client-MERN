import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import FeaturedService from '../FeaturedService/FeaturedService';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <FeaturedService/>
        </div>
    );
};

export default Home;