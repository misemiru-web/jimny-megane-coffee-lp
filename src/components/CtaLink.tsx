import type { ReactNode } from "react";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function CtaLink({
  href,
  children,
  icon,
  variant = "primary",
  className = "",
}: CtaLinkProps) {
  return (
    <a
      className={`button button--${variant} ${className}`.trim()}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
