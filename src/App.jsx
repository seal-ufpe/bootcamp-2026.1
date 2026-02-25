import { Link, Route, Routes, useParams } from 'react-router';
import { Suspense } from 'react';

import { pagesMap } from './pages.jsx';
import Main from './pages/Main.jsx';

import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route path="" element={<Main />} />
      <Route
        path="/:memberSlug"
        element={
          <div className="page-container">
            <PageRenderer />
            <Link to="/" className='back-link'>Voltar para a lista de membros</Link>
          </div>
        }
      />
    </Routes>
  );
}

function PageRenderer() {
  const { memberSlug } = useParams();
  const Component = pagesMap[memberSlug.toLowerCase()];

  if (!Component) return <h1>Página não encontrada</h1>;

  return (
    <Suspense fallback={<div>Carregando página...</div>}>
      <Component />
    </Suspense>
  );
}

export default App;
