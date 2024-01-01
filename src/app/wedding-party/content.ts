import { type PersonWithBio, PersonWithTagline } from "@/components/people";

import Shivani from "public/wedding-party/Shivani.jpeg";
import Parita from "public/wedding-party/Parita.jpeg";
import Kanika from "public/wedding-party/Kanika.jpeg";
import Disha from "public/wedding-party/Disha.jpeg";
import Aksu from "public/wedding-party/Aksu.jpeg";
import Anastasia from "public/wedding-party/Anastasia.jpeg";
import Harsh from "public/wedding-party/Harsh.jpeg";
import Jaltej from "public/wedding-party/Jaltej.jpeg";
import Karan from "public/wedding-party/Karan.jpeg";
import Kishan from "public/wedding-party/Kishan.png";
import Manish from "public/wedding-party/Manish.jpg";
import Mihir from "public/wedding-party/Mihir.png";
import Mohit from "public/wedding-party/Mohit.jpeg";
import Paulomi from "public/wedding-party/Paulomi.jpeg";
import Ravi from "public/wedding-party/Ravi.jpg";
import Rubal from "public/wedding-party/Rubal.jpg";
import Shivam from "public/wedding-party/Shivam.jpg";
import Vikash from "public/wedding-party/Vikash.jpg";
import Deepesh from "public/wedding-party/Deepesh.jpeg";

export const SIDES = ["bride", "groom"] as const;
export type Side = (typeof SIDES)[number];

export const BRIDE_WEDDING_PARTY: PersonWithBio[] = [
  {
    name: "Shivani Patel",
    role: "Maid of Honor",
    image: Shivani,
    bio: [
      "Rutmi and I met through the history of our dad's friendship - they have been best friends for over 40 years, and so by default we were bound to be best friends, as well! My favorite memory of Rutmi and I is from growing up when we were little girls and having sleepovers all the time. We would CONSTANTLY be planning our future weddings together in hopes of making those dreams come to life one day. And now fast forward over 27 years later, and we're finally going to see Rutmi have her dream wedding and marry her best friend!",
      "A fun fact about me is that I have my motorcycle license!",
    ],
  },
  {
    name: "Anastasia Ambrosio",
    role: "Bridesmaid",
    image: Anastasia,
    bio: [
      "Hey everyone, I'm Anastasia. Rutmi and I are cowboys together at the infamous Barn. In layman's terms, we are co-residents at St. Barnabas. We have been trauma bonded since intern year, but it goes deeper than that. We understand each other and have each other's backs at all times. However, as a native Long Islander, I will never miss an opportunity to Jersey- shame Rutmi, and vice versa. I'm A Long Island Italian girl to the core, a huge Mets fan and I love music. I do not hike or run- another thing Rutmi and I do not have in common, but sometimes commonalities are overrated. I love my girl, and I am psyched to be part of this journey. Also excited to be part of a new group of friends. I'm easy to pick out, I'm the….one with the glasses.",
    ],
  },
  {
    name: "Disha Aya",
    role: "Bridesmaid",
    image: Disha,
    bio: [
      "Hi my name is Disha. Like Rutmi, I'm also a Jersey girl and a resident physician. My favorite hobbies are dancing and reading.",
      "Rutmi and I met at our medical school when we lived together in an old, awful on-campus apartment. We went on to live together for another year in New York, where we used our study breaks to play foosball!",
      "My favorite memory of us is living together and our many trips to Blaze Pizza & Starbucks 😋",
      "A fun fact about me is I recently got engaged!",
    ],
  },
  {
    name: "Kanika Gupta",
    role: "Bridesmaid",
    image: Kanika,
    bio: [
      "Rutmi and I met in medical school when Rutmi joined the medical school Indian organization SAMSA and went on to be roommates in NYC for a year (well, not quite because of COVID).",
      "I am an Internal Medicine resident in New Orleans. I'm originally from NY and came back to NY for med school where I met Rutmi! I love art, exploring and traveling to new places and dance. I can't wait to celebrate Rutmi and Akash on their big day and dance alongside Rutmi again!",
      "My favorite Rutmi memory is probably one of the many post-med school test celebrations we did in NYC. We would finally get to go to the city after weeks of being in the library and definitely took advantage of the free weekend!",
      "Fun fact: I am now on a MardiGras dance crew called Bhan Gras!",
    ],
  },
  {
    name: "Parita Patel",
    role: "Bridesmaid",
    image: Parita,
    bio: [
      "Hey, it's Parita! I'm a Jersey girl at heart who was raised in a small town in Georgia. I love reading, cooking and traveling. I also have major geography struggles. I once met the governor of Missouri on a plane and asked him where Missouri was while we were in St. Louis.",
      "I met Rutmi when Akash was ready to get the older cousin stamp of approval and introduced us at Tacoria! That was the beginning of many good memories together. But my favorite was definitely when Rutmi fought me every step of the way while I was helping Akash plan the proposal, from the adventurous blue nail with ring finger accent to her blue Abercrombie backyard BBQ vibe dress.",
    ],
  },
  {
    name: "Paulomi Gohel",
    role: "Bridesmaid",
    image: Paulomi,
    bio: [
      "I can't help but reflect on the incredible memories that have shaped my bond with Rutmi. She has been there with me through thick and thin, from those early days when we giggled and cried over critically “trashy” romcoms to our teenage years when she taught me how to hide all of our shopping bags from our dads, deal with the unfortunate realities of the teenage Indian unibrow/mustache situation, and navigate finding myself and true friends in the scary world of middle school and highschool.",
      "She's been the driving force behind some of my fondest memories.We used to spend hours together, microwaving quesadillas (our signature dish), creating hilarious music videos, and dreaming big about our futures. Back then, little did we know that one day, Rutmi would be stepping into a new chapter of her life as a beautiful bride.",
      "But what Rutmi truly taught me goes beyond cooking or shopping. She taught me the importance of having that one person who's always there for you, no matter the distance or time apart. Our love has remained constant, our bond unbreakable.",
      "As we have been approaching this day, I can't help but feel excited about the new memories I will create with her and her wonderful new husband. We'll keep indulging in our cheesy traditions, making music videos, and now, we'll dream about our future with our extended family and hopefully mini versions of ourselves.",
    ],
  },
];

