# SEAL Bootcamp 2026.1

Repositório de mini projetos React que exibe os card interativos dos membros do bootcamp da SEAL.

## 📋 Descrição

Os cards são reunidos em aplicação web que centraliza todo o conteúdo produzido pelos participantes do bootcamp. Cada membro possui sua própria página personalizada onde pode apresentar sua experiência profissional, projetos, habilidades e informações pessoais.

## 🎯 Objetivo

Criar um espaço único, acessível e de aprednizagem react para que os membros do bootcamp também exibam seus cards profissionais, facilitando a visualização e compartilhamento de suas experiências e projetos.

## 📁 Estrutura do Projeto

```
src/
├── components/              # Componentes reutilizáveis
│   ├── AboutMe.jsx
│   ├── Experience.jsx
│   ├── ExperienceCard.jsx
│   ├── NavigationLinks.jsx
│   ├── ProjectCard.jsx
│   ├── Projects.jsx
│   └── joab-henrique/      # Componentes específicos de tema
├── pages/                   # Páginas de cada membro
│   ├── Main.jsx            # Página principal com lista de membros
│   ├── membro1.jsx
│   ├── membro2.jsx
│   ├── [outros membros].jsx
│   └── ...
├── assets/                  # Dados e recursos estáticos
│   └── members.json        # Lista de membros
├── styles/                  # Arquivos CSS
│   ├── App.css
│   ├── index.css
│   └── [outros estilos].css
├── App.jsx                 # Componente raiz com rotas
├── main.jsx                # Ponto de entrada da aplicação
└── pages.jsx               # Mapa dinâmico de páginas
```

## 🚀 Como Instalar e Executar

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn como gerenciador de pacotes

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/seal-ufpe/bootcamp-2026.1.git
cd bootcamp-2026.1

# Instalar dependências
npm install
```

### Executar em Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`


## ✨ Funcionalidades Principais

- **Página Principal**: Lista interativa de todos os membros do bootcamp com navegação por links
- **Portfólios Individuais**: Cada membro tem sua própria página personalizada
- **Carregamento Dinâmico**: As páginas são carregadas sob demanda usando lazy loading
- **Roteamento SPA**: Navegação suave entre páginas sem recarregamento
- **Design Responsivo**: Componentes adaptados para diferentes tamanhos de tela
- **Tratamento de Erros**: Página amigável para rotas não encontradas

## 📝 Como Adicionar um Novo Membro

### 1. Adicione o membro ao `members.json`

```json
{
  "name": "Nome do Membro",
  "slug": "nomemembro"
}
```

### 2. Crie a página do membro em `src/pages/nomemembro.jsx`

```jsx
export default function NomeMembro() {
  return (
    <div>
      {/* Seu portfólio aqui */}
    </div>
  );
}
```

### 3. A página será automaticamente incluída no roteador

## 🎨 Componentes Reutilizáveis

- **ExperienceCard**: Exibe informações de experiência profissional
- **ProjectCard**: Mostra detalhes de projetos
- **NavigationLinks**: Menu de navegação
- **AboutMe**: Seção "Sobre Mim"

## 📊 Estrutura de Dados

O arquivo `members.json` contém a lista de todos os membros:

```json
{
  "members": [
    { "name": "Nome", "slug": "slug-único" },
    ...
  ]
}
```

## 🔗 Roteamento

- `/` - Página principal (lista de membros)
- `/:memberSlug` - Página individual do membro

## 📱 Responsividade

O projeto utiliza CSS flexível para adaptar-se a diferentes dispositivos e tamanhos de tela.

## 🐛 Tratamento de Erros

Se uma página não for encontrada, a aplicação exibe uma mensagem amigável e oferece um link para voltar à página principal.

## 👥 Contribuindo

Cada membro do bootcamp pode personalizar sua própria página de card portfólio criando componentes e estilos únicos.

---

**Desenvolvido por**: Liga Acadêmica de Engenharia de Software (SEAL) - UFPE
**Bootcamp**: SEAL 2026.1