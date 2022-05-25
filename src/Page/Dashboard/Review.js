import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Review = ({ review, user }) => {
    const { rating, customerFeedback,name } = review;
    const stars = Array(5).fill(0);

    const colors = {
        orange: "#FFBA5A",
        gray: "#a9a9a9"
    } 

    

    console.log(user)
    return (

        <div class="carousel-item ">
            <div class="card w-48 bg-base-100 shadow-xl">
                <figure><img src={user?.photoURL} className='rounded-full mt-8' alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="text-center font-bold text-xl">{name}</h2>
                    <p className='flex mx-5'>{
                        stars.map((_, index) =>{
                           return(
                            <FaStar
                            key={index}
                            color={ (rating) > index ? colors.orange : colors.gray}
                           
                            />
                           )
                        })
                    }
                    </p>
                    <p>{customerFeedback}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;