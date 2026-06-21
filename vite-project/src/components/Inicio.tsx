import { motion } from 'framer-motion';

const Inicio = () => {
  return (
    <section id="home" className="hero">
      <div className="container">

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Olá, eu sou <span>Yan Cruz</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Desenvolvedor Front-End | Futuro Full Stack
        </motion.p>

        <motion.a 
          href="#contact" 
          className="btn"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Entre em contato
        </motion.a>

      </div>
    </section>
  );
};

export default Inicio;