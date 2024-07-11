import React from "react";
import {
  //   FaEnvelope,
  //   FaHome,

  FaUtensilSpoon,
} from "react-icons/fa";
// import { MdOutlineMenu } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  //   const [cart] = useCart();

  //   const [isAdmin] = useAdmin()
  return (
    <div className="flex flex-col pl-40 ">
      <div className="w-full  bg-green-500">
        <ul className="menu mt-20 flex flex-row items-center justify-center gap-16 ">
          
          
          <li className="">
            <NavLink to="/dashboard/addItems" className={`flex justify-center items-center gap-4 text-black  hover:text-blue-700 ${
            location.pathname === '/dashboard/addItems' ? ' font-bold' : ''
          }`} >
              
              
              Add Items
             
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/allProducts" className={`flex justify-center items-center gap-4 text-black hover:text-blue-700 ${
            location.pathname === '/dashboard/allProducts' ? ' font-bold' : ''
          }`} >
              
              
              All Products
             
            </NavLink>
          </li>
          
          
          
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
