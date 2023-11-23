import { TRPCReactProvider } from "@/trpc/react";
import type { Metadata } from "next";
import { cookies } from "next/headers";

import "./globals.css";

import Layout from "@/components/layout";

export const metadata: Metadata = {
  title: "Rutmi & Akash",
  description:
    "Celebrating the union of Rutmi Goradia and Akash Patel — May 25, 2024.",
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
          <Layout>{children}</Layout>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
