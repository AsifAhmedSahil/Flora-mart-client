import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.jpeg";
import { navItems } from "@/constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "@/redux/features/cartSlice";


const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const dispatch = useDispatch()

  const {cart , totalQuantity} = useSelector((state)=> state.allCart)
  useEffect(() => {
    dispatch(getCartTotal())
  }, [cart]) 
  



  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div  className="flex justify-between items-center">
          <Link to={"/"}>
          <div className="flex items-center flex-shrink-0">
            <img className="h-12 w-12 mr-2 cursor-pointer" src={logo} alt="Logo" />
            <span  className="text-xl tracking-tight">FloraMart</span>
          </div>
          </Link>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-4  items-center">
            
          <Link
                to="/dashboard/allProducts"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-green-500 to-green-800 text-white"
              >
                DashBoard
              </Link>
              <Link
                to="/cart"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-green-500 to-green-800 text-white"
              >
                Cart ({totalQuantity})
              </Link>
          </div>
          {/* <div className="hidden lg:flex justify-center space-x-12 bgred5 items-center">
            
          <Link
                to="/cart"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-green-500 to-green-800 text-white"
              >
                Cart ({totalQuantity})
              </Link>
          </div> */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-4">
              
              <Link
                to="/dashboard/addItems"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-green-500 to-green-800 text-white"
              >
                DashBoard
              </Link>

              <Link
                to="/cart"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-green-500 to-green-800 text-white"
              >
                Cart ({totalQuantity})
              </Link>
              
            </div>
            
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;