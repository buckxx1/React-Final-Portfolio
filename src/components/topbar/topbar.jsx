import React from 'react'
import "./topbar.scss"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import SplitButton from 'react-bootstrap/SplitButton'
// import Dropdown from 'react-bootstrap/Dropdown'


export default function Topbar() {
    return (
        
        <Navbar  bg="dark" variant="dark" fixed="top">
            <Navbar.Brand>Nick Hoban</Navbar.Brand>
            
            <Nav className="mr-auto">
                <Nav.Link href="#Intro">Intro</Nav.Link>
                <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#Works">Works</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
            
        </Navbar>
    )
}
