import { personalData } from "@/constants";
import { DetailPage } from "../detailPage";
import { Award } from "./award";

export const Awards = () => {
	const sortedAwards = personalData.awards.sort((a, b) => {
		const aDate = new Date(a.date.year, a.date.month);
		const bDate = new Date(b.date.year, b.date.month);

		return bDate.getTime() - aDate.getTime();
	});

	return (
		<DetailPage title="수상" description="여기서 상 받았어요.">
			{sortedAwards.map((award, i) => (
				<Award key={i} data={award} />
			))}
		</DetailPage>
	);
};
