import { motion } from 'framer-motion';

const Habilidades = () => {
  // Configuração para a animação em cascata (um card aparece depois do outro)
  const containerVariantes = {
    oculto: { opacity: 0 },
    visivel: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15 // Tempo de atraso entre cada card
      }
    }
  };

  const cardVariantes = {
    oculto: { opacity: 0, y: 30 },
    visivel: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Minhas habilidades
        </motion.h2>

        <h3 className="skills-subtitle">Habilidades Principais</h3>
        
        {/* Container das Habilidades Principais */}
        <motion.div 
          className="skills-grid"
          variants={containerVariantes}
          initial="oculto"
          whileInView="visivel"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="skill-card" variants={cardVariantes}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" alt="Logo do HTML5" />
            <p>HTML5</p>
          </motion.div>

          <motion.div className="skill-card" variants={cardVariantes}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" alt="Logo do CSS3" />
            <p>CSS3</p>
          </motion.div>

          <motion.div className="skill-card" variants={cardVariantes}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" alt="SASS" />
            <p>SASS</p>
          </motion.div>

          <motion.div className="skill-card" variants={cardVariantes}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavasCript" />
            <p>JavaScript</p>
          </motion.div>

          <motion.div className="skill-card" variants={cardVariantes}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" />
            <p>Figma</p>
          </motion.div>

          <motion.div className="skill-card" variants={cardVariantes}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" />
            <p>Python</p>
          </motion.div>

          <motion.div className="skill-card" variants={cardVariantes}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" />
            <p>MySQL</p>
          </motion.div>

          <motion.div className="skill-card" variants={cardVariantes}> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg" alt="SqlServer" />
            <p>SQLServer</p>
          </motion.div>

           <motion.div className="skill-card" variants={cardVariantes}> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP" />
            <p>PHP</p>
          </motion.div>

          <motion.div className="skill-card" variants={cardVariantes}> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg" alt="VB" />
            <p>Visual Basic</p>
          </motion.div>
        </motion.div>

        {/* <h3 className="skills-subtitle">Aprendendo Atualmente</h3>

        <motion.div 
          className="skills-grid"
          variants={containerVariantes}
          initial="oculto"
          whileInView="visivel"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="skill-card" variants={cardVariantes}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" />
            <p>Python</p>
          </motion.div>
          <motion.div className="skill-card" variants={cardVariantes}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" />
            <p>MySQL</p>
          </motion.div>
        </motion.div> */}

      </div>
    </section>
  );
};

export default Habilidades;