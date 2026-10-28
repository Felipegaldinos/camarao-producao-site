import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Droplets,
  Snowflake,
  ScanLine,
  ClipboardCheck,
  PackageCheck,
  ArrowUpRight,
  Check,
  ChevronDown,
} from "lucide-react";
import { PageHero, Eyebrow, Button, CTA } from "../components";
import { EditorialImage } from "../components/EditorialImage";
import { QualityJourney } from "../components/QualityJourney";
import { QuestionList } from "../components/QuestionList";
import { qualityQuestions } from "../data/quality";
import { img } from "../data/content";

const pillars = [
  {
    Icon: Droplets,
    title: "Ambiente e manejo",
    image: "quality-water-card",
    text: "Acompanhamento das condições da água, da alimentação e do desenvolvimento ao longo do cultivo.",
  },
  {
    Icon: ShieldCheck,
    title: "Higiene e prevenção",
    image: "quality-hygiene-card",
    text: "Organização de pessoas, equipamentos e rotinas para reduzir riscos nos processos.",
  },
  {
    Icon: Snowflake,
    title: "Conservação",
    image: "quality-temperature-card-v2",
    text: "Cuidados com o armazenamento e o transporte, conforme as especificações de cada produto.",
  },
  {
    Icon: ScanLine,
    title: "Identificação",
    image: "quality-batch-card",
    text: "Conexão entre o lote, os registros de produção e o destino do produto.",
  },
];
const labelItems = [
  "Denominação e apresentação do produto",
  "Ingredientes e alertas de alergênicos",
  "Peso líquido declarado",
  "Identificação de origem e lote",
  "Prazo de validade",
  "Instruções de conservação e preparo",
];

