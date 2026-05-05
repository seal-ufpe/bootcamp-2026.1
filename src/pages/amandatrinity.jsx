import { useEffect, useState } from "react";
import { Link } from "react-router";

const ICONES = {
  voltar: "https://api.iconify.design/mdi:arrow-left.svg?color=%23ffffff",
  curtir: "https://api.iconify.design/mdi:thumb-up.svg",
  github: "https://api.iconify.design/mdi:github.svg",
};

const tecnologias = [
  {
    nome: "React",
    imagem: "https://www.svgrepo.com/show/303157/react-logo.svg",
  },
  {
    nome: "Angular",
    imagem: "https://www.svgrepo.com/show/452156/angular.svg",
  },
  { nome: "Python", imagem: "https://www.svgrepo.com/show/452091/python.svg" },
  {
    nome: "TypeScript",
    imagem: "https://www.svgrepo.com/show/374146/typescript-official.svg",
  },
  { nome: "NestJs", imagem: "https://www.svgrepo.com/show/373872/nestjs.svg" },
];

const perfilAmanda = {
  nome: "Amanda Trinity",
  foto: "https://media.licdn.com/dms/image/v2/D4D03AQGwW7-qXXRGgQ/profile-displayphoto-scale_400_400/B4DZ0IGY8HGcAg-/0/1773957386727?e=1775692800&v=beta&t=8od-mZQYG-5u5KFEibSCnt7ydmYGqIOoIHulqQv3Vwo",
  bio: [
    "Graduanda em Cientista da computação na UFPE",
    "Desenvolvedora FrontEnd na VLAB UFPE",
    "Membro da Liga Acadêmica de Engenharia de Software",
  ],
};

const projetos = [
  {
    title: "Frota Gerencial",
    imagem:
      "https://tse4.mm.bing.net/th/id/OIP.LcyZFZrTENVSxF6gx_AqmQHaEK?pid=Api&P=0&h=180",
    description:
      "Este projeto é um sistema web de Frota Gerencial, desenvolvido em Angular, que permite visualizar, gerenciar e monitorar veículos de uma frota. Ele exibe abastecimentos, motoristas, veículos e indicadores, utilizando uma API mock para simular dados reais. O objetivo é facilitar o controle operacional e a tomada de decisões sobre a frota.",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/AmandaTrinity/angular-dsgov-frota-manager",
        icon: ICONES.github,
      },
    ],
  },
  {
    title: "Jornada Para o Carnaval",
    imagem:
      "https://github.com/AmandaTrinity/ProjetoIP/raw/main/docs/image-6.png",
    description:
      "Projeto de jogo de plataforma desenvolvido com Pygame em Python, aplicando princípios de Programação Orientada a Objetos (POO) para organizar entidades, mecânicas e lógica do jogo.",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/AmandaTrinity/ProjetoIP",
        icon: ICONES.github,
      },
    ],
  },
];

function BotaoCurtir({ onClick }) {
  return (
    <button onClick={onClick} className="amanda-curtir-button">
      <img src={ICONES.curtir} alt="Curtir" className="amanda-curtir-icon" />
    </button>
  );
}

