//import all components
import Topbar from "./components/topbar/topbar"
import Intro from "./components/intro/intro"
import Contact from "./components/contact/contact"
import Portfolio from "./components/portfolio/portolio"
import Works from "./components/works/works"
//this is the scss file for this app.jsx
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Contact/>
      </div>

    </div>
  );
}

export default App;
