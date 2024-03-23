import Image from "next/image";

import LeftBackground from "public/background/left.webp";
import RightBackground from "public/background/right.webp";

export default function BackgroundAdornments() {
  return (
    <div className="fixed left-1/2 top-0 z-0 h-[100vh] w-full max-w-screen-md -translate-x-1/2 bg-background max-md:hidden">
      <div className="relative h-full w-full">
        <div className="absolute left-0 top-0 h-full w-[300px] -translate-x-full overflow-y-hidden">
          <Image
            src={LeftBackground}
            alt="Left background"
            sizes="300px"
            fill
            priority
            objectPosition="right top"
            objectFit="none"
          />
        </div>
        <div className="absolute right-0 top-0 h-full w-[300px] translate-x-full overflow-y-hidden">
          <Image
            src={RightBackground}
            alt="Right background"
            sizes="300px"
            fill
            priority
            objectPosition="left top"
            objectFit="none"
          />
        </div>
      </div>
    </div>
  );
}
