"use client";

import { figtree } from "@/app/fonts";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/styles";
import { getRsvpsSheet, refreshRsvps } from "@/server/lambda/rsvps";
import { ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";

export const AdminRsvps: React.FC = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const refreshAndRedirect = async () => {
    setLoading(true);
    const { ok } = await refreshRsvps();
    setLoading(false);
    toast({
      variant: ok ? "default" : "destructive",
      description: (
        <div className={cn(figtree.className, "w-full")}>
          <div className="text-lg font-medium leading-[1.2]">
            {ok ? "RSVPs refreshed!" : "Error refreshing RSVPs."}
          </div>
        </div>
      ),
    });

    const { url } = await getRsvpsSheet();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={cn(
        "group col-span-2 flex cursor-pointer items-center text-lg text-primary underline-offset-4 hover:underline sm:col-span-1",
        loading && "pointer-events-none cursor-not-allowed opacity-50",
      )}
      onClick={refreshAndRedirect}
      title="View RSVPS"
    >
      View RSVPS{" "}
      {loading ? (
        <Loader2 className={cn("ml-2 h-4 w-4 animate-spin text-primary")} />
      ) : (
        <ArrowRight className="ml-1 transition-[margin] group-hover:ml-2" />
      )}
    </div>
  );
};
