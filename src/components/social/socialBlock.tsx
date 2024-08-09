import { RanderSocialType } from "@/models/data";
import Link from "next/link";

type SocialBlockProps = {
	social: RanderSocialType;
};

export const SocialBlock = ({ social }: SocialBlockProps) => {
	return (
		<Link
			className=" w-44 h-44 px-8 pt-7 pb-6 bg-light-social-block rounded-xl shadow-lg flex-col justify-between items-start inline-flex"
			href={social.link}
			target="_blank"
		>
			<div className=" w-full h-8 flex items-center justify-start">
				{social.icon}
			</div>
			<div className=" h-14 flex-col justify-start items-start gap-1 flex">
				<div className=" self-stretch text-light-text text-2xl font-extrabold font-['Nunito'] capitalize">
					{social.name}
				</div>
				<div className=" self-stretch text-light-text text-xs font-semibold font-['Inter']">
					{social.handle}
				</div>
			</div>
		</Link>
	);
};
