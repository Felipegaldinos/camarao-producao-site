import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Production } from "./pages/Production";
import { Stage } from "./pages/Stage";
import { Products } from "./pages/Products";
import { Product } from "./pages/Product";
import { Knowledge } from "./pages/Knowledge";
import { Article } from "./pages/Article";
import { Faq } from "./pages/Faq";
import { Contact } from "./pages/Contact";
import { Info } from "./pages/Info";
import { NotFound } from "./pages/NotFound";
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/producao" element={<Production />} />
      <Route path="/producao/:slug" element={<Stage />} />
      <Route path="/produtos" element={<Products />} />
      <Route path="/produtos/:slug" element={<Product />} />
      <Route path="/conhecimento" element={<Knowledge />} />
      <Route path="/conhecimento/:slug" element={<Article />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/perguntas-frequentes" element={<Faq />} />
      <Route path="/sobre" element={<Info pageName="sobre" />} />
      <Route path="/qualidade" element={<Info pageName="qualidade" />} />
      <Route
        path="/sustentabilidade"
        element={<Info pageName="sustentabilidade" />}
      />
      <Route
        path="/para-empresas"
        element={<Info pageName="para-empresas" />}
      />
      <Route path="/logistica" element={<Info pageName="logistica" />} />
      <Route path="/privacidade" element={<Info pageName="privacidade" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
