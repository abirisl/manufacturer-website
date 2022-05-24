import React from 'react';
import CountUp from 'react-countup';

const BusinessSummery = () => {
    return (
        <div className='my-24 text-center'>
            <h2 className='uppercase text-4xl font-bold text-emerald-500 mb-3'>Our Business Overview</h2>
            <p className='text-xl'>Users Expectation</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-5 mx-12'>
                <div className="card lg:max-w-xs bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card lg:max-w-xs bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                    </div>
                </div>
                <div className="card lg:max-w-xs bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;