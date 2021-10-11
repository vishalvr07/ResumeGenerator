import React from 'react'
import {  useSelector } from 'react-redux';
import {  selectUser } from './userSlice';
import "./main.css"



function Header() {
    
    const user = useSelector(selectUser);
    return (
        <div className="header">

            <span> <h1> {user.name}</h1>  </span>
            {user.des} <br />
            {user.loc}&nbsp; (IN)
        </div>




    )
}

export default Header;