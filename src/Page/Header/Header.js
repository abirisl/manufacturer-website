import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const logOut = () => {
        signOut(auth)
    }

    const navItems = <>
        <li><Link to='/Home'>HOME</Link></li>
        <li><Link to='/parts'>PARTS</Link></li>
        <li><Link to='/blogs'>BLOGS</Link></li>
        {
            user &&  <li><Link to='/dashboard'>DASHBOARD</Link></li>
        }
        <li>
            {
                user? <button className="btn btn-active btn-accent" onClick={logOut} >LOG OUT</button> : <Link to='/login'>SIGN IN</Link>
            }
        </li>
        {
            user && <li className='my-4 ml-12'>{user?.email.slice(0,10)}</li>
        }

    </>
    return (
        <div className="navbar bg-stone-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-secondary lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>

                <Link to='/' className="btn btn-ghost text-2xl uppercase">

                    <div className="w-14">
                        <img src="https://i.ibb.co/YZs7JCX/logo-4.png" alt='' />
                    </div>

                    <span className='text-pink-600'>Auto house</span></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
            <label tabIndex="1" for="dashboard-side" className="btn btn-secondary lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
            </div>
        </div>
    );
};

export default Header;