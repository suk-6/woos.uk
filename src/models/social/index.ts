import { SocialIcon } from "./icon";

export type SocialType = {
	name: keyof typeof SocialIcon;
	handle: string;
	link: string;
};

export type RanderSocialType = SocialType & {
	icon: React.ReactNode;
};
