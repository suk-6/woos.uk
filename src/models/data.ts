export type DataType = {
	name: string;
	enName: string;
	job: string;
	email: string;
	website: string;
	phone: string;
	projects: ProjectType[];
};

export type ProjectType = {
	title: string;
	description: string;
	techStack?: string[];
	links?: {
		website?: string;
		github?: string;
	};
	content: string;
};
