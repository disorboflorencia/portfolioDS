import React, { Fragment } from 'react'
import Project from '../components/Project'


const ArtGalleryApp = () => {
    return (
        <div className="articles">
            <Project 
            date="July 2021"
            title="The Art Gallery App"
            intro={<Fragment>The Art Gallery App is a UX Design and Research case study I performed on the thesis of the creation of an App, focused on selling digital art to collectors.</Fragment>}
            description={<Fragment>
            <p>This mock-up project was the perfect excuse for getting to explore in depth and analyze the digital art market and the different marketplace platforms that are growing in the sector. I deeply enjoyed this process since it is one of my biggest intrerests right now, the space where Art and Technology merge together thanks to blockchain software.   
            </p>
            <h3>The product : </h3>
            <p>The Art Gallery App is a digital gallery that presents all sorts of art pieces for sale or auction.</p>
            <p>It is also the go-to place for everyone interested in the art world and the art market, filled with relevant information and community experience.</p>
            <h3>My role : </h3>
            <p>UX Designer designing the Art Gallery App from ideation and conceptualization to delivery.</p>
            <h3>Understanding the user , User Research :</h3>
            <p>I conducted interviews and created empathy maps to understand the users I’m designing for and their needs. </p>
            <p>A primary user group identified through research was new generations of art collectors.</p>
            <p>This user group confirmed initial assumptions about the digital art market, but research also revealed that intrincated online purchasing was not the only factor limiting users from joining the digital collection creation. </p>
            <p>Other user problems included mobile access, lack of information, or elitist tone that make it difficult to initiate the digital collector’s journey. </p>
            <h3>User research , pain points :</h3>
            <img class="projects" src="../proyects/AGA/AGAPainPoints.png" alt="mainideation"/>
            <p>I really enjoyed the process of analyzing user cases and stories. Here are some of the drafts product of this process.</p>
            <img class="projects" src="../proyects/AGA/AGApaper.png" alt="mainideation"/>
            <p>Taking the time to draft iterations of each screen of the app on paper ensured that the elements that made it to digital wireframes would be well-suited to address user pain points. </p>
            <p>For the home screen, I prioritized a display of the main app features to help users explore them easily. </p>
            <h3>Digital wireframes :</h3>
            <img class="projects" src="../proyects/AGA/AGAlofi.png" alt="mainideation"/>
            <p>As the initial design phase continued, I made sure to base screen designs on feedback and findings from  the user research.</p> 
            <p>Easy navigation was a key user need to address in the designs. </p>
            <h3>Usability study : </h3>
            <img class="projects" src="../proyects/AGA/AGAusabilityFindings.png" alt="mainideation"/>
            <p>I conducted two rounds of usability studies. </p>
            <p>Findings from the first study helped guide the designs from wireframes to mockups. </p>
            <p>The second study used a high-fidelity prototype and revealed what aspects of the mockups needed refining. </p>
            <h3>Key Mockups :</h3>
            <img class="projects" src="../proyects/AGA/AGAmockups.png" alt="mainideation"/>
            <p>Early designs focused on displaying a lot of information, but after the usability studies, I added a more direct access for the main features of the app.</p>
            <p>Usability studies also revealed frustration with the purchase flow, so I added the different payment methods to this screen. </p>
            <h3>Accessibility considerations :</h3>
            <img class="projects" src="../proyects/AGA/AGAaccess.png" alt="mainideation"/>
            <h3>Takeaways :</h3>
            <h4>Impact</h4>
            <p>The app makes users feel like a different experience in creating their art collections is possible.    </p>
            <p>This much needed contemporary approach is based on community, openness and an enjoyable learning experience.</p>
            <h4>Learnings</h4>
            <p>While designing the Art Gallery app, I learned that every step of the process is equally important and influential in the final result. </p>
            <p>From the first ideas, to usability studies and receiving peer feedback, I could see the enrichment on each iteration of the app’s designs.</p>
            <h3>Next steps :</h3>
            <img class="projects" src="../proyects/AGA/AGAnextst.svg" alt="mainideation"/>
            <p><i>Thank you for your time !</i></p>
            
            </Fragment>}
            image={"../proyects/AGA/AGAhero.png"}
            />
        </div>
    )
}

export default ArtGalleryApp
