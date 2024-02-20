"use client";

import { useGuestStore } from "@/store/guest";
import { redirect } from "next/navigation";
import { env } from "@/env.mjs";
import { constants } from "crypto";

const AdminContent: React.FC<{ adminParties: string[] }> = ({
  adminParties,
}) => {
  const { guest } = useGuestStore();
  if (guest && !adminParties.includes(guest.partyId)) {
    redirect("/");
  }

  return <div>Hello admin</div>;
};

export default AdminContent;
