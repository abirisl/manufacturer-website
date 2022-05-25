import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-side" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-side" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-64 bg-zinc-300 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/review'>Add a Review</Link></li>
                    <li><Link to='/dashboard/manageorder'>Manage All Order</Link></li>
                    <li><Link to='/dashboard/addproduct'>Add A Products</Link></li>
                    <li><Link to='/dashboard/manageproduct'>Manage Products</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;