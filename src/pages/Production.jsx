import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { stages } from "../data/content";
import { PageHero, CTA } from "../components";

export function Production() {
  return (
    <>
      <PageHero
        tag="PRODUÇÃO"
        title="Uma jornada. Muitos cuidados."
        description="Explore as etapas que conectam a origem do camarão ao produto final."
        image="farm"
      />
      <section className="container section">
        <div className="production-list">
          {stages.map(([slug, title, sub, desc, Icon], i) => (
            <Link key={slug} to={"/producao/" + slug}>
              <span className="large-number">0{i + 1}</span>
              <Icon />
              <div>
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
