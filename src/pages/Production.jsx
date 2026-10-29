import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { stages } from "../data/content";
import { PageHero, CTA } from "../components";
import { img } from "../data/content";
import { stageImageSuffix } from "../data/media";

export function Production() {
  return (
    <>
      <PageHero
        tag="PRODUÇÃO"
        title="Uma jornada. Muitos cuidados."
        description="Explore as etapas que conectam a origem do camarão ao produto final."
      />
      <section className="container section production-path">
        <div className="production-list">
          {stages.map(([slug, title, sub, desc, Icon], i) => (
            <Link key={slug} to={"/producao/" + slug} data-step={"0" + (i + 1)}>
              <img
                className="production-thumb"
                src={img("production-" + stageImageSuffix[slug])}
                alt={`Imagem ilustrativa: ${title.toLowerCase()}`}
                loading="lazy"
                decoding="async"
              />
              <div className="production-card-copy">
                <span className="mini-label">ETAPA 0{i + 1}</span>
                <h2>{title}</h2>
                <p>{desc}</p>
              </div>
              <ArrowUpRight />
            </Link>
          ))}
        </div>
        <p className="note">
          Conteúdo introdutório. A operação de cada cultivo deve ser
          dimensionada e acompanhada por profissional habilitado.
        </p>
      </section>
      <CTA />
    </>
  );
}
