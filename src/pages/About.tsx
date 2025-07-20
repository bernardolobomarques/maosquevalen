import React from 'react';
import { Heart, Users, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart size={32} />,
      title: "Amor ao Próximo",
      description: "Acreditamos que o amor é a força motriz de todas as nossas ações e projetos."
    },
    {
      icon: <Users size={32} />,
      title: "Solidariedade",
      description: "Unimos pessoas em prol de uma causa comum: transformar vidas e comunidades."
    },
    {
      icon: <Target size={32} />,
      title: "Transparência",
      description: "Prezamos pela clareza em nossas ações e prestação de contas à sociedade."
    },
    {
      icon: <Award size={32} />,
      title: "Compromisso",
      description: "Temos o compromisso de impactar positivamente a vida das pessoas que atendemos."
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Fundação da ONG",
      description: "Início das atividades com foco na distribuição de alimentos durante a pandemia."
    },
    {
      year: "2021",
      title: "Primeiro Bazar",
      description: "Abertura do Bazar Mãos que Valen, gerando renda para sustentar os projetos."
    },
    {
      year: "2022",
      title: "Expansão dos Projetos",
      description: "Inclusão de projetos educacionais e atendimento a mais comunidades."
    },
    {
      year: "2024",
      title: "Reconhecimento",
      description: "Certificação como organização de utilidade pública municipal."
    }
  ];

  const team = [
    {
      name: "Maria Santos",
      role: "Fundadora e Presidente",
      description: "Assistente Social com mais de 15 anos de experiência em projetos sociais."
    },
    {
      name: "João Silva",
      role: "Coordenador de Projetos",
      description: "Pedagogo especializado em desenvolvimento comunitário e educação social."
    },
    {
      name: "Ana Costa",
      role: "Coordenadora do Bazar",
      description: "Administradora responsável pela gestão e sustentabilidade do bazar."
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>Nossa História</h1>
            <p>
              A Mãos que Valen nasceu do desejo de transformar vidas e oferecer dignidade 
              para quem mais precisa. Conheça nossa jornada de amor e solidariedade.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="section">
        <div className="container">
          <div className="story-section">
            <div className="story-content">
              <h2>Como Tudo Começou</h2>
              <p>
                Em 2020, durante os momentos mais difíceis da pandemia, um grupo de amigos 
                se reuniu com um objetivo simples, mas poderoso: ajudar as famílias que 
                estavam passando necessidades em nossa comunidade.
              </p>
              <p>
                O que começou como uma iniciativa informal de distribuição de cestas básicas 
                rapidamente cresceu e se tornou uma organização estruturada, capaz de impactar 
                centenas de vidas.
              </p>
              <p>
                Hoje, a Mãos que Valen é uma referência em trabalho social na região, 
                desenvolvendo projetos que vão desde segurança alimentar até educação 
                e geração de renda para as famílias atendidas.
              </p>
            </div>
            <div className="story-image">
              <img src="/api/placeholder/500/400" alt="Início da ONG Mãos que Valen" />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="section section-alt">
        <div className="container">
          <div className="mvv-section">
            <div className="mvv-item">
              <h3>Nossa Missão</h3>
              <p>
                Promover a dignidade humana através de ações solidárias que ofereçam 
                alimentação, educação e oportunidades de desenvolvimento para famílias 
                em situação de vulnerabilidade social.
              </p>
            </div>
            <div className="mvv-item">
              <h3>Nossa Visão</h3>
              <p>
                Ser uma organização reconhecida pela excelência em projetos sociais, 
                contribuindo para a construção de uma sociedade mais justa e igualitária.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Nossos Valores</h2>
            <p>Os princípios que guiam todas as nossas ações e decisões</p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2>Nossa Trajetória</h2>
            <p>Marcos importantes da nossa jornada</p>
          </div>
          
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Nossa Equipe</h2>
            <p>Pessoas dedicadas que fazem a diferença acontecer</p>
          </div>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">
                  <img src="/api/placeholder/150/150" alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificações */}
      <section className="section section-alt">
        <div className="container">
          <div className="certifications">
            <div className="cert-content">
              <h2>Transparência e Certificações</h2>
              <p>
                A Mãos que Valen possui certificação como organização de utilidade 
                pública municipal e segue todas as normas legais para organizações 
                do terceiro setor.
              </p>
              <ul className="cert-list">
                <li>CNPJ: 00.000.000/0001-00</li>
                <li>Utilidade Pública Municipal</li>
                <li>Certificado de Entidade Beneficente</li>
                <li>Prestação de contas anual</li>
              </ul>
            </div>
            <div className="cert-image">
              <img src="/api/placeholder/400/300" alt="Certificações da ONG" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Faça Parte da Nossa História</h2>
            <p>
              Junte-se a nós nessa missão de transformar vidas através do amor e da solidariedade. 
              Sua participação pode fazer toda a diferença.
            </p>
            <div className="cta-actions">
              <Link to="/como-ajudar" className="btn btn-secondary btn-lg">
                <Heart size={20} />
                Quero Ajudar
              </Link>
              <Link to="/contato" className="btn btn-outline btn-lg">
                Entre em Contato
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
