import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const MyReview = () => {
    const stars = Array(5).fill(0);

    const colors = {
        orange: "#FFBA5A",
        gray: "#a9a9a9"
    }

    const [currentValue, setCurrentvalue] = useState(0);
    
    const handleClick = value =>{
        setCurrentvalue(value)
    };

    return (
        <div class="card lg:mx-40 my-24 bg-base-100 shadow-xl flex justify-center items-center">
            <div class="card-body">
                <div className='flex gap-3 mb-5 cursor-pointer'>
                    {
                        stars.map((_, index) =>{
                           return(
                            <FaStar
                            key={index}
                            color={(currentValue) > index ? colors.orange : colors.gray}
                            onClick ={() => handleClick(index + 1)}
                            />
                           )
                        })
                    }
                </div>
                <form>
                <textarea class="textarea textarea-bordered" placeholder="What's your feedback"></textarea>
                <br />
                <button className='btn btn-success w-full mt-4'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default MyReview;