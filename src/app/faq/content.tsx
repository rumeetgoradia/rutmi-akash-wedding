import Link from "next/link";

export const FAQS: { question: string; answer: React.ReactNode[] }[] = [
  {
    question: "How should I RSVP?",
    answer: [
      <>
        Please navigate to our{" "}
        <Link
          className="text-primary underline-offset-4 hover:underline"
          href="/schedule"
          title="Schedule of Events"
        >
          Schedule of Events page
        </Link>
        . There, you can RSVP by event. Please RSVP by April 30th!
      </>,
    ],
  },
  {
    question: "How should I book my travel?",
    answer: [
      <>
        <strong>Flight:</strong> Feel free to book your flight in the way that's
        most convenient to you! We recommend flying into Newark Liberty
        International Airport (EWR) in Newark, NJ OR Teterboro Airport in
        Teterboro, NJ.
      </>,
      <>
        <strong>Driving:</strong> For those of you driving to the hotel or to
        the venues themselves, all of our venues have free and accessible
        parking!
      </>,
    ],
  },
  {
    question: "Where can I stay if I'm coming to the pre-wedding events?",
    answer: [
      <>
        If you're coming to the pre-wedding events, we recommend staying at APA
        Hotel in Woodbridge, NJ. There are several other hotels in the area,
        including Delta Hotels by Marriott and Holiday Inn Express.
      </>,
    ],
  },
  {
    question: "How do I travel from the airport/hotel(s) to the venues?",
    answer: [
      <>
        We recommend renting a car or carpooling with others in the area.
        Unfortunately, we are not able to offer free transfers to the hotel at
        this time. You may also utilize Uber and/or Lyft as all of our venues
        are easily accessible off main roads.
      </>,
    ],
  },
  {
    question: "What should I wear?",
    answer: [
      <>
        Please navigate to our{" "}
        <Link
          className="text-primary underline-offset-4 hover:underline"
          href="/schedule"
          title="Schedule of Events"
        >
          Schedule of Events page
        </Link>
        . There, you can see the dress code for all events.
      </>,
      <>
        For any events where Indian attire has been requested, you are welcome
        to wear Western attire if that is what you prefer.
      </>,
    ],
  },
  {
    question: "Where can I purchase Indian attire?",
    answer: [
      <>
        For those of you in the Northeast, we recommend shopping on Oak Tree
        Road in Edison, NJ or in Jackson Heights, NY for Indian attire! If you
        are out of the area and/or prefer to shop online, we recommend the
        following Pernia's Pop Up Shop & Aza Fashions.
      </>,
    ],
  },
];
