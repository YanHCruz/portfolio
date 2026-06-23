import { useState } from 'react';
import { motion } from 'framer-motion';

const Contato = () => {
  const [copiado, setCopiado] = useState(false);

  const copiarEmail = () => {
    navigator.clipboard.writeText('yhenrique041@gmail.com');
    setCopiado(true);

    setTimeout(() => {
      setCopiado(false);
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contato
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Entre em contato comigo através das redes sociais abaixo:
        </motion.p>

        <motion.div 
          className="contact-links"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="https://www.linkedin.com/in/yan-henrique-6aa3a926b" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin" aria-label="LinkedIn" title="LinkedIn"></i>
          </a>
          <a href="https://github.com/YanHCruz" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github" aria-label="GitHub" title="GitHub"></i>
          </a>
          <a href="https://wa.me/5511965637504?text=Ol%C3%A1%20Yan!%20Vi%20o%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA." target="_blank" rel="noreferrer">
            <i className="fa-brands fa-whatsapp" aria-label="WhatsApp" title="WhatsApp"></i>
          </a>
        </motion.div>

        <motion.div 
          className="email-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p id="email-text">yhenrique041@gmail.com</p>
          <button id="copy-button" title="Copiar e-mail" onClick={copiarEmail}>
            <i className="fa-regular fa-copy" aria-label="Copiar e-mail" title="Copiar e-mail"></i>
          </button>
        </motion.div>

        {/* O React só desenha esta div se o estado 'copiado' for verdadeiro */}
        {copiado && (
          <motion.div 
            id="copy-feedback"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            E-mail copiado!
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contato;