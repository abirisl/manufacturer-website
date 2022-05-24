import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummery></BusinessSummery>
        </div>
    );
};

export default Home;