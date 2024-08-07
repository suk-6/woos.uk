"use client";

import { use, useEffect, useRef, useState } from "react";

import { Navigator } from "@/components/navigator";
import { BusinessCard } from "@/components/businessCard";
import { Projects } from "@/components/projects";

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
		<main className=" min-h-screen font-SUITE overflow-x-hidden">
			<Navigator isVisible={navVisible} />
			<div
				className=" h-screen snap-y snap-mandatory overflow-y-scroll scrollbar-hide"
				ref={setContainer}
			>
				<div className="snap-always snap-center">
					<BusinessCard />
				</div>
				<div className="snap-always snap-center">
					<Projects />
				</div>
			</div>
		</main>
	);
}
