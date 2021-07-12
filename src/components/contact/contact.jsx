import React from 'react'
import "./contact.scss"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'

import gmaillogo from '../../assets/gmail.png' 
import githublogo from "../../assets/GitHubs.png"
import instagramlogo from '../../assets/instagram.png'

export default function Contact() {
    return (
        <Navbar className="bottombar" bg="dark" variant="dark" >
            
            
            <Nav className="bottom">
                <Container id="contactinfo">
                    Contact Info
                </Container>
                <Container>
                    <img src={gmaillogo} alt="" height="50px"/>nickh1888@gmail.com
                </Container>
                <Container>
                    <img src={githublogo} alt="" width="50px"/>https://github.com/buckxx1
                </Container>
                <Container>
                    <img src={instagramlogo} alt="" width="50px"/>https://www.instagram.com/nickhoban188/?hl=en
                </Container>
                <Nav.Link ></Nav.Link>
                <Nav.Link ></Nav.Link>   
            </Nav>
            
        </Navbar>
        
    )
}