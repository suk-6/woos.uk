import Link from "next/link";
import { FaGithub, FaHome } from "react-icons/fa";

type ProjectProps = {
	title: string;
	description?: string;
	homepage?: string;
	github?: string;
	content: string;
};

export const Project = (props: ProjectProps) => {
	return (
		<div className=" max-w-[60rem] h-full px-10 sm:px-14 pt-10 lg:pt-16 flex flex-col gap-0">
			<div className=" flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-end sm:gap-0">
				<div>
					<h1 className=" text-lg sm:text-2xl font-semibold">
						{props.title}
					</h1>
					<h2 className=" text-sm sm:text-lg font-normal">
						{props.description}
					</h2>
				</div>
				<div className="pb-1 flex flex-row gap-2">
					{props.homepage && (
						<Link href={props.homepage} target="_blank">
							<FaHome className=" text-lg text-light-nav-icon dark:text-dark-nav-icon" />
						</Link>
					)}
					{props.github && (
						<Link href={props.github} target="_blank">
							<FaGithub className=" text-lg text-light-nav-icon dark:text-dark-nav-icon" />
						</Link>
					)}
				</div>
			</div>
			<div className="w-full h-[1px] bg-light-contrast dark:bg-dark-contrast my-2" />
			<div className="whitespace-pre-line text-base font-thin lg:pt-1">
				{props.content}
			</div>
		</div>
	);
};
