import { img } from "../data/content";

export function EditorialImage({ image, alt, caption, className = "" }) {
  return (
    <figure className={`editorial-image ${className}`}>
      <img src={img(image)} alt={alt} loading="lazy" decoding="async" />
      {caption && (
        <figcaption>
          {caption} <span>Imagem ilustrativa · IA</span>
        </figcaption>
      )}
    </figure>
  );
}
