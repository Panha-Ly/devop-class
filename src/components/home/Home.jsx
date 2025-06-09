import "./home.css";
import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-6">Hello, Panha!</h1>
                <p className="lead">This is a simple react app that i have built for the DevOps final project.</p>
                <hr className="my-2" />
                <p>
                    The building and deployment process of this app has been automated using GitHub Actions. <br/>
                    Simply just push the code to GitHub, and it will be deployed to Render automatically. <br/>
                    Below are the tools and technologies used to create this app.
                </p>
            </div>
        </div>
    )
}

export default Home