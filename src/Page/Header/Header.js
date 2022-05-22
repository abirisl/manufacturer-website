import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../images/logo/logo (1).png'

const Header = () => {
    return (
        <div className="navbar bg-stone-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
               
                <Link to='/' className="btn btn-ghost text-2xl uppercase">
            
                    <div class="w-14">
                        <img src="https://i.ibb.co/YZs7JCX/logo-4.png" alt=''/>
                    </div>
               
                     <span className='text-pink-600'>Auto house</span></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;