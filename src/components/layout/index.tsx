import NavBar from "@/components/navigation/NavBar";
import Background from "./Background";
import Header from "./Header";
import NavSheet from "@/components/navigation/NavSheet";
import Footer from "./Footer";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="fixed h-[100vh] w-full">
        <Background />
      </div>

      <main className="relative mx-auto flex min-h-[100vh] w-full max-w-screen-md flex-col items-start lg:gap-8">
        <Header />
        <div className="lg:hidden">
          <NavSheet />
        </div>
        <div className="w-full max-lg:hidden">
          <NavBar />
        </div>
        <div className="w-full flex-grow">{children}</div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
