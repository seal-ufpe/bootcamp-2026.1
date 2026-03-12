import ExperienceCard from "./ExperienceCard"

export default function Experience() {
    const experiences = [
        {
            year: "2025",
            title: "Social Media Manager",
            description: "Freelance work as a Social Media and Digital Assistant for the Prático Estudos preparatory course.",
        },
        {
            year: "2025",
            title: "Programming Monitor",
            description: "Teaching assistant for the Introduction to Programming class in the first semester.",
        },
        {
            year: "2026",
            title: "Communications Assistant",
            description: "Member of the Communications Directory of the Software Engineering Academic League (SEAL).",
        }
    ]

    return (
        <section className="section-description">
            <h2>Experience</h2>
            {experiences.map((content, index) => (
                <ExperienceCard key={index} {...content} />
            ))}
        </section>
    )
}