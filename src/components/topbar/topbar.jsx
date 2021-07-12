import React from 'react'
import "./topbar.scss"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useState } from 'react'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import SplitButton from 'react-bootstrap/SplitButton'
// import Dropdown from 'react-bootstrap/Dropdown'


export default function Topbar() {

    const [isToggled, setIsToggled] = useState(false);
    return (
        
        <Navbar  className="navBar" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand>Nick Hoban</Navbar.Brand>
            
            <Nav className="mr-auto">
                {/* <button onClick={() => setIsToggled(!isToggled)}>Intro</button>{isToggled &&   } */}
                <button>Portfolio</button>
                <button>Skills</button>
                <button>Contact</button>
            </Nav>
            
        </Navbar>
    )
}
