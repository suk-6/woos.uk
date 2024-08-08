import { DetailPage } from "../detailPage";
import { Gallery } from "../gallery/gallery";
import { Tile } from "../gallery/tile";

import dytimetalbe from "@/../public/dytimetable.png";
import adego from "@/../public/adego.png";

export const Projects = () => {
	return (
		<DetailPage
			title="프로젝트"
			description="제가 진행했던 프로젝트를 소개합니다."
		>
			<Gallery>
				<Tile
					title="덕영시간표"
					description="다음 교시 과목을 알려주는 서비스"
					bg={dytimetalbe}
				/>
				<Tile
					title="ADEGO"
					description="약속 지각 방지 솔루션"
					bg={adego}
				/>
			</Gallery>
		</DetailPage>
	);
};
