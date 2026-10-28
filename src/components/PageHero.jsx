import { Link } from "react-router-dom";

import { img } from "../data/content";
export function PageHero({ tag, title, description, image }) {
  return (
    <section className={"page-hero " + (image ? "with-image" : "")}>
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Início</Link>
          <span>/</span>
          {tag}
        </div>
        <Eyebrow>{tag}</Eyebrow>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {image && (
        <img
          loading="lazy"
          decoding="async"
          src={img(image)}
          alt="Cena ilustrativa da cadeia de produção de camarão"
        />
      )}
    </section>
  );
}
import { Eyebrow } from "./Eyebrow";
