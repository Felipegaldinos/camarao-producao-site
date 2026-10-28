import { Link } from "react-router-dom";
import { ArrowUpRight, Waves } from "lucide-react";

import { Logo } from "./Logo";
export function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>
            Conhecimento, cuidado e possibilidades.
            <br />
            Do cultivo à mesa.
          </p>
          <span className="footer-tag">
            <Waves size={17} /> Conectados pela água.
          </span>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/sobre">Sobre nós</Link>
          <Link to="/producao">Nossa produção</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/para-empresas">Para empresas</Link>
        </div>
        <div>
          <h4>Saiba mais</h4>
          <Link to="/qualidade">Qualidade e rastreabilidade</Link>
          <Link to="/sustentabilidade">Sustentabilidade</Link>
          <Link to="/logistica">Logística e distribuição</Link>
          <Link to="/conhecimento">Central de conhecimento</Link>
        </div>
        <div>
          <h4>Vamos conversar</h4>
          <Link to="/contato">
            Contato e orçamento <ArrowUpRight size={15} />
          </Link>
          <Link to="/perguntas-frequentes">Perguntas frequentes</Link>
          <p>
            Uma nova conexão
            <br />
            com o universo do camarão.
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Origem Azul · Projeto demonstrativo
        </span>
        <span>Imagens ilustrativas geradas por IA</span>
        <Link to="/privacidade">Privacidade</Link>
      </div>
    </footer>
  );
}
