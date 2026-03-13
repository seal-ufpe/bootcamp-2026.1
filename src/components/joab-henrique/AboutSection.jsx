import { theme } from './theme';
import SkillBadge from './SkillBadge';

export default function AboutSection({ bio, skills }) {
  return (
    <div>
      {bio.map((paragraph) => (
        <p
          style={{
            fontSize: '0.9rem',
            color: theme.subtext,
            lineHeight: 1.8,
            margin: '0 0 14px',
          }}
        >
          {paragraph}
        </p>
      ))}

      <div
        style={{
          borderTop: `1px solid ${theme.cardBorder}`,
          marginTop: '8px',
          paddingTop: '18px',
        }}
      >
        <p
          style={{
            color: theme.text,
            fontWeight: 700,
            fontSize: '0.88rem',
            margin: '0 0 12px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}
        >
          🛠️ Main Technologies
        </p>
        <div>
          {skills.map((h) => (
            <SkillBadge label={h} />
          ))}
        </div>
      </div>
    </div>
  );
}
