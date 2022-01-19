import "../Landing.css"
import { Link } from "react-router-dom"
import MyResume from "../Files/Di Sorbo Florencia-Resume2022.pdf"


const who = () => {
    return (
        <div>
            <div>
                
                <div className="title">   
                    <h2>
                    <span className="word"><i>Hi ! </i></span> 
                    I am 
                    <span className="word"> Flor ,</span>  
                    <br></br>
                     a self-taught  
                    <span className="word"> UX Designer & Developer , </span> with passion for 
                    <span className="word">  User Centered Creation & Technology with Purpose -.</span>
                    </h2>
                </div>
            </div>
            <div className="main">
              {/*  <img className="profileImg" src="../images/perfilflor.png" alt="imagen"></img> */}
                
                    <p className="mainText"> 🌎  I was born in La Plata, a small city near Buenos Aires, Argentina.</p>
                    <p className="mainText">🤓 I'm inherently curious and I've done lots of different things.*  </p>
                    <p className="mainText">🥰 I love to learn about any new subject that calls my attention as well as, to meet people, places and cultures.</p>
                    {/* <p className="mainText">🤲 I also believe this is one of the most enriching ways to spend our time and expand our minds and hearts.</p> */}
                    <p className="mainText">🧬 Full disclosure, I am left handed, so I know first <i>-hand- </i>what it feels to be born in a world designed for someone that is not you.</p>
                    <p className="mainText">💖 But, resilient by birth, eventually builds into a good thing.</p>
                    <p className="mainText"> <i>* so far, my path involves :</i> </p>
                    <a  className="btn" href={MyResume} target="_blank" > Download Résumé </a>
                    <div className="lista">
                        <ul> 
                            <li>UX Design</li> 
                            <li>Software Development</li>
                            <li>Business Founding</li>
                            <li>Sales</li>
                            <li>Art Restoration</li>   
                        </ul>
                        <ul> 
                            <li>Cultural Heritage Conservation</li>
                            <li>Photography</li>
                            <li>Woodwork / carving</li>
                            <li>Design</li>
                            <li>Writing</li>
                        </ul>
                        <ul>
                            <li>Drawing</li>
                            <li>Painting</li>
                            <li>Engraving</li>
                            <li>Sculpting</li>
                            <li>Pottery</li>
                        </ul>
                    </div>
                    <a  className="btnresp" href={MyResume} target="_blank" > Download Résumé </a>
                    <div >
                <h2 className="titles">What now ?</h2> 
                <p  className="mainText">🧐 All things Product and Systems Design marvel me, so I am diving in. </p>
                <p className="mainText">😍 I recently completed the UX Design Certificate Program by Google.</p>
                <p  className="mainText">🔧 I am also continously improving my coding skills on HTML / CSS / JavaScript / React JS.** </p>
                
               
            </div>
                
            </div>
            
            <div className="footer">
                <p className="gmailT">**I made this webApp with React JS.</p>
                
                {/* <p  className="gmailT"> <img src="../images/logos/60543.png" alt="logoGmail" className="gmail"></img>Let's talk ➔ <i> disorboflorenciaj@gmail.com</i> </p> */}
            </div>
        </div>
    )
}

export default who
