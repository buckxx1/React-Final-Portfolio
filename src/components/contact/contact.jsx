import React from 'react'
import "./contact.scss"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'

export default function Contact() {
    return (
        <Navbar  bg="dark" variant="dark" >
            <Navbar.Brand>Contact Information</Navbar.Brand>
            
            <Nav className="mr-auto">
                <Container>
                    <img src="../../src/assets/logo-gmail-9951.png" alt=""/>
                </Container>
                <Nav.Link >nickh1888@gmail.com</Nav.Link>
                <Nav.Link >https://github.com/buckxx1</Nav.Link>
                
            </Nav>
            
        </Navbar>
    )
}