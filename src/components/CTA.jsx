import { Eyebrow } from "./Eyebrow";
import { Button } from "./Button";
export function CTA() {
  return (
    <section className="cta container">
      <div>
        <Eyebrow light>VAMOS CONSTRUIR ESSA CONEXÃO?</Eyebrow>
        <h2>
          Seu próximo passo
          <br />
          começa por aqui.
        </h2>
      </div>
      <Button to="/contato" outline>
        Converse com a gente
      </Button>
    </section>
  );
}
