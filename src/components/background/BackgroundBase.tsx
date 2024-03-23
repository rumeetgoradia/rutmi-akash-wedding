import BackgroundImage from "public/background/background.png";
import Image from "next/image";

const BackgroundBase = () => {
  return (
    <div className="fixed h-[100vh] w-full">
      <Image
        src={BackgroundImage}
        alt="Background image"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default BackgroundBase;
