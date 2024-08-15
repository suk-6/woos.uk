import Link from "next/link";
import { FaGithub, FaGlobe } from "react-icons/fa";

import { ActivityType } from "@/models/activity";

const monthFormat = (month: number) =>
	month < 10 ? `0${month}` : month.toString();

export const Activity = ({ data }: { data: ActivityType }) => {
	return (
		<div className=" w-full sm:max-w-[60rem] h-full px-10 sm:px-14 flex flex-col gap-0">
			<div className=" flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-end sm:gap-0">
				<div>
					<h1 className=" text-xl sm:text-2xl font-semibold">
						{data.title}
					</h1>
					<h2 className=" text-md sm:text-lg font-normal">
						{data.description}
					</h2>
				</div>
				<div className=" flex flex-row sm:flex-col-reverse justify-between sm:justify-normal sm:items-end sm:gap-1">
					<div className=" flex flex-row gap-1 text-sm font-semibold">
						<div>
							{data.date.start.year}.
							{monthFormat(data.date.start.month)}
						</div>
						<div>~</div>
						<div
							className={`text-nowrap ${
								!data.date.isEnd &&
								"text-primary dark:text-secondary"
							}`}
						>
							{data.date.isEnd
								? `${data.date.end?.year}.${monthFormat(
										data.date.end?.month!
								  )}`
								: "진행 중"}
						</div>
					</div>
					{data.links && (
						<div className="pb-1 flex flex-row gap-2">
							{data.links.website && (
								<Link href={data.links.website} target="_blank">
									<FaGlobe className=" text-xl text-light-nav-icon dark:text-dark-nav-icon" />
								</Link>
							)}
							{data.links.github && (
								<Link href={data.links.github} target="_blank">
									<FaGithub className=" text-xl text-light-nav-icon dark:text-dark-nav-icon" />
								</Link>
							)}
						</div>
					)}
				</div>
			</div>
			<div className="w-full h-[1px] bg-light-contrast dark:bg-dark-contrast my-2" />
			<div className="whitespace-pre-line text-base font-light lg:pt-1">
				{data.content}
			</div>
		</div>
	);
};
