export const qualityStages = [
  {
    id: "origem",
    label: "Origem",
    title: "Conhecer de onde vem.",
    description:
      "A organização dos registros começa antes do povoamento e conecta o fornecedor às primeiras etapas do cultivo.",
    records: [
      "Procedência e identificação do fornecedor",
      "Informações sanitárias e documentos disponíveis",
      "Recebimento, transporte e aclimatação",
    ],
    icon: "origin",
  },
  {
    id: "cultivo",
    label: "Cultivo",
    title: "Acompanhar o que acontece.",
    description:
      "Observações e medições ajudam a relacionar o ambiente ao desenvolvimento dos animais durante o ciclo.",
    records: [
      "Identificação do viveiro e do ciclo",
      "Registros de água, alimentação e biometria",
      "Ocorrências e ações acompanhadas pela equipe técnica",
    ],
    icon: "water",
  },
  {
    id: "processo",
    label: "Beneficiamento",
    title: "Cuidado em cada passagem.",
    description:
      "O recebimento e as etapas de processamento precisam estar conectados à identificação e à conservação do produto.",
    records: [
      "Recebimento e identificação da matéria-prima",
      "Rotinas de higiene, seleção e classificação",
      "Embalagem, identificação e registros de conservação",
    ],
    icon: "process",
  },
  {
    id: "destino",
    label: "Distribuição",
    title: "Preservar até o destino.",
    description:
      "Armazenamento, transporte e recebimento completam a sequência de cuidados com o produto.",
    records: [
      "Condições de armazenamento e expedição",
      "Identificação dos lotes e dos destinatários",
      "Orientações de conservação e recebimento",
    ],
    icon: "transport",
  },
];

export const qualityQuestions = [
  [
    "Qualidade e rastreabilidade são a mesma coisa?",
    "São complementares. Qualidade envolve características e controles do produto e do processo. Rastreabilidade conecta registros de origem, movimentação e destino de um lote.",
  ],
  [
    "O que a identificação do lote permite?",
    "Ela ajuda a relacionar o produto aos registros mantidos pela operação. A informação disponível depende de como os processos e os sistemas da empresa estão organizados.",
  ],
  [
    "Posso consultar um lote neste site?",
    "Esta versão explica o conceito de rastreabilidade, mas ainda não está conectada a um sistema real de consulta de lotes.",
  ],
  [
    "A marca possui certificações ou selos de inspeção?",
    "Nenhuma certificação ou registro da empresa foi informado para esta demonstração. Documentos e selos serão apresentados somente após confirmação de validade e abrangência.",
  ],
  [
    "O que fazer se houver uma dúvida no recebimento?",
    "Separe os dados do produto e do lote, registre a situação e procure o fornecedor. Em situações que possam afetar a segurança do alimento, busque também orientação da vigilância sanitária local.",
  ],
];
