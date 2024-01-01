"use client";

import { SIDES, Side } from "./content";
import { PersonWithTagline, type PersonWithBio } from "@/components/people";
import { PersonBioDialog } from "@/components/people/PersonBioDialog";
import { PersonTaglineDisplay } from "@/components/people/PersonTaglineDisplay";
import { Tabs } from "@/components/ui/tabs";
import { animation } from "@/lib/animation";
import { cn } from "@/lib/utils";
import { TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { useState } from "react";

const WeddingPartyTabs: React.FC<{
  brideWeddingParty: PersonWithBio[];
  groomWeddingParty: PersonWithTagline[];
  currentSide: Side;
  setCurrentSide: (v: Side) => void;
}> = ({
  brideWeddingParty,
  groomWeddingParty,
  currentSide,
  setCurrentSide,
}) => {
  return (
    <Tabs
      defaultValue={SIDES[0]}
      className="w-full"
      value={currentSide}
      onValueChange={(val) => {
        if (val !== "bride" && val !== "groom") {
          return;
        }

        setCurrentSide(val);
      }}
    >
      <div className="flex w-full flex-col gap-8">
        <TabsList className="flex w-full justify-between gap-4">
          {SIDES.map((side) => {
            return (
              <TabsTrigger
                value={side}
                className={cn(
                  "font-noto text-light w-full border-b-[2px] p-2 text-center text-lg font-light uppercase tracking-wider text-foreground/50 transition-[border-color,color,letter-spacing,font-weight]",
                  currentSide === side
                    ? "border-b-primary font-medium tracking-widest text-primary"
                    : "border-b-foreground/10 hover:tracking-[0.075em] hover:text-primary",
                )}
                key={`wedding-party-tabs-${side}`}
              >
                {side}
              </TabsTrigger>
            );
          })}
        </TabsList>
        <TabsContent value="bride">
          <p className="font-figtree mb-8">
            The bridesmaids wished to share their journeys and relationships
            with Rutmi. Please click on each of their pictures to see their
            stories!
          </p>
          <div className="grid w-full grid-cols-2 gap-4 md:gap-6">
            {brideWeddingParty.map((weddingPartyMember, index) => (
              <motion.div
                className="w-full"
                key={`bride-wedding-party-${weddingPartyMember.name}`}
                {...animation(index)}
              >
                <PersonBioDialog {...weddingPartyMember} />
              </motion.div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="groom">
          <p className="font-figtree mb-8">
            The groomsmen collectively decided to make their website bios
            tributes to theirs and Akash&apos;s friendships. Each moniker
            represents an inside joke/special moment in their friendship! Be
            sure to ask them what their nicknames mean at the wedding!
          </p>
          <div className="grid w-full grid-cols-2 gap-4 md:gap-6">
            {groomWeddingParty.map((weddingPartyMember, index) => (
              <motion.div
                className="flex flex-col items-center"
                key={`groom-wedding-party-${weddingPartyMember.name}`}
                {...animation(index)}
              >
                <PersonTaglineDisplay {...weddingPartyMember} />
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default WeddingPartyTabs;
