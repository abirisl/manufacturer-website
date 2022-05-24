import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-side" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-side" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-zinc-300 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My orders</Link></li>
                    <li><Link to='/dashboard/review'>Add a review</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;