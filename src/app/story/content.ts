import { StaticImageData } from "next/image";
import MeetCute from "public/story/meet-cute.jpeg";
import Proposal from "public/story/proposal.jpeg";
import Journey from "public/story/journey.jpeg";
import Engagement from "public/story/engagement.png";

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
		image: Journey,
		description: [
			"Over the next 6 years, the two would embark on a journey that would take them to Florida, the Pacific Northwest, and even the exotic Atlantic City. They chose each other over and over - through hardships, fights, and countless indecisive moments about what to eat for dinner.",
			"It all culminated on June 11, 2022 in the greatest of all surprises - the proposal.",
		],
	},
	{
		title: "The Proposal",
		image: Proposal,
		description: [
			"In crafting the perfect moment, Akash enlisted the help of his trusty cousin Parita and Rutmi's brother Rumeet. They scouted out locations and settled on the rustic charm of Warwick Winery, a spot that spoke to them.",
			"Pulling off the surprise was no easy feat, especially after catching wind that Rutmi's mom wasn't the best at keeping things hush-hush. They had to be strategic, rounding up their closest friends and their parents without tipping their hand.",
			"Now, getting Rutmi on board was a whole other story. She wasn't keen on all the frills and fuss, didn't want a fancy dress or do nails. She just wanted to roll up like she just got out of bed. Thankfully, Parita and Rita Aunty were able to work their magic and convince her otherwise.",
			"The next challenge was convincing her to dress up. The guise for the whole event was Vikash's high school graduation, set in a private airport hangar. Believe it or not, she believed it.",
			"She eventually rolled in, fashionably late, with her brothers.",
			"That's when it started to dawn on her that this wasn't just Vikash's party. Parita slipped her a note in the parking lot, giving her a heads-up on what was about to go down. She took a moment to freshen up and then made her way over, discovering Akash standing there in the wide-open field, ready to take her hand and embark on this new chapter together.",
		],
	},

	{
		title: "The Engagement",
		image: Engagement,
		description: [
			"Following the proposal, the two lovebirds went about formalizing their engagement at a large and in-charge Engagement Party. The day started with the religious Gol Dhana ceremony, in which the two families were irreversibly joined. This represented a core tenet of marriage in the Hindu religion - that is, marriage is not only a union between the couple, but also a union of the families. After the formalities, the couple, along with their family and friends, danced the night away along the New York skyline!",
		],
	},
];

export default STORY_CONTENT;
