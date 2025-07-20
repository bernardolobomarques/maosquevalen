import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/logo-vector.png';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Informações da ONG */}
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logo} alt="Mãos que Valen" className="footer-logo-img" />
              <span className="footer-logo-text">Mãos que Valen</span>
            </div>
            <p className="footer-description">
              Transformando vidas através da solidariedade e do amor ao próximo. 
              Juntos construímos um futuro melhor para nossa comunidade.
            </p>
            <div className="footer-social">
              <a href="https://instagram.com/maosquevalen" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://instagram.com/bazarmaosquevalen" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
                <span className="sr-only">Bazar</span>
              </a>
              <a href="https://facebook.com/maosquevalen" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links Úteis */}
          <div className="footer-section">
            <h3 className="footer-title">Links Úteis</h3>
            <ul className="footer-links">
              <li><Link to="/sobre">Sobre Nós</Link></li>
              <li><Link to="/projetos">Nossos Projetos</Link></li>
              <li><Link to="/como-ajudar">Como Ajudar</Link></li>
              <li><Link to="/bazar">Bazar Mãos que Valen</Link></li>
            </ul>
          </div>

          {/* Como Ajudar */}
          <div className="footer-section">
            <h3 className="footer-title">Como Ajudar</h3>
            <ul className="footer-links">
              <li><Link to="/como-ajudar">Fazer uma Doação</Link></li>
              <li><Link to="/como-ajudar#voluntario">Ser Voluntário</Link></li>
              <li><Link to="/bazar">Comprar no Bazar</Link></li>
              <li><Link to="/como-ajudar#materiais">Doar Materiais</Link></li>
              <li><Link to="/como-ajudar#divulgar">Divulgar nas Redes</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div className="footer-section">
            <h3 className="footer-title">Contato</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <Mail size={16} />
                <span>maosquevalen@yahoo.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+55 41 99153-6163</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Curitiba, PR</span>
              </div>
            </div>
            <Link to="/como-ajudar" className="btn btn-secondary footer-cta">
              <Heart size={18} />
              Fazer Doação
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Mãos que Valen. Todos os direitos reservados.</p>
            <div className="footer-bottom-links">
              <p>
                Site desenvolvido por{' '}
                <a 
                  href="https://www.linkedin.com/in/bernardo-lobo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="developer-link"
                >
                  Bernardo Lobo Marques
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
