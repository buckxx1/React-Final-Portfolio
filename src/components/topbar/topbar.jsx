import React from 'react'
import "./topbar.scss"
import {Portrait, Mail} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#id-intro" classname="logo"> Nick Hoban</a>
                    <div className="itemContainer">
                        <Portrait className="icon" />
                        <span>416-833-4751</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>nickh1888@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
            
                
        </div>
    )
}