import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  };

  const menuItems = <div className='text-lg font-semibold flex'>
    <li><Link to='/'>Home</Link></li>
    <li> <Link to='/blogs'>Blogs</Link></li>
 
    <li> <Link to='/portfolio'>My Portfolio</Link></li>
    {user ? <>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/">{user.displayName}</Link></li>
      <button onClick={logout} className="btn btn-ghost font-semibold text-lg">Log Out</button>
    </> : <>
      <li><Link className='font-semibold' to="/login">Login</Link></li>
      <li><Link to="/register">Sign Up</Link></li>
    </>

    }
  </div>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Silver Spoke</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <label for="my-drawer-2" tabindex="0" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </label>
        

      </div>
    </div>
  );
};

export default Header;