export function Quality() {
  return (
    <>
      <PageHero
        tag="QUALIDADE E RASTREABILIDADE"
        title="Qualidade é cuidado que continua."
        description="Da origem ao recebimento, conheça os controles e as informações que ajudam a acompanhar o caminho do camarão."
        visualImage="quality-banner"
        imageAlt="Imagem ilustrativa de inspeção de camarões em uma bandeja de controle de qualidade"
      />
      <div className="container page-subnav">
        <a href="#cuidados">Pilares de cuidado</a>
        <a href="#etapas">Etapas do controle</a>
        <a href="#rastreabilidade">Rastreabilidade</a>
        <a href="#recebimento">No recebimento</a>
      </div>
      <section className="section container quality-intro" id="cuidados">
        <div>
          <Eyebrow>UM OLHAR PARA O PROCESSO TODO</Eyebrow>
          <h2>
            A qualidade não está
            <br />
            em uma etapa só.
          </h2>
        </div>
        <p>
          Origem, cultivo, beneficiamento e distribuição estão conectados.
          Entender essa sequência ajuda a reconhecer o papel dos registros, da
          higiene e da conservação em cada passagem.
        </p>
      </section>
      <section className="container quality-pillars">
        {pillars.map(({ Icon, title, text, image }) => (
          <article key={title}>
            <img
              className="quality-pillar-photo"
              src={img(image)}
              alt={"Imagem ilustrativa: " + title.toLowerCase()}
              loading="lazy"
              decoding="async"
            />
            <div className="quality-pillar-copy">
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="section pale" id="etapas">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>CADA PASSAGEM TEM SEUS CUIDADOS</Eyebrow>
              <h2>
                Um acompanhamento
                <br />
                de ponta a ponta.
              </h2>
            </div>
            <p>
              Selecione uma etapa para conhecer
              <br />
              os tipos de informação que podem ser registrados.
            </p>
          </div>
          <QualityJourney />
          <p className="note">
            Visão educativa dos controles da cadeia. Os procedimentos e os
            registros reais devem refletir a operação de cada empresa.
          </p>
        </div>
      </section>
      <section className="container section quality-story">
        <EditorialImage
          image="quality-inspection"
          alt="Imagem ilustrativa de inspeção de uma embalagem de camarão em ambiente de controle de qualidade"
          caption="Identificação, conservação e processo precisam caminhar juntos."
        />
        <div>
          <Eyebrow>CUIDADOS QUE SE COMPLEMENTAM</Eyebrow>
          <h2>
            Observar. Registrar.
            <br />
            Conferir.
          </h2>
          <p>
            Observação, medições e registros se complementam no acompanhamento
            do produto, da origem ao destino.
          </p>
          <div className="quality-small-points">
            <span>
              <ClipboardCheck size={21} />
              <div>
                <h3>Rotinas documentadas</h3>
                <p>
                  Definição de procedimentos, responsáveis e registros
                  aplicáveis ao processo.
                </p>
              </div>
            </span>
            <span>
              <PackageCheck size={21} />
              <div>
                <h3>Conferência do produto</h3>
                <p>
                  Verificação da apresentação, embalagem e identificação na
                  etapa correspondente.
                </p>
              </div>
            </span>
          </div>
        </div>
      </section>
      <section className="traceability-section" id="rastreabilidade">
        <div className="container section">
          <div className="section-heading">
            <div>
              <Eyebrow light>INFORMAÇÕES QUE CONECTAM A ORIGEM</Eyebrow>
              <h2>
                Cada lote,
                <br />
                uma sequência de registros.
              </h2>
            </div>
            <p>
              Rastreabilidade é a ligação entre as informações
              <br />
              de origem, movimentação e destino.
            </p>
          </div>
          <EditorialImage
            image="quality-logistics"
            alt="Imagem ilustrativa de caixas sendo carregadas em transporte refrigerado"
            caption="A conservação acompanha o produto no caminho até o destino."
            className="trace-photo"
          />
          <div className="trace-flow">
            {[
              ["01", "Origem", "Fornecedor e recebimento"],
              ["02", "Cultivo", "Unidade e ciclo produtivo"],
              ["03", "Processamento", "Lote e apresentação"],
              ["04", "Destino", "Expedição e destinatário"],
            ].map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="trace-note">
            <ScanLine size={23} />
            <p>
              <strong>Registros conectados à identificação.</strong> O lote
              ajuda a relacionar registros mantidos pela operação. Esta versão
              apresenta o conceito; ainda não oferece consulta de lotes reais.
            </p>
          </div>
        </div>
      </section>
      <section className="container section receiving-grid" id="recebimento">
        <div>
          <Eyebrow>INFORMAÇÃO QUE ACOMPANHA O ALIMENTO</Eyebrow>
          <h2>
            O rótulo merece
            <br />a sua atenção.
          </h2>
          <EditorialImage
            image="quality-label"
            alt="Imagem ilustrativa da conferência de uma embalagem de camarão com etiqueta sem dados comerciais"
            className="label-photo"
          />
          <p>
            Antes de armazenar ou preparar, confira a identificação e as
            orientações do produto. Condições de conservação e validade precisam
            ser lidas em conjunto.
          </p>
          <details className="content-disclosure label-disclosure">
            <summary>
              O que conferir na embalagem <ChevronDown size={18} />
            </summary>
            <ul className="checklist label-checklist">
              {labelItems.map((item) => (
                <li key={item}>
                  <Check size={17} />
                  {item}
                </li>
              ))}
            </ul>
          </details>
          <a
            className="text-link"
            href="https://www.gov.br/anvisa/pt-br/assuntos/alimentos/rotulagem"
            target="_blank"
            rel="noreferrer"
          >
            Saiba mais sobre rotulagem na Anvisa <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="receiving-card">
          <span className="mini-label">NA HORA DO RECEBIMENTO</span>
          <h3>
            Uma conferência
            <br />
            que faz diferença.
          </h3>
          {[
            [
              "Embalagem",
              "Observe a integridade e confirme a identificação do produto.",
            ],
            [
              "Conservação",
              "Verifique as condições de recebimento e as orientações do fabricante.",
            ],
            [
              "Registro",
              "Guarde os dados do lote e os documentos relacionados ao pedido.",
            ],
            [
              "Dúvidas",
              "Registre a situação e procure o fornecedor antes de decidir sobre o uso.",
            ],
          ].map(([title, text], index) => (
            <div className="receiving-item" key={title}>
              <span>0{index + 1}</span>
              <div>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            </div>
          ))}
          <a
            className="text-link"
            href="https://www.gov.br/anvisa/pt-br/assuntos/alimentos/controle-sanitario"
            target="_blank"
            rel="noreferrer"
          >
            Informações sobre controle sanitário <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
      <section className="section pale">
        <div className="container documents-grid">
          <div>
            <Eyebrow>TRANSPARÊNCIA TAMBÉM É QUALIDADE</Eyebrow>
            <h2>
              Documentos claros.
              <br />
              Informações verificáveis.
            </h2>
            <p>
              Registros, selos de inspeção e certificações devem ser
              apresentados com identificação, validade e abrangência
              confirmadas. Uma imagem de selo, sozinha, não explica o que ele
              cobre.
            </p>
            <p className="note">
              Nenhuma certificação da empresa foi informada nesta demonstração.
              A seção documental será preenchida com informações verificadas.
            </p>
            <Button to="/contato">Solicitar informações técnicas</Button>
          </div>
          <div className="document-list">
            {[
              [
                "Ficha técnica",
                "Apresentação, composição, embalagem e orientações do produto.",
              ],
              [
                "Identificação de origem",
                "Dados que permitem reconhecer o estabelecimento responsável.",
              ],
              [
                "Registros e certificações",
                "Documentos pertinentes, quando aplicáveis e confirmados.",
              ],
            ].map(([title, text]) => (
              <article key={title}>
                <ClipboardCheck size={23} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container section faq-section">
        <div>
          <Eyebrow>ENTENDA OS PRINCIPAIS PONTOS</Eyebrow>
          <h2>
            Qualidade com
            <br />
            mais clareza.
          </h2>
          <Link className="text-link" to="/produtos">
            Conheça as apresentações do camarão <ArrowUpRight size={17} />
          </Link>
        </div>
        <QuestionList questions={qualityQuestions} />
      </section>
      <CTA />
    </>
  );
}
