import { Waves, Users, Microscope, Leaf, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero, Eyebrow, Button, CTA } from "../components";
import { EditorialImage } from "../components/EditorialImage";
import { TeamCard } from "../components/TeamCard";
import { facilities, team } from "../data/about";
import { img } from "../data/content";

const principles = [
  {
    Icon: Waves,
    title: "Cuidado em todo o ciclo",
    text: "Enxergar a produção como uma jornada em que cada etapa influencia a próxima.",
  },
  {
    Icon: Microscope,
    title: "Conhecimento na prática",
    text: "Aproximar observação, registros e orientação técnica das decisões do dia a dia.",
  },
  {
    Icon: Users,
    title: "Pessoas que se conectam",
    text: "Valorizar a troca entre quem planeja, acompanha o cultivo e cuida do produto.",
  },
  {
    Icon: Leaf,
    title: "Responsabilidade na origem",
    text: "Considerar água, recursos e ambiente no planejamento da atividade.",
  },
];

export function About() {
  return (
    <>
      <PageHero
        tag="SOBRE NÓS"
        title="Uma origem feita de pessoas e cuidado."
        description="Conheça a proposta, os espaços e as funções que conectam o cultivo à qualidade do produto."
        image="team"
      />
      <section className="section container about-intro">
        <div>
          <Eyebrow>O QUE NOS CONECTA</Eyebrow>
          <h2>
            Por trás de cada etapa,
            <br />
            <span>existe uma equipe.</span>
          </h2>
          <p>
            Do primeiro acompanhamento da água ao cuidado com o camarão após a
            despesca, a produção reúne diferentes saberes. É essa conexão entre
            pessoas, estrutura e rotina que queremos apresentar.
          </p>
          <p>
            A Origem Azul nasce como uma proposta para tornar essa jornada mais
            próxima: explicar como o cultivo acontece, mostrar os cuidados de
            cada fase e abrir espaço para o conhecimento.
          </p>
          <Button to="/producao">Conheça a jornada de produção</Button>
        </div>
        <EditorialImage
          image="team"
          alt="Equipe fictícia de profissionais da aquicultura reunida junto aos tanques"
          caption="Diferentes especialidades. Um cuidado compartilhado."
        />
      </section>
      <section className="section pale">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>ESPAÇOS QUE SE COMPLEMENTAM</Eyebrow>
              <h2>
                Uma estrutura pensada
                <br />
                para cada fase.
              </h2>
            </div>
            <p>
              Do berçário ao beneficiamento,
              <br />
              conheça os ambientes da cadeia produtiva.
            </p>
          </div>
          <div className="facility-grid">
            {facilities.map((facility, index) => (
              <article className="facility-card" key={facility.title}>
                <img
                  src={img(facility.image)}
                  alt={`Representação ilustrativa de ${facility.title.toLowerCase()}`}
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <span className="mini-label">ESTRUTURA / 0{index + 1}</span>
                  <h3>{facility.title}</h3>
                  <p>{facility.text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="note">
            As instalações mostradas são representações geradas por IA. A
            estrutura real da empresa será apresentada com fotos e informações
            próprias.
          </p>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <Eyebrow>QUEM FAZ A JORNADA ACONTECER</Eyebrow>
            <h2>
              Funções diferentes.
              <br />
              Um propósito em comum.
            </h2>
          </div>
          <p>
            Conheça algumas das funções que podem
            <br />
            compor uma operação de carcinicultura.
          </p>
        </div>
        <div className="team-grid">
          {team.map((member) => (
            <TeamCard key={member.role} member={member} />
          ))}
        </div>
        <p className="note">
          Equipe ilustrativa: os retratos representam personagens fictícios, e
          as funções descrevem uma composição possível. Não são funcionários
          reais da marca.
        </p>
      </section>
      <section className="about-beliefs">
        <div className="container section">
          <Eyebrow light>O QUE ORIENTA ESSA PROPOSTA</Eyebrow>
          <h2>
            Os princípios estão
            <br />
            nos detalhes.
          </h2>
          <div className="principle-grid">
            {principles.map(({ Icon, title, text }) => (
              <article key={title}>
                <Icon size={28} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section container about-next">
        <EditorialImage
          image="feeding"
          alt="Profissional fictício acompanhando o manejo junto a um viveiro"
          caption="A produção ganha sentido no cuidado diário."
        />
        <div>
          <Eyebrow>TRANSPARÊNCIA PARA CONHECER MELHOR</Eyebrow>
          <h2>
            Mostrar o processo.
            <br />
            Compartilhar o conhecimento.
          </h2>
          <p>
            Uma boa apresentação vai além do produto final. Ela explica a
            origem, os processos e a participação de cada área ao longo da
            produção.
          </p>
          <div className="about-links">
            <Link to="/qualidade">
              Qualidade e rastreabilidade <ArrowUpRight size={18} />
            </Link>
            <Link to="/sustentabilidade">
              Responsabilidade ambiental <ArrowUpRight size={18} />
            </Link>
            <Link to="/conhecimento">
              Conteúdos para aprender mais <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
