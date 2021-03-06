import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {AiTwotonePhone} from 'react-icons/ai';
import {AiFillHome} from 'react-icons/ai';
import {SiGmail} from 'react-icons/si';

const ContactUs = () => {
    return (
        <div className='lg:mx-28 my-24'>
            <div style={{background: '#5F9EA0'}} className="card lg:mx-40 bg-base-800 shadow-xl">
                <div className="card-body">
                    <div className='mt-3 text-center'>
                        <h1 className='text-uppercase text-4xl font-bold'>Contact us</h1>
                        <hr className='w-50 mt-5' />
                    </div>
                    <form className='text-center p-10'>
                    <input type="text" placeholder="name" className="input input-bordered w-full max-w-xs" />
                    <br />
                    <input type="text" placeholder="Information" className="input input-bordered w-full max-w-xs mt-5" />
                    <br />
                    <textarea className="textarea textarea-bordered mt-5" placeholder="your message"></textarea>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary mt-3 w-80">Send</button>
                    </div>
                    </form>
                    
                    <div className='mt-5 font-bold'>
                            <div className='flex'>
                                <div className='mt-2'> <AiFillHome/></div>
                               <div>South Middle Halishar,Bandar,Chottagram</div>
                            </div>
                            <div className='flex mt-2'>
                                <div className='mt-2'> <AiTwotonePhone/></div>
                               <div> 01872900536</div>
                            </div>
                            <div className='flex mt-2'>
                                <div className='mt-2'> <SiGmail/></div>
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