import { useState } from "react"
import ProjectCard from "./ProjectCard"

export default function Projects() {
    const projects = [
        {
            img: "src/assets/assets-pedro/ZePythomba.png",
            year: "2025",
            title: "Zé Pythomba Adventures",
            description: "Game created as a team project for the Introduction to Programming class. Entirely developed in Python language, as well with the Pygame library.",
            link: "https://github.com/Pedro-glitch-370/Projeto_IP_Time3",
            linkText: "Link para Repositório"
        },
        {
            img: "src/assets/assets-pedro/AlvoFormado.png",
            year: "2025",
            title: "Alvo Formado",
            description: "Case study for a digital platform focused on social well-being. It's a guidance service for recent graduates who are unsure about what to do with their careers.",
            link: "https://docs.google.com/presentation/d/130xYrjj394FGLjnrfaEfe5PnzbRQLk-tehmnbqI4E7E/edit?usp=sharing",
            linkText: "Link para Estudo de Caso"            
        },
        {
            img: "src/assets/assets-pedro/RecifePointGame.png",
            year: "2025",
            title: "Recife Point Game",
            description: "Software created as a team project for the Software Development class. Developed in React (Javascript, HTML, and CSS) with Express/Node.",
            link: "https://github.com/Pedro-glitch-370/Projeto-DS-Time8/tree/main",
            linkText: "Link para Repositório"
        }
    ]

    const [index, setIndex] = useState(0);
    const next = () => setIndex((index) => (index + 1) % projects.length);
    const prev = () => setIndex((index) => (index - 1 + projects.length) % projects.length)

    return (
        <section className="section-description">
            <h2>Projects</h2>
            <ProjectCard {...projects[index]} />
            <section className="buttons-row">
                <button onClick={prev}>←</button>
                <button onClick={next}>→</button>
            </section>
        </section>
    )
}