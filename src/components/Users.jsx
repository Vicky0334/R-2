import React from "react";
import { useNavigate } from "react-router-dom";
const Users = () => {
     const navigate =useNavigate();
        const submithandler=(e)=>{
            e.preventDefault();
         console.log("form submited")
            navigate("/");
            navigate(-1);
        }
        return (
       <div>
        <h1 className="text-2xl text-blue-300">Users</h1>
        <form onSubmit={submithandler} className="p-5">
            <input type="submit" value="submit" />
        </form>
       </div>
        );
};

export default Users;