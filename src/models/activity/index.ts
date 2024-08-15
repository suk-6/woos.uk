export type ActivityType = {
	title: string;
	description: string;
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
