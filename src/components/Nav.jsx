import React from "react";
import {NavLink} from "react-router-dom";
const Nav = () => {
    return (
        <nav className="justify-center flex gap-x-10">
            <NavLink
            style={(e)=>{fontWeight:e.isActive ? '900' : '400'}}
            className={(e)=>(e.isActive?"text-red-500":"")}href="/">
                Home
            </NavLink>
            <NavLink
            Style={(e)=>{fontWeight:e.isActive ? '900' : '400'}}
            className={(e)=>(e.isActive?"text-red-500":"")}href="/users">
                Users
            </NavLink>
            <NavLink
            Style={(e)=>{fontWeight:e.isActive ? '900' : '400'}}
            className={(e)=>(e.isActive?"text-red-500":"")}href="/about">
                About
            </NavLink>
        </nav>
    );
};

export default Nav;