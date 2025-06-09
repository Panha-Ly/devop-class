import "./about.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactLogo from "../../assets/react.svg"
import GitHubLogo from "../../assets/github-logo.png"
import DockerLogo from "../../assets/docker.png"
import RenderLogo from "../../assets/Render.jpg"


const cardDescriptions = [
    {
        title: "React",
        text: "The library for web and native user interfaces.",
        button: "React Docs",
        link: "https://react.dev/learn",
        image: ReactLogo
    },
    {
        title: "GitHub and GitHub Actions",
        text: "GitHub is a code hosting platform for version control and collaboration. GitHub Actions runs your workflows on GitHub.",
        button: "GitHub Docs",
        link: "https://docs.github.com/en",
        image: GitHubLogo
    },
    {
        title: "Docker and Docker Hub",
        text: "Docker is a set of tools that use OS-level virtualization to deliver software in packages called containers. Docker Hub is a public registry for Docker images.",
        button: "Docker Docs",
        link: "https://docs.docker.com/",
        image: DockerLogo
    },
    {
        title: "Render.com",
        text: "Render is a platform that makes it easy to deploy, manage, and scale web apps. It is a cloud platform for developers and teams to build and run modern web apps.",
        button: "Render Docs",
        link: "https://render.com/docs",
        image: RenderLogo
    }
]

const About = () => {
    const cards = cardDescriptions.map((card,index,array) => {
        return (
            <Card style={{width: '18rem'}} key={index}>
                <Card.Img variant="top" src={card.image} alt="" style={{height:"200px", objectFit:"contain"}} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>
                        {card.text}
                    </Card.Text>
                    <Button target="_blank" href={card.link} variant="outline-info">{card.button} </Button>
                </Card.Body>
            </Card>
        )
    })
    return (
        <div className="card_container">
            {cards}
        </div>
    )
}

export default About