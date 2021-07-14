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
import codeBack from "../src/assets/code-background.png"

import { useState } from 'react'

 


function App() {

  const [portfolioState, setToggle] = useState(false);
  const [skillsState, setToggle2] = useState(false);


  return (
    <Router>
      <div className="app">
        <Navbar  className="navBar" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand>Nick Hoban</Navbar.Brand>
            
            <Nav className="mr-auto">
                <a href="#id-portfolio">
                  <button onClick={()=> setToggle(!portfolioState)} type="button">Portfolio</button>   
                </a>
                <a href="#id-works">          
                  <button onClick={()=> setToggle2(!skillsState)} type="button">Skills</button>
                </a>
                
            </Nav>
            
        </Navbar>
        
        <Container fluid>
          <Row>
            <Col>
              <div className="sections">
                <Intro/>
                { ( !portfolioState && !skillsState) && <img id="heroimg" src={codeBack}></img>}
                {portfolioState && <Portfolio/>}
                {skillsState && <Skills/>}
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
