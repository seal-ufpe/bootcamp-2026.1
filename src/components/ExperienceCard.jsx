export default function ExperienceCard({year, title, description}) {
    return (
        <article className="experience-card">
            <section className="year-circle">{year}</section>
            <section>
                <h4>{title}</h4>
                <p>{description}</p>
            </section>
        </article>
    )
}