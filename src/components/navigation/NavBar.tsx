"use client";

import { usePathname } from "next/navigation";
import { NAV_ROUTES } from "./routes";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { figtree } from "@/app/fonts";

const NavBar = () => {
  const currentPath = usePathname();

  return (
    <nav
      className={cn(
        "flex w-full flex-nowrap justify-between gap-4 bg-background",
        // "text-sm",
        figtree.className,
      )}
    >
      {NAV_ROUTES.map(({ title, path }) => {
        return (
          <Link
            href={path}
            className={cn(
              "rounded-sm px-2 py-1",
              currentPath === path && "bg-foreground-ghost",
              "hover:bg-foreground-ghost transition-colors",
            )}
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
