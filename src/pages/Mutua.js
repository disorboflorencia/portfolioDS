import { Fragment } from "react"
import Project from "../components/Project"

const Mutua = () => {
    return (
        <div className="articles">
            <Project
                title="Mutua App"
                intro="Mutua App is a very special project for me. I founded the Mutua App project in mid-2019 with the firm conviction of creating a safe and equitable solution for the transportation problems women across Ecuador face on a daily basis."
                image={"../blogImages/mutua.jpg"}
                description={<Fragment>
                    <p>Experiencing these difficulties myself while living in Ecuador, made me incapable of looking the other way, so I decided to take the leap and go after my vision, in which every woman has access to adequate local transportation services.</p>
                    <p>As founder of Mutua I was able to wear many hats and learn a lot of new things everyday. </p>
                    <p>To materialize my short term objectives, part of the big vision, I worked on each of the tasks needed, from management to buying office supplies and everything you can think of in between. </p>
                    <p></p>
                    <p></p>
                    
                </Fragment>}
            />
        </div>
    )
}

export default Mutua
