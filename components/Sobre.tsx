import { motion } from 'framer-motion';

const Sobre = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} // amount: 0.3 significa que anima quando 30% do elemento estiver visível
          transition={{ duration: 0.8 }}
        >
          <h2>Sobre mim</h2>
          <p>
            Sou um desenvolvedor Full Stack focado em construir soluções eficientes de ponta a ponta. 
            Minha atuação combina a criação de interfaces modernas e intuitivas com React, e o desenvolvimento de arquiteturas e regras de negócios robustas no Back-End utilizando PHP e SQL Server.
          </p>
          <p>
            Gosto de resolver problemas reais, garantindo a qualidade do software desde a modelagem dos dados em produção até a experiência final do usuário. 
            Atualmente, busco oportunidades para agregar valor tecnológico a novos projetos e continuar evoluindo profissionalmente.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Sobre;