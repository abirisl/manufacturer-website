import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
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
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;