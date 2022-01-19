const Project = (props) => {
    return (
        <div className="top texts">
            <img class="projects" src={props.image} alt="main"></img>
            <h5>{props.date}</h5>
            <h1>{props.title}</h1>
            <h3>{props.intro}</h3>
            
            <p>{props.description}</p>
        </div>
    )
}

export default Project
