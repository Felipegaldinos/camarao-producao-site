export const productGuide = {
  inteiro: {
    title: "Apresentação completa",
    preparation:
      "Grelhados, pratos com destaque visual e preparos que aproveitam cabeça e casca.",
    attention:
      "O peso inclui cabeça e casca. Considere a etapa de limpeza ao planejar o rendimento.",
    handling:
      "Exige o preparo correspondente à receita e à apresentação desejada.",
  },
  "sem-cabeca": {
    title: "Versatilidade com casca",
    preparation:
      "Grelha, forno, molhos e preparos em que a casca faz parte da cocção.",
    attention:
      "A casca e a cauda podem exigir retirada antes de servir, conforme a receita.",
    handling: "Confirme tamanho, presença de cauda e especificação de limpeza.",
  },
  descascado: {
    title: "Praticidade no preparo",
    preparation:
      "Risotos, massas, recheios e preparações que pedem camarão já sem casca.",
    attention:
      "Confirme se o produto tem cauda, se é eviscerado e qual o peso líquido declarado.",
    handling:
      "A apresentação reduz etapas de limpeza; o preparo ainda deve seguir o rótulo.",
  },
};

export const preparations = [
  {
    id: "grelha",
    label: "Grelha e apresentação",
    product: "inteiro",
    title: "O camarão como protagonista.",
    text: "O inteiro valoriza a apresentação completa. A versão sem cabeça também pode ser uma opção, conforme a receita e o serviço.",
  },
  {
    id: "massa",
    label: "Massas e risotos",
    product: "descascado",
    title: "Mais fluidez na sua cozinha.",
    text: "O descascado é uma possibilidade para preparos que pedem praticidade. Confira a presença de cauda e a limpeza especificada.",
  },
  {
    id: "versatil",
    label: "Preparo versátil",
    product: "sem-cabeca",
    title: "Uma escolha para diferentes receitas.",
    text: "O sem cabeça combina diferentes possibilidades de preparo. Avalie o tamanho e se a casca fará parte da cocção.",
  },
  {
    id: "profissional",
    label: "Cozinha profissional",
    product: "descascado",
    title: "Planejamento antes do pedido.",
    text: "Compare rendimento, porcionamento, frequência de uso e etapas de limpeza. A escolha final depende do processo da sua cozinha.",
  },
];

export const productQuestions = [
  [
    "Qual apresentação devo escolher?",
    "Comece pelo preparo e pelo serviço. Compare inteiro, sem cabeça e descascado considerando limpeza, presença de casca e cauda, apresentação no prato e rendimento esperado.",
  ],
  [
    "A classificação é sempre por quilograma?",
    "Não. Confira a unidade indicada na ficha do produto. As classificações podem usar quilograma ou libra; números iguais em unidades diferentes não representam necessariamente o mesmo tamanho.",
  ],
  [
    "Descascado significa sem cauda e eviscerado?",
    "Não necessariamente. Essas características devem estar declaradas na especificação. Antes de comprar, confirme a presença de cauda e o tipo de limpeza.",
  ],
  [
    "Como consultar embalagens, valores e disponibilidade?",
    "Informe a apresentação desejada, a classificação, o volume e a frequência. O catálogo desta demonstração ainda precisa receber as condições comerciais reais da empresa.",
  ],
  [
    "Onde encontro as informações de conservação?",
    "Consulte o rótulo e a ficha técnica para temperatura de conservação, validade e instruções de preparo. Não substitua essas orientações por uma regra genérica.",
  ],
];

export const purchaseChecks = [
  "Apresentação e tipo de limpeza",
  "Classificação e unidade de peso",
  "Peso líquido e embalagem",
  "Conservação e prazo de validade",
  "Identificação do lote e origem",
  "Disponibilidade e condições de entrega",
];
