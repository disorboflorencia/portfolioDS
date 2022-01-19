import React from 'react'
import { Link } from "react-router-dom"


const Card = (props) => {
    return (
        <div className="project">
            <Link to={props.page} >
                <div className="imageProject">
                    <img src={props.image} alt="imagen"/>
                    <span className="projectHover">
                            <div className="texto">
                                <h3>{props.title}</h3>
                                <p>{props.description}</p>
                                <h6>{props.date}</h6>
                                <h5>{props.category}</h5>
                            </div>
                    </span> 
                </div>
                
            </Link>
        </div>
    )
}

export default Card
