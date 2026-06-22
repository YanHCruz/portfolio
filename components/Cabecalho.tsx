import { useState, useEffect } from 'react';

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [temaClaro, setTemaClaro] = useState(() => {
    const temaSalvo = localStorage.getItem('tema-portfolio');
    return temaSalvo === 'claro'; 
  }); 

  useEffect(() => {
    if (temaClaro) {
      document.body.classList.add('light-theme');
      localStorage.setItem('tema-portfolio', 'claro');
    } else {
      document.body.classList.remove('light-theme');
      localStorage.setItem('tema-portfolio', 'escuro'); 
    }
  }, [temaClaro]);

  // Funções de clique
  const alternarMenu = () => setMenuAberto(!menuAberto);
  const alternarTema = () => setTemaClaro(!temaClaro);
  const fecharMenu = () => setMenuAberto(false);

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          
          <div className="navbar-controls">
            <button 
              id="theme-toggle-btn" 
              className={`theme-toggle ${temaClaro ? 'fas-rotating' : ''}`} 
              title="Alterar tema"
              onClick={alternarTema}
            >

              <i className={temaClaro ? "fas fa-moon" : "fas fa-sun"}></i>
            </button>

            <button 
              className={`hamburger ${menuAberto ? 'is-active' : ''}`} 
              id="hamburger-btn" 
              aria-label="Abrir menu"
              onClick={alternarMenu}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>

          <ul className={`nav-links ${menuAberto ? 'is-active' : ''}`} id="nav-links">
            <li><a href="#home" onClick={fecharMenu}>Home</a></li>
            <li><a href="#about" onClick={fecharMenu}>Sobre</a></li>
            <li><a href="#skills" onClick={fecharMenu}>Habilidades</a></li>
            <li><a href="#projects" onClick={fecharMenu}>Projetos</a></li>
            <li><a href="#contact" onClick={fecharMenu}>Contato</a></li>
          </ul>
          
        </nav>
      </div>
    </header>
  );
};

export default Cabecalho;