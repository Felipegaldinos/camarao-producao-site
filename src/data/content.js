import { Waves, Fish, Droplets, ShieldCheck, Snowflake } from "lucide-react";
export const stages = [
  [
    "pos-larvas",
    "Pós-larvas e origem",
    "O começo de um bom cultivo.",
    "Seleção, transporte e aclimatação dos animais que iniciam o ciclo.",
    Fish,
    "A origem dos animais merece atenção desde o planejamento. A seleção do laboratório, os registros de procedência e o acompanhamento técnico ajudam a organizar um povoamento responsável.",
    "Seleção do fornecedor|Avaliar procedência, documentação e informações sanitárias disponíveis.",
    "Transporte e recebimento|Planejar a logística e acompanhar as condições dos animais na chegada.",
    "Aclimatação|Conduzir a adaptação à água de cultivo com orientação técnica e registros.",
  ],
  [
    "fazenda",
    "Fazenda e cultivo",
    "Estrutura para a vida crescer.",
    "Conheça os viveiros, berçários e diferentes sistemas de produção.",
    Waves,
    "O sistema de cultivo depende das condições locais, da disponibilidade de água, da infraestrutura e do planejamento produtivo. Não existe uma configuração única para todas as fazendas.",
    "Viveiros escavados|Estruturas de terra com abastecimento, drenagem e acompanhamento do cultivo.",
    "Berçários e tanques|Ambientes para acompanhar fases iniciais e organizar a transferência dos animais.",
    "Sistemas intensivos e bioflocos|Exigem dimensionamento, aeração e acompanhamento técnico compatíveis com a operação.",
  ],
  [
    "manejo",
    "Manejo e alimentação",
    "Cuidado em cada dia do ciclo.",
    "Água, nutrição e acompanhamento do crescimento.",
    Droplets,
    "O manejo reúne observações diárias, medições e decisões ao longo do ciclo. Registros consistentes permitem reconhecer mudanças e orientar intervenções.",
    "Qualidade da água|Acompanhar oxigênio dissolvido, temperatura, pH, salinidade e outros parâmetros definidos pelo responsável técnico.",
    "Alimentação|Ajustar a oferta conforme a biomassa estimada, o consumo observado e as condições do cultivo.",
    "Biometria e registros|Acompanhar crescimento, estimativa de sobrevivência e conversão alimentar.",
  ],
  [
    "sanidade",
    "Sanidade e biossegurança",
    "Prevenir faz parte de produzir.",
    "Rotinas de prevenção, observação e controle de acesso.",
    ShieldCheck,
    "Biossegurança é um conjunto de práticas que busca reduzir a entrada e a disseminação de agentes causadores de doenças. O plano deve considerar os riscos de cada unidade.",
    "Controle de acesso|Organizar a circulação de pessoas, veículos e equipamentos.",
    "Monitoramento|Observar comportamento, alimentação e alterações nos animais e na água.",
    "Resposta técnica|Investigar alterações com profissionais habilitados e laboratórios apropriados.",
  ],
  [
    "beneficiamento",
    "Despesca e beneficiamento",
    "Do viveiro ao produto final.",
    "Colheita, seleção, conservação e embalagem.",
    Snowflake,
    "A despesca conecta a fazenda ao beneficiamento. Planejamento, higiene e controle de temperatura são essenciais para preservar o produto ao longo das etapas.",
    "Despesca planejada|Coordenar equipe, equipamentos e destino do produto antes da colheita.",
    "Seleção e processamento|Classificar e preparar conforme a apresentação comercial pretendida.",
    "Conservação e embalagem|Aplicar procedimentos definidos para o produto e manter a cadeia de frio.",
  ],
];
export const articles = [
  [
    "ciclo",
    "Da pós-larva à despesca: entenda o ciclo",
    "PRODUÇÃO",
    "8 min de leitura",
    "farm",
  ],
  [
    "agua",
    "Qualidade da água: o coração do cultivo",
    "MANEJO",
    "6 min de leitura",
    "lab",
  ],
  [
    "classificacao",
    "Como entender os tamanhos do camarão",
    "GUIA DO PRODUTO",
    "5 min de leitura",
    "shrimp",
  ],
];
export const productData = [
  {
    slug: "inteiro",
    name: "Camarão inteiro",
    desc: "A apresentação que preserva a forma natural do camarão.",
    type: "INTEIRO",
    details:
      "Com cabeça e casca. Uma opção para preparações que valorizam a apresentação completa e o aproveitamento culinário.",
  },
  {
    slug: "sem-cabeca",
    name: "Camarão sem cabeça",
    desc: "Versatilidade para diferentes preparos.",
    type: "SEM CABEÇA",
    details:
      "Com casca e sem cabeça. Apresentação versátil para grelhar, cozinhar e integrar diferentes receitas.",
  },
  {
    slug: "descascado",
    name: "Camarão descascado",
    desc: "Mais praticidade, do preparo ao prato.",
    type: "DESCASCADO",
    details:
      "Sem cabeça e sem casca. Os detalhes de limpeza, presença de cauda e congelamento devem ser confirmados na ficha do fornecedor.",
  },
];
export const faq = [
  [
    "O que é carcinicultura?",
    "É a criação de camarões em sistemas de cultivo. Envolve planejamento, manejo dos animais, qualidade da água e cuidados sanitários e ambientais.",
  ],
  [
    "Quanto tempo dura um ciclo de cultivo?",
    "Não existe um prazo único. O tempo depende do sistema, da temperatura, da genética, do manejo e do tamanho comercial desejado.",
  ],
  [
    "Quais são os sistemas de produção?",
    "Entre as possibilidades estão viveiros escavados, tanques e sistemas que utilizam bioflocos. A escolha depende de avaliação técnica e das condições locais.",
  ],
  [
    "Como consultar produtos e preços?",
    "Esta versão apresenta um catálogo demonstrativo. O canal comercial e os preços precisam ser configurados com os dados da empresa.",
  ],
  [
    "As imagens mostram uma fazenda real?",
    "Não. As imagens deste site foram criadas com inteligência artificial para ilustrar a proposta visual.",
  ],
  [
    "O site substitui acompanhamento técnico?",
    "Não. O conteúdo apresenta conceitos introdutórios. Cada operação precisa de avaliação e acompanhamento profissional.",
  ],
];
export const infoPages = {
  sobre: [
    "SOBRE NÓS",
    "Uma conexão com a origem.",
    "Origem Azul é uma proposta de marca para conectar conhecimento, produção e as possibilidades do camarão.",
    "Um lugar para conhecer toda a cadeia",
    "O projeto reúne as etapas do cultivo, apresentações comerciais e conteúdos introdutórios em uma experiência acessível. A história, equipe, localização e dados da empresa serão incorporados com informações reais.",
    "farm",
  ],
  qualidade: [
    "QUALIDADE E SUSTENTABILIDADE",
    "Cuidado que acompanha o caminho.",
    "Qualidade começa na origem e segue por toda a cadeia produtiva.",
    "Processos que merecem atenção",
    "Procedência dos animais, registros do cultivo, higiene no beneficiamento e conservação do produto são partes complementares do cuidado. Certificações e resultados devem ser apresentados apenas quando documentados.",
    "lab",
  ],
  sustentabilidade: [
    "SUSTENTABILIDADE",
    "Produzir com responsabilidade.",
    "Conheça os temas ambientais que fazem parte do planejamento do cultivo.",
    "Água, recursos e ambiente",
    "Uso da água, efluentes, resíduos e energia devem ser considerados em conjunto. As práticas da empresa e seus resultados serão publicados com dados verificáveis.",
    "farm",
  ],
  "para-empresas": [
    "PARA EMPRESAS",
    "Uma boa parceria começa na origem.",
    "Um espaço para restaurantes, mercados, distribuidores e outros compradores.",
    "Encontre a apresentação adequada ao seu negócio",
    "Na definição do fornecimento, confirme especificações, volume, frequência, documentação, conservação e condições de entrega. Os canais comerciais serão configurados com a empresa.",
    "shrimp",
  ],
  logistica: [
    "LOGÍSTICA",
    "Qualidade também é o caminho.",
    "A conservação precisa acompanhar o produto até o seu destino.",
    "Uma cadeia de cuidados",
    "Transporte, armazenamento e recebimento devem respeitar as especificações do produto. Regiões atendidas, prazos, pedidos mínimos e modalidades serão informados pela operação comercial.",
    "shrimp",
  ],
  privacidade: [
    "PRIVACIDADE",
    "Transparência no uso de dados.",
    "Informações sobre esta versão demonstrativa.",
    "Como esta demonstração funciona",
    "O formulário não transmite nem armazena as informações preenchidas em servidor. Não foram configurados serviços de análise ou publicidade. Antes do lançamento comercial, esta página deverá identificar o responsável pelo tratamento, os canais de contato e as práticas efetivamente adotadas.",
    "lab",
  ],
};
export const img = (name) => `/images/${name}.png`;
