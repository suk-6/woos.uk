import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "남우석",
	description: "Suk's personal website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body>{children}</body>
		</html>
	);
}