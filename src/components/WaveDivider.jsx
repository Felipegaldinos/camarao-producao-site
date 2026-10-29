export function WaveDivider({ position = "bottom", tone = "paper" }) {
  return (
    <svg
      className={`wave-divider wave-divider--${position} wave-divider--${tone}`}
      viewBox="0 0 1440 70"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 25C240 80 460 0 720 26S1190 88 1440 30V70H0Z" />
    </svg>
  );
}
