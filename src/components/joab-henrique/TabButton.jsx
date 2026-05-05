import { theme } from './theme';

export default function TabButton({ label, emoji, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 22px',
        border: 'none',
        borderBottom: active
          ? `3px solid ${theme.accent}`
          : '3px solid transparent',
        backgroundColor: active ? theme.accent + '14' : 'transparent',
        cursor: 'pointer',
        fontWeight: active ? 700 : 500,
        fontSize: '0.88rem',
        color: active ? theme.accent : theme.subtext,
        borderRadius: '6px 6px 0 0',
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        letterSpacing: '0.01em',
      }}
    >
      <span>{emoji}</span>
      {label}
    </button>
  );
}
