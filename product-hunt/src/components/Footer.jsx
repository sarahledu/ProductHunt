import React from 'react'
import logo from "./../assets/logo.png"
import profilePic from "./../assets/profile_pic.PNG"

import "../styles/footer.css"

export default function Footer() {
    return (
        <div className="footer-container">
            <img id="logo" src={logo} alt="logo"/>
            <img id="pp" src={profilePic} alt="PP"/>
        </div>
    )
}
