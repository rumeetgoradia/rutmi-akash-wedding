import { StaticImageData } from "next/image";
import MeetCute from "public/story/meet-cute.jpeg";

export type StoryContent = {
  title: string;
  image: StaticImageData;
  description: string[];
};

const STORY_CONTENT: StoryContent[] = [
  {
    title: "The Meet-Cute",
    image: MeetCute,
    description: [
      "Our two lovebirds first laid eyes on each other at a volunteer event in Newark, NJ. It was a cold October Saturday morning. The two had signed up to do a park cleanup with their respective college clubs. After a co-volunteer got stung by a bee, Akash stayed as far away from the cleanup duties as possible. Rutmi yelled at him to get back to work and there, the epic love story began.",
    ],
  },
  {
    title: "The Journey",
    image: MeetCute,
    description: [
      "Over the next 6 years, the two would embark on a journey that would take them to Florida, the Pacific Northwest, and even the exotic Atlantic City. They chose each other over and over - through hardships, fights, and countless indecisive moments about what to eat for dinner.",
      "It all culminated on June 11, 2022 in the greatest of all surprises - the proposal.",
    ],
  },
  {
    title: "The Proposal",
    image: MeetCute,
    description: [
      "Ipsum aliquip culpa nulla reprehenderit do excepteur ut fugiat ullamco. Sunt occaecat proident do irure est aute aliqua. Ullamco Lorem adipisicing reprehenderit anim quis magna excepteur qui aute non.",
      "Lorem excepteur id aliqua exercitation id amet sunt reprehenderit officia duis. Ad nostrud esse mollit aliqua sunt fugiat. Velit et laborum amet qui anim.",
    ],
  },
];

export default STORY_CONTENT;
