import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function ProfileCard({ name, university, bio, moreInfo }) {
  const [showMore, setShowMore] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  
  useEffect(() => { console.log("Expandido", showMore); }, [showMore]);

  return (
    <div style={{
      background: 'white',
      padding: '32px',
      borderRadius: '16px',
      maxWidth: '500px',
      margin: '0 auto',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
      transition: 'transform 0.2s ease',
      transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
      fontFamily: '"Inter", "Arial", sans-serif'
    }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      <h2 style={{
        fontSize: '28px',
        fontWeight: '700',
        marginBottom: '8px',
        color: '#2c3e50'
      }}>{name}</h2>
      <h3 style={{
        color: '#4a90e2',
        fontSize: '18px',
        marginBottom: '16px',
        fontWeight: '500'
      }}>{university}</h3>
      <p style={{
        color: '#555',
        lineHeight: '1.6',
        marginBottom: '20px',
        fontSize: '16px'
      }}>{bio}</p>
      <button 
        style={{
          background: '#4a90e2',
          color: 'white',
          border: 'none',
          padding: '10px 18px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: '500',
          fontSize: '16px',
          transition: 'all 0.2s ease',
          transform: isBtnHovered ? 'translateY(-2px)' : 'translateY(0)',
          backgroundColor: isBtnHovered ? '#357ABD' : '#4a90e2'
        }}
        onClick={() => setShowMore(!showMore)}
        onMouseEnter={() => setIsBtnHovered(true)}
        onMouseLeave={() => setIsBtnHovered(false)}
      >
        {showMore ? 'Mostrar Menos' : 'Mostrar Mais'}
      </button>
      {showMore && <p style={{
        marginTop: '20px',
        padding: '16px',
        backgroundColor: '#f5f7fb',
        borderRadius: '8px',
        borderLeft: '4px solid #4a90e2',
        color: '#555',
        fontSize: '15px',
        lineHeight: '1.6'
      }}>{moreInfo}</p>}
    </div>
  );
}

export default function BeatrizMergulhao() {
    const name = "Beatriz Mergulhão dos Anjos";
    const University = "UFPE";
    const bio = "Faço Sistemas de Informação e tenho 20 anos";
    const moreInfo = "Na Seal, estou no eixo de Testes de Software";

    return (
        <div style={{
          background: '#f5f7fb',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          padding: '20px'
        }}>
            <ProfileCard
                name={name}
                university={University}
                bio={bio}
                moreInfo={moreInfo}
            />
        </div>
    )
}