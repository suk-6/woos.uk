"use client";

import { useEffect, useState } from "react";

import { Navigator } from "@/components/navigator";
import { BusinessCard } from "@/components/businessCard";
import { Projects } from "@/components/projects";
import { SocialCard } from "@/components/social";
import { Awards } from "@/components/awards";
import { Activities } from "@/components/activities";
import { useGetCardHeights } from "@/hooks/useGetCardHeights";

export default function Home() {
	const [container, setContainer] = useState<HTMLDivElement | null>(null);
	const [navVisible, setNavVisible] = useState(false);
	const { cardHeights } = useGetCardHeights(container);

	useEffect(() => {
		if (!container) return;

		const f = () => {
			if (container.scrollTop > 100) setNavVisible(true);
			else setNavVisible(false);

			if (navigator.userAgent.includes("iPhone")) {
				if (container.scrollTop > cardHeights[2])
					container.classList.remove("snap-y");
				else container.classList.add("snap-y");
			}
		};
		f();

		container.addEventListener("scroll", f);
		return () => container.removeEventListener("scroll", f);
	}, [cardHeights, container]);

	return (
		<main className=" fixed w-full h-full font-SUITE overflow-hidden">
			{container && (
				<Navigator isVisible={navVisible} container={container} />
			)}
			<div
				className=" h-[100dvh] snap-y snap-mandatory overflow-y-scroll scrollbar-hide"
				ref={setContainer}
			>
				<div className=" scroll-items snap-always snap-start">
					<BusinessCard />
				</div>
				<div className=" scroll-items snap-always snap-start">
					<SocialCard />
				</div>
				<div className=" scroll-items snap-always snap-start">
					<Projects />
				</div>
				<div className=" scroll-items snap-always snap-start">
					<Awards />
				</div>
				<div className=" scroll-items snap-always snap-start">
					<Activities />
				</div>
			</div>
		</main>
	);
}
