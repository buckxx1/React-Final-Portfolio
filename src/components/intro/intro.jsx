
import "./intro.scss";
import myphoto from "../../assets/nick-profile-image.jpg"



export default function Intro() {
    
    return (
        <div className="intro" id="id-intro">
            <div className="left">
                <div className="imgContainer">
                    <img src={myphoto} alt=""></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello I'm</h2>
                    <h1>Nick Hoban</h1>
                    <h3>Aspiring <span> Developer</span> </h3>
                </div>
                
            </div>
        </div>
    )
}