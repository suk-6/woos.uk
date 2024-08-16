import {
	FaGithub,
	FaGlobe,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
} from "react-icons/fa";

const socialIconClasses = " w-fit h-full";

export const SocialIcon = {
	Instagram: <FaInstagram className={socialIconClasses} />,
	Twitter: <FaTwitter className={socialIconClasses} />,
	Github: <FaGithub className={socialIconClasses} />,
	Linkedin: <FaLinkedin className={socialIconClasses} />,
	Blog: <FaGlobe className={socialIconClasses} />,
};
