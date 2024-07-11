


import Navbar from "@/pages/Shared/Navbar";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  //   const [cart] = useCart();

  //   const [isAdmin] = useAdmin()
  return (
    <div className="flex flex-col container mx-auto ">
      <Navbar/>
      <div className="w-full  bg-green-500">
        <h1 className="text-center text-xl lg:text-3xl md:text-2xl font-bold  pt-10">Welcome To FloraMart Dashboard </h1>
        <ul className="menu mt-10 flex flex-row items-center justify-center gap-16 ">
          
          
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
      <div className="flex-1 p-8 mb-16">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
