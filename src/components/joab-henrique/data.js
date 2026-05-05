import profilePhoto from './joabhenrique.jpeg';

export const PROFILE_PICTURE = profilePhoto;

export const PROFILE = {
  name: 'Joab Henrique',
  role: 'Software Developer @ V-Lab UFPE',
  institution: '🎓 Computer Science · CIn-UFPE',
  location: 'Recife, Pernambuco, Brazil',
  linkedin: 'https://linkedin.com/in/joabhenrique',
  github: 'https://github.com/joab-henrique',
  bio: [
    '💻 Software Developer and Computer Science student at CIn-UFPE. I work with Angular on the Front-end and FastAPI on the Back-end to build scalable, well-structured web solutions. I contribute to architecture improvements, API integrations, data organization and continuous product evolution.',
    '⚙️ Focused on expanding knowledge in software architecture, cloud computing and containerization, aiming to better understand system communication, data persistence and how to build complete and robust solutions.',
    '🧩 Solid foundation in Python, Java and C++, gained through academic projects and experience as a programming monitor. I also participated in initiatives related to design, marketing and communication strategy.',
    '🚀 Driven by challenges, continuous learning and real impact. If you are looking for someone committed and focused on technical excellence, let’s talk!',
  ],
};

export const SKILLS = [
  'Python', 'Angular', 'FastAPI', 'React',
  'TypeScript', 'Java', 'C++', 'Flask',
  'SQLAlchemy', 'Docker', 'PostgreSQL',
];

export const EXPERIENCES = [
  {
    company: 'V-Lab UFPE',
    role: 'Software Developer',
    period: 'Oct 2025 – present · 6 months',
    logo: '🔬',
    description:
      'I work as a Software Developer on JuMP (Judiciary and Process Mining), a tool developed by UFPE in collaboration with CNJ to analyze and optimize judicial procedural flows. My role is mainly Front-end with Angular, with increasing Back-end contributions and alignment with the management team.',
    skills: ['Angular', 'API REST', 'FastAPI', 'Python'],
  },
  {
    company: 'SEAL – Academic Software Engineering League of UFPE',
    role: 'Member – Software Design and Architecture',
    period: 'Dec 2025 – present · 4 months',
    logo: '🏛️',
    description:
      'Active participation in the league, contributing to software architecture studies, system design and knowledge sharing among members.',
    skills: ['Software Architecture', 'Design Patterns'],
  },
  {
    company: 'Centro de Informática – UFPE',
    role: 'Head Monitor of Introduction to Programming',
    period: 'Apr 2025 – present · 1 year',
    logo: '🎓',
    description:
      'Led teams totaling ~120 monitors and over 500 students. Responsible for task allocation, activity monitoring and communication. Developed innovative teaching methods including a gamified platform to improve learning.',
    skills: ['Python', 'React.js', 'Leadership', 'Teaching', 'Gamification'],
  },
  {
    company: 'Centro de Informática – UFPE',
    role: 'Introduction to Programming Monitor',
    period: 'Nov 2024 – Apr 2025 · 6 months',
    logo: '🎓',
    description:
      'Assisted students in learning concepts from conditionals and loops to more advanced topics like recursion. Helped develop and monitor practical activities and gave individual support.',
    skills: ['Python', 'Teaching', 'Communication'],
  },
  {
    company: 'RobôCIn',
    role: 'Software Developer',
    period: 'May 2025 – Aug 2025 · 4 months',
    logo: '🤖',
    description:
      'Contributed to a web application for automating social media post creation during high-demand periods.',
    skills: ['Python', 'Flask', 'Automation'],
  },
  {
    company: 'RobôCIn',
    role: 'Communications Analyst',
    period: 'Mar 2025 – Aug 2025 · 6 months',
    logo: '🤖',
    description:
      'Produced content and communication strategies for internal and external initiatives, improving team-public relations.',
    skills: ['Project Management', 'Communication', 'Marketing'],
  },
  {
    company: 'ETE-PE | State Technical School',
    role: 'Head Monitor of Programming Logic',
    period: 'Mar 2021 – Dec 2021 · 10 months',
    logo: '🏫',
    description:
      'Coordinated activities to develop logical reasoning applied to programming, created practical challenges and taught reinforcement classes.',
    skills: ['Java', 'JavaFX', 'Teaching', 'Leadership'],
  },
];

export const PROJECTS = [
  {
    title: 'CIntroduza – Gamified Programming Journey',
    emoji: '🎮',
    description:
      'A gamified web platform that turns programming concepts into playable visual challenges. Students control a character in a grid using Python-like instructions.',
    technologies: ['React', 'Angular', 'TypeScript', 'Tailwind CSS', 'Vite', 'FastAPI', 'DevOps'],
    link: 'https://cintroduza.online',
  },
  {
    title: 'V-L Filmes – Movies & Series Catalog',
    emoji: '🎬',
    description:
      'Interactive catalog with advanced search, filters and marathon lists with automatic time calculation. Implemented improvements and fixes during a selection process for V-Lab.',
    technologies: ['Angular', 'TypeScript', 'API REST'],
  },
  {
    title: 'Digitalization of the Dental Radiography Clinic at UFPE',
    emoji: '🏥',
    description:
      'Prototype that centralizes scheduling and patient records with differentiated access levels, integrating TI-Saúde APIs and RabbitMQ for asynchronous communication.',
    technologies: ['React', 'Python', 'Flask', 'API REST'],
  },
  {
    title: 'Víveres – Food Donation Platform with AI',
    emoji: '🥦',
    description:
      'Platform connecting CEASA sellers with NGOs, using AI to generate automatic descriptions for uploaded images.',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'ClarifAI'],
  },
  {
    title: 'Circular UFPE – Tracking App',
    emoji: '🚌',
    description:
      'Field research and requirements analysis for a mobile tracking app, proposing a cost-effective model where drivers start/end trips via phone.',
    technologies: ['Mobile', 'UX Research', 'Software Requirements'],
  },
  {
    title: 'Voting System – Java & JavaFX',
    emoji: '🗳️',
    description:
      'Voting system simulating an association with administrators and members, complete with permission controls and SMS verification.',
    technologies: ['Java', 'JavaFX', 'JavaEE'],
  },
];
