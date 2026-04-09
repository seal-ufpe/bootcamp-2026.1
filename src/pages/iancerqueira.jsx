import { useState, useEffect } from "react";

const githubURL = "https://github.com/Ian-Cerqueira";
const mailMe = "mailto:idhac@cin.ufpe.br";
const pictureURL = "https://i.postimg.cc/Hxv5LG1L/Whats-App-Image-2026-04-09-at-11-46-25.jpg";
export default function SeuNomePage() {
  useEffect(() => {
    document.title = "Ian Cerqueira | Perfil SEAL"
  });
  
  return(
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div style={{ display: "flex", gap: "40px"}}>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "15px"}}>
            <div>
              <ProfilePicture pfpURL={pictureURL} />
            </div>
            <div style={{display: "flex", gap: "12px"}}>
              <RedirectionComponent url={githubURL} element={<SimpleButton caption={"GitHub"}/>} />
              <RedirectionComponent url={mailMe} element={<SimpleButton caption={"Envie um email"}/>} />
            </div>
          </div>
          <div>
            <ProfileInfo />
          </div>
        </div>
      </div>

      <div style={{marginTop: "-120px", width: "600px", maxWidth: "60vw"}}>
        <RandomFacts />
      </div>
    </div>
);
}

const RedirectionComponent = ({ url, element }) => {
  return (
    <a href={url}>{element}</a>
  )
}

const SimpleButton = ({ caption }) => {
  const [buttonStyle, setButtonStyle] = useState({
      backgroundColor: "rgb(2, 2, 68)",
      color: "#f0f0f0",
      borderRadius: "8px",
      border: "1px solid transparent",
      padding: "0.6em 1.2em",
      fontSize: "1em",
      fontWeight: 500,
      fontFamily: "inherit",
      cursor: "pointer",  
    }
  );

  const handleButtonHoveIn = () => {
    setButtonStyle(() => {
      return {
        ...buttonStyle,
        backgroundColor: "#f0f0f0",
        color: "rgb(2, 2, 68)",
        border: "1px solid rgb(2, 2, 68)",
        transition: "color 0.25s ease 0.1s"
      }
    })
  }

  const handleButtonHoveOut = () => {
    setButtonStyle(() => {
      return {
        ...buttonStyle,
        backgroundColor: "rgb(2, 2, 68)",
        color: "#f0f0f0",
        transition: "color 0.15s ease 0.1s"
      }
    })
  }

  return (
    <button onMouseEnter={handleButtonHoveIn} onMouseLeave={handleButtonHoveOut} style={buttonStyle}>{caption}</button>
  )
}

const ProfilePicture = ({ pfpURL }) => {  
  console.log("pfp", pfpURL);
  
  return (
    <div>
      <img src={pfpURL} width={150} height={200} style={{ border: "2px solid", borderColor: "rgb(2, 2, 68)" }}></img>
    </div>
  )
}

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <h1 style={{marginBottom: "0px"}}>Ian Cerqueira | Testes de software</h1>
        <p style={{marginTop: "3px"}}>Ciência da Computação - CIn/UFPE</p>
      </div>
      <div style={{ marginTop: "20px" }}>
        <table style={{ borderCollapse: "collapse", width: "100%", maxWidth: "700px" }} >
          <thead>
            <tr>
              <th style={{ border: "2px solid black", padding: "12px", textAlign: "left", color: "rgb(2, 2, 68)" }} >
                Interesses
              </th>
              <th style={{ border: "2px solid black", padding: "12px", textAlign: "left", color: "rgb(2, 2, 68)" }} >
                Projetos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "2px solid black", padding: "10px", verticalAlign: "top" }} >
                <ul style={{ margin: 0, paddingLeft: "20px", color: "rgb(2, 2, 68)" }}>
                  <li>Backend</li>
                  <li>Testes de software</li>
                  <li>Arquitetura de sistemas</li>
                </ul>
              </td>
              <td style={{ border: "2px solid black", padding: "10px 10px 5px 10px", verticalAlign: "top" }}>
                <p style={{ marginTop: 0, color: "rgb(2, 2, 68)" }}>Digitalização da clínica de Fonoaudiologia da UFPE</p>
                <p style={{color: "rgb(2, 2, 68)"}}>Nutre.AI</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const RandomFacts = () => {
  const [fact, setFact] = useState([]);

  useEffect(() => {
    const factFetch = () => { fetch("https://catfact.ninja/fact")
    .then(res => res.json())
    .then(data => {
      console.log(data.fact)
      if(data.fact.length <= 110) { setFact(data.fact) }
      else { factFetch() }
    }) }

    factFetch();
  }, []);

  return(
    <div style={{textAlign: "center"}}>
      <p style={{fontWeight: "bold"}}>Random fact about cats:</p>
      <p>{fact}</p>
    </div>
  )

}
