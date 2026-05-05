import "../styles/Pedro.css"
import NavigationLinks from "../components/NavigationLinks";
import { useEffect, useState } from "react";

export default function PedroHenriquePage() {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => setBackToTop(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
      <main>
          <header>
              <h1>Pedro Henrique Machado</h1>
              <p>Information Systems Student</p>
          </header>
          <NavigationLinks />
          <footer>
              <h2>Contacts</h2>
              <section>
                  <p>Email: <a href="mailto:pedroh7.brito@gmail.com">pedroh7.brito@gmail.com</a></p>
                  <p>
                      Social: <a href="https://www.linkedin.com/in/pedro-henrique-8b0129305/">LinkedIn</a> | <a
                      href="https://github.com/Pedro-glitch-370">GitHub</a> | <a href="https://cin.ufpe.br/~phbm/">Site</a>
                  </p>
                  <p style={{fontSize: "small"}}>© 2026 Pedro Henrique Brito Machado</p>
              </section>
          </footer>
          
          {backToTop &&
              <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="back-to-top">
                  ↑ Top
              </button>}
      </main>
  )
}