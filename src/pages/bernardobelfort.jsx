import { useState, useEffect } from "react";

function BotaoCurtir({ curtidas, onCurtir }) {
  return (
    <button onClick={onCurtir}>
      ❤️ {curtidas} {curtidas === 1 ? "curtida" : "curtidas"}
    </button>
  );
}

function CartaoDeVisita({ nome, idade, curso, bio }) {
  const [curtidas, setCurtidas] = useState(0);
  const [mostrarMais, setMostrarMais] = useState(false);

  return (
    <div>
      <h1>{nome}</h1>
      <p>{idade} anos · {curso}</p>
      <BotaoCurtir curtidas={curtidas} onCurtir={() => setCurtidas(curtidas + 1)} />
      <br />
      <button onClick={() => setMostrarMais(!mostrarMais)}>
        {mostrarMais ? "Mostrar menos" : "Saiba mais"}
      </button>
      {mostrarMais && <p>{bio}</p>}
    </div>
  );
}

export default function BernardoBelfortPage() {
  useEffect(() => {
    document.title = "Bernardo Belfort";
  }, []);

  return (
    <CartaoDeVisita
      nome="Bernardo Belfort"
      idade={19}
      curso="Sistemas de Informação · CIn UFPE"
      bio="Estudante de S.I no CIn | UFPE, atualmente no bootcamp da SEAL aprendendo desenvolvimento web."
    />
  );
}