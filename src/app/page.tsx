"use client";

import { useEffect, useState } from "react";

import { Navigator } from "@/components/navigator";
import { BusinessCard } from "@/components/businessCard";
import { Projects } from "@/components/projects";
import { SocialCard } from "@/components/social";

export default function Home() {
	const [container, setContainer] = useState<HTMLDivElement | null>(null);
	const [navVisible, setNavVisible] = useState(false);

	useEffect(() => {
		if (!container) return;

		const f = () => {
			if (container.scrollTop > 100) setNavVisible(true);
			else setNavVisible(false);
		};

		container.addEventListener("scroll", f);
		return () => container.removeEventListener("scroll", f);
	}, [container]);

	return (
		<main className=" fixed w-full h-full font-SUITE overflow-hidden">
			{container && (
				<Navigator isVisible={navVisible} container={container} />
			)}
			<div
				className=" h-[100dvh] snap-y snap-mandatory overflow-y-scroll scrollbar-hide"
				ref={setContainer}
			>
				<div className="snap-always snap-start">
					<BusinessCard />
				</div>
				<div className="snap-always snap-start">
					<SocialCard />
				</div>
				<div className="snap-always snap-start">
					<Projects />
				</div>
			</div>
		</main>
	);
}
