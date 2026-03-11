import './index.css'

import { Cabecalho } from '../components/Cabecalho'
import { Inicio } from '../components/Inicio'
import { Sobre } from '../components/Sobre'
import { Rodape } from '../components/Rodape'

export function App() {
  return (

    <main>

      <Cabecalho />
      <Inicio />
      <Sobre />
      <Rodape />

    </main>
  );
}