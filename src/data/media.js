// Every key identifies a single editorial placement across the entire site.
// Cards and detail pages deliberately receive different photographs.
export const stageImageSuffix = {
  "pos-larvas": "larvae",
  fazenda: "cultivation",
  manejo: "feeding",
  sanidade: "sanitary",
  beneficiamento: "processing",
};

export const homeStageImages = {
  "pos-larvas": "home-larvae",
  fazenda: "home-cultivation",
  manejo: "home-feeding",
  sanidade: "home-biosecurity",
  beneficiamento: "home-harvest",
};

export const productImages = {
  home: { inteiro: "shrimp", "sem-cabeca": "headless", descascado: "peeled" },
  listing: {
    inteiro: "listing-whole",
    "sem-cabeca": "listing-headless",
    descascado: "listing-peeled",
  },
  detail: {
    inteiro: "detail-whole",
    "sem-cabeca": "detail-headless",
    descascado: "detail-peeled",
  },
};

export const articleImages = {
  home: {
    ciclo: "home-article-cycle",
    agua: "home-article-water",
    classificacao: "home-article-size",
  },
  listing: {
    ciclo: "knowledge-cycle",
    agua: "knowledge-water",
    classificacao: "knowledge-size",
  },
  detail: {
    ciclo: "article-cycle",
    agua: "article-water",
    classificacao: "article-size",
  },
};
