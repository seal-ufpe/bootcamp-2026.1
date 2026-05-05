import React, { useState, useEffect } from "react";

function ProfileCard(props) {
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}
    >
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
    </div>
  );
}

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{ marginTop: "12px" }}>
      <button onClick={() => setLikes(likes + 1)}>Curtir</button>
      <p>{likes} curtidas</p>
    </div>
  );
}

export default function LucasTorresPage() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    console.log("Página carregada!");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Atividade de Git e GitHub</h1>

      <ProfileCard
        name="Lucas Torres"
        bio="Estudante de engenharia da computação, interessado em desenvolvimento, redes e cibersegurança."
      />

      <LikeButton />

      <div style={{ marginTop: "16px" }}>
        <button onClick={() => setShowMessage(!showMessage)}>
          Mostrar mais
        </button>

        {showMessage && (
          <div style={{ marginTop: "12px" }}>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "10px 16px",
                backgroundColor: "#007bff",
                color: "#fff",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Ver currículo completo
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
