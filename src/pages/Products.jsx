import { useState } from "react";

import { productData, img } from "../data/content";
import { productImages } from "../data/media";
import { ProductCard, PageHero, CTA } from "../components";
import { Eyebrow, Button } from "../components";
import { EditorialImage } from "../components/EditorialImage";
import { PreparationGuide } from "../components/PreparationGuide";
import { QuestionList } from "../components/QuestionList";
import {
  productGuide,
  productQuestions,
  purchaseChecks,
} from "../data/productGuide";
import {
  Check,
  Package,
  Snowflake,
  Utensils,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Products() {
  const [filter, setFilter] = useState("Todos");
  return (
    <>
      <PageHero
        tag="PRODUTOS"
        title="Da produção, diferentes apresentações."
        description="Conheça as apresentações do camarão após o beneficiamento e os pontos técnicos que orientam o fornecimento."
        visualImage="products-banner"
        imageAlt="Imagem ilustrativa de camarões inteiros sobre gelo em uma apresentação azul e branca"
      />
      <div className="container page-subnav">
        <a href="#catalogo">Catálogo</a>
        <a href="#escolha">Como escolher</a>
        <a href="#comparativo">Compare as apresentações</a>
        <a href="#duvidas">Dúvidas frequentes</a>
      </div>
      <section className="section container" id="catalogo">
        <div className="section-heading">
          <div>
            <Eyebrow>ENCONTRE SUA APRESENTAÇÃO</Eyebrow>
            <h2>
              Um produto para
              <br />
              diferentes possibilidades.
            </h2>
          </div>
          <p>
            Conheça cada formato e confirme os detalhes
            <br />
            na ficha técnica antes do pedido.
          </p>
        </div>
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
      <section className="pale section" id="escolha">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>DA PRODUÇÃO AO FORNECIMENTO</Eyebrow>
              <h2>
                Cada destino,
                <br />
                uma apresentação.
              </h2>
            </div>
            <p>
              Explore os perfis de fornecimento.
              <br />
              Classificação, limpeza e conservação orientam a escolha.
            </p>
          </div>
          <PreparationGuide />
        </div>
      </section>
      <section className="container section" id="comparativo">
        <div className="section-heading">
          <div>
            <Eyebrow>OLHE ALÉM DO TAMANHO</Eyebrow>
            <h2>
              Cada apresentação,
              <br />
              uma forma de preparar.
            </h2>
          </div>
          <Link className="text-link" to="/qualidade">
            Conheça os cuidados com o produto <ArrowUpRight size={17} />
          </Link>
        </div>
        <details className="content-disclosure">
          <summary>
            Ver o comparativo completo das apresentações{" "}
            <ChevronDown size={18} />
          </summary>
          <div
            className="table-scroll"
            role="region"
            aria-label="Comparativo das apresentações"
            tabIndex={0}
          >
            <table className="comparison-table">
              <caption>
                Compare apresentação, possibilidades de uso e pontos de atenção.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Apresentação</th>
                  <th scope="col">Possibilidades de preparo</th>
                  <th scope="col">O que considerar</th>
                </tr>
              </thead>
              <tbody>
                {productData.map((p) => (
                  <tr key={p.slug}>
                    <th scope="row">
                      <Link to={"/produtos/" + p.slug}>
                        {p.name}
                        <ArrowUpRight size={15} />
                      </Link>
                      <span>{productGuide[p.slug].title}</span>
                    </th>
                    <td>{productGuide[p.slug].preparation}</td>
                    <td>{productGuide[p.slug].attention}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      </section>
      <section className="container product-understanding">
        <EditorialImage
          image="products-guide"
          alt="Imagem ilustrativa de apresentações de camarão sendo organizadas em uma cozinha"
          caption="Inteiro, sem cabeça ou descascado: a escolha conversa com o preparo."
        />
        <div>
          <Eyebrow>ENTENDA A CLASSIFICAÇÃO</Eyebrow>
          <h2>
            O número também
            <br />
            conta uma história.
          </h2>
          <p>
            A classificação comercial pode indicar uma faixa de quantidade de
            camarões por unidade de peso. Leia sempre o número junto da
            apresentação e da unidade declarada.
          </p>
          <div className="size-example">
            <span>EXEMPLO DIDÁTICO · MESMA APRESENTAÇÃO</span>
            <div>
              <strong>
                40/50<small>unidades por kg</small>
              </strong>
              <span>comparado a</span>
              <strong>
                80/100<small>unidades por kg</small>
              </strong>
            </div>
            <p>
              Na mesma unidade de peso, menos unidades correspondem a camarões
              maiores. As faixas acima são exemplos, não disponibilidade de
              catálogo.
            </p>
          </div>
          <Link className="text-link" to="/conhecimento/classificacao">
            Leia o guia de classificação <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <section className="section container">
        <div className="commerce-facts">
          {[
            [
              Package,
              "Embalagem e peso",
              "Confirme peso líquido e quantidade por embalagem.",
              "products-packaging",
            ],
            [
              Snowflake,
              "Conservação e preparo",
              "Siga a conservação e o preparo indicados no rótulo.",
              "products-coldchain",
            ],
            [
              Utensils,
              "Limpeza e apresentação",
              "Confira casca, cauda e o tipo de limpeza.",
              "products-cleaning",
            ],
          ].map(([Icon, title, text, image]) => (
            <article className="commerce-photo-card" key={title}>
              <img
                src={img(image)}
                alt={"Imagem ilustrativa: " + title.toLowerCase()}
                loading="lazy"
                decoding="async"
              />
              <div>
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="pale section">
        <div className="container purchasing-grid">
          <div>
            <Eyebrow>PARA UM PEDIDO BEM DEFINIDO</Eyebrow>
            <h2>
              Os detalhes certos.
              <br />
              Uma conversa mais fácil.
            </h2>
            <p>
              Para casa ou para o seu negócio, organize as informações que
              ajudam a encontrar a apresentação e as condições adequadas.
            </p>
            <Button to="/contato">Preparar uma solicitação</Button>
          </div>
          <ul className="checklist">
            {purchaseChecks.map((item) => (
              <li key={item}>
                <Check size={18} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="container section faq-section" id="duvidas">
        <div>
          <Eyebrow>ANTES DE ESCOLHER</Eyebrow>
          <h2>
            Boas perguntas.
            <br />
            Escolhas mais claras.
          </h2>
          <p>Os pontos mais comuns na hora de comparar e consultar produtos.</p>
        </div>
        <QuestionList questions={productQuestions} />
      </section>
      <CTA />
    </>
  );
}
