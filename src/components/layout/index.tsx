"use client";

import { figtree, meddon, notoSerif } from "@/app/fonts";
import Background from "@/components/background";
import Footer from "@/components/layout/Footer";
import Topper from "@/components/layout/Topper";
import Navigation from "@/components/navigation";
import { cn } from "@/lib/styles";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
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
          <Topper />
          <Navigation />
          <div className="w-full flex-grow bg-background">{children}</div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Layout;
