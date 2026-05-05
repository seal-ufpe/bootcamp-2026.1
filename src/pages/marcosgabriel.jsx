import React, { useEffect, useState } from "react";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  padding: 24,
};

const cardStyle = {
  width: 740,
  display: "flex",
  gap: 24,
  padding: 24,
  borderRadius: 14,
  boxShadow: "0 8px 30px rgba(2,6,23,0.12)",
  background: "linear-gradient(135deg,#ffffff 0%, #f7fbff 100%)",
  alignItems: "center",
};

const avatarStyle = {
  width: 160,
  height: 160,
  borderRadius: "50%",
  objectFit: "cover",
  border: "4px solid rgba(0,0,0,0.06)",
  boxShadow: "0 6px 18px rgba(13,30,64,0.12)",
};

function ProfileCard({ name, bio, showMore, links }) {
  const { linkedin, instagram, github } = links || {};

  return (
    <section style={cardStyle} aria-label="profile-card">
      <div style={{ flex: "0 0 auto", textAlign: "center" }}>
        <img
          src="/src/assets/marcos.jpg"
          alt={`${name} avatar`}
          style={avatarStyle}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://via.placeholder.com/160?text=Marcos";
          }}
        />
      </div>

      <div style={{ flex: 1 }}>
        <h1 style={{ margin: 0, fontSize: 28 }}>{name}</h1>
        <p style={{ color: "#334155", lineHeight: 1.5 }}>
          {showMore ? bio : bio.slice(0, 160) + (bio.length > 160 ? "..." : "")}
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 12, alignItems: "center" }}>
          {linkedin ? (
            <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              🔗 LinkedIn
            </a>
          ) : (
            <span style={{ color: "#94a3b8" }}>LinkedIn</span>
          )}

          {instagram ? (
            <a href={instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              📸 Instagram
            </a>
          ) : (
            <span style={{ color: "#94a3b8" }}>Instagram</span>
          )}

          {github ? (
            <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
              🧑‍💻 GitHub
            </a>
          ) : (
            <span style={{ color: "#94a3b8" }}>GitHub</span>
          )}
        </div>
      </div>
    </section>
  );
}

function InteractionButtons({ likes, onLike, onToggle }) {
  return (
    <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
      <button
        onClick={onLike}
        style={{
          background: "#0ea5e9",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        ❤️ Curtir ({likes})
      </button>

      <button
        onClick={onToggle}
        style={{
          background: "transparent",
          border: "1px solid #e2e8f0",
          padding: "8px 12px",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        🔎 Ver Mais
      </button>
    </div>
  );
}

// Links fixos: substitua estes valores pelos seus perfis
const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/marcos-gabriel-870221200",
  instagram: "https://www.instagram.com/marcos_gma_/?hl=pt-br",
  github: "https://github.com/marcos-gma",
};

export default function MarcosGabrielPage() {
  const name = "Marcos Gabriel";
  const bio =
    "Tenho 22 anos, sou recifense e atualmente estou no 8º período de Ciência da Computação no CIn. Faço parte do eixo de Gestão de Projetos na SEAL tendo entrado no início da liga. Além de Engenharia de Software gosto e trabalho com dados e IA. Muito animado para o que iremos fazer esse ano o céu é o limite!";

  const [likes, setLikes] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const links = SOCIAL_LINKS; // links definidos no código

  useEffect(() => {
    console.log("MarcosGabrielPage montou");
    return () => console.log("MarcosGabrielPage desmontou");
  }, []);

  useEffect(() => {
    document.title = `${likes} like${likes !== 1 ? "s" : ""} — ${name}`;
  }, [likes]);

  function handleLike() {
    setLikes((v) => v + 1);
  }

  function handleToggle() {
    setShowMore((s) => !s);
  }

  return (
    <main style={containerStyle}>
      <div>
        <ProfileCard name={name} bio={bio} showMore={showMore} links={links} />

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
          <InteractionButtons likes={likes} onLike={handleLike} onToggle={handleToggle} />
        </div>
      </div>
    </main>
  );
}