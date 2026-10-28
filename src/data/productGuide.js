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
    id: "inteiro",
    label: "Comercialização do inteiro",
    product: "inteiro",
    title: "Apresentação completa após a despesca.",
    text: "O inteiro mantém cabeça e casca. Confirme a classificação, a unidade de peso, as condições de conservação e o destino comercial do lote.",
  },
  {
    id: "beneficiamento",
    label: "Beneficiamento e limpeza",
    product: "descascado",
    title: "Descascado, conforme a especificação.",
    text: "A apresentação resulta das etapas de limpeza e beneficiamento. Verifique presença de cauda, evisceração, peso líquido e embalagem.",
  },
  {
    id: "versatil",
    label: "Fornecimento com casca",
    product: "sem-cabeca",
    title: "Sem cabeça, com casca.",
    text: "Uma apresentação comercial que combina retirada da cabeça e manutenção da casca. Consulte a classificação e a padronização informadas pelo fornecedor.",
  },
  {
    id: "profissional",
    label: "Fornecimento para empresas",
    product: "descascado",
    title: "Volume, apresentação e regularidade.",
    text: "Planeje o fornecimento a partir do volume, da embalagem, da classificação e da frequência de expedição. Confirme a disponibilidade com a operação comercial.",
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
