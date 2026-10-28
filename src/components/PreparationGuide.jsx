import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { preparations } from "../data/productGuide";
import { productData } from "../data/content";

export function PreparationGuide() {
  const [selected, setSelected] = useState(preparations[0].id);
  const option = preparations.find((item) => item.id === selected);
  const product = productData.find((item) => item.slug === option.product);
  return (
    <div className="preparation-guide">
      <div
        className="choice-buttons"
        aria-label="Escolha seu perfil de fornecimento"
      >
        {preparations.map((item) => (
          <button
            key={item.id}
            aria-pressed={selected === item.id}
            onClick={() => setSelected(item.id)}
          >
            {item.label}
            <ArrowUpRight size={16} />
          </button>
        ))}
      </div>
      <div className="preparation-result" aria-live="polite">
        <span className="mini-label">
          UMA APRESENTAÇÃO PARA O SEU FORNECIMENTO
        </span>
        <h3>{option.title}</h3>
        <p>{option.text}</p>
        <div className="recommendation">
          <Check size={18} />
          <span>{product.name}</span>
        </div>
        <Link className="text-link" to={"/produtos/" + option.product}>
          Conheça a apresentação <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
