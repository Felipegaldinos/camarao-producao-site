import { useParams } from "react-router-dom";

import { stages } from "../data/content";
import { Button, PageHero } from "../components";
import { NotFound } from "./NotFound";
export function Stage() {
  let { slug } = useParams();
  let s = stages.find((s) => s[0] === slug);
  if (!s) return <NotFound />;
  return (
    <>
      <PageHero
        tag="CADEIA PRODUTIVA"
        title={s[1]}
        description={s[2]}
        image={
          slug === "pos-larvas" || slug === "sanidade"
            ? "lab"
            : slug === "beneficiamento"
              ? "shrimp"
              : "farm"
        }
      />
      <section className="container section reading">
        <p className="lead">{s[5]}</p>
        {s.slice(6).map((item, i) => {
          let [title, body] = item.split("|");
          return (
            <div className="reading-row" key={title}>
              <span>0{i + 1}</span>
              <div>
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
            </div>
          );
        })}
        <div className="callout">
          Os procedimentos e os parâmetros de manejo variam com o sistema, a
          fase de cultivo e as condições locais. Este material é uma introdução
          educativa.
        </div>
        <Button to="/producao">Ver todas as etapas</Button>
      </section>
    </>
  );
}
