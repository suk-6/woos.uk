"use client";

import { useEffect, useState } from "react";

import { useScroll } from "@/hooks/useScroll";

import { Navigator } from "@/components/navigator";
import { BusinessCard } from "@/components/businessCard";
import { Projects } from "@/components/projects";

export default function Home() {
	const { y } = useScroll();
	const [navVisible, setNavVisible] = useState(false);

	useEffect(() => {
		if (y > 10) setNavVisible(true);
		else setNavVisible(false);
	}, [y]);

	return (
		<main className=" min-h-screen font-SUITE overflow-x-hidden">
			<Navigator isVisible={navVisible} />
			<div className=" h-screen snap-y snap-mandatory overflow-y-scroll scrollbar-hide">
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
