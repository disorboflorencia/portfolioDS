import { Fragment } from "react"
import Card from "../components/Card"
import "../Landing.css"


const What = () => {


    return (
        <div className="whatContainer fade-in">
            <h2 className="h2B">Recent UX Design projects:  </h2>
            <div className="cardsContainer">
               {/* <Card
                    page= "/what/Mutua"
                    image={"../proyects/mutuaProjectCover.png"}
                    title="MUTUA APP"
                    description={<Fragment>Mobile platform with social impact background</Fragment>}
                    date= "Jul 2019"
                    category="Project Founder "
                />
                <Card
                    page= "/what/AtelierLatina"
                    image={"../blogImages/atelierLatina.png"}
                    title="Atelier Latina"
                    description={<Fragment>Digital space about Art and <br></br>Cultural Heritage Conservation and Restoration</Fragment>}
                    date= "Aug 2020"
                    category="Project Ideation + Content Creation + Web Design + HTML/CSS"
               /> */}
                <Card
                    page= "/what/ArtGalleryApp"
                    image={"../proyects/AGA/AGAthumb.png"}
                    title="Art Gallery App"
                    description="Mobile App Solution"
                    date= "Jul 2021"
                    category=" UX Design + UX Research + Case Study"
                />
                <Card
                    page= "/what/NetGrowthApp"
                    image={"../proyects/NWthumb.png"}
                    title="The NetGrowth App"
                    description=" Cross Platform Solution , Mobile App & Responsive Website"
                    date= "Dec 2021"
                    category="UX Design + UX Research + Case Study"
                />
                <Card
                    page= "/what/FreeStyleStore"
                    image={"../proyects/Rapmerchsite/Rthumb.svg"}
                    title="The FreeStyle Store"
                    description="Responsive Website Marketplace"
                    date= "Oct 2021"
                    category="Web Design + UX Design + UX Research + Case Study"
                />
            </div>
        </div>


        
    )
}

export default What
