"use client";

import { useEffect, useState } from "react";
import { BusinessCard } from "@/components/businessCard";
import { Navigator } from "@/components/navigator";
import { useScroll } from "@/hooks/useScroll";

export default function Home() {
	const { y } = useScroll();
	const [navVisible, setNavVisible] = useState(false);

	useEffect(() => {
		if (y > 10) setNavVisible(true);
		else setNavVisible(false);
	}, [y]);

	return (
		<main className=" w-screen min-h-screen font-SUITE">
			<Navigator isVisible={navVisible} />
			<BusinessCard />
			<div className="h-10"></div>
		</main>
	);
}
