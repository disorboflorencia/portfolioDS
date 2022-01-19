import React from 'react'
import { Fragment } from 'react'
import Card from '../components/Card'
import "../Landing.css"



const Blog = () => {
    return (
        <div>
            <div className="top">
                <h2 >Blog posts</h2>
            </div>
            <div className="cardsContainer">
                <Card
                    page= "/blog/MutuaAppJustTheBeggining"
                    image={"../blogImages/mock-up reference Mutua.jpg"}
                    title="Mutua App, Just The Beggining..."
                    date="JULY 2021"
                    description={<Fragment>My first attempt to put into words the amazing<br></br> adventure that resulted from choosing to be brave<br></br> and dream huge.</Fragment>}/> 
            </div>
        </div>
    )
}

export default Blog
