import React from 'react';
import { AiTwotonePhone } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
import contact from '../../images/banner/contact.png';

const ContactUs = () => {
    return (
        <div style={{ background: '#E3FFD8' }} className='p-5 mb-10'>
            <h1 className='text-uppercase text-4xl font-bold text-center'>Have Some Questions ?</h1>

            <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center'>
                <div className='m-10'>
                    <img src={contact} alt='' />
                </div>
                <div className='w-96 mt-16'>
                    <form>
                        <input type="text" placeholder="name" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        <br />
                        <input type="text" placeholder="your email" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        <br />
                        <textarea className="textarea w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" placeholder="your message"></textarea>
                        <div>
                            <button className="btn border-none bg-gradient-to-r from-blue-500 via-text-cyan-300 to-green-300 mt-3 w-full">Send</button>
                        </div>
                    </form>

                    <div className='mt-5 font-bold'>
                        <div className='flex gap-2'>
                            <div className='mt-1'> <AiFillHome /></div>
                            <div>South Middle Halishar,Bandar,Chottagram</div>
                        </div>
                        <div className='flex mt-2 gap-2'>
                            <div className='mt-1'> <AiTwotonePhone /></div>
                            <div> 01872900536</div>
                        </div>
                        <div className='flex mt-2 gap-2'>
                            <div className='mt-1'> <SiGmail /></div>
                            <div>mohammadmehedihasan84@gmail.com</div>
                        </div>
                        <p>

                        </p>
                        <p>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;