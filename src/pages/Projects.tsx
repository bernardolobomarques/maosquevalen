import React from 'react';
import { MapPin, Users, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo-vector.png';
import './Projects.css';

const Projects: React.FC = () => {
  // Função para abrir localização no Google Maps
  const openInMaps = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(mapsUrl, '_blank');
  };

  const activeProjects = [
    {
      id: 1,
      title: "Alimentação Solidária",
      description: "Distribuição de cestas básicas e refeições para famílias em vulnerabilidade social na região central da cidade.",
      image: logoImage,
      beneficiados: "240 famílias",
      localization: "Centro, Jardim das Flores",
      address: "Rua das Flores, 123, Centro",
      startDate: "Mar/2020",
      status: "Ativo",
      impact: "960 refeições distribuídas por dia"
    },
    {
      id: 2,
      title: "Educação Para Todos",
      description: "Apoio escolar, material didático e reforço educacional para crianças e adolescentes da comunidade.",
      image: logoImage,
      beneficiados: "180 crianças",
      localization: "Vila Esperança, Jardim das Flores",
      address: "Rua da Educação, 456, Vila Esperança",
      startDate: "Jun/2021",
      status: "Ativo",
      impact: "95% de melhoria no rendimento escolar"
    },
    {
      id: 3,
      title: "Bazar Solidário",
      description: "Venda de roupas e objetos doados com preços acessíveis, gerando renda para manter os projetos sociais.",
      image: logoImage,
      beneficiados: "Comunidade em geral",
      localization: "Centro - Rua das Flores, 123",
      address: "Rua das Flores, 123, Centro",
      startDate: "Nov/2021",
      status: "Permanente",
      impact: "R$ 3.500 arrecadados mensalmente"
    }
  ];

  const completedProjects = [
    {
      title: "Natal Solidário 2023",
      description: "Distribuição de presentes e ceia natalina para 150 famílias",
      year: "2023",
      beneficiados: "150 famílias"
    },
    {
      title: "Volta às Aulas 2024",
      description: "Entrega de kits escolares completos para crianças carentes",
      year: "2024",
      beneficiados: "200 crianças"
    },
    {
      title: "Campanha do Agasalho 2023",
      description: "Arrecadação e distribuição de roupas de inverno",
      year: "2023",
      beneficiados: "300 pessoas"
    }
  ];

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="container">
          <div className="projects-hero-content">
            <h1>Nossos Projetos</h1>
            <p>
              Conheça as iniciativas que estão transformando vidas em nossa comunidade 
              através de ações concretas de amor e solidariedade.
            </p>
          </div>
        </div>
      </section>

      {/* Mapa de Atuação */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Onde Atuamos</h2>
            <p>Nossa presença em diferentes bairros da cidade</p>
          </div>
          
          <div className="map-container">
            <div className="map-placeholder">
              <MapPin size={48} />
              <h3>Mapa Interativo</h3>
              <p>Atuamos em 3 comunidades principais: Centro, Vila Esperança e Jardim das Flores</p>
              <div className="locations-list">
                <div className="location-item">
                  <div className="location-info">
                    <MapPin size={16} />
                    <span>Centro - Sede e Bazar</span>
                  </div>
                  <button 
                    className="btn btn-outline btn-sm"
                    onClick={() => openInMaps("Rua das Flores, 123, Centro")}
                  >
                    Ver no Mapa
                  </button>
                </div>
                <div className="location-item">
                  <div className="location-info">
                    <MapPin size={16} />
                    <span>Vila Esperança - Projetos Educacionais</span>
                  </div>
                  <button 
                    className="btn btn-outline btn-sm"
                    onClick={() => openInMaps("Rua da Educação, 456, Vila Esperança")}
                  >
                    Ver no Mapa
                  </button>
                </div>
                <div className="location-item">
                  <div className="location-info">
                    <MapPin size={16} />
                    <span>Jardim das Flores - Distribuição de Alimentos</span>
                  </div>
                  <button 
                    className="btn btn-outline btn-sm"
                    onClick={() => openInMaps("Rua da Solidariedade, 789, Jardim das Flores")}
                  >
                    Ver no Mapa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Ativos */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2>Projetos Ativos</h2>
            <p>Iniciativas em andamento que você pode apoiar</p>
          </div>
          
          <div className="projects-grid">
            {activeProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-status active">{project.status}</div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-meta">
                    <div className="meta-item">
                      <Users size={16} />
                      <span>{project.beneficiados}</span>
                    </div>
                    <div className="meta-item has-button">
                      <div className="meta-content">
                        <MapPin size={16} />
                        <span>{project.localization}</span>
                      </div>
                      <button 
                        className="btn btn-outline btn-sm"
                        onClick={() => openInMaps(project.address)}
                        title="Ver localização no mapa"
                      >
                        Ver Mapa
                      </button>
                    </div>
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>Desde {project.startDate}</span>
                    </div>
                  </div>
                  
                  <div className="project-impact">
                    <strong>Impacto: </strong>{project.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos Concluídos */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Projetos Realizados</h2>
            <p>Histórico das nossas conquistas e realizações</p>
          </div>
          
          <div className="completed-projects">
            {completedProjects.map((project, index) => (
              <div key={index} className="completed-project">
                <div className="project-year">{project.year}</div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="beneficiados">
                    <Users size={16} />
                    <span>{project.beneficiados}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria de Fotos */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2>Galeria de Momentos</h2>
            <p>Registros do nosso trabalho e dos sorrisos que ajudamos a criar</p>
          </div>
          
          <div className="gallery-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="gallery-item">
                <img src={`/api/placeholder/300/250`} alt={`Projeto ${item}`} />
                <div className="gallery-overlay">
                  <p>Momento especial do nosso trabalho</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Apoiar */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Apoie Nossos Projetos</h2>
            <p>
              Sua contribuição, seja financeira ou como voluntário, 
              é fundamental para continuarmos transformando vidas.
            </p>
            <div className="cta-actions">
              <Link to="/como-ajudar" className="btn btn-secondary btn-lg">
                Fazer Doação
              </Link>
              <Link to="/contato" className="btn btn-outline btn-lg">
                Ser Voluntário
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
