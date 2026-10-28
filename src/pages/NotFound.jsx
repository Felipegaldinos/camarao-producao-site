import { Eyebrow, Button } from "../components";
export function NotFound() {
  return (
    <section className="section container">
      <Eyebrow>404</Eyebrow>
      <h1>Esse caminho não foi encontrado.</h1>
      <Button to="/">Voltar ao início</Button>
    </section>
  );
}
