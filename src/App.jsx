import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Informatica from './paginas/Informatica';
import Alimentos from './paginas/Alimentos';
import Apicultura from './paginas/Apicultura';
import NaoEncontrada from './paginas/NaoEncontrada';

function App() {
  return (
    <BrowserRouter>
      <nav className="menu">
        <Link to="/">Início</Link>
        <Link to="/informatica">Informática</Link>
        <Link to="/alimentos">Alimentos</Link>
        <Link to="/apicultura">Apicultura</Link>
      </nav>

      <main className="conteudo">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/informatica" element={<Informatica />} />
          <Route path="/alimentos" element={<Alimentos />} />
          <Route path="/apicultura" element={<Apicultura />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;