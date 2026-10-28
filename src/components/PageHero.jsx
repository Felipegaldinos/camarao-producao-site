import { Link } from "react-router-dom";
import { img } from "../data/content";

export function PageHero({ tag, title, description, visualImage, imageAlt }) {
  return (
    <section className={"page-hero " + (visualImage ? "visual-hero" : "")}>
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
      {visualImage && (
        <img
          className="page-hero-photo"
          src={img(visualImage)}
          alt={imageAlt || "Imagem ilustrativa da cadeia do camarão"}
          fetchPriority="high"
          decoding="async"
        />
      )}
    </section>
  );
}
import { Eyebrow } from "./Eyebrow";