function Projetos({
  projeto,
  handleCurtir,
  curtidas,
  mostrarMais,
  onToggleMostrarMais,
}) {
  return (
    <section className="amanda-projetos">
      <div className="amanda-projetos-grid">
        <img
          src={projeto.imagem}
          alt={projeto.title}
          className="amanda-projeto-image"
        />
        <div className="amanda-projeto">
          <h3 className="amanda-projeto-title">{projeto.title}</h3>
          {mostrarMais && (
            <p className="amanda-projeto-description">{projeto.description}</p>
          )}

          <button
            className="amanda-detalhes-button"
            onClick={onToggleMostrarMais}
          >
            {mostrarMais ? "Ocultar Descrição" : "Mostrar Descrição"}
          </button>

          <div className="amanda-projeto-links">
            {projeto.links.map((link) => (
              <a
                href={link.url}
                key={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  className="amanda-projeto-link-icon"
                />
              </a>
            ))}
            <BotaoCurtir onClick={handleCurtir} />
            <span className="amanda-curtidas-count">{curtidas} curtidas</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function AmandaNavbar({ logo, backIcon, titulo }) {
  return (
    <nav className="amanda-navbar">
      <div className="amanda-navbar-left">
        <Link to="/" className="amanda-back-link">
          <img src={backIcon} alt="Voltar" className="amanda-back-icon" />
        </Link>
        <img src={logo} alt="Logo da Seal" className="amanda-navbar-logo" />
      </div>
      <span className="amanda-navbar-title">{titulo}</span>
    </nav>
  );
}

function AmandaHeader({ nome, foto, bio }) {
  return (
    <header className="amanda-header">
      <div className="amanda-photo-wrapper">
        <img src={foto} alt={`Foto de ${nome}`} className="amanda-photo" />
      </div>

      <section className="amanda-info">
        <h1 className="amanda-name">{nome}</h1>
        <ul className="amanda-bio">
          {bio.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </header>
  );
}

export function CardTecnologia({ nome, imagem }) {
  return (
    <>
      <div className="amanda-card">
        <div className="amanda-card-header">
          <img src={imagem} alt={nome} className="amanda-card-image" />
          <h3 className="amanda-card-title">{nome}</h3>
        </div>
      </div>
    </>
  );
}

export default function AmandaTrinityPage() {
  const [curtidasPorProjeto, setCurtidasPorProjeto] = useState(() =>
    projetos.reduce((acc, projeto) => {
      acc[projeto.title] = 11;
      return acc;
    }, {}),
  );
  const [mostrarMais, setMostrarMais] = useState(false);

  useEffect(() => {
    const totalCurtidas = Object.values(curtidasPorProjeto).reduce(
      (total, qtd) => total + qtd,
      0,
    );
    document.title = `Amanda Trinity • ${totalCurtidas} curtidas`;
  }, [curtidasPorProjeto]);

  const handleCurtir = (tituloProjeto) => {
    setCurtidasPorProjeto((valorAtual) => ({
      ...valorAtual,
      [tituloProjeto]: (valorAtual[tituloProjeto] ?? 0) + 1,
    }));
  };

  const handleMostrarMais = () => {
    setMostrarMais((valorAtual) => !valorAtual);
  };

  return (
    <>
      <style>{`
        .amanda-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #f4f7ff 0%, #ffffff 100%);
          color: #0d1a41;
          font-family: Inter, sans-serif;
        }

        .amanda-navbar {
          background-color: #0d1a41;
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          box-shadow: 0 8px 22px rgba(13, 26, 65, 0.22);
        }

        .amanda-navbar-logo {
          width: 66px;
          height: auto;
          object-fit: contain;
        }

        .amanda-navbar-title {
          color: #ffffff;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .amanda-navbar-left {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .amanda-back-link {
          color: #ffffff;
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        .amanda-back-icon {
          width: 28px;
          height: 28px;
          object-fit: contain;
        }

        .amanda-header {
          max-width: 1040px;
          margin: 3.2rem auto 0;
          padding: 0 1.5rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2.5rem;
          flex-wrap: wrap;
        }

        .amanda-photo-wrapper {
          width: 260px;
          height: 260px;
          border-radius: 50%;
          overflow: hidden;
          border: 6px solid #0d1a41;
          box-shadow: 0 14px 30px rgba(13, 26, 65, 0.25);
          flex-shrink: 0;
        }

        .amanda-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .amanda-info {
          flex: 1;
          min-width: 280px;
          background: #ffffff;
          border-radius: 18px;
          padding: 1.5rem 1.7rem;
          box-shadow: 0 12px 28px rgba(13, 26, 65, 0.12);
          border-left: 6px solid #0d1a41;
        }

        .amanda-name {
          margin: 0 0 1rem;
          font-size: clamp(1.7rem, 4vw, 2.4rem);
          line-height: 1.1;
          color: #0d1a41;
        }

        .amanda-bio {
          margin: 0;
          font-size: 1.08rem;
          line-height: 1.7;
          text-align: start;
          color: #243561;
        }

        .amanda-tecnologias-section {
          max-width: 1040px;
          margin: 3rem auto 0;
          padding: 0 1.5rem 3rem;
        }

        .amanda-section-title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 2rem;
          color: #0d1a41;
        }

        .amanda-cards-container {
          display: flex;
          justify-content: start;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .amanda-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 1rem;
          width: 150px;
          text-align: center;
          box-shadow: 0 8px 16px rgba(13, 26, 65, 0.1);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .amanda-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(13, 26, 65, 0.15);
        }

        .amanda-card-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
        }

        .amanda-card-title {
          margin: 0;
          font-size: 1.1rem;
          color: #243561;
        }

        .amanda-card-image {
          width: 34px;
          height: 34px;
          object-fit: contain;
        }

        .amanda-projetos {
          max-width: 1040px;
          margin: 3rem auto;
          padding: 0 1.5rem;
        }

        .amanda-curtir-button {
          background-color: transparent;
          cursor: pointer;
          border: none;
        }

        .amanda-curtidas-count {
          font-size: 0.95rem;
          color: #243561;
          font-weight: 600;
        }

        .amanda-detalhes-button {
          border: none;
          background: #0d1a41;
          color: #fff;
          padding: 0.55rem 0.9rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          cursor: pointer;
        }

        .amanda-projetos-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 2rem;
          background: #fff;
          padding: 1.5rem;
          border-radius: 18px;
          box-shadow: 0 12px 28px rgba(13, 26, 65, 0.12);
        }

        .amanda-projeto-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
        }

        .amanda-projeto-title {
          margin: 0 0 1rem;
        }

        .amanda-projeto-description {
          margin-bottom: 1.5rem;
        }

        .amanda-projeto-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .amanda-projeto-link-icon {
          width: 24px;
          height: 24px;
          filter: grayscale(100%) brightness(1.5);
          transition: filter 0.2s;
        }

        .amanda-projeto-link-icon:hover {
          filter: none;
        }

        @media (max-width: 768px) {
          .amanda-navbar {
            padding: 0 1rem;
          }

          .amanda-header {
            margin-top: 2.1rem;
            justify-content: center;
            text-align: center;
          }

          .amanda-info {
            border-left: none;
            border-top: 6px solid #0d1a41;
          }

          .amanda-projetos-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>

      <main className="amanda-page">
        <AmandaNavbar
          logo="https://avatars.githubusercontent.com/u/229850707?s=200&v=4"
          backIcon={ICONES.voltar}
          titulo="Portfolio"
        />

        <AmandaHeader
          nome={perfilAmanda.nome}
          foto={perfilAmanda.foto}
          bio={perfilAmanda.bio}
        />
        <section className="amanda-tecnologias-section">
          <h2 className="amanda-section-title">Tecnologias</h2>{" "}
          <div className="amanda-cards-container">
            {tecnologias.map((tech) => (
              <CardTecnologia key={tech.nome} {...tech} />
            ))}
          </div>
        </section>
        <h2 className="amanda-section-title">Projetos</h2>
        {projetos.map((projeto) => (
          <Projetos
            key={projeto.title}
            projeto={projeto}
            handleCurtir={() => handleCurtir(projeto.title)}
            curtidas={curtidasPorProjeto[projeto.title] ?? 0}
            mostrarMais={mostrarMais}
            onToggleMostrarMais={handleMostrarMais}
          />
        ))}
      </main>
    </>
  );
}
