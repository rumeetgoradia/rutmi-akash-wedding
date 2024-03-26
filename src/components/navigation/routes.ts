export type NavRoute = { path: string } & (
  | {
      shortName: string;
      longName: string;
      title?: never;
    }
  | {
      title: string;
      shortName?: never;
      longName?: never;
    }
);

export const NAV_ROUTES: NavRoute[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    shortName: "Story",
    longName: "Our Story",
    path: "/story",
  },
  {
    shortName: "Family",
    longName: "The Family",
    path: "/family",
  },
  {
    longName: "The Wedding Party",
    shortName: "Wedding Party",
    path: "/wedding-party",
  },
  {
    longName: "Schedule of Events",
    shortName: "Schedule",
    path: "/schedule",
  },
  {
    shortName: "FAQ",
    longName: "Frequently Asked Questions",
    path: "/faq",
  },
  {
    longName: "Travel Accommodations",
    shortName: "Accommodations",
    path: "/accommodations",
  },
  {
    title: "Registry",
    path: "/registry",
  },
  {
    shortName: "Moments",
    longName: "Our Moments",
    path: "/moments",
  },
];
