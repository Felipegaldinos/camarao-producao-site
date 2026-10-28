import { useParams } from "react-router-dom";

import { stages } from "../data/content";
import { Button, PageHero } from "../components";
import { NotFound } from "./NotFound";
import { stageMedia } from "../data/about";
import { EditorialImage } from "../components/EditorialImage";
export function Stage() {
  let { slug } = useParams();
  let s = stages.find((s) => s[0] === slug);
  if (!s) return <NotFound />;
  const media = stageMedia[slug];
  return (
    <>
      <PageHero
        tag="CADEIA PRODUTIVA"
        title={s[1]}
        description={s[2]}
        image={media.primary}
      />
      <section className="container section reading">
        <p className="lead">{s[5]}</p>
        <EditorialImage
          image={media.primary}
          alt={`Representação ilustrativa: ${s[1].toLowerCase()}`}
          caption={media.caption}
          className="stage-main-image"
        />
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
        <div className="stage-editorial">
          <EditorialImage
            image={media.secondary}
            alt={`Imagem ilustrativa de apoio à etapa de ${s[1].toLowerCase()}`}
          />
          <div>
            <h2>{media.detail}</h2>
            <p>{media.text}</p>
            <span className="mini-label">IMAGEM ILUSTRATIVA · IA</span>
          </div>
        </div>
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
