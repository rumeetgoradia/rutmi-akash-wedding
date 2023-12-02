import { Toaster } from "@/components/ui/toaster";
import { TRPCReactProvider } from "@/trpc/react";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";

import Layout from "@/components/layout";

const title = "Rutmi & Akash";
const description =
  "Celebrating the union of Rutmi Goradia and Akash Patel — May 25, 2024.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://www.rutmiandakash.com"),
  openGraph: {
    title,
    description,
    images: "/home/landing.jpeg",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TRPCReactProvider cookies={cookies().toString()}>
          <Toaster />
          <Layout>{children}</Layout>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
