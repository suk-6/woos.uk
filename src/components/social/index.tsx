import { SocialIcon } from "@/models/social";
import { SocialBlock } from "./socialBlock";
import { myData } from "@/constants/data";

export const SocialCard = () => {
	return (
		<div className=" relative w-full min-h-fit px-10 py-12 sm:px-20 sm:py-20 flex flex-col justify-between select-none border-y border-light-pageBorder dark:border-dark-pageBorder">
			<div className=" flex flex-row flex-wrap gap-6">
				{myData.socials.map((social, index) => (
					<SocialBlock
						key={index}
						social={{
							...social,
							icon: SocialIcon[social.name],
						}}
					/>
				))}
			</div>
		</div>
	);
};
