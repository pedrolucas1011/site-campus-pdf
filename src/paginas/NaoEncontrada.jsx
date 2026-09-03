import { Link } from 'react-router-dom';

export default function NaoEncontrada() {
  return (
    <div>
      <h1>404 - Página Não Encontrada</h1>
      <Link to="/">Voltar para o Início</Link>
    </div>
  );
}