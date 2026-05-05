import { useState, useEffect } from 'react';

function Card({ nome, bio }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      maxWidth: '400px',
      margin: '20px auto'
    }}>
      <h1>{nome}</h1>
      <p>{bio}</p>
    </div>
  );
}

function Botao({ texto, onClick }) {
  return (
    <button onClick={onClick} style={{
      padding: '8px 16px',
      margin: '5px',
      cursor: 'pointer'
    }}>
      {texto}
    </button>
  );
}

export default function LeviSerranoPage() {
  const [curtidas, setCurtidas] = useState(0);
  const [mostrarMais, setMostrarMais] = useState(false);

  useEffect(() => {
    console.log('Página carregada!');
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Card 
        nome="Levi Serrano" 
        bio="Estudante no 5º periodo de ciencia da computação no CIn participando do bootcamp SEAL"
      />
      
      <div style={{ textAlign: 'center' }}>
        <Botao 
          texto={`Curtir (${curtidas})`}
          onClick={() => setCurtidas(curtidas + 1)}
        />
        
        <Botao 
          texto={mostrarMais ? 'Esconder' : 'Mostrar mais'}
          onClick={() => setMostrarMais(!mostrarMais)}
        />
      </div>

      {mostrarMais && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p><a href="https://github.com/Levirbs" target="_blank">GitHub</a></p>
          <p>Aprendendo React no bootcamp!</p>
        </div>
      )}
    </div>
  );
}