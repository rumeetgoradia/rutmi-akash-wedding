import { eventEnum } from "@/server/db/schema";

export const EVENT_IDS = [...eventEnum.enumValues] as const;

export type Event = {
  id: (typeof EVENT_IDS)[number];
  title: string;
  time: Date;
  dressCode: { primary: string; note?: string };
  location: Address | { start: Address; end: Address };
  description?: string[];
  subevents?: { title: string; description: string[] }[];
};

export type Address = {
  title: string;
  street: string[];
  city: string;
  state: string;
  zipCode: string;
  googleMaps: string;
};

export const ADDRESSES: Record<string, Address> = {
  goradia: {
    title: "The Goradia Residence",
    street: ["240 Midwood Way"],
    city: "Colonia",
    state: "NJ",
    zipCode: "07067",
    googleMaps: "https://maps.app.goo.gl/iuTGSHTsd4tZeiV8A",
  },
  patel: {
    title: "The Patel Residence",
    street: ["62 Adams Street"],
    city: "Iselin",
    state: "NJ",
    zipCode: "08830",
    googleMaps: "https://maps.app.goo.gl/rqFT9pb3Q2rCzaat7",
  },
  ukrainian: {
    title: "Ukrainian Cultural Center",
    street: ["135 Davidson Avenue"],
    city: "Somerset",
    state: "NJ",
    zipCode: "08873",
    googleMaps: "https://maps.app.goo.gl/3a7x6wN37nYuMs446",
  },
  hotel: {
    title: "Hanover Marriot",
    street: ["1401 NJ-10 East"],
    city: "Whippany",
    state: "NJ",
    zipCode: "07891",
    googleMaps: "https://maps.app.goo.gl/LBFys454JM3Dqgm86",
  },
  legacy: {
    title: "The Legacy Castle",
    street: ["141 NJ-23"],
    city: "Pompton Plains",
    state: "NJ",
    zipCode: "07444",
    googleMaps: "https://maps.app.goo.gl/51iYeGQTduRmGfTW8",
  },
};

