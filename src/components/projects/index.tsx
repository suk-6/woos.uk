import { DetailPage } from "../detailPage";
import { Project } from "./project";

import { personalData } from "@/constants";

export const Projects = () => {
	return (
		<DetailPage title="프로젝트" description="내 프로젝트를 소개합니다.">
			{personalData.projects.map((project) => (
				<Project key={project.title} data={project} />
			))}
		</DetailPage>
	);
};
