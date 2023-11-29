"use client";

import { figtree, meddon, notoSerif } from "@/app/fonts";
import Background from "@/components/background";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Navigation from "@/components/navigation";
import { cn } from "@/lib/utils";
import { useGuestStore, useHydration } from "@/store/guest";
import { redirect, usePathname } from "next/navigation";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { guest } = useGuestStore();
  const hydrated = useHydration();

  const pathname = usePathname();

  if (hydrated && !guest && pathname !== "/login") {
    redirect(`/login?pathname=${pathname}`);
  }

  return (
    <>
      <Background />
      <main
        className={cn(
          "z-100 relative w-full",
          figtree.className,
          meddon.variable,
          figtree.variable,
          notoSerif.variable,
        )}
      >
        <div className="relative mx-auto flex min-h-[100vh] w-full max-w-screen-md flex-col items-start md:gap-8 md:bg-background md:px-8">
          <Header />
          <Navigation />
          <div className="w-full flex-grow bg-background">{children}</div>
          {/* <SignOut /> */}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Layout;
