"use client";

import { EMAIL_ADDRESS } from "@/server/email/constants";
import { figtree, meddon, notoSerif } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn, scrollToTop } from "@/lib/styles";
import { AlignJustify, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ROUTES } from "./routes";

const NavSheet = () => {
  const currentPath = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="unstyled"
          className={cn(
            figtree.className,
            "tracking-widest",
            "rounded-full px-6 py-2",
            "text-xs font-light uppercase",
            "bg-background hover:shadow-lg",
            "fixed left-6 top-6 z-50",
            "shadow-md",
            "transition-shadow",
          )}
        >
          <AlignJustify className="mr-3 h-4 w-4" />
          Menu
        </Button>
      </SheetTrigger>
      <SheetContent
        onOpenAutoFocus={(event) => event.preventDefault()}
        className="z-[51] flex h-[100vh] w-[100vw] max-w-[400px] flex-col gap-6 p-8 pt-14"
        side="left"
      >
        <SheetHeader>
          <SheetTitle
            className={cn(
              meddon.className,
              "text-left text-3xl leading-[1.3] text-primary",
            )}
          >
            Rutmi & Akash
          </SheetTitle>
        </SheetHeader>
        <nav className="flex w-full flex-grow flex-col gap-2">
          {NAV_ROUTES.map((navRoute) => {
            const { path } = navRoute;
            const title = navRoute.title || navRoute.longName;
            return (
              <SheetClose
                asChild
                className={cn(
                  figtree.className,
                  "hover:bg-primary-ghost rounded-sm px-4 py-2 text-left text-lg text-primary",
                  currentPath === path && "bg-primary-ghost",
                )}
                key={`navsheet-${title}`}
              >
                <Link href={path} title={title} onClick={() => scrollToTop()}>
                  {title}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
        <Link
          href={`mailto::${EMAIL_ADDRESS}`}
          className="flex items-center justify-center gap-4"
        >
          <div className="flex items-center justify-center rounded-full bg-primary p-2">
            <Mail className="h-4 w-4 text-background" />
          </div>
          <p className={cn(notoSerif.className, "text-xs text-primary")}>
            {EMAIL_ADDRESS}
          </p>
        </Link>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