export const EVENTS: Event[] = [
  {
    id: "pre-wedding",
    title: "Bride's Pre-Wedding Vidhis",
    time: new Date("2024-05-11T09:00"),
    dressCode: { primary: "Traditional Indian" },
    location: ADDRESSES.goradia,
    description: [
      "This is a day full of religious pre-wedding prayer ceremonies (pujas) to prepare the bride for her new role as a wife. This day will invite the bride's close family to celebrate the following pujas: Grah Shanti, Ganesh Sthapna, Randal Puja, and the Goyni.",
    ],
    subevents: [
      {
        title: "Grah Shanti",
        description: [
          'Grah Shanti is a combination of the words "Grah" meaning planets and "Shanti" meaning peace, invoking peace of the planetary house of the bride and groom. It is a pre-wedding ritual performed separately by the bride and groom. The puja seeks the blessings and alignment of the nine "grah" (planets) to remove all obstacles and ensure a peaceful and happy married life for the newlyweds.',
        ],
      },
      {
        title: "Ganesh Sthapna",
        description: [
          "Ganesh Sthapna is one of the first and most important pre-wedding ceremonies. In this puja, Lord Ganesha, the remover of obstacles, is invoked and invited to bless the couple. We ask Lord Ganesha to help remove all obstacles in any and all events leading up to the wedding ceremony and bestow blessings on the couple for a happily married life.",
        ],
      },
      {
        title: "Randal Puja and Goyni",
        description: [
          'Randal Puja and Goyni is a combination of pujas and rituals. Simultaneously, the goddess of marriage, "Randal Mata" is invoked and invited to bless the couple and ward off any evil eye on the couple up to the day of their wedding. All invited married women are thought to represent the humanly form of Randal Mataji on this day. Their toes are washed with milk and water as a sign of reverence to the goddess. They are then fed the goddess\'s favorite food: kheer and gol-papdi.',
        ],
      },
    ],
  },
  {
    id: "chandlo-matli",
    title: "Chandlo Matli",
    time: new Date("2024-05-15T15:00"),
    location: {
      start: ADDRESSES.goradia,
      end: ADDRESSES.patel,
    },
    dressCode: { primary: "Traditional Indian" },
    description: [
      "During this ceremony, the father of the bride along with four male relatives visits the groom's place with a steel container (\"matli\") full of sweets and gifts for the groom and his family. He then applies a chandlo to the center of the groom's forehead and gives him the matli and monetary gifts. This acknowledges the formal seal of acceptance of the relationship between both the families.",
    ],
  },
  {
    id: "pre-wedding-cont",
    title: "Bride's Pre-Wedding Vidhis (cont.)",
    time: new Date("2024-05-18T09:00"),
    location: ADDRESSES.goradia,
    dressCode: { primary: "Traditional Indian" },
    subevents: [
      {
        title: "Mandap Murat",
        description: [
          "Voluptate est occaecat amet incididunt non et ex consequat nulla adipisicing deserunt excepteur adipisicing.",
        ],
      },
      {
        title: "Mosalu",
        description: [
          "Veniam aliqua esse occaecat incididunt amet sint fugiat ullamco. Dolor duis occaecat labore aliquip fugiat laboris ipsum.",
        ],
      },
      {
        title: "Aanu-Varnu",
        description: [
          "Aanu-Varnu is a ceremony where the bride's family invites the groom's family and close relatives from both sides. The bride's family presents the \"kariyavar\", the gifts they are going to give their daughter and son-in-law for their married life (Aanu). The groom's family then reciprocates by bringing all the gifts they are going to give the bride and her family (Varnu). Gifts to each other's relatives are also exchanged during this time.",
        ],
      },
    ],
  },
  {
    id: "mehndi",
    title: "Mehndi",
    time: new Date("2024-05-22T18:00"),
    location: ADDRESSES.goradia,
    dressCode: { primary: "Indian Semi-formal" },
    description: [
      "In the Hindu tradition, mehndi is part of the Solah Shringar, or sixteen bridal adornments, which is a ritual for the beautification of the bride from head to toe at the time of their wedding. In these days, both the bride and the groom often partake in the Mehndi party, with their families coming together to bless the couple before their marriage.",
      "At the mehndi party, you can expect to get intricate henna designs placed on your hands and/or feet alongside the bride!",
    ],
  },
  {
    id: "garba-sangeet",
    title: "Garba & Sangeet",
    time: new Date("2024-05-23T18:00"),
    location: ADDRESSES.ukrainian,
    dressCode: { primary: "Indian Semi-formal" },
    description: [
      'The sangeet, which means "sung together", is essentially a pre-wedding party where families come together to sing, dance, and celebrate the wedding festivities to come. In Gujarati culture, this function also entails garba/raas, a type of high-energy Gujarati folk dance.',
      "At a sangeet/garba, it is typical to break out musical performances - and even see some competition between the bride and groom's families!",
      "Get your dancing feet and colorful clothes ready for this spirited night of dancing!",
    ],
  },
  {
    id: "haldi",
    title: "Haldi",
    time: new Date("2024-05-24T10:00"),
    location: ADDRESSES.goradia,
    dressCode: { primary: "Indian Semi-formal", note: "Please wear yellow!" },
    description: [
      "During the Haldi ceremony, the couple's relatives and friends come together to apply turmeric paste (haldi) on the bride and groom's face and body. It is believed that this will prevent evil spirits from harming the to-be-wed couple. Additionally, turmeric's bright yellow color is highly auspicious. Smearing the couple with turmeric paste is a way to bless the couple with prosperity! This is followed by food, fun, and dancing.",
      "During the Haldi, expect to get your hands dirty and feet moving!",
    ],
  },
  {
    id: "welcome-dinner",
    title: "Welcome Dinner",
    time: new Date("2024-05-24T19:00"),
    location: ADDRESSES.hotel,
    dressCode: { primary: "Business Casual" },
    description: [
      "Dolor nisi magna est proident ea do aliquip. Cillum sunt duis enim commodo ipsum exercitation fugiat quis. Est veniam consequat consectetur tempor minim ea minim occaecat eiusmod pariatur cupidatat. Voluptate et adipisicing labore sint est minim minim. Dolore id exercitation anim esse. Ea sunt ullamco dolor ea reprehenderit labore consequat Lorem veniam tempor anim laborum deserunt mollit. Cupidatat proident nostrud laborum veniam sit dolor dolore adipisicing elit elit id non deserunt.",
      "Ut ad sit dolore cupidatat consequat et in. Et dolor eiusmod mollit culpa veniam culpa quis culpa mollit enim incididunt. Dolor cillum sunt deserunt quis eu non eiusmod velit commodo.",
    ],
  },
  {
    id: "wedding",
    title: "Wedding",
    time: new Date("2024-05-25T08:00"),
    location: ADDRESSES.legacy,
    dressCode: {
      primary: "Indian Formal",
      note: "Please do NOT wear red or black!",
    },
    description: [
      "Dolor nisi magna est proident ea do aliquip. Cillum sunt duis enim commodo ipsum exercitation fugiat quis. Est veniam consequat consectetur tempor minim ea minim occaecat eiusmod pariatur cupidatat. Voluptate et adipisicing labore sint est minim minim. Dolore id exercitation anim esse. Ea sunt ullamco dolor ea reprehenderit labore consequat Lorem veniam tempor anim laborum deserunt mollit. Cupidatat proident nostrud laborum veniam sit dolor dolore adipisicing elit elit id non deserunt.",
      "Ut ad sit dolore cupidatat consequat et in. Et dolor eiusmod mollit culpa veniam culpa quis culpa mollit enim incididunt. Dolor cillum sunt deserunt quis eu non eiusmod velit commodo.",
    ],
  },
  {
    id: "reception",
    title: "Reception",
    time: new Date("2024-05-25T18:30"),
    location: ADDRESSES.hotel,
    dressCode: {
      primary: "Indian or Western Formal",
    },
    description: [
      "Dolor nisi magna est proident ea do aliquip. Cillum sunt duis enim commodo ipsum exercitation fugiat quis. Est veniam consequat consectetur tempor minim ea minim occaecat eiusmod pariatur cupidatat. Voluptate et adipisicing labore sint est minim minim. Dolore id exercitation anim esse. Ea sunt ullamco dolor ea reprehenderit labore consequat Lorem veniam tempor anim laborum deserunt mollit. Cupidatat proident nostrud laborum veniam sit dolor dolore adipisicing elit elit id non deserunt.",
      "Ut ad sit dolore cupidatat consequat et in. Et dolor eiusmod mollit culpa veniam culpa quis culpa mollit enim incididunt. Dolor cillum sunt deserunt quis eu non eiusmod velit commodo.",
    ],
  },
  {
    id: "post-wedding",
    title: "Post-Wedding Breakfast",
    time: new Date("2024-05-26T09:00"),
    location: ADDRESSES.hotel,
    dressCode: {
      primary: "Casual",
    },
    description: [
      "Dolor nisi magna est proident ea do aliquip. Cillum sunt duis enim commodo ipsum exercitation fugiat quis. Est veniam consequat consectetur tempor minim ea minim occaecat eiusmod pariatur cupidatat. Voluptate et adipisicing labore sint est minim minim. Dolore id exercitation anim esse. Ea sunt ullamco dolor ea reprehenderit labore consequat Lorem veniam tempor anim laborum deserunt mollit. Cupidatat proident nostrud laborum veniam sit dolor dolore adipisicing elit elit id non deserunt.",
      "Ut ad sit dolore cupidatat consequat et in. Et dolor eiusmod mollit culpa veniam culpa quis culpa mollit enim incididunt. Dolor cillum sunt deserunt quis eu non eiusmod velit commodo.",
    ],
  },
];

const getGroupedEvents = (
  events: Event[],
): { [k: string]: { date: Date; events: Event[] } } => {
  let groupedEvents: { [k: string]: { date: Date; events: Event[] } } = {};

  EVENTS.forEach((event) => {
    const time = event.time;
    const dateString = `${time.getDate()}-${time.getMonth()}-${time.getFullYear()}`;
    const group = groupedEvents[dateString];

    if (group) {
      group.events.push(event);
    } else {
      const date = new Date(event.time);
      date.setHours(0, 0, 0, 0);
      groupedEvents = {
        ...groupedEvents,
        [dateString]: {
          date,
          events: [event],
        },
      };
    }

    Object.values(groupedEvents).forEach((group) =>
      group.events.sort((a, b) =>
        a.time < b.time ? -1 : a.time === b.time ? 0 : 1,
      ),
    );
  });

  return groupedEvents;
};

export const GROUPED_EVENTS = getGroupedEvents(EVENTS);
