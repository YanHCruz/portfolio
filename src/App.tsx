import './index.css'
import { useState, useEffect } from 'react'

import  Cabecalho from '../components/Cabecalho'
import  Inicio from '../components/Inicio'
import Habilidades from '../components/Habilidades'
import  Sobre from '../components/Sobre'
import  Projetos from '../components/Projetos'
import Contato from '../components/Contato'
import  Rodape from '../components/Rodape'

export function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');

    return savedTheme ? savedTheme : 'dark';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);

    if(theme === 'light') {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((temaAtual) => (temaAtual === 'dark' ? 'light' : 'dark'));
  };
  return (
    <div>
      <Cabecalho toggleTheme={toggleTheme} theme={theme} />
    
    <main>

      <Cabecalho />
      <Inicio />
      <Sobre /> 
      <Habilidades /> 
      <Projetos />
      <Contato />
      <Rodape />

    </main>
    </div>
  );
}

export default App;