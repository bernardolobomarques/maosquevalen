import { Heart, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Missão */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-secondary" />
              <span className="font-montserrat font-bold text-xl">Mãos que Valen</span>
            </div>
            <p className="font-open-sans text-primary-foreground/90 mb-4 max-w-md">
              Amenizando o sofrimento e a espera dos tratamentos em crianças com deficiência, 
              de forma altruísta, oferecendo atendimento com ajuda médica, terapêutica e alimentação.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/maosquevalen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
                aria-label="Instagram Mãos que Valen"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/bazarmaosquevalen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
                aria-label="Instagram Bazar"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 font-open-sans">
              <li>
                <Link to="/sobre" className="text-primary-foreground/90 hover:text-secondary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/como-ajudar" className="text-primary-foreground/90 hover:text-secondary transition-colors">
                  Como Ajudar
                </Link>
              </li>
              <li>
                <Link to="/bazar" className="text-primary-foreground/90 hover:text-secondary transition-colors">
                  Bazar
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-primary-foreground/90 hover:text-secondary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3 font-open-sans text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/90">
                  Rua Paulo Gorski, 1356<br />
                  Mossunguê, Curitiba - PR
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/90">(41) 99153-6163</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/90">maosquevalen@yahoo.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 mt-0.5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/90">
                  Segunda a Sexta<br />
                  8:30-12:00 e 13:30-17:30
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-open-sans text-sm text-primary-foreground/70">
              © 2024 Associação Filantrópica Mãos que Valen. Todos os direitos reservados.
            </p>
            <p className="font-open-sans text-sm text-primary-foreground/70 mt-2 md:mt-0">
              CNPJ: 39.341.418/0001-06
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;