import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Send,
  Instagram,
  Heart
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve. Obrigado!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: ["Rua Paulo Gorski, 1356", "Mossunguê, Curitiba - PR"],
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Telefone / WhatsApp",
      content: ["(41) 99153-6163", "Carina R. Menegusso"],
      color: "text-secondary",
      link: "https://wa.me/5541991536163"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: ["maosquevalen@yahoo.com"],
      color: "text-primary",
      link: "mailto:maosquevalen@yahoo.com"
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: ["Segunda a Sexta", "8:30-12:00 e 13:30-17:30"],
      color: "text-secondary"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <MessageCircle className="h-20 w-20 mx-auto mb-6" />
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Fale Conosco
            </h1>
            <p className="font-open-sans text-lg md:text-xl max-w-3xl mx-auto opacity-95">
              Estamos aqui para esclarecer suas dúvidas, receber sugestões e aproximar você da nossa causa
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-montserrat text-2xl text-foreground flex items-center">
                    <Send className="mr-2 h-6 w-6 text-primary" />
                    Envie sua Mensagem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-open-sans font-medium">
                        Nome Completo *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Seu nome completo"
                        className="font-open-sans"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-open-sans font-medium">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="seu@email.com"
                        className="font-open-sans"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-open-sans font-medium">
                        Mensagem *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Escreva sua mensagem aqui..."
                        rows={6}
                        className="font-open-sans resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full font-open-sans font-semibold"
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="mb-8">
                <h2 className="font-montserrat font-bold text-3xl text-foreground mb-4">
                  Informações de Contato
                </h2>
                <p className="font-open-sans text-muted-foreground">
                  Entre em contato conosco por qualquer um dos canais abaixo. 
                  Estamos sempre prontos para atender você!
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} className="hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Icon className={`h-6 w-6 mt-1 ${info.color} flex-shrink-0`} />
                          <div className="flex-1">
                            <h3 className="font-montserrat font-semibold text-lg text-foreground mb-2">
                              {info.title}
                            </h3>
                            <div className="space-y-1">
                              {info.content.map((line, lineIndex) => (
                                <p key={lineIndex} className="font-open-sans text-muted-foreground">
                                  {info.link ? (
                                    <a
                                      href={info.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="hover:text-primary transition-colors"
                                    >
                                      {line}
                                    </a>
                                  ) : (
                                    line
                                  )}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Social Media */}
              <Card className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-semibold text-lg text-foreground mb-4 flex items-center">
                    <Instagram className="mr-2 h-5 w-5 text-secondary" />
                    Redes Sociais
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-open-sans text-muted-foreground">@maosquevalen</span>
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="font-open-sans"
                      >
                        <a
                          href="https://instagram.com/maosquevalen"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Seguir
                        </a>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-open-sans text-muted-foreground">@bazarmaosquevalen</span>
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="font-open-sans"
                      >
                        <a
                          href="https://instagram.com/bazarmaosquevalen"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Seguir
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <MapPin className="h-16 w-16 mx-auto text-primary mb-4" />
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Nossa Localização
            </h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos localizados no coração de Curitiba, no bairro Mossunguê
            </p>
          </div>

          <Card className="overflow-hidden hover:shadow-medium transition-all duration-300">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Map Placeholder */}
                <div className="bg-gradient-primary p-12 flex items-center justify-center text-white min-h-[400px]">
                  <div className="text-center">
                    <MapPin className="h-20 w-20 mx-auto mb-4" />
                    <h3 className="font-montserrat font-bold text-2xl mb-2">
                      Mapa Interativo
                    </h3>
                    <p className="font-open-sans opacity-90 mb-6">
                      Rua Paulo Gorski, 1356<br />
                      Mossunguê, Curitiba - PR
                    </p>
                    <Button
                      asChild
                      size="lg"
                      variant="secondary"
                      className="font-open-sans font-semibold"
                    >
                      <a
                        href="https://maps.google.com/?q=Rua+Paulo+Gorski,+1356,+Mossunguê,+Curitiba,+PR"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver no Google Maps
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Location Info */}
                <div className="p-8 lg:p-12">
                  <h3 className="font-montserrat font-bold text-2xl text-foreground mb-6">
                    Como Chegar
                  </h3>
                  <div className="space-y-4 font-open-sans text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Endereço completo:</strong><br />
                      Rua Paulo Gorski, 1356<br />
                      Bairro Mossunguê<br />
                      Curitiba - PR
                    </p>
                    <p>
                      <strong className="text-foreground">Transporte público:</strong><br />
                      Diversas linhas de ônibus atendem a região. 
                      Consulte o site da URBS para rotas específicas.
                    </p>
                    <p>
                      <strong className="text-foreground">Estacionamento:</strong><br />
                      Disponível nas proximidades do endereço.
                    </p>
                  </div>
                  
                  <div className="mt-8 p-4 bg-gradient-secondary rounded-lg text-white">
                    <div className="flex items-center">
                      <Heart className="h-5 w-5 mr-2" />
                      <span className="font-montserrat font-semibold">Dica:</span>
                    </div>
                    <p className="font-open-sans text-sm mt-2 opacity-90">
                      Entre em contato antes de sua visita para garantir que estaremos no local 
                      e para agendar um melhor horário de atendimento.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;