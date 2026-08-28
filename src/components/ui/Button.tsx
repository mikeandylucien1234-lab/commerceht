import { Link } from "@/i18n/navigation";
import type { ComponentProps } from "react";

type Variant = "solid-red" | "solid-navy" | "outline";

const variantClasses: Record<Variant, string> = {
  "solid-red":
    "bg-red text-white border-2 border-red hover:bg-red/90",
  "solid-navy":
    "bg-navy text-white border-2 border-navy hover:bg-navy/90",
  outline:
    "bg-transparent text-navy border-2 border-navy hover:bg-navy hover:text-white",
};

export function Button({
  href,
  variant = "solid-red",
  className = "",
  children,
  ...props
}: {
  href: ComponentProps<typeof Link>["href"];
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentProps<typeof Link>, "href">) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-colors ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
