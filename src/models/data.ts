import { SocialType } from "./social";
import { ProjectType } from "./project";
import { AwardType } from "./award";

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
};
