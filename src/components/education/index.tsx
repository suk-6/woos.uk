import { Edu } from "./edu";
import { DetailPage } from "../detailPage";

import { personalData } from "@/constants";

export const Education = () => {
	const sortedEducation = personalData.education.sort((a, b) => {
		const aDate = new Date(a.date.start.year, a.date.start.month);
		const bDate = new Date(b.date.start.year, b.date.start.month);

		return bDate.getTime() - aDate.getTime();
	});

	return (
		<DetailPage
			title="학력"
			description="여기에서 교육을 받았어요."
			classNameOverride="min-h-fit"
		>
			{sortedEducation.map((edu, i) => (
				<Edu key={i} data={edu} />
			))}
		</DetailPage>
	);
};
