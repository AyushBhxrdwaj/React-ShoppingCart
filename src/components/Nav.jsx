import React from 'react'
import { NavLink } from 'react-router'
const Nav = () => {
    return (
        <nav className='w-full bg-gray-800 h-20 text-2xl font-semibold p-5  flex items-center justify-between text-white '>
            <div className='flex gap-12 w-2/4 p-2'>
                <NavLink to={"/"}>
                    Home
                </NavLink>
                <NavLink>
                    About
                </NavLink>
                <NavLink>
                    Contact
                </NavLink>
            </div>
            <NavLink to={"cart"}>
                <i className="fa-solid fa-cart-shopping text-white text-3xl"></i>
            </NavLink>
        </nav>
    )
}

export default Nav