import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { theme } from '../components/joab-henrique/theme';
import { PROFILE, SKILLS, EXPERIENCES, PROJECTS } from '../components/joab-henrique/data';
import ProfileCard from '../components/joab-henrique/ProfileCard';
import TabButton from '../components/joab-henrique/TabButton';
import AboutSection from '../components/joab-henrique/AboutSection';
import ExperienceCard from '../components/joab-henrique/ExperienceCard';
import ProjectCard from '../components/joab-henrique/ProjectCard';

const TABS = [
  { id: 'about', label: 'About', emoji: '👤' },
  { id: 'experience', label: 'Experience', emoji: '💼' },
  { id: 'projects', label: 'Projects', emoji: '🚀' },
];

export default function JoabHenriquePage() {
  const [activeTab, setActiveTab] = useState('about');
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const titles = {
      about: 'Joab Henrique | About',
      experience: 'Joab Henrique | Experience',
      projects: 'Joab Henrique | Projects',
    };
    document.title = titles[activeTab] ?? 'Joab Henrique';
  }, [activeTab]);

  useEffect(() => {
    const saved = sessionStorage.getItem('joabhenrique-tab');
    if (saved && TABS.some((t) => t.id === saved)) {
      setActiveTab(saved);
    }

    document.body.style.backgroundColor = theme.bg;
    document.body.style.color = theme.text;

    return () => {
      document.title = 'SEAL Bootcamp';
    };
  }, []);

  function handleTab(id) {
    setActiveTab(id);
    sessionStorage.setItem('joabhenrique-tab', id);
  }

  function handleLike() {
    setLikes((n) => (liked ? n - 1 : n + 1));
    setLiked((p) => !p);
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: theme.bg,
        padding: '20px 16px 60px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <div style={{ maxWidth: 740, margin: '0 auto' }}>

        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            textDecoration: 'none',
            color: theme.subtext,
            fontSize: '0.85rem',
            fontWeight: 600,
            marginBottom: '20px',
            padding: '6px 12px',
            border: `1px solid ${theme.cardBorder}`,
            borderRadius: '8px',
            backgroundColor: theme.cardBg,
            transition: 'color 0.2s',
          }}
        >
          ← Back to members
        </Link>

        <ProfileCard
          name={PROFILE.name}
          role={PROFILE.role}
          institution={PROFILE.institution}
          location={PROFILE.location}
          linkedin={PROFILE.linkedin}
          github={PROFILE.github}
          likes={likes}
          onLike={handleLike}
          liked={liked}
        />

        <div
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.cardBorder}`,
            borderBottom: 'none',
            borderRadius: '10px 10px 0 0',
            display: 'flex',
            gap: '2px',
            padding: '6px 8px 0',
            flexWrap: 'wrap',
          }}
        >
          {TABS.map((tab) => (
            <TabButton
              label={tab.label}
              emoji={tab.emoji}
              active={activeTab === tab.id}
              onClick={() => handleTab(tab.id)}
            />
          ))}
        </div>

        <div
          style={{
            backgroundColor: theme.cardBg,
            border: `1px solid ${theme.cardBorder}`,
            borderTop: 'none',
            borderRadius: '0 0 10px 10px',
            padding: '24px',
          }}
        >
          {activeTab === 'about' && (
            <AboutSection bio={PROFILE.bio} skills={SKILLS} />
          )}

          {activeTab === 'experience' && (
            <div>
              <p
                style={{
                  color: theme.subtext,
                  fontSize: '0.82rem',
                  margin: '0 0 16px',
                  fontStyle: 'italic',
                }}
              >
                Click on an experience to see the details.
              </p>
              {EXPERIENCES.map((exp, i) => (
                <ExperienceCard {...exp} />
              ))}
            </div>
          )}

          {activeTab === 'projects' && (
            <div>
              <p
                style={{
                  color: theme.subtext,
                  fontSize: '0.82rem',
                  margin: '0 0 16px',
                  fontStyle: 'italic',
                }}
              >
                💙 Enjoy the projects you found interesting! To see details, examples, and images of each one, visit my {' '}
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: theme.accent, fontWeight: 700, textDecoration: 'none' }}
                >
                  LinkedIn
                </a>
                .
              </p>
              {PROJECTS.map((proj, i) => (
                <ProjectCard {...proj} />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
