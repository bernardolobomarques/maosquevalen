import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Eye, Shield, Users, MapPin, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const principles = [
    { icon: Shield, title: "Independência", description: "Autonomia em nossas decisões e ações" },
    { icon: Heart, title: "Imparcialidade", description: "Tratamento justo e igualitário para todos" },
    { icon: Users, title: "Neutralidade", description: "Atuação sem distinção política ou religiosa" },
    { icon: Target, title: "Ética", description: "Transparência e honestidade em todas as ações" },
    { icon: FileText, title: "Transparência", description: "Prestação de contas clara e acessível" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Nossa História
            </h1>
            <p className="font-open-sans text-lg md:text-xl max-w-3xl mx-auto opacity-95">
              Uma jornada de amor, dedicação e transformação que começou com um sonho 
              e hoje alcança milhares de famílias
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-6">
                Como Tudo Começou
              </h2>
              <div className="space-y-6 font-open-sans text-lg text-muted-foreground leading-relaxed">
                <p>
                  A <strong className="text-foreground">Associação Filantrópica Mãos que Valen</strong> foi 
                  fundada em <strong className="text-primary">2019</strong> pela idealizadora 
                  <strong className="text-primary"> Carina R. Menegusso</strong>, movida por um propósito 
                  profundo e transformador.
                </p>
                <p>
                  Tudo começou com a observação das dificuldades enfrentadas por famílias de crianças 
                  com múltiplas deficiências, que muitas vezes precisavam esperar longos períodos 
                  para conseguir atendimento médico especializado, terapias e suporte alimentar.
                </p>
                <p>
                  Desde então, nossa organização cresceu e se desenvolveu, sempre mantendo o foco 
                  no atendimento humanizado e no cuidado integral às crianças e suas famílias.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/bc0be241-e80d-4bdb-a0e3-1a4f375736cc.png" 
                alt="Logo Mãos que Valen representando cuidado e proteção"
                className="max-w-md w-full h-auto rounded-lg shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Missão, Visão e Valores
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Missão */}
            <Card className="hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h3 className="font-montserrat font-semibold text-2xl text-foreground">
                    Nossa Missão
                  </h3>
                </div>
                <p className="font-open-sans text-lg text-muted-foreground leading-relaxed">
                  Amenizar o sofrimento e a espera dos tratamentos em crianças com deficiência, 
                  de forma altruísta, oferecendo atendimento com ajuda médica, terapêutica e alimentação.
                </p>
              </CardContent>
            </Card>

            {/* Visão */}
            <Card className="hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-secondary mr-3" />
                  <h3 className="font-montserrat font-semibold text-2xl text-foreground">
                    Nossa Visão
                  </h3>
                </div>
                <p className="font-open-sans text-lg text-muted-foreground leading-relaxed">
                  Ser reconhecida como uma organização de referência no cuidado integral 
                  a crianças com múltiplas deficiências, promovendo dignidade e qualidade de vida.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Princípios */}
          <div className="text-center mb-8">
            <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-foreground mb-4">
              Nossos Princípios
            </h3>
            <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Valores que norteiam todas as nossas ações e decisões
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h4 className="font-montserrat font-semibold text-lg text-foreground mb-2">
                      {principle.title}
                    </h4>
                    <p className="font-open-sans text-sm text-muted-foreground">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Área de Atuação */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <MapPin className="h-8 w-8 text-primary mr-3" />
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground">
                  Área de Atuação
                </h2>
              </div>
              <div className="space-y-4 font-open-sans text-lg text-muted-foreground">
                <p>
                  Atuamos em <strong className="text-foreground">Curitiba e Região Metropolitana</strong>, 
                  abrangendo mais de <strong className="text-primary">20 bairros e comunidades carentes</strong>.
                </p>
                <p>
                  Nossa rede de atendimento se estende por toda a cidade, priorizando sempre 
                  as regiões com maior necessidade de apoio e menor acesso a serviços especializados.
                </p>
                <p>
                  Através de parcerias com profissionais da saúde, voluntários e a comunidade local, 
                  conseguimos levar esperança e cuidado para onde mais se precisa.
                </p>
              </div>
            </div>
            <div className="bg-muted/50 p-8 rounded-lg">
              <div className="text-center space-y-6">
                <MapPin className="h-24 w-24 mx-auto text-primary" />
                <div>
                  <h3 className="font-montserrat font-bold text-2xl text-foreground mb-2">
                    Curitiba e Região
                  </h3>
                  <p className="font-open-sans text-muted-foreground">
                    Mais de 20 bairros atendidos
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="font-montserrat font-bold text-3xl text-primary">3.000</div>
                    <div className="font-open-sans text-sm text-muted-foreground">Crianças atendidas</div>
                  </div>
                  <div>
                    <div className="font-montserrat font-bold text-3xl text-secondary">19.000</div>
                    <div className="font-open-sans text-sm text-muted-foreground">Familiares beneficiados</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparência */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="h-16 w-16 mx-auto mb-6" />
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
            Compromisso com a Transparência
          </h2>
          <p className="font-open-sans text-lg mb-8 opacity-95">
            Acreditamos que a transparência é fundamental para construir confiança. 
            Por isso, mantemos nossos relatórios e prestações de contas sempre atualizados e acessíveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="font-open-sans font-semibold">
              <Link to="/contato">
                Solicitar Relatórios
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-open-sans font-semibold border-white text-white hover:bg-white hover:text-primary">
              <Link to="/como-ajudar">
                Como Ajudar
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;