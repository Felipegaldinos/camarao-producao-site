import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { articles } from "../data/content";
import { articleImages } from "../data/media";
import { ArticleCard, PageHero } from "../components";

export function Knowledge() {
  const [q, setQ] = useState("");
  return (
    <>
      <PageHero
        tag="CONHECIMENTO"
        title="Conhecer é o primeiro passo."
        description="Guias e conteúdos introdutórios para explorar o universo da carcinicultura."
      />
      <section className="section container">
        <label className="search">
          <Search size={20} />
          <input
            aria-label="Pesquisar conteúdo"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="O que você quer aprender?"
          />
        </label>
        <div className="article-grid">
          {articles
            .filter((a) => a[1].toLowerCase().includes(q.toLowerCase()))
            .map((a) => (
              <ArticleCard
                a={a}
                key={a[0]}
                image={articleImages.listing[a[0]]}
              />
            ))}
        </div>
        {!articles.some((a) =>
          a[1].toLowerCase().includes(q.toLowerCase()),
        ) && (
          <p>
            Nenhum conteúdo encontrado. Tente buscar por água, ciclo ou camarão.
          </p>
        )}
        <div className="callout">
          Quer começar pelo básico?{" "}
          <Link to="/perguntas-frequentes">Veja as perguntas frequentes →</Link>
        </div>
      </section>
    </>
  );
}
