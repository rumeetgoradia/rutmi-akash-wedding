import { type Person } from "@/components/people/PersonDisplay";
import Shivani from "public/wedding-party/Shivani.jpeg";
import Parita from "public/wedding-party/Parita.jpeg";
import Kanika from "public/wedding-party/Kanika.jpeg";
import Disha from "public/wedding-party/Disha.jpeg";

export const WEDDING_PARTY: (Person & { bio: string[] })[] = [
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
		name: "Vikash Patel",
		role: "Best Man",
		image: Shivani,
		bio: [""],
	},
	{
		name: "Anima Anwar",
		role: "Bridesmaid",
		image: Shivani,
		bio: [""],
	},
	{
		name: "Shivam Patel",
		role: "Best Man",
		image: Shivani,
		bio: [""],
	},
	{
		name: "Anastasia Ambrosio",
		role: "Bridesmaid",
		image: Shivani,
		bio: [""],
	},
	{
		name: "Ravi Patel",
		role: "Best Man",
		image: Shivani,
		bio: [""],
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
		name: "Sparky",
		role: "Ring Bearer / Guest of Honor",
		image: Shivani,
		bio: [""],
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
		image: Shivani,
		bio: [""],
	},
];
