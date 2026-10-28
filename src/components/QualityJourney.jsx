import { useState } from "react";
import {
  Check,
  Fish,
  Droplets,
  PackageCheck,
  Truck,
  ArrowRight,
} from "lucide-react";
import { qualityStages } from "../data/quality";

const icons = {
  origin: Fish,
  water: Droplets,
  process: PackageCheck,
  transport: Truck,
};
export function QualityJourney() {
  const [selected, setSelected] = useState(qualityStages[0].id);
  const active = qualityStages.find((stage) => stage.id === selected);
  const ActiveIcon = icons[active.icon];
  return (
    <div className="quality-journey">
      <div className="journey-choices" aria-label="Etapas do acompanhamento">
        {qualityStages.map((stage, index) => {
          const Icon = icons[stage.icon];
          return (
            <button
              key={stage.id}
              aria-pressed={selected === stage.id}
              onClick={() => setSelected(stage.id)}
            >
              <span className="journey-number">0{index + 1}</span>
              <Icon size={25} />
              <span>{stage.label}</span>
              <ArrowRight size={17} />
            </button>
          );
        })}
      </div>
      <div className="journey-panel" aria-live="polite">
        <div>
          <ActiveIcon size={32} />
          <h3>{active.title}</h3>
          <p>{active.description}</p>
        </div>
        <ul>
          {active.records.map((record) => (
            <li key={record}>
              <Check size={17} />
              {record}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
