import { TechStackType } from "../techStack";

export type ProjectType = {
	title: string;
	description: string;
	techStack?: TechStackType[];
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
