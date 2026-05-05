export default function ProjectCard({img, year, title, description, link, linkText}) {
    return (
        <article className="project-card">
            <img src={img} alt={title} />
            <section>
                <h3>{title} ({year})</h3>
                <p>{description}</p>
                <a href={link}>{linkText}</a>
            </section>
        </article>
    )
}