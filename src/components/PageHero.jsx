import { Link } from "react-router-dom";

export function PageHero({ tag, title, description }) {
  return (
    <section className="page-hero">
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
    </section>
  );
}
import { Eyebrow } from "./Eyebrow";
