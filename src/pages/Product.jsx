import { useParams } from "react-router-dom";

import { productData, img } from "../data/content";
import { Eyebrow, Button, PageHero } from "../components";
import { NotFound } from "./NotFound";
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
          src={img(
            slug === "inteiro"
              ? "shrimp"
              : slug === "sem-cabeca"
                ? "headless"
                : "peeled",
          )}
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
    </>
  );
}
