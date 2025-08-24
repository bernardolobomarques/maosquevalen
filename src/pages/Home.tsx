import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Users, 
  Utensils, 
  Clock, 
  DollarSign, 
  UserPlus,
  ArrowRight,
  HandHeart,
  Baby,
  Stethoscope
} from "lucide-react";

const Home = () => {
  const impactNumbers = [
    { icon: Utensils, number: "+9.000", description: "Refeições distribuídas", color: "text-primary" },
    { icon: Utensils, number: "+72.000", description: "Sanduíches distribuídos", color: "text-secondary" },
    { icon: Clock, number: "+120", description: "Dias de trabalho voluntário", color: "text-primary" },
    { icon: DollarSign, number: "+R$ 72.000", description: "Gastos com tratamentos", color: "text-secondary" },
    { icon: Users, number: "+19 mil", description: "Crianças e familiares atendidos", color: "text-primary" },
  ];

  const projects = [
    {
      title: "Atendimento Médico",
      description: "Suporte médico especializado para crianças com múltiplas deficiências",
      icon: Stethoscope,
      image: "/lovable-uploads/bc0be241-e80d-4bdb-a0e3-1a4f375736cc.png"
    },
    {
      title: "Alimentação Nutritiva",
      description: "Distribuição de refeições e suplementos nutricionais",
      icon: Utensils,
      image: "/lovable-uploads/be89dfb8-adae-4d82-9f0b-8ac91edece12.png"
    },
    {
      title: "Apoio Terapêutico",
      description: "Sessões de fisioterapia, fonoaudiologia e terapia ocupacional",
      icon: HandHeart,
      image: "/lovable-uploads/bc0be241-e80d-4bdb-a0e3-1a4f375736cc.png"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight text-foreground">
                Transformando Vidas com
                <span className="block text-secondary mt-2">Amor e Solidariedade</span>
              </h1>
              <p className="font-open-sans text-lg md:text-xl mb-8 text-muted-foreground leading-relaxed">
                Oferecemos atendimento com ajuda médica, terapêutica e alimentação para 
                <strong className="text-secondary"> 3 mil crianças</strong> com múltiplas deficiências em Curitiba e Região Metropolitana.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" variant="secondary" className="font-open-sans font-semibold shadow-strong">
                  <Link to="/como-ajudar">
                    <Heart className="mr-2 h-5 w-5" />
                    Fazer Doação
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-open-sans font-semibold">
                  <Link to="/sobre">
                    Conhecer Nossa História
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-primary/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-soft border border-primary/10">
                <img 
                  src="/lovable-uploads/logo-sem-fundo.png" 
                  alt="Logo Mãos que Valen - Transformando vidas com amor e solidariedade"
                  className="w-64 h-64 lg:w-80 lg:h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Nosso Impacto no Primeiro Semestre de 2025
            </h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Números que refletem o amor e dedicação de nossa comunidade
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {impactNumbers.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <Icon className={`h-12 w-12 mx-auto mb-4 ${item.color}`} />
                    <div className="font-montserrat font-bold text-2xl md:text-3xl text-foreground mb-2">
                      {item.number}
                    </div>
                    <p className="font-open-sans text-sm text-muted-foreground leading-tight">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-6">
                Nossa Missão de Amor
              </h2>
              <p className="font-open-sans text-lg text-muted-foreground mb-6 leading-relaxed">
                Fundada em 2019 pela idealizadora <strong>Carina R. Menegusso</strong>, 
                a Mãos que Valen nasceu com o propósito de amenizar o sofrimento e a espera 
                por tratamentos de crianças com múltiplas deficiências.
              </p>
              <p className="font-open-sans text-lg text-muted-foreground mb-8 leading-relaxed">
                Atuamos com base nos princípios de <strong>Independência, Imparcialidade, 
                Neutralidade, Ética e Transparência</strong>, atendendo mais de 20 bairros 
                e comunidades carentes de Curitiba e Região Metropolitana.
              </p>
              <Button asChild size="lg" className="font-open-sans font-semibold shadow-medium">
                <Link to="/sobre">
                  Saiba Mais
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/bc0be241-e80d-4bdb-a0e3-1a4f375736cc.png" 
                alt="Logo Mãos que Valen - Mãos protegendo com amor"
                className="max-w-md w-full h-auto rounded-lg shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Projetos que Transformam Vidas
            </h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça as principais frentes de atuação da nossa organização
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card key={index} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <Icon className="h-16 w-16 mx-auto mb-4 text-primary" />
                    <h3 className="font-montserrat font-semibold text-xl text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="font-open-sans text-muted-foreground mb-4">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bazar Highlight */}
      <section className="py-16 bg-gradient-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
                Bazar Mãos que Valen
              </h2>
              <p className="font-open-sans text-lg mb-6 opacity-95 leading-relaxed">
                Nosso bazar é a <strong>principal fonte de renda</strong> para custear 
                os tratamentos das crianças. Cada item doado e vendido representa 
                esperança e cuidado transformados em ação.
              </p>
              <div className="space-y-2 mb-8 font-open-sans">
                <p><strong>Horário:</strong> Segunda a Sexta, das 9:30 às 17:30</p>
                <p><strong>Endereço:</strong> Rua Paulo Gorski, 1356 - Mossunguê</p>
                <p><strong>Instagram:</strong> @bazarmaosquevalen</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="outline" className="font-open-sans font-semibold border-white text-white bg-transparent hover:bg-white hover:text-secondary">
                  <Link to="/bazar">
                    Conhecer o Bazar
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="font-open-sans font-semibold bg-white text-secondary hover:bg-white/90">
                  <a
                    href="https://instagram.com/bazarmaosquevalen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver no Instagram
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <Baby className="h-32 w-32 mx-auto text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
            Faça Parte Dessa Transformação
          </h2>
          <p className="font-open-sans text-lg mb-8 opacity-95">
            Sua contribuição, seja através de doação ou voluntariado, 
            pode mudar a vida de uma criança e sua família.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="font-open-sans font-semibold shadow-strong">
              <Link to="/como-ajudar">
                <Heart className="mr-2 h-5 w-5" />
                Fazer Doação
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-open-sans font-semibold border-white text-white bg-transparent hover:bg-white hover:text-secondary">
              <Link to="/como-ajudar">
                <UserPlus className="mr-2 h-5 w-5" />
                Ser Voluntário
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;