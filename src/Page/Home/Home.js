import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import ReviewCard from '../Dashboard/ReviewCard';
import OurCompany from '../OurCompany/OurCompany';
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
            <OurCompany></OurCompany>
        </div>
    );
};

export default Home;