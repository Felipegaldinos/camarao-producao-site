import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { img } from "../data/content";
export function ProductCard({ p }) {
  return (
    <Link to={"/produtos/" + p.slug} className="product-card">
      <div className={"product-image " + p.slug}>
        <img
          loading="lazy"
          decoding="async"
          src={img(
            p.slug === "inteiro"
              ? "shrimp"
              : p.slug === "sem-cabeca"
                ? "headless"
                : "peeled",
          )}
          alt={"Imagem ilustrativa de " + p.name.toLowerCase()}
        />
        <span>
          CONHEÇA O PRODUTO <ArrowUpRight size={14} />
        </span>
      </div>
      <div className="product-bottom">
        <div>
          <h3>{p.name}</h3>
          <p>{p.desc}</p>
        </div>
        <ArrowUpRight size={21} />
      </div>
    </Link>
  );
}
