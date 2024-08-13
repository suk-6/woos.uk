import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "woosuknam",
	description: "Suk's personal website",
	metadataBase: new URL("https://nam.woo.suk.kr"),
	openGraph: {
		title: "@woosuknam",
		url: "https://nam.woo.suk.kr",
		type: "website",
		locale: "ko_KR",
		siteName: "@woosuknam",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body className="bg-light text-light-text dark:bg-dark dark:text-dark-text">
				{children}
			</body>
		</html>
	);
}
