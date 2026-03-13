import React, { useState, useEffect } from 'react';

const ActionButton = ({ onClick, label, count }) => {
  return (
    <button 
      onClick={onClick}
      style={{
        padding: '10px 20px',
        backgroundColor: '#ffff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        color: '#191970',
      }}
    >
      {label} {count !== undefined && `(${count})`}
    </button>
  );
};

const ProfileCard = ({ name, bio, likes, onLike }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '12px',
      padding: '20px',
      maxWidth: '300px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#191970'
    }}>
      <img 
        src="https://i.imgur.com/wtuof9I.jpeg" 
        alt="Avatar" 
        style={{ borderRadius: '50%', 
                marginBottom: '15px',
                width: '200px',
                height: '200px',
                objectFit: 'cover',
                border: '4px solid #ffffff' }}
      />
      <h2 style={{ color: '#fff' }}>{name}</h2>
      <p style={{ color: '#fff' }}>{bio}</p>
      
      <ActionButton 
        label="❤️ Like" 
        onClick={onLike} 
        count={likes} 
      />
    </div>
  );
};

export default function LucasPaiva() {
  const [likes, setLikes] = useState(0);
  const [lastUpdate, setLastUpdate] = useState('');

  const userData = {
    name: "Lucas Paiva",
    bio: "Goofy 🦭"
  };

  useEffect(() => {
    if (likes > 0) {
      const now = new Date().toLocaleTimeString();
      setLastUpdate(now);
      console.log(`O perfil recebeu um like às ${now}`);
    }
  }, [likes]);

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '50vh',
      fontFamily: 'sans-serif',
      backgroundColor: '#f0f2f5'
    }}>
      <h1>SEAL Profile</h1>
      
      <ProfileCard 
        name={userData.name} 
        bio={userData.bio} 
        likes={likes}
        onLike={handleLike}
      />

      {lastUpdate && (
        <p style={{ marginTop: '20px', fontSize: '0.8rem', color: '#888' }}>
          Last Interaction: {lastUpdate}
        </p>
      )}
    </div>
  );
}