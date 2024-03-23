"use client";

import { AdminRsvps } from "./rsvps";
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
      <ul className="grid grid-cols-2 gap-4">
        <li>
          <Link
            href={`/admin/email`}
            className="group col-span-2 flex items-center text-lg text-primary underline-offset-4 hover:underline sm:col-span-1"
            title="Send mass email"
          >
            Send mass email{" "}
            <ArrowRight className="ml-1 transition-[margin] group-hover:ml-2" />
          </Link>
        </li>
        <li>
          <AdminRsvps />
        </li>
      </ul>
    </div>
  );
};
