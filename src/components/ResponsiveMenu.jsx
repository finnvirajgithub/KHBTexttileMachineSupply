import { AnimatePresence, motion } from 'motion/react'
import React from 'react'
import './NavbarStyles.css'
import { MenuItems } from './MenuItems'
import { Link } from "react-router-dom";

const ResponsiveMenu = ({open}) => {
  return (
    <AnimatePresence>
        {
            open && (
                <motion.div
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    exit={{ opacity:0 }}
                    className='absolute top-20 left-0 w-full h-screen z-20'
                >
                    <div className='mobileMenu text-xl font-semibold uppercase bg-fuchsia-900 text-white py-10 rounded-3xl md:hidden'>
                        <ul className='flex flex-col justify-center items-center gap-10'>
                            {MenuItems.map((item) => {
                                return <li key={item.id}>
                                    <Link to={item.url}>{item.title}</Link>
                                </li>
                            })}
                        </ul>
                    </div>
                </motion.div>
            )
        }
    </AnimatePresence>
   
  )
}

export default ResponsiveMenu
