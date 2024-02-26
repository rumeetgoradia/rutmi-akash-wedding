"use client";

import { useGuestStore } from "@/store/guest";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const AdminPageContent: React.FC = () => {
  const { guest } = useGuestStore();

  if (!guest) {
    return null;
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <h1 className="font-noto text-3xl font-medium">
        Welcome, {guest.firstName}.
      </h1>
      <ul>
        <li>
          <Link
            href="/admin/email"
            className="group flex items-center text-lg text-primary underline-offset-4 hover:underline "
          >
            Send mass email{" "}
            <ArrowRight className="ml-1 transition-[margin] group-hover:ml-2" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
