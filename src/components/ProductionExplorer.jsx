import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { stages, img } from "../data/content";
import { homeStageImages } from "../data/media";

export function ProductionExplorer() {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);

  function handleKey(event, index) {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % stages.length;
    else if (event.key === "ArrowLeft")
      next = (index - 1 + stages.length) % stages.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = stages.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="production-explorer">
      <div
        className="explorer-tabs"
        role="tablist"
        aria-label="Etapas da produção de camarão"
      >
        {stages.map(([slug, title, , , Icon], index) => (
          <button
            type="button"
            role="tab"
            id={`stage-tab-${slug}`}
            aria-selected={active === index}
            aria-controls={`stage-panel-${slug}`}
            tabIndex={active === index ? 0 : -1}
            ref={(node) => {
              tabs.current[index] = node;
            }}
            onClick={() => setActive(index)}
            onKeyDown={(event) => handleKey(event, index)}
            key={slug}
          >
            <span className="explorer-step">0{index + 1}</span>
            <Icon size={22} aria-hidden="true" />
            <span>{title}</span>
          </button>
        ))}
      </div>
      {stages.map(([slug, title, subtitle, description], index) => (
        <div
          role="tabpanel"
          id={`stage-panel-${slug}`}
          aria-labelledby={`stage-tab-${slug}`}
          hidden={active !== index}
          tabIndex={0}
          className="explorer-panel"
          key={slug}
        >
          <div className="explorer-photo">
            <img
              src={img(homeStageImages[slug])}
              alt={`Imagem ilustrativa de ${title.toLowerCase()}`}
              loading="lazy"
              decoding="async"
            />
            <span>ETAPA 0{index + 1} / 05</span>
          </div>
          <div className="explorer-copy">
            <span className="mini-label">CADA ETAPA CONTA UMA HISTÓRIA</span>
            <h3>{subtitle}</h3>
            <p>{description}</p>
            <Link className="text-link" to={"/producao/" + slug}>
              Explore {title.toLowerCase()} <ArrowUpRight size={18} />
            </Link>
            <span className="explorer-watermark" aria-hidden="true">
              0{index + 1}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
