import HomePageContent from "@/app/(home)/HomePageContent";
import { Content } from "@/components/layout/PageContent";
import { Metadata } from "next";
import LandingImage from "public/home/landing.jpeg";
import { useGuestStore, useHydration } from "@/store/guest";
import { redirect } from "next/navigation";

import { env } from "@/env.mjs";
import AdminContent from "./AdminContent";

const TITLE = "ADMIN";

const { ADMIN_PARTIES } = env;

export const metadata: Metadata = {
  title: `${TITLE} — Rutmi & Akash`,
};

export default function AdminPage() {
  return (
    <Content hero={LandingImage}>
      <AdminContent adminParties={ADMIN_PARTIES} />
    </Content>
  );
}
