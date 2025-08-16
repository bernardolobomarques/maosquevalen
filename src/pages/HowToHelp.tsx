import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  CreditCard, 
  Users, 
  Gift, 
  Share2, 
  Copy, 
  Check,
  Phone,
  ShoppingBag,
  Baby,
  Utensils,
  Shirt,
  Home
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const HowToHelp = () => {
  const [copiedPix, setCopiedPix] = useState(false);
  const { toast } = useToast();

  const pixKey = "39.341.418/0001-06";

  const copyPixKey = () => {
    navigator.clipboard.writeText(pixKey);
    setCopiedPix(true);
    toast({
      title: "Chave PIX copiada!",
      description: "A chave PIX foi copiada para sua área de transferência.",
    });
    setTimeout(() => setCopiedPix(false), 2000);
  };

  const projectItems = [
    { icon: Baby, title: "Higiene para Bebês", items: ["Fraldas", "Lenços umedecidos", "Pomadas", "Sabonetes neutros"] },
    { icon: Utensils, title: "Alimentação", items: ["Leite em pó", "Papinhas", "Suplementos", "Alimentos não perecíveis"] },
    { icon: Heart, title: "Cuidados Médicos", items: ["Medicamentos", "Seringas", "Gazes", "Materiais de curativo"] }
  ];

  const bazarItems = [
    { icon: Shirt, title: "Roupas", items: ["Roupas adultas e infantis", "Calçados", "Acessórios", "Bolsas"] },
    { icon: Home, title: "Casa", items: ["Eletrodomésticos", "Móveis", "Decoração", "Utensílios domésticos"] },
    { icon: Gift, title: "Diversos", items: ["Brinquedos", "Livros", "CDs/DVDs", "Artigos esportivos"] }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-secondary text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Como Você Pode Ajudar
            </h1>
            <p className="font-open-sans text-lg md:text-xl max-w-3xl mx-auto opacity-95">
              Existem várias formas de fazer a diferença na vida de nossas crianças. 
              Cada contribuição, por menor que seja, transforma vidas.
            </p>
          </div>
        </div>
      </section>

      {/* Doações Financeiras */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <CreditCard className="h-16 w-16 mx-auto text-primary mb-4" />
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Doações Financeiras
            </h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Sua doação vai diretamente para tratamentos, medicamentos e alimentação das crianças
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* PIX */}
            <Card className="hover:shadow-medium transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="font-montserrat text-2xl text-foreground flex items-center justify-center">
                  <CreditCard className="mr-2 h-6 w-6 text-primary" />
                  PIX (Mais Rápido)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="font-open-sans text-sm text-muted-foreground mb-2">CNPJ:</p>
                  <div className="bg-muted p-4 rounded-lg flex items-center justify-between">
                    <span className="font-mono text-lg font-semibold">{pixKey}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={copyPixKey}
                      className="ml-2"
                    >
                      {copiedPix ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg text-center">
                  <p className="font-open-sans text-sm text-muted-foreground">
                    <strong>Associação Filantrópica Mãos que Valen</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Transferência Bancária */}
            <Card className="hover:shadow-medium transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="font-montserrat text-2xl text-foreground flex items-center justify-center">
                  <CreditCard className="mr-2 h-6 w-6 text-secondary" />
                  Transferência Bancária
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg space-y-2 font-open-sans">
                  <div><strong>Banco:</strong> Sicredi</div>
                  <div><strong>Agência:</strong> 0730</div>
                  <div><strong>Conta Corrente:</strong> 39839-3</div>
                  <div><strong>Titular:</strong> Associação Filantrópica Mãos que Valen</div>
                  <div><strong>CNPJ:</strong> 39.341.418/0001-06</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seja Voluntário */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="h-16 w-16 mx-auto text-secondary mb-4" />
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Seja Voluntário
            </h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Junte-se aos nossos mais de 40 voluntários e faça parte dessa família que transforma vidas
            </p>
          </div>

          <Card className="max-w-2xl mx-auto hover:shadow-medium transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="space-y-6">
                <div className="bg-gradient-secondary p-6 rounded-lg text-white">
                  <h3 className="font-montserrat font-semibold text-xl mb-2">
                    Quer fazer parte da nossa equipe?
                  </h3>
                  <p className="font-open-sans opacity-95">
                    Entre em contato conosco e descubra como você pode contribuir 
                    com seus talentos e disponibilidade.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="font-open-sans text-muted-foreground">
                    <strong>Coordenadora:</strong> Carina R. Menegusso
                  </p>
                  <Button size="lg" className="font-open-sans font-semibold w-full sm:w-auto">
                    <Phone className="mr-2 h-5 w-5" />
                    <a href="https://wa.me/5541991536163" className="flex items-center">
                      (41) 99153-6163
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Doação de Materiais */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Gift className="h-16 w-16 mx-auto text-primary mb-4" />
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-4">
              Doação de Materiais
            </h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Sua doação de materiais ajuda tanto no cuidado direto das crianças quanto na sustentabilidade do projeto
            </p>
          </div>

          <div className="space-y-12">
            {/* Itens para o Projeto */}
            <div>
              <h3 className="font-montserrat font-bold text-2xl text-center mb-8">
                Itens para o Projeto
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projectItems.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <Card key={index} className="hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-center mb-4">
                          <Icon className="h-12 w-12 mx-auto text-primary mb-2" />
                          <h4 className="font-montserrat font-semibold text-lg">{category.title}</h4>
                        </div>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="font-open-sans text-sm text-muted-foreground flex items-center">
                              <Heart className="h-3 w-3 text-secondary mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Itens para o Bazar */}
            <div className="bg-muted/30 p-8 rounded-lg">
              <h3 className="font-montserrat font-bold text-2xl text-center mb-2">
                Itens para o Bazar
              </h3>
              <p className="font-open-sans text-center text-muted-foreground mb-8">
                Principal fonte de renda para custear os tratamentos
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {bazarItems.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <Card key={index} className="hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-center mb-4">
                          <Icon className="h-12 w-12 mx-auto text-secondary mb-2" />
                          <h4 className="font-montserrat font-semibold text-lg">{category.title}</h4>
                        </div>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="font-open-sans text-sm text-muted-foreground flex items-center">
                              <ShoppingBag className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              <div className="text-center mt-6">
                <p className="font-open-sans text-sm text-muted-foreground mb-4">
                  <strong>Importante:</strong> Os itens devem estar em bom estado de conservação
                </p>
                <Button asChild variant="outline" className="font-open-sans font-semibold">
                  <a href="/bazar">Saiba mais sobre o Bazar</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divulgue a Causa */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Share2 className="h-16 w-16 mx-auto mb-6" />
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
            Divulgue Nossa Causa
          </h2>
          <p className="font-open-sans text-lg mb-8 opacity-95">
            Compartilhe nosso trabalho com amigos e familiares. 
            Quanto mais pessoas souberem sobre a Mãos que Valen, mais crianças poderemos ajudar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="font-open-sans font-semibold"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Mãos que Valen - Transformando Vidas',
                    text: 'Conheça o trabalho da ONG Mãos que Valen que ajuda crianças com múltiplas deficiências',
                    url: window.location.origin
                  });
                } else {
                  navigator.clipboard.writeText(window.location.origin);
                  toast({
                    title: "Link copiado!",
                    description: "O link do site foi copiado para sua área de transferência.",
                  });
                }
              }}
            >
              <Share2 className="mr-2 h-5 w-5" />
              Compartilhar Site
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-open-sans font-semibold border-white text-white hover:bg-white hover:text-primary"
            >
              <a
                href="https://instagram.com/maosquevalen"
                target="_blank"
                rel="noopener noreferrer"
              >
                Seguir no Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToHelp;