"use client";

import NavBar from "@/components/navigation/NavBar";
import Background from "./background";
import Header from "./header";
import NavSheet from "@/components/navigation/NavSheet";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="fixed h-[100vh] w-full">
        <Background />
      </div>

      <main className="relative mx-auto flex w-full max-w-screen-md flex-col items-start gap-8">
        <Header />
        <div className="lg:hidden">
          <NavSheet />
        </div>
        <div className="w-full max-lg:hidden">
          <NavBar />
        </div>
        {children}
      </main>
    </>
  );
};

export default Layout;
