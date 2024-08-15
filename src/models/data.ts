import { SocialType } from "./social";
import { ProjectType } from "./project";
import { AwardType } from "./award";
import { ActivityType } from "./activity";
import { EducationType } from "./education";

export type DataType = {
	name: string;
	enName: string;
	job: string;
	email: string;
	website: string;
	phone: string;
	projects: ProjectType[];
	socials: SocialType[];
	education: EducationType[];
	awards: AwardType[];
	activities: ActivityType[];
};
