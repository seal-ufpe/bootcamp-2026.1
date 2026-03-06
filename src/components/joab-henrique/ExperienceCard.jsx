import { useState } from 'react';
import { theme } from './theme';
import SkillBadge from './SkillBadge';

export default function ExperienceCard({ company, role, period, logo, description, skills }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        backgroundColor: theme.cardBg,
        border: `1px solid ${theme.cardBorder}`,
        borderLeft: `3px solid ${expanded ? theme.accent : theme.muted}`,
        borderRadius: '10px',
        padding: '16px 18px',
        marginBottom: '10px',
        transition: 'border-left-color 0.25s ease',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '14px',
          cursor: 'pointer',
        }}
        onClick={() => setExpanded((p) => !p)}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: '8px',
            backgroundColor: theme.accent + '18',
            border: `1px solid ${theme.accent}33`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            flexShrink: 0,
          }}
        >
          {logo}
        </div>

        <div style={{ flex: 1 }}>
          <p
            style={{
              margin: 0,
              fontWeight: 700,
              fontSize: '0.95rem',
              color: theme.text,
            }}
          >
            {role}
          </p>
          <p
            style={{
              margin: '2px 0 0',
              fontSize: '0.85rem',
              color: theme.accent,
              fontWeight: 600,
            }}
          >
            {company}
          </p>
          <p
            style={{
              margin: '2px 0 0',
              fontSize: '0.8rem',
              color: theme.subtext,
            }}
          >
            {period}
          </p>
        </div>

        <span
          style={{
            color: theme.subtext,
            fontSize: '1rem',
            transition: 'transform 0.25s',
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            display: 'inline-block',
            userSelect: 'none',
          }}
        >
          ▾
        </span>
      </div>

      {expanded && (
        <div
          style={{
            marginTop: '14px',
            borderTop: `1px solid ${theme.cardBorder}`,
            paddingTop: '12px',
          }}
        >
          <p
            style={{
              fontSize: '0.86rem',
              color: theme.subtext,
              lineHeight: 1.7,
              margin: '0 0 12px',
            }}
          >
            {description}
          </p>
          <div>
            {skills.map((s) => (
              <SkillBadge label={s} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
