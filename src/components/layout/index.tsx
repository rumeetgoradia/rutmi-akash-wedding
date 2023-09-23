import Navigation from "@/components/navigation";
import BackgroundImage from "@/components/background/BackgroundBase";
import Footer from "./Footer";
import Header from "./Header";
import BackgroundAdornments from "@/components/background/BackgroundAdornments";
import Background from "@/components/background";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Background />
      <main className="z-100 relative w-full">
        <div className="relative mx-auto flex min-h-[100vh] w-full max-w-screen-md flex-col items-start md:gap-8 md:bg-background md:px-8">
          <Header />
          <Navigation />
          <div className="w-full flex-grow bg-background max-md:px-8">
            {children}
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Layout;
