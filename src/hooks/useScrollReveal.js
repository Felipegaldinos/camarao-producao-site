import { useEffect } from "react";

const SELECTOR =
  ".section-heading, .intro > div, .product-card, .article-card, .facility-card, .team-card, .reading-row, .production-list > a, .quality-pillars > article, .commerce-photo-card, .document-list article, .cta";

export function useScrollReveal(pathname) {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;
    const elements = [
      ...document.querySelectorAll(
        "main " + SELECTOR.split(", ").join(", main "),
      ),
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.dataset.reveal = "visible";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" },
    );
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight * 0.94)
        return;
      element.dataset.reveal = "pending";
      observer.observe(element);
    });
    const showAll = () => {
      if (!preference.matches) return;
      observer.disconnect();
      elements.forEach((element) => element.removeAttribute("data-reveal"));
    };
    preference.addEventListener("change", showAll);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", showAll);
      elements.forEach((element) => element.removeAttribute("data-reveal"));
    };
  }, [pathname]);
}
