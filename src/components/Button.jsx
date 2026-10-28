import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export function Button({ to, children, outline = false }) {
  return (
    <Link className={"button " + (outline ? "outline" : "")} to={to}>
      {children}
      <ArrowUpRight size={17} />
    </Link>
  );
}
