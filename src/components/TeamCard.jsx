import { img } from "../data/content";

export function TeamCard({ member }) {
  return (
    <article className="team-card">
      <div className="team-portrait">
        <img
          src={img(member.image)}
          alt={`Retrato ilustrativo de profissional de ${member.role.toLowerCase()}`}
          loading="lazy"
          decoding="async"
        />
        <span>PERSONAGEM ILUSTRATIVO</span>
      </div>
      <div className="team-copy">
        <span className="mini-label">{member.area}</span>
        <h3>{member.role}</h3>
        <p>{member.text}</p>
      </div>
    </article>
  );
}
