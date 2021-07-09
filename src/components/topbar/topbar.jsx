import React from 'react'
import "./topbar.scss"
import {Portrait, Mail} from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbar active">
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
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
            
                
        </div>
    )
}