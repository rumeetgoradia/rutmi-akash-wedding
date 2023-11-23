import { Content } from "@/components/layout/Content";
import EventDisplay from "@/components/schedule/EventDisplay";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import LandingImage from "public/home/landing.jpeg";
import { GROUPED_EVENTS } from "./content";

const TITLE = "Schedule of Events";

export const metadata: Metadata = {
  title: `${TITLE} — Rutmi & Akash`,
};

export default function Schedule() {
  // TODO get events per person

  const groupedEventsEntries = Object.entries(GROUPED_EVENTS);

  return (
    <Content hero={LandingImage} title={TITLE}>
      {/* {JSON.stringify(GROUPED_EVENTS, null, 2)} */}
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
                      <EventDisplay event={event} order={index + 1} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Content>
  );
}
