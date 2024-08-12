"use client";

import { useDark } from "@/hooks/useDark";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

type NavigatorProps = {
	isVisible: boolean;
	container: HTMLDivElement;
};

export const Navigator = ({ isVisible, container }: NavigatorProps) => {
	const { isDark, setIsDark } = useDark();

	const navClass =
		"bg-light dark:bg-dark border border-stroke border-light-nav-border dark:border-dark-nav-border p-3 rounded-lg";

	const iconClass = "text-light-nav-icon dark:text-dark-nav-icon";

	const scrollTo = (direction: "up" | "down") => {
		if (!container) return;

		const cards = container.querySelectorAll(".scroll-items");
		const scrollY = container.scrollTop;
		const cardHeights: number[] = [];

		cards.forEach((c) => {
			const card = c as HTMLDivElement;
			cardHeights.push(card.offsetTop);
		});

		const move = (height: number) =>
			container.scrollTo({
				top: height,
				behavior: "smooth",
			});

		if (direction === "up") {
			cardHeights.forEach((cardHeight) => {
				console.log(scrollY, cardHeight);
				if (scrollY > cardHeight) {
					move(cardHeight);
					return;
				}
			});
		} else if (direction === "down") {
			cardHeights.reverse().forEach((cardHeight) => {
				if (scrollY < cardHeight) {
					move(cardHeight);
					return;
				}
			});
		}
	};

	return (
		<nav
			className={`flex gap-1 fixed mx-auto bottom-10 left-1/2 z-10 transform -translate-x-1/2 transition-opacity duration-500 ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
		>
			<div onClick={() => setIsDark(!isDark)} className={navClass}>
				{isDark ? (
					<MdOutlineDarkMode size={25} className={iconClass} />
				) : (
					<MdOutlineLightMode size={25} className={iconClass} />
				)}
			</div>
			<div className={navClass}>
				<ul className="flex gap-5 items-center">
					<li>
						<GoArrowUp
							size={25}
							className={iconClass}
							onClick={() => scrollTo("up")}
						/>
					</li>
					<li>
						<GoArrowDown
							size={25}
							className={iconClass}
							onClick={() => scrollTo("down")}
						/>
					</li>
				</ul>
			</div>
		</nav>
	);
};
