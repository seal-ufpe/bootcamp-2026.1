import { useState, useEffect } from 'react';
import { theme } from './theme';
import SkillBadge from './SkillBadge';

export default function ProjectCard({ title, description, technologies, emoji, link }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const storageKey = `project:${title}`;

  useEffect(() => {
    const raw = localStorage.getItem(storageKey);
    if (raw) {
      const parsed = JSON.parse(raw);
      setLikes(parsed.likes || 0);
      setLiked(!!parsed.liked);
    }
  }, [storageKey]);

  function handleLike() {
    const newLiked = !liked;
    const newLikes = newLiked ? likes + 1 : Math.max(0, likes - 1);
    setLikes(newLikes);
    setLiked(newLiked);
    localStorage.setItem(storageKey, JSON.stringify({ likes: newLikes, liked: newLiked }));
  }

  return (
    <div
      style={{
        backgroundColor: theme.cardBg,
        border: `1px solid ${theme.cardBorder}`,
        borderRadius: '12px',
        padding: '20px 22px',
        marginBottom: '12px',
        transition: 'border-color 0.2s ease, transform 0.15s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = theme.accent + '55';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = theme.cardBorder;
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '10px',
        }}
      >
        <span style={{ fontSize: '1.4rem' }}>{emoji}</span>
        <p
          style={{
            margin: 0,
            fontWeight: 700,
            fontSize: '0.97rem',
            color: theme.text,
          }}
        >
          {title}
        </p>
      </div>

      <p
        style={{
          fontSize: '0.86rem',
          color: theme.subtext,
          lineHeight: 1.7,
          margin: '0 0 14px',
        }}
      >
        {description}
      </p>

      <div style={{ marginBottom: '16px' }}>
        {technologies.map((t) => (
          <SkillBadge label={t} />
        ))}
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
          onClick={handleLike}
          style={{
            background: liked ? theme.accent + '22' : 'transparent',
            border: `1.5px solid ${liked ? theme.accent : theme.muted}`,
            borderRadius: '20px',
            padding: '5px 14px',
            cursor: 'pointer',
            fontSize: '0.82rem',
            fontWeight: 600,
            color: liked ? theme.accent : theme.subtext,
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          {liked ? '❤️' : '💙'}
          {likes > 0 ? likes : ''}
        </button>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: 'none',
              color: theme.subtext,
              fontSize: '0.82rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '5px 12px',
              border: `1.5px solid ${theme.muted}`,
              borderRadius: '20px',
              transition: 'color 0.2s, border-color 0.2s',
            }}
          >
            🔗 View project
          </a>
        )}
      </div>
    </div>
  );
}
