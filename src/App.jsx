import { Header } from "./components/Header";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Footer } from "./components";
import { AppRoutes } from "./routes";
export default function App() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      document
        .getElementById(location.hash.slice(1))
        ?.scrollIntoView({ block: "start" });
    } else {
      window.scrollTo(0, 0);
    }
    document.title =
      "Origem Azul — " +
      (location.pathname === "/"
        ? "O universo do camarão"
        : decodeURIComponent(location.pathname.split("/").pop()).replaceAll(
            "-",
            " ",
          ));
  }, [location]);
  return (
    <>
      <Header key={location.pathname} />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}
