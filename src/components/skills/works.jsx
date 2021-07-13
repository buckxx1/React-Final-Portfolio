import React from 'react'
import "./works.scss"
import Contact from "../contact/contact"


export default function Skills() {
    return (
        <div className="works" >
            <div class="card w-75" id="id-works">
                <div class="card-body">
                    <h5 class="card-title">Full Stack Bootcamp</h5>
                    <p class="card-text">Attending the University of Toronto fullstack bootcamp we have learned a wide variety of skills including some of the most in demand skills for the industry. React, mysql, nodejs, mongoDb and a solid foundation in javascript</p>
                    
                </div>
            </div>
            <div class="card w-75" id="id-works2">
                <div class="card-body">
                    <h5 class="card-title">Working in Groups</h5>
                    <p class="card-text">A key focus of the bootcamp was working in group settings. before this course I had never coded with anyone and it was both illuminating and ocasioonally frustrating working with others. I found great benefit in seeing other coders workflow and getting the chance learn from others strengths. Most of all i found it incredibly good for my own learning proccess to help with group members lagging behind. Teaching someone else really is the ultimate way to make sure you have a solid understanding of the fundamentals </p>
                    
                </div>
            </div>
            
            <div className="contactbar">
            <Contact/>
            </div>    
        </div>
        
    )
}