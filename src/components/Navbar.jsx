import { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import './NavbarStyles.css'
import { CgProfile } from "react-icons/cg";
import { MdMenu } from "react-icons/md";
import logo from "../assets/logo 3.png"
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
    const [open, setOpen] = useState(false);

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
                                return <li key={item.id}>
                                    <Link to={item.url} className="inline-block py-1 px-3 hover:text-fuchsia-900 font-semibold">{item.title}</Link></li>;
                            })}
                        </ul>
                    </div>
                    {/* button section */}
                    <div className="flex align-middle gap-4">
                        <button className="text-2xl hover:text-fuchsia-900 rounded-full p-2 duration-200">
                            <CgProfile />
                        </button>
                        <button className="signup hover:bg-fuchsia-900 text-fuchsia-900 font-semibold hover:text-white rounded-md border-2 border-fuchsia-900 duration-200 hidden md:block">
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

        // <nav className="bg-white flex justify-between items-center px-10 shadow-md w-[calc(100%-2rem)] h-20 rounded-xl fixed top-5 left-1/2 -translate-x-1/2 z-50 ">
        //     <h1 className="pl-8">Logo</h1>
        //     <ul className="flex gap-20">
        //         {MenuItems.map((item ,index) => {
        //             return(
        //                 <li key={index}>
        //                     <Link to={item.url} className="nav-links no-underline text-gray-900 p-2 hover:bg-amber-600">{item.title}</Link>
        //                 </li>
        //             )
        //         })}
        //     </ul>
        //     <div className="flex gap-4">
        //         <div>
        //             <i class="fa fa-user" aria-hidden="true"></i>
        //         </div>
        //         <div>
        //             <button>signup</button>
        //         </div>
        //     </div>
            
        // </nav>
    )
} 

export default Navbar;