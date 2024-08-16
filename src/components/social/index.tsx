import { SocialBlock } from "./socialBlock";
import { personalData } from "@/constants";
import { SocialIcon } from "@/models/social/icon";

export const SocialCard = () => {
	return (
		<div className=" relative w-full min-h-fit px-10 py-12 sm:px-20 sm:py-20 flex flex-col justify-between select-none border-t border-light-sibao-7 dark:border-dark-sibao-7">
			<div className=" flex flex-row flex-wrap justify-center gap-8 sm:gap-12">
				{personalData.socials.map((social, index) => (
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
