import React, { useState } from 'react';
import { Heart, Users, HandHeart, Gift, Copy, Check, CreditCard, Building, DollarSign } from 'lucide-react';
import './HowToHelp.css';

const HowToHelp: React.FC = () => {
  const [copiedPix, setCopiedPix] = useState(false);

  const copyPixKey = () => {
    const pixKey = "39.341.418/0001-06";
    navigator.clipboard.writeText(pixKey);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
  };

  return (
    <div className="help-page">
      {/* Hero Section */}
      <section className="help-hero">
        <div className="container">
          <div className="help-hero-content">
            <h1>Como Ajudar</h1>
            <p>
              Sua contribuição pode transformar vidas. Conheça as diferentes formas 
              de fazer parte da nossa missão e ajudar quem mais precisa.
            </p>
          </div>
        </div>
      </section>

      {/* Doação Section */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Formas de Doação</h2>
            <p>Escolha a forma mais conveniente para você contribuir</p>
          </div>

          <div className="donation-section">
            {/* PIX Section */}
            <div className="pix-section">
              <h3>
                <CreditCard size={24} />
                Doação via PIX
              </h3>
              <p>A forma mais rápida e prática de ajudar</p>
              
              <div className="pix-container">
                <div className="pix-label">CNPJ</div>
                <div className="pix-key">39.341.418/0001-06</div>
                <button 
                  className={`copy-btn ${copiedPix ? 'copied' : ''}`}
                  onClick={copyPixKey}
                >
                  {copiedPix ? <Check size={16} /> : <Copy size={16} />}
                  {copiedPix ? 'Copiado!' : 'Copiar Chave'}
                </button>
              </div>

              <div className="pix-instructions">
                💡 Abra seu app do banco, escolha PIX e cole a chave CNPJ acima
              </div>
            </div>

            {/* Informações Bancárias */}
            <div className="donation-info">
              <h4>
                <Building size={24} />
                Transferência Bancária
              </h4>
              <p>Para doações via transferência bancária tradicional</p>
              
              <div className="bank-info">
                <div className="bank-details">
                  <div className="bank-item">
                    <strong>Banco:</strong>
                    <span>Sicredi</span>
                  </div>
                  <div className="bank-item">
                    <strong>Agência:</strong>
                    <span>0730</span>
                  </div>
                  <div className="bank-item">
                    <strong>Conta:</strong>
                    <span>39839-3</span>
                  </div>
                  <div className="bank-item">
                    <strong>Favorecido:</strong>
                    <span>Associação Filantrópica Mãos que Valen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="volunteer-section">
            <div className="volunteer-content">
              <h2>
                <Users size={32} />
                Seja Voluntário
              </h2>
              <p>
                Doe seu tempo e talento para fazer a diferença na vida de pessoas em situação de vulnerabilidade. 
                Temos diversas oportunidades que se adequam ao seu perfil e disponibilidade.
              </p>

              <div className="volunteer-opportunities">
                <h3>Oportunidades de Voluntariado</h3>
                <ul>
                  <li>Atendimento e acolhimento no bazar</li>
                  <li>Organização e triagem de doações</li>
                  <li>Apoio em eventos e campanhas</li>
                  <li>Atividades educativas e oficinas</li>
                  <li>Suporte administrativo</li>
                  <li>Marketing e comunicação</li>
                </ul>
              </div>

              <div className="volunteer-benefits">
                <h3>Como Voluntário, Você</h3>
                <ul>
                  <li>Faz parte de uma causa transformadora</li>
                  <li>Desenvolve novas habilidades</li>
                  <li>Conhece pessoas incríveis</li>
                  <li>Recebe certificado de participação</li>
                  <li>Participa de capacitações</li>
                </ul>
              </div>

              <a href="https://wa.me/5541991536163?text=Olá! Gostaria de ser voluntário na Associação Filantrópica Mãos que Valen. Podemos conversar?" className="btn btn-primary">
                <HandHeart size={20} />
                Quero ser Voluntário
              </a>
            </div>

            <div className="volunteer-image">
              <img src="/api/placeholder/500/400" alt="Voluntários em ação" />
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>
              <Gift size={32} />
              Doação de Materiais
            </h2>
            <p>Sua doação de materiais ajuda a sustentar nossos projetos</p>
          </div>

          <div className="materials-grid">
            <div className="material-card">
              <h3>Roupas e Calçados</h3>
              <ul>
                <li>Roupas em bom estado</li>
                <li>Calçados limpos</li>
                <li>Acessórios</li>
                <li>Roupas de cama</li>
                <li>Toalhas</li>
              </ul>
            </div>

            <div className="material-card">
              <h3>Alimentos Não-Perecíveis</h3>
              <ul>
                <li>Arroz, feijão, macarrão</li>
                <li>Óleo, açúcar, sal</li>
                <li>Enlatados</li>
                <li>Leite em pó</li>
                <li>Produtos de higiene</li>
              </ul>
            </div>

            <div className="material-card">
              <h3>Móveis e Eletrodomésticos</h3>
              <ul>
                <li>Móveis em bom estado</li>
                <li>Eletrodomésticos funcionando</li>
                <li>Utensílios domésticos</li>
                <li>Livros e materiais escolares</li>
                <li>Brinquedos</li>
              </ul>
            </div>

            <div className="material-card">
              <h3>Material de Limpeza</h3>
              <ul>
                <li>Produtos de limpeza</li>
                <li>Sabão em pó</li>
                <li>Detergente</li>
                <li>Desinfetante</li>
                <li>Papel higiênico</li>
              </ul>
            </div>
          </div>

          <div className="donation-info">
            <div className="info-card">
              <h3>Como Doar Materiais</h3>
              <ol>
                <li>Entre em contato conosco pelo WhatsApp</li>
                <li>Informe que tipo de material deseja doar</li>
                <li>Agendamos a coleta ou você traz no bazar</li>
                <li>Emitimos comprovante de doação</li>
              </ol>
              <a href="https://wa.me/5541991536163?text=Olá! Gostaria de agendar uma doação de materiais para a Associação Filantrópica Mãos que Valen." className="btn btn-primary">
                <HandHeart size={20} />
                Agendar Doação
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bazar Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="bazar-section">
            <div className="bazar-content">
              <h2>
                <DollarSign size={32} />
                Bazar Mãos que Valen
              </h2>
              <p>
                Visite nosso bazar e encontre peças únicas por preços acessíveis. 
                Toda a renda é revertida para nossos projetos sociais.
              </p>

              <div className="bazar-features">
                <div className="feature">
                  <Heart size={20} />
                  <span>Roupas e acessórios selecionados</span>
                </div>
                <div className="feature">
                  <Gift size={20} />
                  <span>Preços justos e acessíveis</span>
                </div>
                <div className="feature">
                  <Users size={20} />
                  <span>Atendimento humanizado</span>
                </div>
              </div>

              <div className="bazar-info">
                <h3>Informações do Bazar</h3>
                <p><strong>Endereço:</strong> Rua Francisco Naldony 238 e 220 - Campina do Siqueira, Curitiba/PR</p>
                <p><strong>Horário:</strong> Segunda a Sexta, das 9:30 às 17h</p>
                <p><strong>Instagram:</strong> @bazarmaosquevalen</p>
              </div>

              <a href="https://wa.me/5541991536163?text=Olá! Gostaria de informações sobre como chegar ao Bazar Mãos que Valen." className="btn btn-primary">
                Como Chegar
              </a>
            </div>

            <div className="bazar-image">
              <img src="/api/placeholder/500/400" alt="Bazar Mãos que Valen" />
            </div>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="section">
        <div className="container">
          <div className="share-section">
            <div className="share-content">
              <Heart size={48} />
              <h2>Compartilhe Nossa Causa</h2>
              <p>
                Ajude-nos a alcançar mais pessoas! Compartilhe nosso trabalho em suas redes sociais 
                e convide amigos e familiares para fazerem parte desta corrente do bem.
              </p>

              <div className="social-share">
                <a 
                  href="https://www.facebook.com/maosquevalen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="share-btn facebook"
                >
                  <Heart size={20} />
                  Seguir no Facebook
                </a>
                <a 
                  href="https://www.instagram.com/maosquevalen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="share-btn instagram"
                >
                  <Heart size={20} />
                  Seguir no Instagram
                </a>
                <a 
                  href="https://wa.me/?text=Conheça o trabalho incrível da Associação Filantrópica Mãos que Valen! Eles transformam vidas em Curitiba. Saiba mais: https://maosquevalen.org.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="share-btn whatsapp"
                >
                  <Heart size={20} />
                  Compartilhar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="partnership-section">
            <div className="partnership-content">
              <Building size={48} />
              <h2>Parcerias Empresariais</h2>
              <p>
                Sua empresa pode fazer parte desta transformação social. Oferecemos diferentes 
                modalidades de parceria que agregam valor à sua marca e geram impacto positivo.
              </p>

              <div className="partnership-types">
                <div className="type">
                  <h3>Patrocínio de Projetos</h3>
                  <p>Apoie projetos específicos e receba relatórios de impacto detalhados.</p>
                </div>
                <div className="type">
                  <h3>Voluntariado Corporativo</h3>
                  <p>Engaje seus colaboradores em ações sociais e fortaleça o espírito de equipe.</p>
                </div>
                <div className="type">
                  <h3>Doação de Produtos</h3>
                  <p>Doe produtos da sua empresa e ajude diretamente as famílias atendidas.</p>
                </div>
              </div>

              <a href="https://wa.me/5541991536163?text=Olá! Minha empresa gostaria de ser parceira da Associação Filantrópica Mãos que Valen. Podemos conversar sobre as modalidades de parceria?" className="btn btn-primary">
                <Building size={20} />
                Seja Nosso Parceiro
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToHelp;
