export function Eyebrow({ children, light = false }) {
  return (
    <div className={"eyebrow " + (light ? "light" : "")}>
      <span />
      {children}
    </div>
  );
}
