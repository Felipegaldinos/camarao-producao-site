import { useState } from "react";

import { productData } from "../data/content";
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
} from "lucide-react";
import { Link } from "react-router-dom";

export function Products() {
  const [filter, setFilter] = useState("Todos");
  return (
    <>
      <PageHero
        tag="PRODUTOS"
        title="Qualidade em cada apresentação."
        description="Conheça as formas comerciais do camarão e descubra as possibilidades de cada uma."
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
              <Eyebrow>O PREPARO COMEÇA NA ESCOLHA</Eyebrow>
              <h2>
                O que vai sair
                <br />
                da sua cozinha?
              </h2>
            </div>
            <p>
              Explore algumas possibilidades de uso.
              <br />A receita e o serviço orientam a escolha final.
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
              "Confirme o peso líquido, o formato da embalagem e a quantidade adequada à sua rotina.",
            ],
            [
              Snowflake,
              "Conservação e preparo",
              "As condições de armazenamento, validade e preparo devem seguir a rotulagem do produto.",
            ],
            [
              Utensils,
              "Limpeza e apresentação",
              "Confira casca, cauda e evisceração. Esses detalhes podem variar entre especificações.",
            ],
          ].map(([Icon, title, text]) => (
            <article key={title}>
              <Icon size={28} />
              <h3>{title}</h3>
              <p>{text}</p>
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