export const GROOM_WEDDING_PARTY: PersonWithTagline[] = [
  {
    name: "Shivam Patel",
    role: "Best Man",
    image: Shivam,
    tagline: "The Gucci Guy",
  },
  {
    name: "Ravi Patel",
    role: "Best Man",
    image: Ravi,
    tagline: "The Bar Guy",
  },
  {
    name: "Akash Patel",
    role: "Groomsman",
    image: Aksu,
    tagline: "The Questionable Guy",
  },
  {
    name: "Deepesh Lad",
    role: "Groomsman",
    image: Deepesh,
    tagline: "The Gas Guy",
  },
  {
    name: "Harsh Bhanderi",
    role: "Groomsman",
    image: Harsh,
    tagline: "The Supplement Guy",
  },
  {
    name: "Jaltej Patel",
    role: "Groomsman",
    image: Jaltej,
    tagline: "The Taco Bell Guy",
  },
  {
    name: "Karan Patel",
    role: "Groomsman",
    image: Karan,
    tagline: "The Back Insurance Guy",
  },
  {
    name: "Kishan Patel",
    role: "Groomsman",
    image: Kishan,
    tagline: "The Family Guy",
  },
  {
    name: "Manish Kakadiya",
    role: "Groomsman",
    image: Manish,
    tagline: "The Grammar Guy",
  },
  {
    name: "Mihir Kasvala",
    role: "Groomsman",
    image: Mihir,
    tagline: "The Fatherly Advice Guy",
  },
  {
    name: "Mohit Dhanani",
    role: "Groomsman",
    image: Mohit,
    tagline: "The Monkey Guy",
  },
  {
    name: "Rubal Vekariya",
    role: "Groomsman",
    image: Rubal,
    tagline: "The Pet Giraffe Guy",
  },
];
