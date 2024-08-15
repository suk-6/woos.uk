import { personalData } from "@/constants";
import { DetailPage } from "../detailPage";
import { Activity } from "./activity";

export const Activities = () => {
	const sortedActivities = personalData.activities.sort((a, b) => {
		const aDate = new Date(a.date.start.year, a.date.start.month);
		const bDate = new Date(b.date.start.year, b.date.start.month);

		return bDate.getTime() - aDate.getTime();
	});

	return (
		<DetailPage title="활동" description="이런 활동들을 했어요.">
			{sortedActivities.map((activity) => (
				<Activity key={activity.title} data={activity} />
			))}
		</DetailPage>
	);
};
