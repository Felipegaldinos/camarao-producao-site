import { ChevronDown } from "lucide-react";
import { faq } from "../data/content";
import { PageHero } from "../components";

export function Faq() {
  return (
    <>
      <PageHero
        tag="PERGUNTAS FREQUENTES"
        title="Respostas para começar."
        description="Entenda os principais conceitos e encontre seu próximo caminho."
      />
      <section className="container section reading">
        {faq.map(([q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <ChevronDown size={18} />
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </section>
    </>
  );
}
