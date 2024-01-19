"use client";

import { figtree } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ROUTES } from "./routes";

const NavBar: React.FC<{ disabled?: boolean }> = ({ disabled }) => {
  const currentPath = usePathname();

  return (
    <nav
      className={cn(
        "text-md flex w-full flex-nowrap justify-between gap-2 bg-background",
        figtree.className,
      )}
    >
      {NAV_ROUTES.map((navRoute) => {
        const { path } = navRoute;
        const title = navRoute.title || navRoute.shortName;
        return (
          <Link
            href={path}
            className={cn(
              "rounded-sm px-2 py-1 text-sm tracking-wide",
              currentPath === path && "bg-foreground-ghost",
              "hover:bg-foreground-ghost transition-[color,background-color,opacity]",
              disabled && "pointer-events-none opacity-30",
            )}
            title={title}
            key={`navbar-${title}`}
          >
            {title}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
