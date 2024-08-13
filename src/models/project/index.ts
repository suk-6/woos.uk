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
