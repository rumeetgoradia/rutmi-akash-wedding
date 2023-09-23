import NavBar from "./NavBar";
import NavSheet from "./NavSheet";

export default function Navigation() {
  return (
    <>
      <div className="md:hidden">
        <NavSheet />
      </div>
      <div className="w-full max-md:hidden">
        <NavBar />
      </div>
    </>
  );
}
