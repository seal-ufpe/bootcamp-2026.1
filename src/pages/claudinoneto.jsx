import { useState, useEffect } from 'react';

function ProfileCard({ name, bio, extraInfo, showExtra }) {
  return (
    <section
      style={{
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        maxWidth: '420px',
        marginBottom: '1rem',
      }}
    >
      <h2 style={{ marginTop: 0 }}>{name}</h2>
      <p style={{ color: '#444', lineHeight: 1.5 }}>{bio}</p>
      {showExtra && (
        <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: 0 }}>
          {extraInfo}
        </p>
      )}
    </section>
  );
}

function InteractionSection({ likeCount, onLike, showExtra, onToggleExtra }) {
  return (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
      <button
        type="button"
        onClick={onLike}
        style={{
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          borderRadius: '6px',
          border: '1px solid #ccc',
          background: '#f5f5f5',
        }}
      >
        Curtir ({likeCount})
      </button>
      <button
        type="button"
        onClick={onToggleExtra}
        style={{
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          borderRadius: '6px',
          border: '1px solid #ccc',
          background: '#f5f5f5',
        }}
      >
        {showExtra ? 'Ocultar detalhes' : 'Ver mais sobre mim'}
      </button>
    </div>
  );
}

export default function ClaudinoNetoPage() {
  const [likeCount, setLikeCount] = useState(0);
  const [showExtra, setShowExtra] = useState(false);

  useEffect(() => {
    document.title = 'Claudino Neto | SEAL Bootcamp';
    return () => {
      document.title = 'SEAL Bootcamp';
    };
  }, []);

  const name = 'Claudino Eduardo da Silva Neto';
  const bio =
    'Membro do bootcamp SEAL. Apaixonado por tecnologia e aprendizado contínuo.';
  const extraInfo =
    'Interesses: desenvolvimento web, React, Git e colaboração em projetos open source.';

  return (
    <main style={{ padding: '1.5rem' }}>
      <ProfileCard
        name={name}
        bio={bio}
        extraInfo={extraInfo}
        showExtra={showExtra}
      />
      <InteractionSection
        likeCount={likeCount}
        onLike={() => setLikeCount((c) => c + 1)}
        showExtra={showExtra}
        onToggleExtra={() => setShowExtra((s) => !s)}
      />
    </main>
  );
}