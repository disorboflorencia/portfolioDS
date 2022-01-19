import { Link } from "react-router-dom"
import EmailCopy from "./copymail"


const Nav = () => {
    return (
        <div className="navContainer">
            <Link to="/">
            <img src="../images/logoFlorenciaDiSorbo.svg" alt="logo" className="logo"></img>
            </Link>
            <ul className="nav">
                
                <li> 
                    <Link to="/who">WHO</Link> 
                </li>
                <li>
                    <Link to="/what">WHAT</Link>
                </li>
               {/* <li>
                    <Link to="/blog">BLOG</Link>
               </li>*/}
                <li>
                    <Link to="/else">ELSE</Link>
                </li>
            </ul>
            <ul className="contact">
                
                <li>
                    <a href="https://www.linkedin.com/in/florencia-di-sorbo-303625162" target="_blank" rel='noreferrer'>
                    <img src="../images/logos/61109.png" alt="logoLinkedIn" className="logosFoot"></img>
                    </a>
                </li>
                {/* <li>
                    
                    <button onClick={() => {navigator.clipboard.writeText("dis")}}>
                    <img src="../images/logos/60543.png" alt="logoLinkedIn" className="logosFoot"></img>
                    </button>
                </li> */}
                <li>
                <EmailCopy>

                </EmailCopy>
                </li>
               {/* <li>
                    <a href="https://twitter.com/Flordisorbo" target="_blank">
                    <img src="../images/logos/60580.png" alt="logoTwitter" className="logosFoot"></img>
                    </a>
               </li> */}
            </ul>
        </div>
    )
}

export default Nav
