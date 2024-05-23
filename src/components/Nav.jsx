import React from "react";
import {NavLink} from "react-router-dom";
const Nav = () => {
    return (
        <nav className="justify-center flex gap-x-10">
            <NavLink style={({ isActive }) => ({
        fontWeight: isActive ? 'bold' : '400' })}className={(e)=>(e.isActive?"text-red-500":"")} to="/">
                Home
            </NavLink>
            <NavLink
            style={({ isActive }) => ({fontWeight: isActive ? 'bold' : '400'
              })}
            className={(e)=>(e.isActive?"text-red-500":"")}to="/users">
                Users
            </NavLink>
         <NavLink style={({ isActive }) => ({fontWeight: isActive ? 'bold' : '400'})}
            className={(e)=>(e.isActive?"text-red-500":"")}to="/about">
                About
            </NavLink>
        </nav>
    );
};

export default Nav;