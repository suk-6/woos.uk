import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "woosuknam",
	description: "Suk's personal website",
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
