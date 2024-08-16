import Link from "next/link";

import { RanderSocialType } from "@/models/social";

type SocialBlockProps = {
	social: RanderSocialType;
};

export const SocialBlock = ({ social }: SocialBlockProps) => {
	return (
		<Link
			className=" w-32 h-32 sm:w-44 sm:h-44 px-6 sm:px-8 pt-5 sm:pt-7 pb-5 sm:pb-6 bg-light-sibao-2 dark:bg-dark-sibao-3 rounded-xl shadow-lg flex-col gap-3 justify-between items-start inline-flex"
			href={social.link}
			target="_blank"
		>
			<div className=" w-full h-8 flex items-center justify-start">
				{social.icon}
			</div>
			<div className=" h-14 flex-col justify-start items-start sm:gap-1 flex">
				<div className=" self-stretch text-lg sm:text-2xl font-extrabold font-['Nunito'] capitalize">
					{social.name}
				</div>
				<div className=" self-stretch text-xs font-semibold font-['Inter']">
					{social.handle}
				</div>
			</div>
		</Link>
	);
};
