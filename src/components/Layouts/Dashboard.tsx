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
    <div className="flex pl-40 ">
      <div className="w-64 min-h-screen bg-orange-500">
        <ul className="menu mt-20 bg-green-500 ">
          
          <li>
            <NavLink to="/dashboard/addItems">
              
              <FaUtensilSpoon></FaUtensilSpoon>
              Add Items
             
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/allProducts">
              
              <FaUtensilSpoon></FaUtensilSpoon>
              Add Items
              
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
