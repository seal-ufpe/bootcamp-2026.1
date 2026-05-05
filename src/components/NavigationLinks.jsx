import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Experience from "./Experience";

export default function NavigationLinks() {
    return (
        <>
            <nav>
                <a href="#aboutme">About Me</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
            </nav>
            <section className="content-container">
                <article id="aboutme">
                    <AboutMe />
                </article>
                <article id="experience">
                    <Experience />
                </article>
                <article id="projects">
                    <Projects />
                </article>
            </section>
        </>
    )
}