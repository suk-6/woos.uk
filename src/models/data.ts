import { SocialIcon } from "./social";

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

export type ProjectType = {
	title: string;
	description: string;
	techStack?: string[];
	date: {
		start: {
			year: number;
			month: number;
		};
		isEnd: boolean;
		end?: {
			year: number;
			month: number;
		};
	};
	links?: {
		website?: string;
		github?: string;
	};
	content: string;
};

export type SocialType = {
	name: keyof typeof SocialIcon;
	handle: string;
	link: string;
};

export type RanderSocialType = SocialType & {
	icon: React.ReactNode;
};
