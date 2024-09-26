import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "woosuknam",
	description: "Suk's personal website",
	metadataBase: new URL("https://woos.uk"),
	openGraph: {
		title: "@woosuknam",
		url: "https://woos.uk",
		type: "website",
		locale: "ko_KR",
		siteName: "@woosuknam",
		description: "Suk's personal website",
	},
	verification: {
		other: {
			"naver-site-verification": "6cdbf3525bf38b1c16e33e8b378163eaec6dc6a6",
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body className="bg-light-sibao-1 text-light-sibao-10 dark:bg-dark-sibao-2 dark:text-dark-sibao-9">
				{children}
				<Analytics />
			</body>
		</html>
	);
}
