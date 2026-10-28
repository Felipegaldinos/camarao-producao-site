import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { infoPages } from "../data/content";
import { Eyebrow, Button, PageHero } from "../components";
import { NotFound } from "./NotFound";
export function Info({ pageName }) {
  const page = pageName;
  const d = infoPages[page];
  if (!d) return <NotFound />;
  return (
    <>
      <PageHero tag={d[0]} title={d[1]} description={d[2]} image={d[5]} />
      <section className="section container reading">
        <Eyebrow>{d[0]}</Eyebrow>
        <h2>{d[3]}</h2>
        <p className="lead">{d[4]}</p>
        {page === "qualidade" && (
          <div className="reading-row">
            <ShieldCheck />
            <div>
              <h3>Rastreabilidade e transparência</h3>
              <p>
                Registros de origem, manejo e destino dos lotes ajudam a
                conectar as etapas da cadeia. Esta demonstração não oferece
                consulta operacional de lotes.
              </p>
              <Link className="text-link" to="/sustentabilidade">
                Conheça os temas ambientais <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        )}
        <Button to="/contato">Fale com a gente</Button>
      </section>
    </>
  );
}
