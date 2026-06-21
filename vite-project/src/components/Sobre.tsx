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
            Sou um estudante de programação e desenvolvedor iniciante. Tenho
            experiência com HTML, CSS, JavaScript e estou aprendendo Python para
            elevar minhas habilidades. Busco sempre evoluir e criar projetos que
            possam ajudar pessoas e empresas a crescerem no mundo digital.
          </p>
          <p>
            Estou aberto a oportunidades de estágio e projetos freelance. Vamos
            trabalhar juntos para transformar suas ideias em realidade!
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Sobre;