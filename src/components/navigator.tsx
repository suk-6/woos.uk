"use client";

import Link from "next/link";

import { useEffect } from "react";

import { MdOutlineLightMode } from "react-icons/md";
import { FaGithub, FaInstagram } from "react-icons/fa";

export const Navigator = ({
	isVisible,
	isDark,
	setIsDark,
}: {
	isVisible: boolean;
	isDark: boolean | null;
	setIsDark: (isDark: boolean) => void;
}) => {
	const navClass = "bg-white border border-stroke p-3 rounded-lg";

	useEffect(() => {
		if (localStorage.getItem("isDark") === null) {
			localStorage.setItem("isDark", "false");
			return;
		}

		setIsDark(localStorage.getItem("isDark") === "true");
	}, [setIsDark]);

	useEffect(() => {
		if (isDark === null) return;
		localStorage.setItem("isDark", isDark.toString());

		if (isDark) {
			document.documentElement.classList.add("dark");
			return;
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [isDark]);

	return (
		<nav
			className={`flex gap-1 fixed mx-auto bottom-10 left-1/2 z-10 transform -translate-x-1/2 transition-opacity duration-500 ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
		>
			<div className={navClass} onClick={() => setIsDark(!isDark)}>
				<MdOutlineLightMode size={25} color="gray" />
			</div>
			<div className={navClass}>
				<ul className="flex gap-5 items-center">
					<li>
						<Link href="https://github.com/suk-6" target="_blank">
							<FaGithub size={25} color="gray" />
						</Link>
					</li>
					<li>
						<Link
							href="https://instagram.com/woosuk_"
							target="_blank"
						>
							<FaInstagram size={25} color="gray" />
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
