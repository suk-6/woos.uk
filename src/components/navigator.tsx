"use client";

import { useDark } from "@/hooks/useDark";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export const Navigator = ({
	isVisible,
	container,
}: {
	isVisible: boolean;
	container: HTMLDivElement;
}) => {
	const { isDark, setIsDark } = useDark();

	const navClass =
		"bg-light dark:bg-dark border border-stroke border-light-nav-border dark:border-dark-nav-border p-3 rounded-lg";

	const iconClass = "text-light-nav-icon dark:text-dark-nav-icon";

	const scrollUp = () => {
		container.scrollBy({
			top: -container.scrollHeight,
			behavior: "smooth",
		});
	};

	const scrollDown = () => {
		container.scrollBy({
			top: container.scrollHeight,
			behavior: "smooth",
		});
	};

	return (
		<nav
			className={`flex gap-1 fixed mx-auto bottom-10 left-1/2 z-10 transform -translate-x-1/2 transition-opacity duration-500 ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
		>
			<div className={navClass}>
				<ul className="flex gap-5 items-center">
					<li>
						<div onClick={() => setIsDark(!isDark)}>
							{isDark ? (
								<MdOutlineDarkMode
									size={25}
									className={iconClass}
								/>
							) : (
								<MdOutlineLightMode
									size={25}
									className={iconClass}
								/>
							)}
						</div>
					</li>
					<li>
						<GoArrowUp
							size={25}
							className={iconClass}
							onClick={scrollUp}
						/>
					</li>
					<li>
						<GoArrowDown
							size={25}
							className={iconClass}
							onClick={scrollDown}
						/>
					</li>
				</ul>
			</div>
		</nav>
	);
};
