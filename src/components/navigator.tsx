"use client";

import Link from "next/link";

import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { useDark } from "@/hooks/useDark";

export const Navigator = ({ isVisible }: { isVisible: boolean }) => {
	const { isDark, setIsDark } = useDark();

	const navClass =
		"bg-light dark:bg-dark border border-stroke border-light-nav-border dark:border-dark-nav-border p-3 rounded-lg";

	const iconClass = "text-light-nav-icon dark:text-dark-nav-icon";

	return (
		<nav
			className={`flex gap-1 fixed mx-auto bottom-10 left-1/2 z-10 transform -translate-x-1/2 transition-opacity duration-500 ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
		>
			<div className={navClass} onClick={() => setIsDark(!isDark)}>
				{isDark ? (
					<MdOutlineDarkMode size={25} className={iconClass} />
				) : (
					<MdOutlineLightMode size={25} className={iconClass} />
				)}
			</div>
			<div className={navClass}>
				<ul className="flex gap-5 items-center">
					<li>
						<Link href="https://github.com/suk-6" target="_blank">
							<FaGithub size={25} className={iconClass} />
						</Link>
					</li>
					<li>
						<Link
							href="https://instagram.com/woosuk_"
							target="_blank"
						>
							<FaInstagram size={25} className={iconClass} />
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
