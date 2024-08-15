"use client";

import { useEffect, useState } from "react";

import { Navigator } from "@/components/navigator";
import { BusinessCard } from "@/components/businessCard";
import { Projects } from "@/components/projects";
import { SocialCard } from "@/components/social";
import { Awards } from "@/components/awards";
import { Activities } from "@/components/activities";
import { useGetCardOffsets } from "@/hooks/useGetCardOffsets";
import { Education } from "@/components/education";

export default function Home() {
	const [container, setContainer] = useState<HTMLDivElement | null>(null);
	const [navVisible, setNavVisible] = useState(false);
	const { cardOffsets } = useGetCardOffsets(container);

	useEffect(() => {
		if (!container) return;

		const f = () => {
			if (container.scrollTop > 100) setNavVisible(true);
			else setNavVisible(false);

			if (navigator.userAgent.includes("iPhone")) {
				if (container.scrollTop > cardOffsets[3])
					container.classList.remove("snap-y");
				else container.classList.add("snap-y");
			}
		};
		f();

		container.addEventListener("scroll", f);
		return () => container.removeEventListener("scroll", f);
	}, [cardOffsets, container]);

	const scrollItemsClesses = "scroll-items snap-always snap-start";

	return (
		<main className=" fixed w-full h-full font-SUITE overflow-hidden">
			{container && (
				<Navigator isVisible={navVisible} container={container} />
			)}
			<div
				className=" h-[100dvh] snap-y snap-mandatory overflow-y-scroll scrollbar-hide"
				ref={setContainer}
			>
				<div className={scrollItemsClesses}>
					<BusinessCard />
				</div>
				<div className={scrollItemsClesses}>
					<SocialCard />
				</div>
				<div className={scrollItemsClesses}>
					<Education />
				</div>
				<div className={scrollItemsClesses}>
					<Projects />
				</div>
				<div className={scrollItemsClesses}>
					<Awards />
				</div>
				<div className={scrollItemsClesses}>
					<Activities />
				</div>
			</div>
		</main>
	);
}
