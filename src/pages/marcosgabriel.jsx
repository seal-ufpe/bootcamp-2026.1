import React, { useEffect, useState } from "react";

const cardStyle = {
  maxWidth: 600,
  padding: 20,
  borderRadius: 8,
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  background: "#fff",
};

function ProfileCard({ name, bio, showMore }) {
  return (
    <section style={cardStyle} aria-label="profile-card">
      <h2>{name}</h2>
      <p>{showMore ? bio : bio.slice(0, 140) + (bio.length > 140 ? "..." : "")}</p>
    </section>
  );
}

function InteractionButtons({ likes, onLike, onToggle }) {
  return (
    <div style={{ marginTop: 12 }}>
      <button onClick={onLike} aria-pressed="false">Curtir ({likes})</button>
      <button onClick={onToggle} style={{ marginLeft: 8 }}>
        Alternar Bio
      </button>
    </div>
  );
}

export default function MarcosGabrielPage() {
  const name = "Marcos Gabriel";
  const bio =
    "Sou estudante de desenvolvimento web, interessado em React, boas práticas e colaboração em equipe. Gosto de aprender novas ferramentas e contribuir com projetos open-source.";

  const [likes, setLikes] = useState(0);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    // efeito de montagem (e exemplo de ciclo de vida)
    console.log("MarcosGabrielPage montou");
    return () => console.log("MarcosGabrielPage desmontou");
  }, []);

  useEffect(() => {
    // atualiza o título da página quando os likes mudam
    document.title = `${likes} like${likes !== 1 ? "s" : ""} — ${name}`;
  }, [likes]);

  function handleLike() {
    setLikes((v) => v + 1);
  }

  function handleToggle() {
    setShowMore((s) => !s);
  }

  return (
    <main style={{ padding: 16 }}>
      <ProfileCard name={name} bio={bio} showMore={showMore} />
      <InteractionButtons likes={likes} onLike={handleLike} onToggle={handleToggle} />
    </main>
  );
}