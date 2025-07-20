import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Phone, ChevronDown } from 'lucide-react';
import logo from '../../assets/logo.png';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Projetos', href: '/projetos' },
    { name: 'Como Ajudar', href: '/como-ajudar' },
    { name: 'Bazar', href: '/bazar' },
    { name: 'Contato', href: '/contato' },
  ];

  const isActive = (href: string) => location.pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
            <img src={logo} alt="Mãos que Valen" className="logo-img" />
            <div className="logo-text">
              <span className="logo-title">Mãos que Valen</span>
              <span className="logo-subtitle">ONG</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="header-actions-desktop">
            <Link to="/como-ajudar" className="btn btn-outline btn-sm">
              <Heart size={16} />
              Doar
            </Link>
            <Link to="/contato" className="btn btn-primary btn-sm">
              <Phone size={16} />
              Contato
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu">
            <div className="mobile-header">
              <div className="mobile-logo">
                <img src={logo} alt="Mãos que Valen" />
                <span>Mãos que Valen</span>
              </div>
            </div>
            
            <nav className="mobile-nav">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`mobile-nav-link ${isActive(item.href) ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  <ChevronDown size={16} />
                </Link>
              ))}
            </nav>

            <div className="mobile-actions">
              <Link 
                to="/como-ajudar" 
                className="btn btn-secondary btn-mobile"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart size={18} />
                Fazer Doação
              </Link>
              <Link 
                to="/contato" 
                className="btn btn-outline btn-mobile"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={18} />
                Entre em Contato
              </Link>
            </div>

            <div className="mobile-footer">
              <p>Transformando vidas com amor</p>
              <span>@maosquevalen</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
