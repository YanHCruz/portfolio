import { useState, useEffect } from 'react';

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  // O seu CSS padrão é escuro, então o estado lightTheme começa como false
  const [temaClaro, setTemaClaro] = useState(false); 

  // Este Hook (useEffect) observa a variável 'temaClaro'. 
  // Sempre que ela mudar, ele adiciona ou remove a classe no <body>
  useEffect(() => {
    if (temaClaro) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [temaClaro]);

  const alternarMenu = () => setMenuAberto(!menuAberto);
  const alternarTema = () => setTemaClaro(!temaClaro);

  // Função para fechar o menu ao clicar num link (melhora a experiência no telemóvel)
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
              {/* No React, não precisamos esconder ícones com CSS, nós simplesmente renderizamos o ícone certo! */}
              <i className={temaClaro ? "fas fa-moon" : "fas fa-sun"}></i>
            </button>

            {/* Aqui usamos a sua classe 'is-active' dinâmica */}
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

          {/* Aqui também aplicamos a classe 'is-active' dinâmica */}
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