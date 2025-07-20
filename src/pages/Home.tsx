import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Gift, MapPin, ArrowRight, Instagram } from 'lucide-react';
import logoImage from '../assets/logo-vector.png';
import './Home.css';

const Home: React.FC = () => {
  const projects = [
      {id: 1, title: "Alimentação Solidária", description: "Distribuição de cestas básicas e refeições para famílias em vulnerabilidade social.", image: logoImage, beneficiados: "240 famílias", status: "Ativo"},
      {id: 2, title: "Educação Para Todos", description: "Apoio escolar e material didático para crianças e adolescentes da comunidade.", image: logoImage, beneficiados: "180 crianças", status: "Ativo"},
      {id: 3, title: "Bazar Solidário", description: "Venda de roupas e objetos doados com preços acessíveis para a comunidade.", image: logoImage, beneficiados: "Comunidade", status: "Permanente"}
  ];

  const impactNumbers = [
    { number: "240", label: "Famílias Atendidas", icon: <Users size={24} /> },
    { number: "960", label: "Refeições/Dia", icon: <Heart size={24} /> },
    { number: "180", label: "Crianças na Escola", icon: <Gift size={24} /> },
    { number: "3", label: "Comunidades", icon: <MapPin size={24} /> }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Transformando Vidas com 
                <span className="text-secondary"> Amor e Solidariedade</span>
              </h1>
              <p className="hero-description">
                A ONG Mãos que Valen trabalha incansavelmente para levar esperança, 
                alimentação e educação para famílias em situação de vulnerabilidade social. 
                Juntos, podemos fazer a diferença.
              </p>
              <div className="hero-actions">
                <Link to="/como-ajudar" className="btn btn-primary btn-lg">
                  <Heart size={20} />
                  Fazer Doação
                </Link>
                <Link to="/sobre" className="btn btn-outline btn-lg hero-secondary-btn">
                  Conhecer Nossa História
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Números de Impacto */}
      <section className="section impact-numbers">
        <div className="impact-grid">
          {impactNumbers.map((item, index) => (
            <div key={index} className="impact-card">
              <div className="impact-icon">{item.icon}</div>
              <div className="impact-number">{item.number}</div>
              <div className="impact-label">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="section section-alt">
        <div className="container">
          <div className="about-section">
            <div className="about-content">
              <h2>Nossa Missão</h2>
              <p>
                A Mãos que Valen nasceu do desejo de transformar realidades e oferecer 
                dignidade para famílias que mais precisam. Acreditamos que pequenos gestos 
                de amor podem gerar grandes transformações.
              </p>
              <p>
                Através de projetos focados em alimentação, educação e geração de renda, 
                trabalhamos para construir uma sociedade mais justa e solidária.
              </p>
              <Link to="/sobre" className="btn btn-primary">
                Saiba Mais
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="about-image">
              <img src="/api/placeholder/500/400" alt="Voluntários da Mãos que Valen" />
            </div>
          </div>
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Nossos Projetos</h2>
            <p>Conheça as iniciativas que estão transformando vidas em nossa comunidade</p>
          </div>
          
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-status">{project.status}</div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-meta">
                    <span className="beneficiados">{project.beneficiados}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <Link to="/projetos" className="btn btn-outline">
              Ver Todos os Projetos
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Bazar em Destaque */}
      <section className="section section-alt">
        <div className="container">
          <div className="bazar-highlight">
            <div className="bazar-content">
              <h2>Bazar Mãos que Valen</h2>
              <p>
                <strong>Compre com propósito!</strong> Nosso bazar oferece produtos de qualidade 
                com preços justos. Ideal para quem busca peças únicas e quer fazer a diferença. 
                <strong>100% da renda é revertida para nossos projetos sociais.</strong>
              </p>
              <ul className="bazar-features">
                <li>Roupas de qualidade para toda a família</li>
                <li>Livros, decoração e antiguidades</li>
                <li>Peças únicas e especiais</li>
                <li>Preços justos e acessíveis</li>
                <li>Sua compra sustenta nossos projetos</li>
              </ul>
              <div className="bazar-actions">
                <Link to="/bazar" className="btn btn-primary">
                  Conhecer o Bazar
                </Link>
                <a 
                  href="https://instagram.com/bazarmaosquevalen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <Instagram size={18} />
                  @bazarmaosquevalen
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Faça Parte Dessa Transformação</h2>
            <p>
              Sua ajuda pode mudar a vida de uma família inteira. 
              Junte-se a nós nessa missão de amor e solidariedade.
            </p>
            <div className="cta-actions">
              <Link to="/como-ajudar" className="btn btn-secondary btn-lg">
                <Heart size={20} />
                Quero Ajudar
              </Link>
              <Link to="/contato" className="btn btn-outline btn-lg">
                Saber Mais
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
