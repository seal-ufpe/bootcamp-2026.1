import { useState, useEffect } from "react";

// cartão de perfil (componente filho)
function ProfileCard({ nome, bio }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <h2>{nome}</h2>
      <p>{bio}</p>
    </div>
  );
}

// componente filho: botão
function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{ marginTop: "12px" }}>
      <button onClick={() => setLikes(likes + 1)}>Curtir</button>
      <p>Likes: {likes}</p>
    </div>
  );
}

// página principal
export default function JoaoVictorSiqueiraPage() {
  const [message, setMessage] = useState("Bem-vindo ao meu cartão de visita!");

  useEffect(() => {
    console.log("Página de João Victor Siqueira carregada!");
    setMessage("Página carregada com sucesso 🚀");
  }, []);

  return (
    <div style={{ maxWidth: "300px", margin: "20px auto", textAlign: "center" }}>
      <ProfileCard nome="João Victor Siqueira" bio="Estudante do segundo período de Engenharia da Computação e membro SEAL no eixo de Teste de Software" />
      <LikeButton />
      <p>{message}</p>
    </div>
  );
}