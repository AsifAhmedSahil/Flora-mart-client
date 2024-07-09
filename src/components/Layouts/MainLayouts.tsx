import Footer from "@/pages/Shared/Footer"
import Navbar from "@/pages/Shared/Navbar"
import { Outlet } from "react-router-dom"


const MainLayouts = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayouts