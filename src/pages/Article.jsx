import { useParams } from "react-router-dom";

import { articles, img } from "../data/content";
import { Button, PageHero } from "../components";
import { NotFound } from "./NotFound";
export function Article() {
  const { slug } = useParams();
  const a = articles.find((a) => a[0] === slug);
  if (!a) return <NotFound />;
  const bodies = {
    ciclo: [
      [
        "Tudo começa no planejamento",
        "Antes do povoamento, a unidade precisa organizar infraestrutura, origem dos animais, insumos, equipe e acompanhamento técnico. A duração do ciclo varia conforme ambiente, sistema e objetivo de peso.",
      ],
      [
        "Acompanhamento durante a engorda",
        "Alimentação, qualidade da água e biometrias ajudam a acompanhar o desenvolvimento dos animais. Os registros conectam as observações diárias às decisões do cultivo.",
      ],
      [
        "O momento da despesca",
        "A colheita deve ser coordenada com transporte e beneficiamento. A preservação da qualidade segue ao longo da conservação, embalagem e distribuição.",
      ],
    ],
    agua: [
      [
        "Um ambiente que muda todos os dias",
        "A água responde ao clima, à alimentação, à biomassa e ao funcionamento do sistema. Por isso, medições regulares devem acompanhar a observação do viveiro.",
      ],
      [
        "O que acompanhar",
        "Oxigênio dissolvido, temperatura, pH e salinidade fazem parte da rotina. Outros indicadores, como alcalinidade e compostos nitrogenados, integram o plano definido pelo responsável técnico.",
      ],
      [
        "Medir, registrar e interpretar",
        "Um resultado isolado tem menos valor que uma série de registros bem contextualizados. Equipamentos precisam de cuidados, calibração e uso adequado.",
      ],
    ],
    classificacao: [
      [
        "Apresentação e tamanho são informações diferentes",
        "Inteiro, sem cabeça e descascado descrevem a apresentação. Já a classificação comercial indica uma faixa de quantidade de camarões por unidade de peso.",
      ],
      [
        "Confira sempre a unidade",
        "Uma faixa numérica deve ser lida junto da unidade declarada: por quilograma ou por libra, por exemplo. Não compare classificações sem conferir essa informação.",
      ],
      [
        "Escolha conforme o preparo",
        "Tamanho, rendimento e apresentação influenciam a escolha culinária. Consulte a ficha técnica para confirmar embalagem, conservação, ingredientes e outras informações do produto.",
      ],
    ],
  };
  return (
    <>
      <PageHero
        tag={a[2]}
        title={a[1]}
        description={a[3] + " · Conteúdo introdutório"}
      />
      <article className="container section reading">
        <img
          loading="lazy"
          decoding="async"
          className="article-cover"
          src={img(articleImages.detail[slug])}
          alt="Imagem ilustrativa do artigo"
        />
        {bodies[slug].map(([t, b]) => (
          <section key={t}>
            <h2>{t}</h2>
            <p>{b}</p>
          </section>
        ))}
        <div className="callout">
          Material educativo introdutório. Para decisões de produção, procure
          orientação técnica. Referências para aprofundamento:{" "}
          <a href="https://www.embrapa.br/" target="_blank" rel="noreferrer">
            Embrapa
          </a>{" "}
          e{" "}
          <a
            href="https://www.fao.org/fishery/en"
            target="_blank"
            rel="noreferrer"
          >
            FAO — Aquicultura
          </a>
          .
        </div>
        <Button to="/conhecimento">Voltar aos conteúdos</Button>
      </article>
    </>
  );
}
import { articleImages } from "../data/media";
