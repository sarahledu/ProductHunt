import React from 'react'
import logo from "./../assets/logo.png"
import profilePic from "./../assets/profile_pic.PNG"

import "../styles/Header.css"

export default function Header() {
    return (
        <div className="header-container">
            <img id="logo" src={logo} alt="logo"/>
            <img id="pp" src={profilePic} alt="PP"/>
        </div>
    )
}
