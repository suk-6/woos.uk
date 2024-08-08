import { DetailPage } from "../detailPage";
import { Project } from "./project";

import { myData } from "@/data";

export const Projects = () => {
	return (
		<DetailPage title="프로젝트" description="내 프로젝트를 소개합니다.">
			{myData.projects.map((project) => (
				<Project
					key={project.title}
					title={project.title}
					description={project.description}
					homepage={project.homepage}
					github={project.github}
					content={project.content}
				/>
			))}
		</DetailPage>
	);
};
