import './index.css'

import  Cabecalho from '../components/Cabecalho'
import  Inicio from '../components/Inicio'
import Habilidades from '../components/Habilidades'
import  Sobre from '../components/Sobre'
import  Projetos from '../components/Projetos'
import Contato from '../components/Contato'
import  Rodape from '../components/Rodape'

export function App() {
  return (

    <main>

      <Cabecalho />
      <Inicio />
      <Sobre /> 
      <Habilidades /> 
      <Projetos />
      <Contato />
      <Rodape />

    </main>
  );
}