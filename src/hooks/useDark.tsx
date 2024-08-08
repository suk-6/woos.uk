import { useEffect, useState } from "react";

export const useDark = () => {
	const [isDark, setIsDark] = useState<boolean | null>(null);

	useEffect(() => {
		if (!("theme" in localStorage)) {
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				localStorage.theme = "dark";
				setIsDark(true);
			} else {
				localStorage.theme = "light";
				setIsDark(false);
			}
		} else {
			setIsDark(localStorage.theme === "dark");
		}
	}, []);

	useEffect(() => {
		if (isDark === null) return;

		if (isDark) {
			document.documentElement.classList.add("dark");
			localStorage.theme = "dark";
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.theme = "light";
		}
	}, [isDark]);

	return { isDark, setIsDark };
};
