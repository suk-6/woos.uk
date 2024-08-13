import { SocialType } from "./social";
import { ProjectType } from "./project";

export type DataType = {
	name: string;
	enName: string;
	job: string;
	email: string;
	website: string;
	phone: string;
	projects: ProjectType[];
	socials: SocialType[];
};
