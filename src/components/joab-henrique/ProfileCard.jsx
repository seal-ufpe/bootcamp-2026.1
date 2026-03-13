import { useState } from 'react';
import { theme } from './theme';
import { PROFILE_PICTURE } from './data';

export default function ProfileCard({
  name,
  role,
  institution,
  location,
  linkedin,
  github,
  likes,
  onLike,
  liked,
}) {
  const [photoError, setPhotoError] = useState(false);

  return (
    <div
      style={{
        backgroundColor: theme.cardBg,
        border: `1px solid ${theme.cardBorder}`,
        borderTop: `3px solid ${theme.accent}`,
        borderRadius: '12px',
        padding: '28px 28px 22px',
        marginBottom: '20px',
        boxShadow: '0 4px 24px #00000044',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '22px',
          flexWrap: 'wrap',
          marginBottom: '18px',
        }}
      >
        <div
          style={{
            width: 84,
            height: 84,
            borderRadius: '50%',
            overflow: 'hidden',
            border: `3px solid ${theme.accent}`,
            flexShrink: 0,
            backgroundColor: theme.muted,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {!photoError ? (
            <img
              src={PROFILE_PICTURE}
              alt={`Photo of ${name}`}
              onError={() => setPhotoError(true)}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <span
              style={{
                fontSize: '1.9rem',
                fontWeight: 800,
                color: theme.accent,
                userSelect: 'none',
              }}
            >
              JH
            </span>
          )}
        </div>

        <div>
          <h1
            style={{
              margin: 0,
              fontSize: '1.55rem',
              fontWeight: 800,
              color: theme.text,
              letterSpacing: '-0.01em',
            }}
          >
            {name}
          </h1>
          <p
            style={{
              margin: '4px 0 0',
              fontSize: '0.9rem',
              color: theme.accent,
              fontWeight: 600,
            }}
          >
            {role}
          </p>
          <p
            style={{
              margin: '2px 0 0',
              fontSize: '0.84rem',
              color: theme.subtext,
            }}
          >
            {institution}
          </p>
          <p
            style={{
              margin: '2px 0 0',
              fontSize: '0.82rem',
              color: theme.subtext,
            }}
          >
            📍 {location}
          </p>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <button
          onClick={onLike}
          style={{
            background: liked ? theme.accent + '22' : 'transparent',
            border: `1.5px solid ${liked ? theme.accent : theme.muted}`,
            borderRadius: '24px',
            padding: '7px 18px',
            cursor: 'pointer',
            fontWeight: 700,
            fontSize: '0.85rem',
            color: liked ? theme.accent : theme.subtext,
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
          }}
        >
          {liked ? '❤️' : '💙'}
          {likes > 0 ? `${likes} likes` : 'Like profile'}
        </button>

        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          style={linkStyle}
        >
          🔗 LinkedIn
        </a>

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          style={linkStyle}
        >
          🐙 GitHub
        </a>
      </div>
    </div>
  );
}

const linkStyle = {
  textDecoration: 'none',
  color: theme.subtext,
  fontWeight: 600,
  fontSize: '0.84rem',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  padding: '7px 14px',
  border: `1.5px solid ${theme.muted}`,
  borderRadius: '24px',
  transition: 'color 0.2s, border-color 0.2s',
};
