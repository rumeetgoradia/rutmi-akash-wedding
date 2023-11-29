import SignIn from "@/components/auth/SignIn";
import { Content } from "@/components/layout/Content";
import { Metadata } from "next";
import Image from "next/image";
import Flower from "public/flower.png";
import LandingImage from "public/home/landing.jpeg";

export const metadata: Metadata = {
  title: "Rutmi & Akash",
};

export default function Login() {
  return (
    <Content hero={LandingImage}>
      <div className="-mt-8 flex w-full flex-col gap-6">
        <div className="flex w-full items-center justify-center">
          <Image src={Flower} alt="flower" className="h-20 w-auto" />
        </div>
        <div className="font-noto w-full text-center font-light leading-[1.8]">
          <p className="mb-2">
            We can&apos;t wait to share our special day with you!
          </p>
          <p>
            Please sign in with your information and the password provided to
            you to navigate our website.
          </p>
        </div>
        <SignIn />
      </div>
    </Content>
  );
}
