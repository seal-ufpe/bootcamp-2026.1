import { theme } from './theme';

export default function SkillBadge({ label }) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '3px 11px',
        marginRight: '6px',
        marginBottom: '6px',
        borderRadius: '20px',
        fontSize: '0.76rem',
        fontWeight: 600,
        backgroundColor: theme.accent + '18',
        color: theme.accent,
        border: `1px solid ${theme.accent}44`,
        letterSpacing: '0.02em',
      }}
    >
      {label}
    </span>
  );
}
