import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
export function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="topbar">
        <span>Conhecimento que conecta toda a cadeia do camarão.</span>
        <Link to="/conhecimento">
          Explore nosso conteúdo <ArrowUpRight size={13} />
        </Link>
      </div>
      <header>
        <div className="container header-inner">
          <Logo />
          <button
            className="mobile-toggle"
            aria-label={menu ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menu}
            aria-controls="main-navigation"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
          <nav
            id="main-navigation"
            aria-label="Navegação principal"
            className={menu ? "open" : ""}
          >
            {[
              ["/", "Início"],
              ["/sobre", "Sobre nós"],
              ["/producao", "Produção"],
              ["/produtos", "Produtos"],
              ["/qualidade", "Qualidade"],
              ["/conhecimento", "Conhecimento"],
            ].map(([to, label]) => (
              <NavLink end={to === "/"} key={to} to={to}>
                {label}
                {to === "/producao" && <ChevronDown size={12} />}
              </NavLink>
            ))}
            <Link className="button small" to="/contato">
              Fale com a gente <ArrowUpRight size={15} />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
