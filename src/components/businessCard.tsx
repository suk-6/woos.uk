import Link from "next/link";
import { Noto_Sans_Mono } from "next/font/google";

import { myData } from "@/constants";

const notoMono = Noto_Sans_Mono({ subsets: ["latin"], weight: ["400"] });

const MonoB = ({ children }: { children: React.ReactNode }) => (
	<b className={notoMono.className}>{children}</b>
);

export const BusinessCard = () => {
	return (
		<div className=" relative w-full min-h-[85dvh] px-10 py-12 sm:px-20 sm:py-20 flex flex-col justify-between select-none">
			<div className=" w-fit flex flex-col gap-2 sm:gap-4">
				<div className="flex flex-col gap-1 sm:gap-3 text-nowrap font-HSSanTokki20 text-4xl sm:text-5xl">
					<h1>{myData.name.split("").join(" ")}</h1>
					<h1>{myData.enName}</h1>
				</div>
				<h2 className=" font-SUITE font-medium text-xl sm:text-2xl">
					{myData.job}
				</h2>
				<div className="w-1/3 h-1 bg-light-contrast dark:bg-dark-contrast" />
			</div>
			<div className=" flex flex-row justify-between items-end w-full min-w-60">
				<div className=" grid grid-cols-[0.2fr_1fr] gap-y-1">
					<MonoB>E.</MonoB>
					<Link href={`mailto:${myData.email}`}>{myData.email}</Link>
					<MonoB>W.</MonoB>
					<Link href={myData.website}>{myData.website}</Link>
					<MonoB>T.</MonoB>
					<Link href={`tel:${myData.phone.replaceAll("-", "")}`}>
						{myData.phone}
					</Link>
				</div>
				<div className="animate-wiggle text-6xl">👋</div>
			</div>
		</div>
	);
};
