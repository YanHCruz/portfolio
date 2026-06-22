import { motion } from 'framer-motion';

// Nossa "Base de Dados" simulada de projetos
const meusProjetos = [
  {
    id: 1,
    titulo: 'TechStore',
    imagem: '/img/Print-techstore.jpg', 
    descricao: 'Projeto acadêmico de e-commerce criado durante a faculdade, com o foco em vendas de aparelhos Apple como iPhones, MacBooks, AirPods. Desenvolvido com apenas o Front-End, o projeto foi avaliado com nota máxima.',
    tecnologias: [
      { classe: 'fa-brands fa-html5', titulo: 'HTML5' },
      { classe: 'fa-brands fa-css3-alt', titulo: 'CSS3' },
      { classe: 'fa-brands fa-js', titulo: 'JavaScript' },
    ],
    linkDeploy: 'https://techstore-steel.vercel.app',
    linkGithub: 'https://github.com/gustavoLim4/Tech-Store.git',
  },
  {
    id: 2,
    titulo: 'LiBeauty',
    imagem: '/img/li-beautyprint.png',
    descricao: 'Projeto para um studio beauty, com criação de um agendamento de clientes interno, junto de um sistema admin para gerenciar ganhos, clientes e agendamentos.',
    tecnologias: [
      { classe: 'fa-brands fa-react', titulo: 'React' },
      { classe: 'fa-brands fa-php', titulo: 'PHP' },
      { classe: 'fa-solid fa-database', titulo: 'MySQL' },
    ],
    linkDeploy: 'https://li-beauty.vercel.app',
    linkGithub: 'https://github.com/Tech-Store-UNI/Li-Beauty',
  },
];

const Projetos = () => {
  // Animação em cascata (igual usamos nas habilidades)
  const containerVariantes = {
    oculto: { opacity: 0 },
    visivel: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariantes = {
    oculto: { opacity: 0, y: 50 },
    visivel: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Meus projetos
        </motion.h2>

        <motion.div
          className="project-grid"
          variants={containerVariantes}
          initial="oculto"
          whileInView="visivel"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Aqui acontece a mágica: o .map() cria um card para cada item da lista */}
          {meusProjetos.map((projeto) => (
            <motion.div key={projeto.id} className="project-card" variants={cardVariantes}>
              <img src={projeto.imagem} alt={projeto.titulo} />
              <h3>{projeto.titulo}</h3>
              <p>{projeto.descricao}</p>
              
              <div className="tech-icons">
                {/* Outro .map para renderizar os ícones de tecnologia dinamicamente */}
                {projeto.tecnologias.map((tech, index) => (
                  <i key={index} className={tech.classe} title={tech.titulo}></i>
                ))}
              </div>

              {/* Só renderiza a área de botões se existir algum link cadastrado */}
              {(projeto.linkDeploy || projeto.linkGithub) && (
                <div className="buttons">
                  {projeto.linkDeploy && (
                    <a href={projeto.linkDeploy} target="_blank" rel="noreferrer" className="btn">
                      Ver projeto
                    </a>
                  )}
                  {projeto.linkGithub && (
                    <a href={projeto.linkGithub} target="_blank" rel="noreferrer" className="btn btn-outline">
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projetos;