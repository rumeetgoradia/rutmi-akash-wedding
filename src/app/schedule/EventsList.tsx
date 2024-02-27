"use client";

import { EventId, getGroupedEvents } from "@/app/schedule/content";
import EventDisplay from "@/app/schedule/EventDisplay";
import { Spinner } from "@/components/ui/spinner";
import { animation } from "@/lib/animation";
import { cn } from "@/lib/styles";
import { useGuestStore } from "@/store/guest";
import { api } from "@/trpc/react";
import { motion } from "framer-motion";

export const EventsList = () => {
  const { guest } = useGuestStore();

  const { data, isLoading } = api.events.eventsAndRsvps.useQuery({
    partyId: guest?.partyId,
  });

  if (!guest || isLoading || !data) {
    return <Spinner />;
  }

  console.log({ data });

  const groupedEventsEntries = Object.entries(
    getGroupedEvents(Object.keys(data) as EventId[]),
  );

  const mergeGuestsAndRsvps = (event: EventId) => {
    const merged = data[event]!.map(({ guest, rsvp }) => {
      return { guest, attending: rsvp?.attending };
    });

    return merged;
  };

  return (
    <div className="-mb-4 -mt-4 grid w-full grid-cols-1 gap-4">
      {groupedEventsEntries.map(([key, { date, events }], index) => {
        return (
          <motion.div
            key={`${key}-grouped-events`}
            className="w-full px-2 "
            {...animation(index)}
          >
            <div
              className={cn(
                "w-full border-b-[1px] border-b-foreground/30 p-4",
                "border-b-[1px] border-b-foreground/30",
              )}
            >
              <h3 className="font-noto text-center text-xl font-[350] uppercase tracking-widest opacity-80">
                {date.toLocaleDateString(undefined, { weekday: "long" })}
              </h3>
              <h3 className="font-noto text-center text-xl font-[350] uppercase tracking-widest opacity-80">{`${date.toLocaleDateString(
                undefined,
                { month: "long", day: "numeric" },
              )}, ${date.toLocaleDateString(undefined, {
                year: "numeric",
              })}`}</h3>
            </div>
            <div>
              {events.map((event, eventIndex) => {
                return (
                  <div
                    key={`${event.title}-schedule-event`}
                    className={cn("w-full")}
                  >
                    <EventDisplay
                      event={event}
                      order={eventIndex + 1}
                      existingRsvps={mergeGuestsAndRsvps(event.id)}
                    />
                  </div>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
