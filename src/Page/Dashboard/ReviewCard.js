import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Review from './Review';

const ReviewCard = () => {
    const [user] = useAuthState(auth)
    const [reviews, setReviews] = useState([]);
    console.log(reviews)

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [user])
    return (
        <div className='flex justify-center items-center my-12'>
            <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                {
                    reviews.map(review => <Review key={review._id} review={review} user={user}></Review>)
                }
            </div>
        </div>
    );
};

export default ReviewCard;