# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Site da ONG Mãos que Valen

## 📋 Sobre o Projeto

Este é o site oficial da ONG "Mãos que Valen", desenvolvido em React com TypeScript. O site apresenta os projetos sociais da organização, facilita doações e permite que visitantes se tornem voluntários.

## 🎨 Design e Identidade Visual

### Cores Principais
- **Azul Primário**: `#4A90E2` - Elementos principais, botões, headers
- **Rosa Secundário**: `#E91E63` - Call-to-actions, destaques especiais
- **Verde Sucesso**: `#4CAF50` - Indicadores de sucesso
- **Cinza Texto**: `#333333` - Texto principal
- **Fundo Claro**: `#F8F9FA` - Backgrounds alternativos

### Tipografia
- **Títulos**: Montserrat (Google Fonts)
- **Texto**: Open Sans (Google Fonts)

## 🏗️ Estrutura do Site

### Páginas Implementadas

1. **Página Inicial (Home)**
   - Hero section com missão da ONG
   - Números de impacto
   - Sobre nós resumido
   - Projetos em destaque
   - Destaque do Bazar Mãos que Valen
   - Depoimentos
   - Call-to-action para doações

2. **Sobre Nós**
   - História da ONG
   - Missão, Visão e Valores
   - Timeline da trajetória
   - Equipe
   - Certificações e transparência

3. **Projetos**
   - Mapa de atuação
   - Projetos ativos detalhados
   - Projetos concluídos
   - Galeria de fotos
   - Call-to-action para apoio

4. **Como Ajudar**
   - Doações financeiras (única e recorrente)
   - PIX com QR Code
   - Voluntariado
   - Doações de materiais
   - Bazar Mãos que Valen
   - Divulgação nas redes sociais
   - Parcerias empresariais

5. **Bazar Mãos que Valen**
   - Informações práticas (localização, horários)
   - Categorias de produtos
   - Feed do Instagram integrado
   - Como doar itens para o bazar
   - Impacto do bazar nos projetos

6. **Transparência**
   - Resumo financeiro com gráficos
   - Números de impacto
   - Relatórios anuais para download
   - Certificações e registros
   - Política de transparência

7. **Contato**
   - Formulário de contato
   - Informações de contato
   - Mapa de localização
   - FAQ rápido

## 🔧 Tecnologias Utilizadas

- **React 19.1.0** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **React Router DOM** - Roteamento
- **Lucide React** - Ícones
- **CSS3** - Estilização (sem frameworks CSS)
- **Google Fonts** - Tipografia

## 📱 Características Técnicas

### Responsividade
- **Mobile-first approach**
- Design adaptativo para todas as telas
- Menu hamburger para dispositivos móveis
- Otimizado para touch

### Performance
- Componentes otimizados
- Lazy loading considerado para imagens
- CSS customizado sem frameworks pesados

### SEO
- Meta tags otimizadas
- Estrutura semântica HTML
- Open Graph tags para redes sociais
- Sitemap-ready

### Acessibilidade
- Contraste adequado de cores
- Navegação por teclado
- Alt texts em imagens
- Estrutura de headings correta

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]

# Navegue para o diretório
cd maosquevalen

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:5173`

### Build para Produção

```bash
# Gera build otimizado
npm run build

# Preview do build de produção
npm run preview
```

## 📁 Estrutura de Arquivos

```
src/
├── components/
│   └── layout/
│       ├── Header.tsx/css
│       └── Footer.tsx/css
├── pages/
│   ├── Home.tsx/css
│   ├── About.tsx/css
│   ├── Projects.tsx/css
│   ├── HowToHelp.tsx/css
│   ├── Bazar.tsx/css
│   └── Contact.tsx/css
├── assets/
│   ├── logo.png
│   └── logo-vector.png
├── App.tsx/css
├── main.tsx
└── index.css
```

## 🎯 Funcionalidades Principais

### Doações
- Interface intuitiva para doações
- Opções de valores pré-definidos
- Doação única ou recorrente
- PIX com QR Code
- Cálculo de impacto da doação

### Voluntariado
- Formulário de interesse
- Informações sobre oportunidades
- Benefícios do voluntariado

### Bazar Integrado
- Página dedicada ao bazar
- Processo de doação de itens
- Informações práticas
- Integração com Instagram

### Transparência
- Relatórios financeiros
- Gráficos de distribuição de recursos
- Certificações
- Downloads de documentos

## 🔮 Próximos Passos (Roadmap)

### Fase 2 - Funcionalidades Avançadas
- [ ] Integração real com gateway de pagamento
- [ ] Feed real do Instagram via API
- [ ] Sistema de newsletter
- [ ] Galeria de fotos dinâmica
- [ ] Mapa interativo
- [ ] Blog/notícias

### Fase 3 - Otimizações
- [ ] PWA (Progressive Web App)
- [ ] Analytics integrado
- [ ] Cache otimizado
- [ ] CDN para imagens
- [ ] Testes automatizados

## 📊 Métricas de Sucesso

- Taxa de conversão visitantes → doadores
- Engajamento (tempo na página)
- Inscrições para voluntariado
- Downloads de relatórios
- Compartilhamentos nas redes sociais

## 🤝 Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Implemente as mudanças
4. Teste em diferentes dispositivos
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

**ONG Mãos que Valen**
- E-mail: contato@maosquevalen.org
- WhatsApp: (11) 99999-9999
- Instagram: @maosquevalen
- Instagram Bazar: @bazarmaosquevalen

---

*Desenvolvido com ❤️ para fazer a diferença na comunidade*

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
