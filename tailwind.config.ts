import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		fontFamily: {
			SUITE: ["SUITE"],
			HSSanTokki20: ["HSSanTokki20-Regular"],
		},
		extend: {
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
