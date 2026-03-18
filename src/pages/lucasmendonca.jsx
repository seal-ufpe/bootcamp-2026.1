import { useState, useEffect } from "react";

const styles = {
  card: {
    backgroundColor: "#0b1f3a",
    color: "#f1f5f9",
    padding: "20px",
    borderRadius: "12px",
    width: "280px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  image: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "12px",
  },
  button: {
    backgroundColor: "#1e3a8a",
    color: "#e0e7ff",
    border: "none",
    borderRadius: "8px",
    padding: "6px 12px",
    fontSize: "0.85rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  actions: {
    marginTop: "12px",
    display: "flex",
    justifyContent: "center",
  },
};

const Button = ({ children, onClick }) => {
  return (
    <button style={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

const ProfileCard = ({ name, description, likes, onLike }) => {
  return (
    <div style={styles.card}>
      <img
        style={styles.image}
        src="https://avatars.githubusercontent.com/u/204080504?v=4"
        alt="profile"
      />

      <p style={{ fontWeight: "bold", fontSize: "1.2rem", margin: 0 }}>
        {name}
      </p>
      <p style={{ color: "#cbd5f5", fontSize: "0.9rem" }}>{description}</p>

      <div style={styles.actions}>
        <Button onClick={onLike}>❤️ {likes} Curtir</Button>
      </div>
    </div>
  );
};

export default function LucasMendoncaPage() {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    document.title = `Lucas tem ${likes} curtidas!`;
    console.log(`Número de curtidas atualizado para: ${likes}`);
  }, [likes]);

  const handleLike = () => setLikes((prev) => prev + 1);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ProfileCard
        name="Lucas Mendonça"
        description="Estudante do 3º período de Sistemas de Informação na UFPE. Também atuo como Desenvolvedor de Software no CITi e membro da Liga Acadêmica de Engenharia de Software (UFPE)"
        likes={likes}
        onLike={handleLike}
      />
    </div>
  );
}
