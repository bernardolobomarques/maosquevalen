import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ShoppingBag, 
  Clock, 
  MapPin, 
  Instagram, 
  Heart, 
  Shirt,
  Home,
  Gift,
  DollarSign,
  Phone,
  CheckCircle
} from "lucide-react";

const Bazar = () => {
  const acceptedItems = [
    {
      category: "Roupas e Acessórios",
      icon: Shirt,
      items: ["Roupas masculinas, femininas e infantis", "Calçados em geral", "Bolsas e carteiras", "Cintos e acessórios", "Bijuterias"]
    },
    {
      category: "Casa e Decoração", 
      icon: Home,
      items: ["Eletrodomésticos funcionais", "Móveis em bom estado", "Utensílios de cozinha", "Decoração", "Roupas de cama e banho"]
    },
    {
      category: "Entretenimento",
      icon: Gift,
      items: ["Brinquedos em bom estado", "Livros e revistas", "CDs e DVDs", "Jogos e quebra-cabeças", "Artigos esportivos"]
    }
  ];

  const guidelines = [
    "Itens devem estar limpos e em bom estado de conservação",
    "Roupas sem manchas, rasgos ou desgaste excessivo", 
    "Eletrodomésticos devem estar funcionando",
    "Brinquedos devem estar completos e seguros",
    "Livros e mídias em condições de uso"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ShoppingBag className="h-20 w-20 mx-auto mb-6" />
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Bazar Mãos que Valen
            </h1>
            <p className="font-open-sans text-lg md:text-xl max-w-3xl mx-auto opacity-95">
              Nossa principal fonte de renda para custear tratamentos, medicamentos e alimentação das crianças
            </p>
          </div>
        </div>
      </section>

      {/* Sobre o Bazar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-6">
                Mais que um Bazar
              </h2>
              <div className="space-y-4 font-open-sans text-lg text-muted-foreground leading-relaxed">
                <p>
                  O <strong className="text-primary">Bazar Mãos que Valen</strong> é muito mais que um 
                  espaço de compras. É o coração financeiro da nossa organização, onde cada item 
                  vendido se transforma em esperança e cuidado para nossas crianças.
                </p>
                <p>
                  Todos os recursos arrecadados são destinados diretamente aos tratamentos médicos, 
                  terapias especializadas, medicamentos e alimentação das <strong className="text-secondary">3 mil crianças</strong> 
                  que atendemos.
                </p>
                <p>
                  Nosso bazar funciona com a colaboração de voluntários dedicados e conta com uma 
                  grande variedade de itens doados pela comunidade, sempre com preços justos e acessíveis.
                </p>
              </div>
            </div>
            <div className="bg-muted/50 p-8 rounded-lg">
              <div className="text-center space-y-6">
                <DollarSign className="h-24 w-24 mx-auto text-primary" />
                <div>
                  <h3 className="font-montserrat font-bold text-2xl text-foreground mb-2">
                    100% dos Recursos
                  </h3>
                  <p className="font-open-sans text-muted-foreground">
                    Destinados diretamente aos tratamentos das crianças
                  </p>
                </div>
                <div className="bg-gradient-secondary p-4 rounded-lg text-white">
                  <div className="font-montserrat font-bold text-xl">R$ 72.000</div>
                  <div className="font-open-sans text-sm opacity-90">
                    Investidos em tratamentos no primeiro semestre
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informações Práticas */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Informações do Bazar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Horário */}
            <Card className="text-center hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-montserrat font-semibold text-xl text-foreground mb-2">
                  Horário de Funcionamento
                </h3>
                <div className="font-open-sans text-muted-foreground space-y-1">
                  <p><strong>Segunda a Sexta</strong></p>
                  <p>9:30 às 17:30</p>
                </div>
              </CardContent>
            </Card>

            {/* Endereço */}
            <Card className="text-center hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 mx-auto text-secondary mb-4" />
                <h3 className="font-montserrat font-semibold text-xl text-foreground mb-2">
                  Endereço
                </h3>
                <div className="font-open-sans text-muted-foreground space-y-1">
                  <p>Rua Paulo Gorski, 1356</p>
                  <p>Mossunguê, Curitiba - PR</p>
                </div>
              </CardContent>
            </Card>

            {/* Contato */}
            <Card className="text-center hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-montserrat font-semibold text-xl text-foreground mb-2">
                  Contato
                </h3>
                <div className="font-open-sans text-muted-foreground space-y-2">
                  <p>(41) 99153-6163</p>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="font-open-sans"
                  >
                    <a
                      href="https://wa.me/5541991536163"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Como Doar Itens */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Gift className="h-16 w-16 mx-auto text-secondary mb-4" />
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Como Doar Itens para o Bazar
            </h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Sua doação se transforma em recursos para nossos tratamentos. Veja o que aceitamos:
            </p>
          </div>

          {/* Itens Aceitos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {acceptedItems.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <Icon className="h-12 w-12 mx-auto text-primary mb-2" />
                      <h3 className="font-montserrat font-semibold text-lg text-foreground">
                        {category.category}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="font-open-sans text-sm text-muted-foreground flex items-start">
                          <Heart className="h-3 w-3 text-secondary mr-2 mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Diretrizes */}
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-montserrat font-bold text-2xl text-center text-foreground mb-6">
                Diretrizes para Doação
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {guidelines.map((guideline, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="font-open-sans text-muted-foreground">{guideline}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 bg-gradient-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Instagram className="h-16 w-16 mx-auto mb-6" />
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
              Acompanhe Nosso Instagram
            </h2>
            <p className="font-open-sans text-lg opacity-95 max-w-2xl mx-auto mb-8">
              Veja os produtos disponíveis, novidades e como suas doações estão transformando vidas
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-open-sans font-semibold border-white text-white bg-transparent hover:bg-white hover:text-secondary"
            >
              <a
                href="https://instagram.com/bazarmaosquevalen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="mr-2 h-5 w-5" />
                @bazarmaosquevalen
              </a>
            </Button>
          </div>

          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm text-center">
            <h3 className="font-montserrat font-semibold text-xl mb-4">
              Visite Nosso Bazar
            </h3>
            <p className="font-open-sans opacity-90 mb-6">
              Venha conhecer pessoalmente nosso espaço e encontrar itens únicos 
              enquanto contribui para uma causa transformadora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="font-open-sans font-semibold bg-white text-secondary hover:bg-white/90"
              >
                <a
                  href="https://wa.me/5541991536163"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Entrar em Contato
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-open-sans font-semibold border-white text-white bg-transparent hover:bg-white hover:text-secondary"
              >
                <a href="/contato">
                  <MapPin className="mr-2 h-5 w-5" />
                  Ver Localização
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bazar;