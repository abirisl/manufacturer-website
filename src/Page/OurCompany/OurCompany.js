import React from 'react';

const OurCompany = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold uppercase text-center text-teal-400'>Our Company</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-8 mx-10'>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <img src={'https://i.ibb.co/qpcKV6X/hPower.webp'} alt="" />
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <img src={'https://i.ibb.co/Wc8nhqy/honda.jpg'} alt="" />
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <img src={'https://i.ibb.co/FYKRQSM/company2.jpg'} alt="" />
                </div>
            </div>
        </div>

        </div>
    );
};

export default OurCompany;