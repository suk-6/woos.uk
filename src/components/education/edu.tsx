import { EducationType } from "@/models/education";

const monthFormat = (month: number) =>
	month < 10 ? `0${month}` : month.toString();

export const Edu = ({ data }: { data: EducationType }) => {
	let isSameDate = false;

	if (data.date.isEnd) {
		if (
			data.date.start.year === data.date.end?.year &&
			data.date.start.month === data.date.end?.month
		) {
			isSameDate = true;
		}
	}

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
					{isSameDate ? (
						<div className="text-sm font-semibold">
							{data.date.start.year}.
							{monthFormat(data.date.start.month)}
						</div>
					) : (
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
									: "재학 중"}
							</div>
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
