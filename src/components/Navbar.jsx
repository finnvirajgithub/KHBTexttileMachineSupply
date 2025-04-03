import { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link, useLocation } from "react-router-dom";
import './NavbarStyles.css'
import { CgProfile } from "react-icons/cg";
import { MdMenu } from "react-icons/md";
import logo from "../assets/logo 3.png"
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const location = useLocation();

    return(
        <>
            <nav className="bg-white flex justify-between items-center px-10 shadow-md w-[calc(100%-2rem)] h-20 rounded-xl fixed top-5 left-1/2 -translate-x-1/2 z-50">
                <div className="container flex justify-between items-center py-8">
                    {/* logo section */}
                    <div className="text-2xl">
                        <img src={logo} alt="" className="w-55"/>
                    </div>

                    {/* menu section */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-10 font-bold text-gray-600">
                            {MenuItems.map((item) => {
                                const isActive = location.pathname === item.url;
                                return <li key={item.id}>
                                    <Link to={item.url} className={`inline-block py-1 px-3 hover:text-[#9327C6] font-semibold ${
                                    isActive ? "border-b-2 border-[#9327C6] text-[#9327C6]" : ""
                                }`}>{item.title}</Link></li>;
                            })}
                        </ul>
                    </div>
                    {/* button section */}
                    <div className="flex align-middle gap-4">
                        <button className="text-2xl hover:text-[#9327C6] rounded-full p-2 duration-200">
                            <CgProfile />
                        </button>
                        <button className="signup hover:bg-[#9327C6] text-[#9327C6] font-semibold hover:text-white rounded-md border-2 border-[#9327C6] duration-200 hidden md:block">
                            Sign Up
                        </button>
                    </div>
                    {/* mobile hamberger section */}
                    <div className="md:hidden" onClick={() => setOpen(!open)}>
                        <MdMenu className="text-4xl"/>
                    </div>
                </div>
            </nav>
            <ResponsiveMenu open={open}/>
        </>
    )
} 

export default Navbar;