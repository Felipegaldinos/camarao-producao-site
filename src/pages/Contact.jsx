import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";

import { Eyebrow, PageHero } from "../components";

export function Contact() {
  const [done, setDone] = useState(false);
  const [searchParams] = useSearchParams();
  return (
    <>
      <PageHero
        tag="CONTATO"
        title="Vamos conversar?"
        description="Conte o que você procura e prepare sua solicitação."
      />
      <section className="container section contact-grid">
        <div>
          <Eyebrow>UM BOM COMEÇO É UMA CONVERSA</Eyebrow>
          <h2>
            Qual é o seu
            <br />
            próximo passo?
          </h2>
          <p>
            Produtos, produção ou uma nova parceria.
            <br />
            Escolha o assunto e organize sua mensagem.
          </p>
          <div className="callout">
            Canal demonstrativo: o envio será habilitado após a configuração dos
            contatos da empresa.
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
        >
          <label>
            Nome
            <input required name="nome" placeholder="Seu nome" />
          </label>
          <label>
            E-mail
            <input
              required
              type="email"
              name="email"
              placeholder="voce@empresa.com.br"
            />
          </label>
          <label>
            Interesse
            <select
              defaultValue={
                searchParams.get("produto") ? "Produtos" : "Produção"
              }
            >
              <option>Produção</option>
              <option>Produtos</option>
              <option>Parceria comercial</option>
              <option>Outros assuntos</option>
            </select>
          </label>
          <label>
            Mensagem
            <textarea
              required
              rows="4"
              defaultValue={
                searchParams.get("produto")
                  ? "Quero informações sobre " + searchParams.get("produto")
                  : ""
              }
              placeholder="Como podemos ajudar?"
            />
          </label>
          <label className="checkbox">
            <input type="checkbox" required />
            Li a <Link to="/privacidade">política de privacidade</Link>.
          </label>
          <button className="button" type="submit">
            Preparar solicitação <ArrowUpRight size={17} />
          </button>
          {done && (
            <p className="form-status" role="status">
              <Check size={19} />
              Solicitação preparada. Nenhuma mensagem foi enviada: o canal de
              atendimento ainda precisa ser configurado.
            </p>
          )}
        </form>
      </section>
    </>
  );
}
