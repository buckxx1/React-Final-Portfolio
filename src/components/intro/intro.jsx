
import "./intro.scss";


export default function Intro() {
    
    return (
        <div className="intro" id="id-intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="../src/assets/nick-profile-image.jpg" alt="me"></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello I'm</h2>
                    <h1>Nick Hoban</h1>
                    <h3>Aspiring <span> Developer</span> </h3>
                </div>
                <a href="#portfolio">
                    <img  src="assets/down.png" alt="down" width="70px"/>
                </a>

            </div>
        </div>
    )
}