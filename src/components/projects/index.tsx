import { DetailPage } from "../detailPage";
import { Gallery } from "../gallery/gallery";
import { Tile } from "../gallery/tile";

import dytimetalbe from "@/../public/dytimetable.png";

export const Projects = () => {
	return (
		<DetailPage
			title="프로젝트"
			description="제가 진행했던 프로젝트를 소개합니다."
		>
			<Gallery>
				<Tile
					title="덕영시간표"
					description="매 시간마다, 다음 교시 과목을 알려주는 서비스"
					bg={dytimetalbe}
				/>
				<Tile
					title="덕영시간표"
					description="매 시간마다, 다음 교시 과목을 알려주는 서비스"
					bg={dytimetalbe}
				/>
				<Tile
					title="덕영시간표"
					description="매 시간마다, 다음 교시 과목을 알려주는 서비스"
					bg={dytimetalbe}
				/>
				<Tile
					title="덕영시간표"
					description="매 시간마다, 다음 교시 과목을 알려주는 서비스"
					bg={dytimetalbe}
				/>
				<Tile
					title="덕영시간표"
					description="매 시간마다, 다음 교시 과목을 알려주는 서비스"
					bg={dytimetalbe}
				/>
			</Gallery>
		</DetailPage>
	);
};
