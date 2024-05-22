import React from "react";
import { useNavigate } from "react-router-dom";
const Users = () => {
    
        const navigate =useNavigate();
        const submithandler=(e)=>{
            e.preventDefult();
            console.log(e.message);
        }
        return (
       <h1>users</h1>
        );
};

export default Users;