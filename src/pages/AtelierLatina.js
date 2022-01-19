import React, { Fragment } from 'react'
import Project from '../components/Project'

const AtelierLatina = () => {
    return (
        <div className="articles">
            <Project 
            title="Atelier Latina"
            intro={<Fragment>Atelier Latina is a personal project that started towards the end of 2020. <br></br> 
            Atelier Latina is also the cornerstone of my novel interest in the world of software development and digital creation.</Fragment>}
            image={"../blogImages/atelierLatinaW.png"}
            description={<Fragment><p>This project originated as a collaboration between Di Sorbo Clara (my amazing sister) and myself, with the intention of creating a digital space where we could create artistic and journalistic content to discuss the Art Conservation and Restoration scene in Argentina and Latinomérica. 
            </p>
            <p>Under this premise I decided to teach myself the skills and tools required, to be able to develop the solution we needed. </p> 
            <p>Therefore I initiated this path that, in the wink of an eye, took me deeper and deeper into the Web Design > Software Development > UX Design > all things tech rabbit hole of knowledge I’ve been diving in ever since.</p>
            <img class="blog2" src="../blogImages/WebDesign.gif" alt="secondary"></img>
            <p>Even though I don't have much time to dedicate to this project nowadays I will be forever thankful to Atelier Latina for helping me wake up my inherently curious self that had been hibernating since the Covid Pandemic burst in early 2020.</p>
            <p>On a more technical matter, for the Atelier Latina project we made it all, from the ideation of the concept, creation of all branding design and development of the website (on HTML and CSS, with desktop and mobile devices optimization) to the creation of all written content (investigation, interviews, opinion polls, redaction of articles) as well as the visual (photography and video) content. </p>
            <p>See the page 👉 <a href="https://atelierlatina-1a817.web.app/" target="_blank">atelierlatina.web.app</a></p></Fragment>}
            />
        </div>
    )
}

export default AtelierLatina
