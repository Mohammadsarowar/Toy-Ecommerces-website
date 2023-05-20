import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
  const {user,logout} = useContext(AuthContext)
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/" >Home</Link></li>
        <li tabIndex={0}>
          <Link to='/allToys' className="justify-between">
           All Toys
          </Link>
        </li>
        <li><Link to="/addToy">Add A Toy</Link></li>
        <li><Link to="/myToys">My Toys</Link></li>
        <li><Link to="/blog">Blogs</Link></li>
      </ul>
    </div>
    <img className='w-12 ml-10 rounded-full' src='https://dynamic.brandcrowd.com/asset/logo/45717077-bb93-471b-aa19-e7764fea1dcf/logo-search-grid-1x?logoTemplateVersion=1&v=637673530829170000&text=toy+markerples'></img>
    <a className="btn btn-ghost normal-case text-xl">Slogan Here</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to="/" >Home</Link></li>
        <li tabIndex={0}>
          <Link to='/allToys' className="justify-between">
           All Toys
          </Link>
        </li>
        <li><Link to="/addToy">Add A Toy</Link></li>
        <li><Link to="/myToys">My Toys</Link></li>
        <li><Link to="/blog">Blogs</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
 {user?<div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div title={user?.displayName} className="w-10 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><button onClick={logout}>Logout</button></li>
      </ul>
    </div>:<Link to="/registrar">SingUp</Link>}
  </div>
</div>
    );
};

export default Navbar;