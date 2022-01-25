import React, { Fragment } from 'react'
import Project from '../components/Project'


const FreeStyleStore = () => {
    return (
        <div className="articles free">
            <Project 
            title="The FreeStyle Store"
            intro={<Fragment>
                This UX Design project allowed me to explore the marketplace's niche and the creation process from a specific user focus. <br></br>The FreeStyle Store is a merchandise marketplace where freestyle fans can feel at home. 
            </Fragment>}
            description={<Fragment>
            <h3>The product : </h3>
            <p>The FreeStyle Store is a digital marketplace that offers exclusive merchandise and Special Collections co-created with the biggest stars of the freestyle contemporary scene.   </p>
            <div className='gifContainer'>
                <img className="gifsBig" src="../proyects/Rapmerchsite/freegif4.gif" alt="mainideation"/>
            </div> 
            <h3>My role : </h3>
            <p>UX Designer designing the FreeStyle Store website from ideation and conceptualization to delivery.</p>
            <h3>User Research :</h3>
            <h4>Understanding the user</h4>
            <p>I conducted interviews and created empathy maps, user journeys and personas to understand the users I’m designing for and their needs. </p>
            <p>The primary user group identified through research was the exponentially growing freestyle competition fanbase.</p>
            <p>This user group is largely represented by young people, all of them admirors of the freestyle artform and professional discipline. </p>
            <h4>Pain Points </h4>
            <p>During the Competitive Audit I conducted, one of the main pain points indentified was the lack of product offer.</p>
            <p>From the few marketplaces that target this user base, user centered optimization was only present in a minority.</p>
            <p>One of the biggest improvement opportunities was to create a sense of community. </p>
            <h3>Sitemap :</h3>
            <p>After the reseach phase I started to sketch sitemap options.</p>
            <p>This is the one I used for the design process.</p>
            <img class="projects" src="../proyects/Rapmerchsite/Rsitemap.png" alt="mainideation"/>
            <h3>Paper wireframes :</h3>
            <p>As part of the initial design conceptualization I created different versions of paper wireframes.</p>
            <img class="projects" src="../proyects/Rapmerchsite/Rpaper.svg" alt="mainideation"/>
            <h3>Digital wireframes :</h3>
            <p>The most interesting ideas from paper sketches were turned into digital wireframes.</p>
            <p>The main focus is on the display of the merchandise and the Community building features. </p>
            <img class="projects" src="../proyects/Rapmerchsite/Rlofi.png" alt="mainideation"/>
            <h3>Digital wireframes for screen size variations : </h3>
            <p>Taking a graceful degradation approach, I continued by developing the responsive designs for mobile phone and tablet screens.</p>
            <img class="projects" src="../proyects/Rapmerchsite/RlofiMobile.png" alt="mainideation"/>
            <h3>Usability study : </h3>
            <h4>Parameters</h4>
            <p>The usability study focused on testing conceptualization of the Community building approach and the completion of a purchase for one item. </p>
            <p>The study observed the interactions of 5 participants in an unmoderated environment. The study had an estimated duration of 15 to 20 minutes per session.</p>
            <h4>Findings</h4>
            <img class="projects" src="../proyects/Rapmerchsite/Rstudyi.svg" alt="mainideation"/>
            <h3>Key Mockups :</h3>
            <p>Following the usability study, and taking into account the two Priority 0 (P0) insights, I designed the mockups for the main user flow.</p>
            <img class="projects" src="../proyects/Rapmerchsite/Rkeymockups.png" alt="mainideation"/> 
            <img class="projects" src="../proyects/Rapmerchsite/Rkeymockups2.png" alt="mainideation"/> 
            <div className='gifContainer'>
                <img class="gifsBig" src="../proyects/Rapmerchsite/freegif3.gif" alt="mainideation"/>
            </div> 
            <h3>Key Mockups - Screen Size Variations :</h3>
            <img class="projects" src="../proyects/Rapmerchsite/Rkwymockupsres.png" alt="mainideation"/>
            <h3>Takeaways :</h3>
            <p>From the first ideas, to usability studies and receiving peer feedback, I could see the enrichment on each iteration of the website designs.</p>
            <p>Even though there is a conceptual framework that supports the whole process of digital products creation, and this framework presents clear and useful phases, I stay in awe of how different each project is, and the amount of things I get to learn from each experience. </p>
            <p>There is a lot of work yet to be done for this particular product. </p>
            <h3>Next steps :</h3>
            <img class="projects" src="../proyects/Rapmerchsite/Rnextsteps.svg" alt="mainideation"/>
            <p><i>Thank you for your time !</i></p>
            </Fragment>}
            image={"../proyects/Rapmerchsite/Rhero.png"}
            />
        </div>
    )
}

export default FreeStyleStore