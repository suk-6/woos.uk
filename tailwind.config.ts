import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				SUITE: ["SUITE", "sans-serif"],
				HSSanTokki20: ["HSSanTokki20-Regular", "sans-serif"],
			},
			colors: {
				primary: {
					DEFAULT: "#4865D5",
				},
				light: {
					DEFAULT: "#f9f9f9",
					contrast: "#000",
					nav: {
						icon: colors.gray[500],
						border: colors.gray[300],
					},
					pageBorder: colors.gray[300],
					text: {
						DEFAULT: "#000",
					},
				},
				dark: {
					DEFAULT: "#1a1a1a",
					contrast: "#fff",
					nav: {
						icon: colors.gray[300],
						border: "#4a4a4a",
					},
					pageBorder: colors.stone[700],
					text: {
						DEFAULT: "#fff",
					},
				},
			},
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-5deg)" },
					"50%": { transform: "rotate(5deg)" },
				},
			},
			animation: {
				wiggle: "wiggle 1.5s ease-in-out infinite",
			},
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
