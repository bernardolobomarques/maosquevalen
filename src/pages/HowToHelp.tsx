import React, { useState } from 'react';
import { 
  Heart, 
  Users, 
  Gift, 
  Share2, 
  Building, 
  CheckCircle,
  Copy,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './HowToHelp.css';

const HowToHelp: React.FC = () => {
  const [selectedDonation, setSelectedDonation] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState<'unica' | 'mensal'>('unica');
  const [copied, setCopied] = useState(false);

  const donationAmounts = [25, 50, 100, 200];
  const pixKey = "39.341.418.0001-06";
  const pixCnpj = "39.341.418/0001-06";
  const bankInfo = {
    bank: "Sicredi",
    agency: "0730",
    account: "39839-3",
    accountType: "Conta Corrente"
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const volunteerBenefits = [
    "Experiência em projetos sociais",
    "Certificado de participação",
    "Networking com pessoas engajadas",
    "Desenvolvimento pessoal",
    "Impacto direto na comunidade"
  ];

  const materialDonations = [
    { category: "Alimentos", items: ["Cestas básicas", "Leite em pó", "Açúcar", "Óleo", "Arroz", "Feijão"] },
    { category: "Roupas", items: ["Roupas infantis", "Roupas adultas", "Calçados", "Cobertores", "Agasalhos"] },
    { category: "Escolar", items: ["Cadernos", "Lápis", "Canetas", "Material didático", "Mochilas", "Livros"] },
    { category: "Higiene", items: ["Sabonete", "Pasta de dente", "Xampu", "Fraldas", "Absorventes"] }
  ];

  return (
    <div className="how-to-help-page">
      {/* Hero Section */}
      <section className="help-hero">
        <div className="container">
          <div className="help-hero-content">
            <h1>Como Você Pode Ajudar</h1>
            <p>
              Existem diversas formas de contribuir com nossa missão. 
              Escolha a que mais combina com você e faça parte dessa transformação.
            </p>
          </div>
        </div>
      </section>

      {/* Doações Financeiras */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Doações Financeiras</h2>
            <p>Sua doação nos ajuda a manter e expandir nossos projetos sociais</p>
          </div>

          <div className="donation-section">
            <div className="donation-form">
              <div className="donation-type-selector">
                <button 
                  className={`type-btn ${donationType === 'unica' ? 'active' : ''}`}
                  onClick={() => setDonationType('unica')}
                >
                  Doação Única
                </button>
                <button 
                  className={`type-btn ${donationType === 'mensal' ? 'active' : ''}`}
                  onClick={() => setDonationType('mensal')}
                >
                  Doação Mensal
                </button>
              </div>

              <div className="amount-selector">
                <div className="preset-amounts">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      className={`amount-btn ${selectedDonation === amount ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedDonation(amount);
                        setCustomAmount('');
                      }}
                    >
                      R$ {amount}
                    </button>
                  ))}
                </div>
                <div className="custom-amount">
                  <input
                    type="number"
                    placeholder="Outro valor"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedDonation(null);
                    }}
                    min="1"
                  />
                </div>
              </div>

              <div className="donation-impact">
                {selectedDonation === 25 && (
                  <p>Com R$ 25 você ajuda a alimentar uma família por 3 dias</p>
                )}
                {selectedDonation === 50 && (
                  <p>Com R$ 50 você garante material escolar para uma criança</p>
                )}
                {selectedDonation === 100 && (
                  <p>Com R$ 100 você patrocina uma cesta básica completa</p>
                )}
                {selectedDonation === 200 && (
                  <p>Com R$ 200 você sustenta um projeto por uma semana</p>
                )}
              </div>

              <div className="donation-info">
                <h4>💰 Como Fazer sua Doação</h4>
                <p>Para fazer sua doação, utilize os dados bancários abaixo ou o PIX ao lado:</p>
                <div className="bank-info">
                  <h5>Dados Bancários</h5>
                  <div className="bank-details">
                    <p><strong>Banco:</strong> {bankInfo.bank}</p>
                    <p><strong>Agência:</strong> {bankInfo.agency}</p>
                    <p><strong>Conta:</strong> {bankInfo.account}</p>
                    <p><strong>Tipo:</strong> {bankInfo.accountType}</p>
                    <p><strong>CNPJ:</strong> {pixCnpj}</p>
                    <p><strong>Favorecido:</strong> Associação Filantrópica Mãos que Valen</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pix-section">
              <h3>Doação via PIX</h3>
              <p>Forma mais rápida e sem taxas para sua doação chegar até nós</p>
              <div className="pix-key">
                <span>{pixKey}</span>
                <button 
                  className={`copy-btn ${copied ? 'copied' : ''}`}
                  onClick={handleCopyPix}
                >
                  {copied ? <CheckCircle size={18} /> : <Copy size={18} />}
                  {copied ? 'Copiado!' : 'Copiar'}
                </button>
              </div>
              <div className="qr-code">
                <img src="/api/placeholder/200/200" alt="QR Code PIX" />
                <p>Escaneie o QR Code com seu app do banco</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voluntariado */}
      <section id="voluntario" className="section section-alt">
        <div className="container">
          <div className="volunteer-section">
            <div className="volunteer-content">
              <h2>Seja um Voluntário</h2>
              <p>
                Doe seu tempo e habilidades para ajudar diretamente em nossos projetos. 
                O voluntariado é uma das formas mais gratificantes de fazer a diferença.
              </p>

              <div className="volunteer-opportunities">
                <h3>Oportunidades de Voluntariado</h3>
                <ul>
                  <li>Distribuição de alimentos</li>
                  <li>Apoio educacional para crianças</li>
                  <li>Organização de eventos</li>
                  <li>Gestão do bazar</li>
                  <li>Marketing e comunicação</li>
                  <li>Captação de recursos</li>
                </ul>
              </div>

              <div className="volunteer-benefits">
                <h3>Benefícios do Voluntariado</h3>
                <ul>
                  {volunteerBenefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <Link to="/contato" className="btn btn-primary">
                Quero ser Voluntário
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="volunteer-image">
              <img src="/api/placeholder/500/400" alt="Voluntários em ação" />
            </div>
          </div>
        </div>
      </section>

      {/* Doações Materiais */}
      <section id="materiais" className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Doações de Materiais</h2>
            <p>Doe itens que podem fazer a diferença na vida de quem precisa</p>
          </div>

          <div className="materials-grid">
            {materialDonations.map((category, index) => (
              <div key={index} className="material-card">
                <h3>{category.category}</h3>
                <ul>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="donation-info">
            <div className="info-card">
              <h3>Como Doar</h3>
              <ol>
                <li>Entre em contato conosco pelo WhatsApp</li>
                <li>Informe os itens que deseja doar</li>
                <li>Agendamos a coleta ou entrega</li>
                <li>Sua doação é distribuída para quem precisa</li>
              </ol>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                WhatsApp (11) 99999-9999
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Compre no Bazar */}
      <section className="section section-alt">
        <div className="container">
          <div className="bazar-section">
            <div className="bazar-content">
              <h2>Compre no Bazar Mãos que Valen</h2>
              <p>
                Encontre roupas, livros e objetos de qualidade com preços acessíveis. 
                Toda a renda do bazar é revertida para nossos projetos sociais.
              </p>
              
              <div className="bazar-features">
                <div className="feature">
                  <Gift size={24} />
                  <span>Produtos de qualidade</span>
                </div>
                <div className="feature">
                  <Heart size={24} />
                  <span>Preços acessíveis</span>
                </div>
                <div className="feature">
                  <Users size={24} />
                  <span>Renda para projetos</span>
                </div>
              </div>

              <div className="bazar-info">
                <h3>Informações do Bazar</h3>
                <p><strong>Endereço:</strong> Rua das Flores, 123 - Centro</p>
                <p><strong>Horário:</strong> Ter a Sáb, 9h às 17h</p>
                <p><strong>Instagram:</strong> @bazarmaosquevalen</p>
              </div>

              <Link to="/bazar" className="btn btn-primary">
                Saber Mais sobre o Bazar
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bazar-image">
              <img src="/api/placeholder/500/400" alt="Bazar Mãos que Valen" />
            </div>
          </div>
        </div>
      </section>

      {/* Divulgação */}
      <section id="divulgar" className="section">
        <div className="container">
          <div className="share-section">
            <div className="share-content text-center">
              <h2>Divulgue Nossa Causa</h2>
              <p>
                Compartilhe nossos projetos nas redes sociais e ajude a amplificar 
                nosso impacto na comunidade.
              </p>

              <div className="social-share">
                <button className="share-btn facebook">
                  <Share2 size={20} />
                  Compartilhar no Facebook
                </button>
                <button className="share-btn instagram">
                  <Share2 size={20} />
                  Compartilhar no Instagram
                </button>
                <button className="share-btn whatsapp">
                  <Share2 size={20} />
                  Compartilhar no WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parcerias Empresariais */}
      <section className="section section-alt">
        <div className="container">
          <div className="partnership-section">
            <div className="partnership-content">
              <Building size={48} />
              <h2>Parcerias Empresariais</h2>
              <p>
                Sua empresa pode fazer parte dessa transformação social. 
                Oferecemos diferentes modalidades de parceria corporativa.
              </p>
              
              <div className="partnership-types">
                <div className="type">
                  <h3>Patrocínio de Projetos</h3>
                  <p>Apoie financeiramente nossos projetos específicos</p>
                </div>
                <div className="type">
                  <h3>Voluntariado Corporativo</h3>
                  <p>Engaje seus colaboradores em ações voluntárias</p>
                </div>
                <div className="type">
                  <h3>Doação de Produtos</h3>
                  <p>Doe produtos da sua empresa para nossas ações</p>
                </div>
              </div>

              <Link to="/contato" className="btn btn-primary">
                Quero ser Parceiro
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToHelp;
