import { DetailPage } from "../detailPage";
import { Project } from "./project";

import { personalData } from "@/constants";

export const Projects = () => {
	const sortedProjects = personalData.projects.sort((a, b) => {
		const aDate = new Date(a.date.start.year, a.date.start.month);
		const bDate = new Date(b.date.start.year, b.date.start.month);

		return bDate.getTime() - aDate.getTime();
	});

	return (
		<DetailPage title="프로젝트" description="내 프로젝트를 소개합니다.">
			{sortedProjects.map((project) => (
				<Project key={project.title} data={project} />
			))}
		</DetailPage>
	);
};
