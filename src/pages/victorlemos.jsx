import { useState, useEffect } from "react";

// 1. Componente de Credenciais

function ShowCredential(props) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <img
        src="https://github.com/victorlemosfr.png"
        alt="Sua Foto"
        style={{ width: "150px", borderRadius: "50%", marginBottom: "15px" }}
      />
      <div style={{ textAlign: "left" }}>
        <h1 style={{ margin: "0" }}> {props.name} </h1>
        <h2 style={{ margin: "0" }}> {props.major} </h2>
      </div>
    </div>
  );
}

// 2. Componente de Contador

function LikeCounter() {
  const [likes, setLikes] = useState(0);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        alignItems: "center",
      }}
    >
      <button
        onClick={() => setLikes(likes + 1)}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        style={{
          padding: "10px 20px",
          backgroundColor: isPressed ? "#555" : "#333",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transform: isPressed ? "scale(0.95)" : "scale(1)",
          transition: "all 0.1s ease",
        }}
      >
        {" "}
        Curtidas: {likes}{" "}
      </button>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <a
          href="https://github.com/victorlemosfr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub"
            style={{ width: "30px", marginLeft: "10px" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/victor-lemos-de-freitas-849666382"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            style={{ width: "30px", marginLeft: "10px" }}
          />
        </a>
        <a
          href="https://avatars.githubusercontent.com/u/229850707?v=4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avatars.githubusercontent.com/u/229850707?v=4"
            alt="Seal-UFPE Avatar"
            style={{ width: "30px", marginLeft: "10px", borderRadius: "15%" }}
          />
        </a>
      </div>
    </div>
  );
}

// 3. Componente Principal (Página)

export default function VictorLemosPage() {
  useEffect(() => {
    console.log("Página carregada");
  }, []);

  return (
    <div
      style={{
        display: "flex",
        border: "none",
        boxShadow: "0px 8px 15px rgba(0,0,0,0.5)",
        padding: "20px",
        maxWidth: "650px",
        textAlign: "center",
        margin: "50px auto",
        borderRadius: "10px",
        backgroundImage: "linear-gradient(135deg, white, lightgray)",
        color: "#333",
        fontFamily: "sans-serif",
      }}
    >
      <div>
        <ShowCredential
          name="Victor Lemos"
          major="Sistemas de Informação - UFPE"
        />

        <LikeCounter />
      </div>
    </div>
  );
}
