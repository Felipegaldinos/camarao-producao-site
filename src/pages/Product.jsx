import { useParams } from "react-router-dom";

import { productData, img } from "../data/content";
import { productImages } from "../data/media";
import { Eyebrow, Button, PageHero } from "../components";
import { NotFound } from "./NotFound";
import { productGuide, purchaseChecks } from "../data/productGuide";
import { Check, Utensils, PackageCheck } from "lucide-react";
export function Product() {
  const { slug } = useParams();
  const p = productData.find((p) => p.slug === slug);
  if (!p) return <NotFound />;
  return (
    <>
      <PageHero tag="PRODUTOS" title={p.name} description={p.desc} />
      <section className="section container product-detail">
        <img
          loading="lazy"
          decoding="async"
          src={img(productImages.detail[slug])}
          alt={p.name}
        />
        <div>
          <Eyebrow>CONHEÇA A APRESENTAÇÃO</Eyebrow>
          <h2>
            Do seu jeito,
            <br />
            para o seu preparo.
          </h2>
          <p>{p.details}</p>
          <dl>
            <dt>Espécie de referência</dt>
            <dd>Camarão-branco-do-pacífico (vannamei)</dd>
            <dt>Tamanho e classificação</dt>
            <dd>A confirmar no catálogo comercial</dd>
            <dt>Embalagem e conservação</dt>
            <dd>Consultar a ficha técnica do produto</dd>
          </dl>
          <Button to={"/contato?produto=" + encodeURIComponent(p.name)}>
            Solicitar informações
          </Button>
        </div>
      </section>
      <section className="pale section">
        <div className="container product-detail-facts">
          <article>
            <Utensils size={28} />
            <h2>Possibilidades de preparo</h2>
            <p>{productGuide[slug].preparation}</p>
          </article>
          <article>
            <PackageCheck size={28} />
            <h2>O que considerar</h2>
            <p>{productGuide[slug].attention}</p>
            <p>{productGuide[slug].handling}</p>
          </article>
        </div>
      </section>
      <section className="container section purchasing-grid">
        <div>
          <Eyebrow>ANTES DO PEDIDO</Eyebrow>
          <h2>
            Confirme os detalhes
            <br />
            da sua escolha.
          </h2>
          <p>
            Esta é uma apresentação demonstrativa. A ficha comercial precisa ser
            completada com as especificações reais do fornecedor.
          </p>
          <Button to={"/contato?produto=" + encodeURIComponent(p.name)}>
            Consultar ficha e disponibilidade
          </Button>
        </div>
        <ul className="checklist">
          {purchaseChecks.map((item) => (
            <li key={item}>
              <Check size={18} />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
