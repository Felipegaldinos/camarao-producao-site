import { useState } from "react";

import { productData } from "../data/content";
import { productImages } from "../data/media";
import { ProductCard, PageHero, CTA } from "../components";

export function Products() {
  const [filter, setFilter] = useState("Todos");
  return (
    <>
      <PageHero
        tag="PRODUTOS"
        title="Qualidade em cada apresentação."
        description="Conheça as formas comerciais do camarão e descubra as possibilidades de cada uma."
      />
      <section className="section container">
        <div className="filters">
          {["Todos", "Inteiro", "Sem cabeça", "Descascado"].map((t) => (
            <button
              className={filter === t ? "selected" : ""}
              key={t}
              aria-pressed={filter === t}
              onClick={() => setFilter(t)}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="product-grid">
          {productData
            .filter(
              (p) => filter === "Todos" || p.type === filter.toUpperCase(),
            )
            .map((p) => (
              <ProductCard
                key={p.slug}
                p={p}
                image={productImages.listing[p.slug]}
              />
            ))}
        </div>
        <p className="note">
          Catálogo demonstrativo. Disponibilidade, classificação, embalagem e
          condições comerciais serão preenchidas com os dados da empresa.
        </p>
      </section>
      <CTA />
    </>
  );
}
