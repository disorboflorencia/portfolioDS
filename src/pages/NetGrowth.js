import React, { Fragment } from 'react'
import Project from '../components/Project'


const NetGrowthApp = () => {
    return (
        <div className="articles net">
            <Project 
            date="Dec 2021"
            title="The NetGrowth App"
            intro={<Fragment>Cross Platform Solution , App & Responsive Website</Fragment>}
            description={<Fragment>
            <h3>The Product :</h3>
            <p>NetWorth is a non-profit organization focused on business learning inclusion. </p>
            <p>The organization wants to develop a tool that helps people learn about business related topics and peers network. 
            </p>
            <p>
            NetWorth’s primary target users include young adults who want to learn about business and entrepreneurship and seasoned founders who want to stay updated on the entrepreneurial ecosystem.  
            </p>
            <div className='gifContainer'>
                <img class="gifs" src="../proyects/networthgif1.gif" alt="mainideation"/>
                <img class="gifs" src="../proyects/networthgif2.gif" alt="mainideation"/>
            </div> 
            <h3>The problem : </h3>
            <p>
            21.5% of startups fail in the first year, 30% in the second year, 50% in the fifth year, and 70% in their 10th year, making it so that the failure rate of startups is around 90%. 
            </p>
            <p>
            The 5 main reasons startups fail are: Market Problems, Business Model Failure, Poor Management Team, Lack of founding and Product Problems.
            </p>
            <h3>The Goal :</h3>
            <p>
            Design an app that will provide inclusive education on the topic of business and entrepreneurship and centralize specific resources for people, while building a worthy network of peers and mentors. 
            </p>
            <h3>My Role :</h3>
            <p>
            UX designer leading the app and responsive website design from conception to delivery. 
            </p>

            <h3>
                Initial User Research :
            </h3>
            <p>I researched about financial literacy, entrepreneurship and the startup and business ecosystem to develop interview questions, which were then used to conduct user interviews. </p>
            <p>
                Most interview participants reported the need for a more equitable and flexible access to curated quality information.
            The feedback received through research made it very clear that users would enjoy having access to a friendly and customized platform to help guide them in their journey. 
            </p>
            <p>
            The feedback received through research made it very clear that users would enjoy having access to a friendly and customized platform to help guide them in their journey. 
            </p>

            <img class="projects" src="../proyects/NWideation.png" alt="mainideation"/>
            <h3>Ideation :</h3>
            <p>In this part of the design solution ideation, I quickly sketched different ideas for how to address gaps identified in the competitive audit. I focused on exploring a custom experience. </p>
            <img class="projects" src="../proyects/NWlofi.svg" alt="main" />
            <p>After ideating and drafting on paper wireframes, I developed the initial designs for the NetWorth app. These drafts focused on the user path of taking a note and saving it while taking the daily lessons.</p>
            <h3>User Testing :</h3>
            <p> Once I had all the Lo-Fidelity Wireframes, I created a Low-Fidelity prototype that connected the user flow of taking the daily lesson and saving a note without exiting the lesson. </p>
            <p>Then, I used this prototype to conduct a usability study</p>
            <p>These are the 4 main findings identified after analysing the results from the usability study : </p>
            <img class="projects" src="../proyects/NWins.png" alt="main" />
            <h3>Mockups :</h3>
            <p>Based on the insights from the usability studies, I applied design changes like creating a confirmation message when a note is correctly saved.</p>
            <p>Additional design changes included changing a hero image to a path indicator and detail on path completion progress.</p>
            <p>These are the resulting Mockups : </p>
            <img class="projects" src="../proyects/NWmocks.jpg" alt="main" />
            <h3>Responsive Design :</h3>
            <p>Following accessibility and responsiveness principles, I optimized the designs to fit specific user needs on different devices and screen sizes.</p>
            <img class="projects" src="../proyects/NWrespf.png" alt="main" />
            <h3>Takeaways :</h3>      
            <h4>Impact </h4>
            <p> Users shared that the app helped them access resources specific to they interests and a lot of valuable information. One quote from peer feedback was that “the NetWorth app makes learning about difficult topics easy and enjoyable”.</p>
            <h4>Learnings</h4>
            <p>Working on this project, I learned that being open and taking the time to understand specific user needs in different contexts is a great guide to create better solutions for each problem you may come across.</p>
            <h3> Next Steps :</h3>
            <img class="projects" src="../proyects/NWtake.png" alt="main" />
            <p><i>Thank you for your time !</i></p>


            </Fragment>}
            image={"../proyects/NWApp.png"}
            />
        </div>
    )
}

export default NetGrowthApp