import { SocialType } from "./social";
import { ProjectType } from "./project";
import { AwardType } from "./award";
import { ActivityType } from "./activity";

export type DataType = {
	name: string;
	enName: string;
	job: string;
	email: string;
	website: string;
	phone: string;
	projects: ProjectType[];
	socials: SocialType[];
	awards: AwardType[];
	activities: ActivityType[];
};
