import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { img } from "../data/content";
export function ArticleCard({ a }) {
  return (
    <Link className="article-card" to={"/conhecimento/" + a[0]}>
      <div className="article-image">
        <img
          loading="lazy"
          decoding="async"
          src={img(a[4])}
          alt="Imagem ilustrativa do tema do artigo"
        />
        <span>
          <ArrowUpRight size={21} />
        </span>
      </div>
      <div className="article-meta">
        {a[2]}
        <span>{a[3]}</span>
      </div>
      <h3>{a[1]}</h3>
    </Link>
  );
}
