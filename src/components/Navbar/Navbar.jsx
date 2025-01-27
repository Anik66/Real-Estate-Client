import { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";


const Navbar = () => {
  const {logout,user} =useContext(AuthContext)
  const navlinks = <>
  <div className="flex gap-2 text-2xl  lg:text-white text-black ">
  <li><NavLink to="/">Home</NavLink></li>
   <li><NavLink to="about">About</NavLink></li>
   <li><NavLink to="blog">Blog</NavLink></li>
  
   
   <li>{
    user && <NavLink to="update">Update Profile</NavLink>
   }</li>
   <li> {
    user &&<NavLink to="profile">Profile</NavLink>
   }</li>
   
  </div>
   </>
  const navlink2 = <>
  <div className="flex gap-2 text-2xl text-white">
  
   
  
   <li><NavLink to="login">Login</NavLink></li>
   <li><NavLink to="register">Register</NavLink></li>
   
  </div>
   </>


  return (
    <div className=" mx-auto navbar animate__animated animate__bounce bg-[#217b7e]">
    <div className=" ml-3 navbar-start animate__animated animate__bounce">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {navlinks}
         
        </ul>
      </div>
      <a className=" text-2xl font-bold text-white">Real-Estate-Manaia</a>
    </div>
    <div className="navbar-center hidden animate__animated animate__bounce lg:flex">
      <ul className="menu menu-horizontal px-1">
       
         {navlinks}
      </ul>
    </div>
    <div className="navbar-end">
     {
        user? <div className="dropdown dropdown-end">
         <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
           <div className="w-10 rounded-full">
             <img alt="Tailwind CSS Navbar component" src={user?.photoURL || "https://avatars.githubusercontent.com/u/110911348?v=4}"} />
           </div>
         </div>
         <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
           
           <li>
            <button  className="btn btn-sm btn-ghost"> {user?.displayName || 'user name not found'}</button>
           </li>
           <li>
            <button onClick={logout} className="btn btn-sm btn-ghost "> logout</button>
           </li>
         </ul>
       </div>

      : <div className="menu menu-horizontal px-1 animate__animated animate__bounce">
       
       {navlink2}
    </div>
     }
    </div>
  </div>
  );
};

export default Navbar;
