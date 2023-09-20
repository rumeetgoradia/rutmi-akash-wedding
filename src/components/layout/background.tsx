"use client";

import Image from "next/image";
import SmallScreenBackground from "@/../public/background/background.png";
import LargeScreenBackground from "@/../public/background/background3.png";

const Background = () => {
  return (
    <>
      <Image
        src={SmallScreenBackground}
        alt="Background image"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
        className="lg:hidden"
      />
      <Image
        src={LargeScreenBackground}
        alt="Background image"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
        className="max-lg:hidden"
      />
    </>
  );

  {
    /*<div className="flex w-full h-full px-8">
				<div className="hidden md:block flex-grow flex-shrink-0 md:basis-[15%] lg:basis-[5%]">
					<Image
						src={LeftBackgroundImage}
						alt="Left background image"
						priority
					/>
				</div>
				/~ <div className="hidden md:block w-[15vw] max-w-[300px]" /> ~/
				<div className="flex-grow h-full">{children}</div>
				/~ <div className="hidden md:block w-[15vw] max-w-[300px]" /> ~/
				/~ < div className="hidden md:block h-[100vh] overflow-y-hidden fixed right-0 pr-8 top-0 -z-[9]"> ~/
				<div className="hidden md:block flex-grow flex-shrink-0 md:basis-[15%] lg:basis-[5%]">
					<Image
						src={RightBackgroundImage}
						alt="Right background image"
						priority
					/>
				</div>
				/~ <Image
					src={RightBackgroundImage}
					alt="Right background image"
					priority
					className="hidden md:block h-[100vh] flex-grow flex-shrink-0 basis-[5%]"
				/> ~/
			</div>*/
  }
  //   );
};

export default Background;
