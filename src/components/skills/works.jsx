import React from 'react'
import "./works.scss"
import Contact from "../contact/contact"


export default function Skills() {
    return (
        <div className="works" id="id-works">
            <div class="card w-75">
                <div class="card-body">
                    <h5 class="card-title">Full Stack Bootcamp</h5>
                    <p class="card-text">Attending the University of Toronto fullstack bootcamp we have learned a wide variety of skills including some of the most in demand skills for the industry. React, mysql, nodejs, mongoDb and a solid foundation in javascript</p>
                    
                </div>
            </div>
            <div className="contactbar">
            <Contact/>
            </div>    
        </div>
        
    )
}