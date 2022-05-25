import React from 'react';
import ReviewCard from '../Dashboard/ReviewCard';
import Products from '../Products/Products';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummery></BusinessSummery>
            <ReviewCard></ReviewCard>
        </div>
    );
};

export default Home;