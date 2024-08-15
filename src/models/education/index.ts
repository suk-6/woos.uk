export type EducationType = {
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
	content: string | null;
};
