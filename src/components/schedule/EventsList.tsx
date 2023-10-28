import { Event } from "@/app/schedule/content";

export default function EventsList(events: Event[]) {
  // events.reduce((group, event) => {
  //   return group;
  // }, {});
  // const groupedSortedEvents: [
  //   {
  //     date: {
  //       day: string;
  //       date: number;
  //       month: number;
  //       year: number;
  //     };
  //     events: Event[];
  //   },
  // ] = [];
  // events
  //   .sort((a, b) => a.time.valueOf() - b.time.valueOf())
  //   .forEach((event) => {
  //     const day = event.time.getDay();
  //     const date = event.time.getDate();
  //     const month = event.time.getMonth();
  //     const year = event.time.getFullYear();
  //   });
}
