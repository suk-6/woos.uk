"use client";

import { useEffect, useState } from "react";

import { Navigator } from "@/components/navigator";
import { BusinessCard } from "@/components/businessCard";
import { Projects } from "@/components/projects";
import { SocialCard } from "@/components/social";
import { Awards } from "@/components/awards";
import { Activities } from "@/components/activities";

export default function Home() {
	const [container, setContainer] = useState<HTMLDivElement | null>(null);
	const [navVisible, setNavVisible] = useState(false);

	useEffect(() => {
		if (!container) return;
		const callbackSetNavVisible = () => {
			if (container.scrollTop > 100) setNavVisible(true);
			else setNavVisible(false);
		};

		container.addEventListener("scroll", callbackSetNavVisible);
		return () =>
			container.removeEventListener("scroll", callbackSetNavVisible);
	}, [container]);

	const cards = [
		<BusinessCard key="businessCard" />,
		<SocialCard key="socialCard" />,
		<Projects key="projects" />,
		<Awards key="awards" />,
		<Activities key="activities" />,
	];

	return (
		<main className=" fixed w-full h-full font-SUITE overflow-hidden">
			{container && (
				<Navigator isVisible={navVisible} container={container} />
			)}
			<div
				className=" h-[100dvh] snap-y snap-mandatory overflow-y-scroll scrollbar-hide"
				ref={setContainer}
			>
				{cards.map((card) => (
					<div
						className="scroll-items snap-always snap-align-none sm:snap-start"
						key={card.key}
					>
						{card}
					</div>
				))}
			</div>
		</main>
	);
}
