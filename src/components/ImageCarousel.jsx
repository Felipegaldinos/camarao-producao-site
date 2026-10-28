import { useEffect, useRef, useState } from "react";
import { img } from "../data/content";

const INTERVAL_MS = 6500;

export function ImageCarousel({ slides }) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const loaded = useRef(new Set([0]));

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);
    const updateVisibility = () => setVisible(!document.hidden);
    updatePreference();
    updateVisibility();
    preference.addEventListener("change", updatePreference);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      preference.removeEventListener("change", updatePreference);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (
      hovered ||
      focused ||
      paused ||
      !visible ||
      reducedMotion ||
      slides.length < 2
    )
      return;
    const timer = window.setInterval(() => {
      setActive((current) => {
        for (let offset = 1; offset < slides.length; offset++) {
          const candidate = (current + offset) % slides.length;
          if (loaded.current.has(candidate)) return candidate;
        }
        return current;
      });
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [hovered, focused, paused, visible, reducedMotion, slides.length]);

  function onKeyDown(event) {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      setActive(
        (current) => (current + direction + slides.length) % slides.length,
      );
    } else if (event.key === " ") {
      event.preventDefault();
      setPaused((current) => !current);
    }
  }

  return (
    <section
      className="image-carousel"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Imagens da produção de camarão"
      aria-describedby="carousel-instructions"
      tabIndex={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onKeyDown={onKeyDown}
    >
      <span id="carousel-instructions" className="visually-hidden">
        As imagens passam automaticamente. A rotação pausa com o mouse ou o foco
        sobre a área. Use as setas para mudar de imagem e a barra de espaço para
        pausar ou retomar.
      </span>
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={"carousel-slide " + (index === active ? "is-active" : "")}
          aria-hidden={index !== active}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} de ${slides.length}`}
        >
          <img
            src={img(slide.image)}
            alt={slide.alt}
            decoding="async"
            loading="eager"
            fetchPriority={index === 0 ? "high" : "low"}
            onLoad={() => loaded.current.add(index)}
          />
        </div>
      ))}
    </section>
  );
}
