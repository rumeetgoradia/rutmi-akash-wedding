import HomePageContent from "@/app/(home)/HomePageContent";
import { Content } from "@/components/layout/PageContent";
import { Metadata } from "next";
import LandingImage from "public/home/landing.jpeg";
import { useGuestStore, useHydration } from "@/store/guest";
import { redirect } from "next/navigation";

import { env } from "@/env.mjs";
import AdminLayout from "./layout";

const TITLE = "ADMIN";

export const metadata: Metadata = {
  title: `${TITLE} — Rutmi & Akash`,
};

export default function AdminPage() {
  return <div>From index!</div>;
}
