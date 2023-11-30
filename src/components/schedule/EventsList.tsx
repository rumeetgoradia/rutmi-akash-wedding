"use client";

import { getGroupedEvents } from "@/app/schedule/content";
import EventDisplay from "@/components/schedule/EventDisplay";
import { cn } from "@/lib/utils";
import { useGuestStore } from "@/store/guest";
import { api } from "@/trpc/react";

export const EventsList = () => {
  const { guest } = useGuestStore();

  const { data: allowedEvents, isLoading } = api.events.allowedEvents.useQuery({
    partyId: guest?.partyId,
  });

  if (!guest || isLoading || !allowedEvents) {
    return (
      <div className="flex w-full justify-center">
        <div
          className="inline-block h-44 w-44 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  const groupedEventsEntries = Object.entries(getGroupedEvents(allowedEvents));

  return (
    <div className="-mb-4 -mt-4 grid w-full grid-cols-1 gap-4">
      {groupedEventsEntries.map(([key, { date, events }], index) => {
        return (
          <div key={`${key}-grouped-events`} className="w-full px-2 ">
            <div
              className={cn(
                "w-full border-b-[1px] border-b-foreground/30 p-4",
                // index !== groupedEventsEntries.length - 1 &&
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
                    className={cn(
                      "w-full",
                      // eventIndex !== events.length - 1 &&
                      //   "border-b-[1px] border-b-foreground/30",
                    )}
                  >
                    <EventDisplay event={event} order={eventIndex + 1} />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
