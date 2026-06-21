import { useState, useEffect } from 'react';

const Rodape = () => {
  const [mostrarBotao, setMostrarBotao] = useState(false);

  // Hook que observa o scroll da página
  useEffect(() => {
    const verificarScroll = () => {
      if (window.scrollY > 300) {
        setMostrarBotao(true);
      } else {
        setMostrarBotao(false);
      }
    };

    window.addEventListener('scroll', verificarScroll);
    return () => window.removeEventListener('scroll', verificarScroll);
  }, []);

  // Função para fazer o scroll suave até o topo
  const voltarAoTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer>
        <div className="container">
          <p>
            © 2026{' '}
            <a 
              href="https://www.instagram.com/yan_081/" 
              target="_blank" 
              rel="noreferrer"
              style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 'bold' }}
            >
              Yan Cruz
            </a>{' '}
            - Todos os direitos reservados
          </p>
        </div>
      </footer>

      {/* O botão recebe a classe 'show' dinamicamente baseada no scroll */}
      <button 
        id="back-to-top-btn" 
        className={mostrarBotao ? 'show' : ''} 
        title="Voltar ao topo"
        onClick={voltarAoTopo}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
};

export default Rodape;