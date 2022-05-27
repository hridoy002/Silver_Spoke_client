import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content  flex flex-col ">
                {/* <!-- Page content here --> */}
                
                <Outlet />
                

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="">My Orders</Link></li>
                    <li><Link to="/dashboard/addReview">Add Review</Link></li>
                    <li><Link to="/dashboard/myprofile">My Profile</Link></li>
                    
                    <li><Link to="/dashboard/admin">Admin</Link></li>
                    
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;