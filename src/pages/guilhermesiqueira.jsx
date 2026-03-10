import { useState, useEffect } from "react";

function ProfileCard({ name, bio, github }) {
  return (
    <div style={styles.card}>
      <h1 style={styles.name}>{name}</h1>
      <p style={styles.bio}>{bio}</p>
      <a href={github} target="_blank" rel="noreferrer" style={styles.link}>
        GitHub
      </a>
    </div>
  );
}

function LikeButton({ count, onClick }) {
  return (
    <button onClick={onClick} style={styles.button}>
      ❤️ Curtir ({count})
    </button>
  );
}

export default function GuilhermeSiqueira() {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    document.title = `Guilherme Siqueira${likes > 0 ? ` · ${likes} curtida${likes > 1 ? "s" : ""}` : ""}`;
    return () => {
      document.title = "SEAL Bootcamp";
    };
  }, [likes]);

  return (
    <div style={styles.page}>
      <ProfileCard
        name="Guilherme Siqueira"
        bio="Estudante de Ciência da Computação apaixonado por tecnologia e desenvolvimento de software."
        github="https://github.com/GuilhermeCMSiqueira"
      />
      <LikeButton count={likes} onClick={() => setLikes((prev) => prev + 1)} />
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    gap: "1.5rem",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "2rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
  },
  name: {
    margin: "0 0 0.75rem",
    fontSize: "1.8rem",
  },
  bio: {
    color: "#555",
    lineHeight: 1.6,
    margin: "0 0 1rem",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold",
  },
  button: {
    padding: "0.6rem 1.4rem",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "2px solid #e25555",
    background: "#fff",
    color: "#e25555",
    cursor: "pointer",
    fontWeight: "bold",
  },
};
