import { Link } from "react-router-dom";
import { Waves } from "lucide-react";

export function Logo() {
  return (
    <Link className="logo" to="/" aria-label="Origem Azul início">
      <span className="logo-symbol">
        <Waves size={31} />
      </span>
      <span>
        origem<span className="logo-light">azul</span>
        <small>DO CULTIVO À MESA</small>
      </span>
    </Link>
  );
}
