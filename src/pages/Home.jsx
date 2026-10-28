import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Waves,
  Droplets,
  Leaf,
  ShieldCheck,
  BookOpen,
} from "lucide-react";
import { stages, articles, productData, img } from "../data/content";
import { homeStageImages, productImages, articleImages } from "../data/media";
import { Eyebrow, Button, ProductCard, ArticleCard, CTA } from "../components";

export function Home() {
  return (
    <>
      <section className="hero">
        <img
          loading="lazy"
          decoding="async"
          src={img("farm")}
          alt="Imagem ilustrativa de viveiros de camarão próximos ao litoral"
        />
        <div className="hero-shade" />
        <div className="container hero-content">
          <Eyebrow light>DA ORIGEM, UM MAR DE POSSIBILIDADES</Eyebrow>
          <h1>
            Um universo de cuidado.
            <br />
            Uma origem <em>azul.</em>
          </h1>
          <p>
            Conheça a jornada do camarão: da vida que começa na água
            <br className="desktop" /> à qualidade que chega à sua mesa.
          </p>
          <div className="actions">
            <Button to="/producao">Conheça nossa produção</Button>
            <Link className="text-link white" to="/produtos">
              Explore os produtos <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <div className="hero-caption">
          <span>01 / 03</span>
          <div />
          <span>DA ÁGUA À MESA, CADA ETAPA IMPORTA</span>
        </div>
      </section>
      <div className="promise">
        <div className="container promise-inner">
          {[
            [Waves, "Produção consciente"],
            [ShieldCheck, "Qualidade em cada etapa"],
            [Leaf, "Respeito à natureza"],
            [BookOpen, "Conhecimento compartilhado"],
          ].map(([Icon, t]) => (
            <div key={t}>
              <Icon size={23} />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
      <section className="section container intro">
        <div>
          <Eyebrow>CONHEÇA A ORIGEM AZUL</Eyebrow>
          <h2>
            Mais do que produzir.
            <br />
            <span>Entender cada etapa.</span>
          </h2>
        </div>
        <div>
          <p>
            O camarão tem uma história que começa muito antes de chegar à mesa.
            Ela envolve ciência, pessoas, água e um cuidado que acompanha todo o
            caminho.
          </p>
          <p>
            Reunimos essa jornada em um só lugar. Um espaço para conhecer a
            produção, explorar produtos e se aproximar do universo da
            carcinicultura.
          </p>
          <Link className="text-link" to="/sobre">
            Conheça essa proposta <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <section className="section pale">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>UMA JORNADA DE PONTA A PONTA</Eyebrow>
              <h2>
                Da primeira fase
                <br />
                ao próximo destino.
              </h2>
            </div>
            <div>
              <p>
                Cada etapa tem seu papel.
                <br />
                Conheça o caminho completo da produção.
              </p>
              <Link className="text-link" to="/producao">
                Explore a cadeia produtiva <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <div className="stage-grid">
            {stages.map(([slug, title, sub, desc, Icon], i) => (
              <Link to={"/producao/" + slug} className="stage-card" key={slug}>
                <img
                  className="stage-card-photo"
                  src={img(homeStageImages[slug])}
                  alt={`Imagem ilustrativa de ${title.toLowerCase()}`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="stage-top">
                  <Icon size={29} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="circle-arrow">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section container product-section">
        <div className="section-heading">
          <div>
            <Eyebrow>QUALIDADE QUE GANHA FORMA</Eyebrow>
            <h2>
              Um camarão.
              <br />
              Muitas possibilidades.
            </h2>
          </div>
          <Button to="/produtos" outline>
            Conheça os produtos
          </Button>
        </div>
        <div className="product-grid">
          {productData.map((p) => (
            <ProductCard
              key={p.slug}
              p={p}
              image={productImages.home[p.slug]}
            />
          ))}
        </div>
      </section>
      <section className="care">
        <div className="care-image">
          <img
            loading="lazy"
            decoding="async"
            src={img("lab")}
            alt="Imagem ilustrativa de análise da água em laboratório"
          />
        </div>
        <div className="care-content">
          <Eyebrow light>CUIDADO QUE VAI ALÉM DO CULTIVO</Eyebrow>
          <h2>
            O futuro da produção
            <br />
            começa nas escolhas
            <br />
            de hoje.
          </h2>
          <p>
            Água, ambiente e alimento estão conectados. Entenda como o manejo
            responsável e os controles de qualidade fazem parte dessa relação.
          </p>
          <div className="care-points">
            <span>
              <Droplets /> Uso consciente da água
            </span>
            <span>
              <ShieldCheck /> Qualidade e rastreabilidade
            </span>
            <span>
              <Leaf /> Responsabilidade ambiental
            </span>
          </div>
          <Button to="/qualidade" outline>
            Conheça os cuidados
          </Button>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <Eyebrow>CONHECIMENTO QUE CIRCULA</Eyebrow>
            <h2>Para ir mais fundo.</h2>
          </div>
          <Link to="/conhecimento" className="text-link">
            Todos os conteúdos <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="article-grid">
          {articles.map((a) => (
            <ArticleCard key={a[0]} a={a} image={articleImages.home[a[0]]} />
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
