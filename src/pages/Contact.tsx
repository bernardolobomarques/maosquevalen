import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, Clock } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'geral'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Retornaremos em breve.');
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Entre em Contato</h1>
            <p>
              Estamos aqui para esclarecer suas dúvidas, receber suas sugestões 
              e ajudar você a fazer parte da nossa missão.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-content">
            {/* Informações de Contato */}
            <div className="contact-info">
              <h2>Fale Conosco</h2>
              <p>
                Entre em contato através dos canais abaixo ou preencha o formulário. 
                Respondemos todas as mensagens em até 24 horas.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <Phone size={24} />
                  </div>
                  <div className="method-content">
                    <h3>Telefone/WhatsApp</h3>
                    <p>+55 41 99153-6163</p>
                    <p>+55 41 3209-9004</p>
                    <a 
                      href="https://wa.me/5541991536163" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                    >
                      <MessageCircle size={16} />
                      Chamar no WhatsApp
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <Mail size={24} />
                  </div>
                  <div className="method-content">
                    <h3>E-mail</h3>
                    <p>maosquevalen@yahoo.com</p>
                    <a 
                      href="mailto:maosquevalen@yahoo.com"
                      className="btn btn-outline btn-sm"
                    >
                      Enviar E-mail
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="method-content">
                    <h3>Endereço</h3>
                    <p>Rua Francisco Naldony 238 e 220<br />Campina do Siqueira - Curitiba/PR<br />CEP: 80740-030</p>
                    <button className="btn btn-outline btn-sm">
                      Ver no Mapa
                    </button>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <Clock size={24} />
                  </div>
                  <div className="method-content">
                    <h3>Horário de Atendimento</h3>
                    <p>Segunda a Sexta: 9:30 às 17h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div className="contact-form">
              <h2>Envie sua Mensagem</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="type">Assunto</label>
                  <select 
                    id="type"
                    name="type" 
                    value={formData.type}
                    onChange={handleChange}
                    required
                  >
                    <option value="geral">Informações Gerais</option>
                    <option value="voluntario">Quero ser Voluntário</option>
                    <option value="doacao">Doações</option>
                    <option value="bazar">Bazar Mãos que Valen</option>
                    <option value="parceria">Parcerias</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nome Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Título da Mensagem</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-nos como podemos ajudar você..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg">
                  <Send size={20} />
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa (Placeholder) */}
      <section className="map-section">
        <div className="map-container">
          <div className="map-placeholder">
            <MapPin size={48} />
            <h3>Nossa Localização</h3>
            <p>Rua Francisco Naldony 238 e 220 - Campina do Siqueira, Curitiba/PR</p>
            <button className="btn btn-primary">
              Abrir no Google Maps
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="section section-alt">
        <div className="container">
          <div className="faq-section">
            <div className="section-header text-center">
              <h2>Perguntas Frequentes</h2>
              <p>Respostas rápidas para as dúvidas mais comuns</p>
            </div>

            <div className="faq-grid">
              <div className="faq-item">
                <h3>Como posso fazer uma doação?</h3>
                <p>Você pode doar através do PIX, transferência bancária ou visitando nosso bazar. Aceitamos também doações de materiais.</p>
              </div>

              <div className="faq-item">
                <h3>Como me tornar voluntário?</h3>
                <p>Entre em contato conosco pelo WhatsApp ou formulário. Realizamos uma conversa inicial e apresentamos as oportunidades disponíveis.</p>
              </div>

              <div className="faq-item">
                <h3>Onde fica o Bazar Mãos que Valen?</h3>
                <p>O bazar fica na Rua Francisco Naldony 238 e 220 - Campina do Siqueira, Curitiba/PR. Funcionamos de segunda a sexta, das 9:30 às 17h. Siga @bazarmaosquevalen no Instagram.</p>
              </div>

              <div className="faq-item">
                <h3>Vocês emitem recibo de doação?</h3>
                <p>Sim! Emitimos recibo para todas as doações financeiras. Para doações de materiais, fornecemos comprovante de entrega.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
