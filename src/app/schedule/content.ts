import { ADDRESSES, Address } from "@/components/address/constants";
import { eventEnum } from "@/server/db/schema";

export const EVENT_IDS = [...eventEnum.enumValues] as const;
export type EventId = (typeof EVENT_IDS)[number];

export type Event = {
  id: EventId;
  title: string;
  time: Date;
  dressCode: { primary: string; note?: string };
  location: { start: Address; end?: Address };
  description: { primary: string[]; additional?: string[] };
};

export const EVENTS: Event[] = [
  {
    id: "bride-pre-wedding",
    title: "Bride's Pre-Wedding Vidhis",
    time: new Date("2024-05-11T09:00"),
    dressCode: { primary: "Traditional Indian" },
    location: { start: ADDRESSES.goradia },
    description: {
      primary: [
        "This is a day full of religious pre-wedding prayer ceremonies (pujas) to prepare the bride for her new role as a wife. This day will invite the bride's close family to celebrate the following pujas: Grah Shanti, Ganesh Sthapna, Randal Puja, and the Goyni.",
      ],
      // additional: [
      //   'Grah Shanti is a combination of the words "Grah" meaning planets and "Shanti" meaning peace, invoking peace of the planetary house of the bride and groom. It is a pre-wedding ritual performed separately by the bride and groom. The puja seeks the blessings and alignment of the nine "grah" (planets) to remove all obstacles and ensure a peaceful and happy married life for the newlyweds.',
      //   "Ganesh Sthapna is one of the first and most important pre-wedding ceremonies. In this puja, Lord Ganesha, the remover of obstacles, is invoked and invited to bless the couple. We ask Lord Ganesha to help remove all obstacles in any and all events leading up to the wedding ceremony and bestow blessings on the couple for a happily married life.",
      //   'Randal Puja and Goyni is a combination of pujas and rituals. Simultaneously, the goddess of marriage, "Randal Mata" is invoked and invited to bless the couple and ward off any evil eye on the couple up to the day of their wedding. All invited married women are thought to represent the humanly form of Randal Mataji on this day. Their toes are washed with milk and water as a sign of reverence to the goddess. They are then fed the goddess\'s favorite food: kheer and gol-papdi.',
      // ],
    },
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
    description: {
      primary: [
        "During this ceremony, the father of the bride along with four male relatives visits the groom's place with a steel container (\"matli\") full of sweets and gifts for the groom and his family. He then applies a chandlo to the center of the groom's forehead and gives him the matli and monetary gifts. This acknowledges the formal seal of acceptance of the relationship between both the families.",
      ],
    },
  },
  {
    id: "bride-pre-wedding-2",
    title: "Bride's Pre-Wedding Vidhis (cont.)",
    time: new Date("2024-05-18T09:00"),
    location: { start: ADDRESSES.goradia },
    dressCode: { primary: "Traditional Indian" },
    description: {
      primary: [
        "This is another day full of religious pre-wedding prayer ceremonies (pujas) to prepare the bride for her new role as a wife. This day will invite the bride's close family to celebrate the following pujas: Mandap Murat and Mosalu and will end with the bride and groom's families joining to gift them with tools to start their married life in the Wadhamna.",
      ],
      // additional: [
      //   "During the Mandap Murat, the bride's parents will ask for the blessings of Mother Earth to commence the wedding. This involves requesting permission to commence the mandap, or the altar at which the couple will be married.",
      //   "Following the Mandap Murat, the bride's maternal uncle will present the bride with sweets and culturally significant trinkets in celebration of her upcoming nuptials.",
      //   "Finally, following the Mandap Murat will commence the Wadhamna. The Wadhamna is a ceremony where the bride's family invites the groom's family and close relatives from both sides. The bride's family presents the \"kariyavar\", the gifts they are going to give their daughter and son-in-law for their married life (Aanu). The groom's family then reciprocates by bringing all the gifts they are going to give the bride and her family (Varnu). Gifts to each other's relatives are also exchanged during this time.",
      // ],
    },
  },
  {
    id: "groom-pre-wedding",
    title: "Groom's Pre-Wedding Vidhis",
    dressCode: {
      primary: "Traditional Indian",
    },
    location: { start: ADDRESSES.patel },
    time: new Date("2024-05-18T08:00"),
    description: {
      primary: [
        "This is a day full of religious pre-wedding prayer ceremonies (pujas) to prepare the groom for his new role as a husband. This day will invite the groom's close family to celebrate the following pujas: Grah Shanti, Ganesh Sthapna, Mandap Murat, and Mosalu.",
      ],
      // additional: [
      //   'Grah Shanti is a combination of the words "Grah" meaning planets and "Shanti" meaning peace, invoking peace of the planetary house of the bride and groom. It is a pre-wedding ritual performed separately by the bride and groom. The puja seeks the blessings and alignment of the nine "grah" (planets) to remove all obstacles and ensure a peaceful and happy married life for the newlyweds.',
      //   "Ganesh Sthapna is one of the first and most important pre-wedding ceremonies. In this puja, Lord Ganesha, the remover of obstacles, is invoked and invited to bless the couple. We ask Lord Ganesha to help remove all obstacles in any and all events leading up to the wedding ceremony and bestow blessings on the couple for a happily married life.",
      //   "During the Mandap Murat, the groom's parents will ask for the blessings of Mother Earth to commence the wedding. This involves requesting permission to commence the mandap, or the altar at which the couple will be married.",
      //   "Following the Mandap Murat, the groom's maternal uncle will present the groom with sweets and culturally significant trinkets in celebration of his upcoming nuptials.",
      //   "Finally, following the Mandap Murat will commence the Aanu-Varnu. The Aanu-Varnu is a ceremony where the bride's family invites the groom's family and close relatives from both sides. The bride's family presents the \"kariyavar\", the gifts they are going to give their daughter and son-in-law for their married life (Aanu). The groom's family then reciprocates by bringing all the gifts they are going to give the bride and her family (Varnu). Gifts to each other's relatives are also exchanged during this time.",
      // ],
    },
  },
  {
    id: "housewarming",
    title: "Vastu Pujan & Housewarming",
    time: new Date("2024-05-19T09:00"),
    dressCode: { primary: "Indian Semi-formal" },
    location: { start: ADDRESSES.goradia },
    description: {
      primary: [
        'The Vastu puja is a religious ceremony that is undertaken to bestow a new home and, thereby, its occupants with health, happiness, prosperity and success. The puja invokes the five elements of nature which make up the "Vastu", or the "science of life": Earth, Water, Fire, Air, and Ether. The puja is meant to appease these five elements with the hopes that they always stay balanced and regulated so as to create and maintain a harmonious and peaceful environment with positive vibes and energy, while transferring out the bad/negative elements from within the new home and its surroundings.',
        "Following the Vastu puja is the Griha Pravesham, or the Housewarming puja. This consecrates a new living space to create an enhanced sense of life, positive energy, peace, and happiness while cleansing it of all negative energy or spirits. It is performed for the eternal well-being and prosperity of its new residents.",
      ],
    },
  },
  {
    id: "mehndi",
    title: "Mehndi",
    time: new Date("2024-05-22T18:00"),
    location: { start: ADDRESSES.goradia },
    dressCode: { primary: "Indian Semi-formal" },
    description: {
      primary: [
        "In the Hindu tradition, mehndi is part of the Solah Shringar, or sixteen bridal adornments, which is a ritual for the beautification of the bride from head to toe at the time of their wedding. In these days, both the bride and the groom often partake in the Mehndi party, with their families coming together to bless the couple before their marriage.",
        "At the mehndi party, you can expect to get intricate henna designs placed on your hands and/or feet alongside the bride!",
      ],
    },
  },
  {
    id: "garba-sangeet",
    title: "Garba & Sangeet",
    time: new Date("2024-05-23T18:00"),
    location: { start: ADDRESSES.ukrainian },
    dressCode: { primary: "Indian Semi-formal" },
    description: {
      primary: [
        'The sangeet, which means "sung together", is essentially a pre-wedding party where families come together to sing, dance, and celebrate the wedding festivities to come. In Gujarati culture, this function also entails garba/raas, a type of high-energy Gujarati folk dance.',
        "At a sangeet/garba, it is typical to break out musical performances - and even see some competition between the bride and groom's families!",
        "Get your dancing feet and colorful clothes ready for this spirited night of dancing!",
      ],
    },
  },
  {
    id: "haldi",
    title: "Haldi",
    time: new Date("2024-05-24T10:00"),
    location: { start: ADDRESSES.goradia },
    dressCode: { primary: "Indian Semi-formal", note: "Please wear yellow!" },
    description: {
      primary: [
        "During the Haldi ceremony, the couple's relatives and friends come together to apply turmeric paste (haldi) on the bride and groom's face and body. It is believed that this will prevent evil spirits from harming the to-be-wed couple. Additionally, turmeric's bright yellow color is highly auspicious. Smearing the couple with turmeric paste is a way to bless the couple with prosperity! This is followed by food, fun, and dancing.",
        "During the Haldi, expect to get your hands dirty and feet moving!",
      ],
    },
  },
  {
    id: "welcome-dinner",
    title: "Welcome Dinner",
    time: new Date("2024-05-24T19:00"),
    location: { start: ADDRESSES.hotel },
    dressCode: { primary: "Business Casual" },
    description: {
      primary: [
        "Join us for food and fun at the pre-wedding welcome dinner. Kick your feet up, enjoy delicious food and drinks, and listen to heartfelt speeches from the couple's closest friends and family! This is meant to be a stress-free, casual way to mingle and enjoy each other's company before the fast-paced wedding day festivities.",
      ],
    },
  },
  {
    id: "wedding",
    title: "Wedding",
    time: new Date("2024-05-25T08:00"),
    location: { start: ADDRESSES.legacy },
    dressCode: {
      primary: "Indian Formal",
      note: "Please do NOT wear red or black!",
    },
    description: {
      primary: [
        "The day is finally here! The bride and groom will become a husband and bride through a series of Hindu rituals. Start the day off dancing in the Baraat and end the day with a heartfelt send-off of the bride to her new family. The day is sure to be full of music, color, and lots of love!",
        "Please note: the wedding is to be held outdoors.",
      ],
    },
  },
  {
    id: "reception",
    title: "Reception",
    time: new Date("2024-05-25T18:30"),
    location: { start: ADDRESSES.legacy },
    dressCode: {
      primary: "Indian or Western Formal",
    },
    description: {
      primary: [
        "Join us for a final celebration of the newly married couple! Start off with specialty drinks and mouthwatering appetizers during cocktail hour. Then, transition with us into a night of performances and dancing!",
      ],
    },
  },
  {
    id: "post-wedding",
    title: "Post-Wedding Breakfast",
    time: new Date("2024-05-26T09:00"),
    location: { start: ADDRESSES.hotel },
    dressCode: {
      primary: "Casual",
    },
    description: {
      primary: [
        "If you're staying at the hotel overnight after the wedding, please join us for a final meal to round off the wedding weekend. Come dressed in your pajamas or your Sunday best - all that matters is your company!",
      ],
    },
  },
];

export const getGroupedEvents = (
  eventIds: EventId[],
): { [k: string]: { date: Date; events: Event[] } } => {
  let groupedEvents: { [k: string]: { date: Date; events: Event[] } } = {};

  EVENTS.forEach((event) => {
    if (!eventIds.includes(event.id)) {
      return;
    }

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
