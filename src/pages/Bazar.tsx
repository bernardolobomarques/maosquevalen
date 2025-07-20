import React from 'react';
import { MapPin, Clock, Instagram, Heart, Gift, Users, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Bazar.css';

const Bazar: React.FC = () => {
  const categories = [
    {
      name: "Roupas Femininas",
      description: "Blusas, calças, vestidos, saias e acessórios",
      image: "/api/placeholder/300/200",
      price: "A partir de R$ 5"
    },
    {
      name: "Roupas Masculinas", 
      description: "Camisas, calças, bermudas e camisetas",
      image: "/api/placeholder/300/200",
      price: "A partir de R$ 8"
    },
    {
      name: "Roupas Infantis",
      description: "Roupas para bebês, crianças e adolescentes",
      image: "/api/placeholder/300/200", 
      price: "A partir de R$ 3"
    },
    {
      name: "Calçados",
      description: "Sapatos, tênis, sandálias para toda família",
      image: "/api/placeholder/300/200",
      price: "A partir de R$ 10"
    },
    {
      name: "Livros",
      description: "Literatura, didáticos, infantis e técnicos",
      image: "/api/placeholder/300/200",
      price: "A partir de R$ 2"
    },
    {
      name: "Objetos de Casa",
      description: "Decoração, utensílios e eletrônicos",
      image: "/api/placeholder/300/200",
      price: "A partir de R$ 5"
    }
  ];

  const instagramPosts = [
    { id: 1, image: "/api/placeholder/200/200", caption: "Nova coleção de roupas femininas chegou!" },
    { id: 2, image: "/api/placeholder/200/200", caption: "Livros infantis com preços especiais" },
    { id: 3, image: "/api/placeholder/200/200", caption: "Calçados em ótimo estado para toda família" },
    { id: 4, image: "/api/placeholder/200/200", caption: "Objetos de decoração únicos" },
    { id: 5, image: "/api/placeholder/200/200", caption: "Roupas infantis fofinhas" },
    { id: 6, image: "/api/placeholder/200/200", caption: "Promoção especial nesta semana!" }
  ];

  const donationProcess = [
    {
      step: 1,
      title: "Entre em Contato",
      description: "Ligue ou mande WhatsApp para agendar sua doação"
    },
    {
      step: 2,
      title: "Separe os Itens",
      description: "Organize as roupas e objetos que deseja doar"
    },
    {
      step: 3,
      title: "Entrega ou Coleta",
      description: "Traga até o bazar ou agendamos a coleta"
    },
    {
      step: 4,
      title: "Transformação",
      description: "Seus itens viram renda para nossos projetos sociais"
    }
  ];

  return (
    <div className="bazar-page">
      {/* Hero Section */}
      <section className="bazar-hero">
        <div className="container">
          <div className="bazar-hero-content">
            <h1>Bazar Mãos que Valen</h1>
            <p>
              Roupas, livros e objetos de qualidade com preços acessíveis. 
              Toda a renda é revertida para nossos projetos sociais.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <Heart size={24} />
                <div>
                  <span className="stat-number">100%</span>
                  <span className="stat-label">da renda para projetos</span>
                </div>
              </div>
              <div className="stat">
                <Gift size={24} />
                <div>
                  <span className="stat-number">500+</span>
                  <span className="stat-label">itens disponíveis</span>
                </div>
              </div>
              <div className="stat">
                <Users size={24} />
                <div>
                  <span className="stat-number">50+</span>
                  <span className="stat-label">clientes por semana</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informações Práticas */}
      <section className="section">
        <div className="container">
          <div className="info-section">
            <div className="info-card location">
              <div className="info-icon">
                <MapPin size={32} />
              </div>
              <h3>Localização</h3>
              <p>Rua das Flores, 123<br />Centro - São Paulo/SP</p>
              <button className="btn btn-outline">Ver no Mapa</button>
            </div>

            <div className="info-card hours">
              <div className="info-icon">
                <Clock size={32} />
              </div>
              <h3>Horário de Funcionamento</h3>
              <div className="schedule">
                <p><strong>Terça a Sexta:</strong> 9h às 17h</p>
                <p><strong>Sábado:</strong> 9h às 15h</p>
                <p><strong>Domingo e Segunda:</strong> Fechado</p>
              </div>
            </div>

            <div className="info-card contact">
              <div className="info-icon">
                <Phone size={32} />
              </div>
              <h3>Contato</h3>
              <p>WhatsApp: (11) 99999-9999</p>
              <p>Instagram: @bazarmaosquevalen</p>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias de Produtos */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2>O que você encontra no nosso bazar</h2>
            <p>Produtos de qualidade com preços que cabem no seu bolso</p>
          </div>

          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                  <div className="category-price">{category.price}</div>
                </div>
                <div className="category-content">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feed do Instagram */}
      <section className="section">
        <div className="container">
          <div className="instagram-section">
            <div className="section-header text-center">
              <h2>Siga no Instagram</h2>
              <p>Acompanhe as novidades e promoções do bazar</p>
              <a 
                href="https://instagram.com/bazarmaosquevalen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="instagram-handle"
              >
                <Instagram size={24} />
                @bazarmaosquevalen
              </a>
            </div>

            <div className="instagram-grid">
              {instagramPosts.map((post) => (
                <div key={post.id} className="instagram-post">
                  <img src={post.image} alt={post.caption} />
                  <div className="post-overlay">
                    <p>{post.caption}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a 
                href="https://instagram.com/bazarmaosquevalen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Instagram size={18} />
                Ver mais no Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Como Doar Itens */}
      <section className="section section-alt">
        <div className="container">
          <div className="donation-section">
            <div className="donation-content">
              <h2>Como Doar Itens para o Bazar</h2>
              <p>
                Seus itens em bom estado podem gerar renda para nossos projetos sociais. 
                O processo de doação é simples e rápido!
              </p>

              <div className="donation-process">
                {donationProcess.map((step) => (
                  <div key={step.step} className="process-step">
                    <div className="step-number">{step.step}</div>
                    <div className="step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="donation-guidelines">
                <h3>Itens que Aceitamos</h3>
                <div className="guidelines-grid">
                  <div className="guideline accepted">
                    <h4>✓ Aceitamos</h4>
                    <ul>
                      <li>Roupas em bom estado</li>
                      <li>Calçados limpos</li>
                      <li>Livros conservados</li>
                      <li>Objetos de decoração</li>
                      <li>Eletrônicos funcionando</li>
                      <li>Brinquedos em bom estado</li>
                    </ul>
                  </div>
                  <div className="guideline not-accepted">
                    <h4>✗ Não Aceitamos</h4>
                    <ul>
                      <li>Roupas rasgadas ou muito gastas</li>
                      <li>Calçados muito desgastados</li>
                      <li>Eletrônicos quebrados</li>
                      <li>Itens sujos ou com mau cheiro</li>
                      <li>Roupas íntimas usadas</li>
                      <li>Objetos perigosos</li>
                    </ul>
                  </div>
                </div>
              </div>

              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                Quero Doar Itens
              </a>
            </div>

            <div className="donation-image">
              <img src="/api/placeholder/500/400" alt="Doação de itens para o bazar" />
            </div>
          </div>
        </div>
      </section>

      {/* Impacto do Bazar */}
      <section className="section">
        <div className="container">
          <div className="impact-section">
            <div className="section-header text-center">
              <h2>O Impacto do Bazar</h2>
              <p>Veja como suas compras e doações fazem a diferença</p>
            </div>

            <div className="impact-grid">
              <div className="impact-item">
                <div className="impact-icon">
                  <Heart size={48} />
                </div>
                <h3>Sustenta Projetos</h3>
                <p>100% da renda financia nossos projetos de alimentação e educação</p>
              </div>

              <div className="impact-item">
                <div className="impact-icon">
                  <Users size={48} />
                </div>
                <h3>Gera Empregos</h3>
                <p>Oferece oportunidade de trabalho para pessoas da comunidade</p>
              </div>

              <div className="impact-item">
                <div className="impact-icon">
                  <Gift size={48} />
                </div>
                <h3>Economiza Recursos</h3>
                <p>Promove a reutilização e evita o desperdício de materiais</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Visite Nosso Bazar</h2>
            <p>
              Venha conhecer nosso espaço, encontre produtos incríveis e contribua 
              para uma causa que transforma vidas.
            </p>
            <div className="cta-actions">
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                Agendar Visita
              </a>
              <Link to="/como-ajudar" className="btn btn-outline btn-lg">
                Outras Formas de Ajudar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bazar;
