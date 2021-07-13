//import all components

import Intro from "./components/intro/intro"

import { Navbar, Nav} from 'react-bootstrap';
import Portfolio from "./components/portfolio/portolio"
import Skills from "./components/skills/works"
//this is the scss file for this app.jsx
import "./app.scss"
//import use state
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BrowserRouter as Router, Link } from "react-router-dom";


import { useState } from 'react'

 


function App() {

  

  return (
    <Router>
      <div className="app">
        <Navbar  className="navBar" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand>Nick Hoban</Navbar.Brand>
            
            <Nav className="mr-auto">
                <Link to="./Portfolio">
                  <button type="button">Portfolio</button>   
                </Link>
                <Link to="./Skills">          
                  <button type="button">Skills</button>
                </Link>
                
            </Nav>
            
        </Navbar>
        
        <Container fluid>
          <Row>
            <Col>
              <div className="sections">
                <Intro/>
                <Portfolio/>
                <Skills/>
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
