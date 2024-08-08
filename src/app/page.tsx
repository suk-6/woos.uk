"use client";

import { useEffect, useState } from "react";

import { Navigator } from "@/components/navigator";
import { BusinessCard } from "@/components/businessCard";
import { Projects } from "@/components/projects";

export default function Home() {
	const [container, setContainer] = useState<HTMLDivElement | null>(null);
	const [navVisible, setNavVisible] = useState(false);
	const [isDark, setIsDark] = useState<boolean | null>(null);

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
		<main className="min-h-screen font-SUITE overflow-x-hidden bg-light text-light-text dark:bg-dark dark:text-dark-text ">
			<Navigator
				isVisible={navVisible}
				isDark={isDark}
				setIsDark={setIsDark}
			/>
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
