import SignIn from "@/components/auth/SignIn";
import { Content } from "@/components/layout/Content";
import { Metadata } from "next";
import LandingImage from "public/home/landing.jpeg";

export const metadata: Metadata = {
  title: "Rutmi & Akash",
};

export default function Login() {
  return (
    <Content hero={LandingImage}>
      <p className="font-noto text-center font-light leading-[1.8] lg:pt-12">
        We can&apos;t wait to share our special day with you! Please sign in
        with your information and the password provided to you to navigate our
        website.
      </p>
      <SignIn />
    </Content>
  );
}
