//import all components
import Topbar from "./components/topbar/topbar"
import Intro from "./components/intro/intro"
import Contact from "./components/contact/contact"
import Portfolio from "./components/portfolio/portolio"
import Works from "./components/works/works"
//this is the scss file for this app.jsx
import "./app.scss"
//import use state
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function App() {
  
  return (
    <div className="app">
      <Topbar />
      
      <Container fluid>
        <Row>
          <Col>
            <div className="sections">
              <Intro/>
              <Portfolio/>
              <Works/>
              <Contact/>
            </div>
          </Col>
        </Row>
      </Container>
      

    </div>
  );
}

export default App;
