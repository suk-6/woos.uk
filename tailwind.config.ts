import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/models/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				SUITE: ["SUITE", "sans-serif"],
				HSSanTokki20: ["HSSanTokki20-Regular", "sans-serif"],
			},
			colors: {
				primary: "#4865D5",
				secondary: "#FFD700",
				light: {
					DEFAULT: "#f9f9f9",
					contrast: "#000",
					social: {
						block: "#d0d0d0",
					},
					nav: {
						icon: colors.gray[500],
						border: colors.gray[300],
					},
					pageBorder: colors.gray[300],
					text: {
						DEFAULT: "#000",
					},
					sibao: {
						1: "#FFFFFF",
						2: "#FAFAFC",
						3: "#EEEEF5",
						4: "#DCDCE5",
						5: "#BFBFCF",
						6: "#A4A4B5",
						7: "#878798",
						8: "#646475",
						9: "#404051",
						10: "#18181C",
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
					sibao: {
						1: "#000000",
						2: "#0F0F13",
						3: "#181C22",
						4: "#525264",
						5: "#76768D",
						6: "#9494A8",
						7: "#B2B2BD",
						8: "#CCCCD3",
						9: "#E4E4E9",
						10: "#F0F0F9",
					},
				},
			},
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-5deg)" },
					"50%": { transform: "rotate(5deg)" },
				},
				scrollGuidance: {
					"0%": { transform: "rotate(-45deg) translate(0, 0)" },
					"20%": {
						transform: "rotate(-45deg) translate(-10px, 10px)",
					},
					"40%": { transform: "rotate(-45deg) translate(0, 0)" },
				},
			},
			animation: {
				wiggle: "wiggle 1.5s ease-in-out infinite",
				scrollGuidance: "scrollGuidance 2.5s infinite",
			},
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
