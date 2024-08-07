import Link from "next/link";

export const BusinessCard = () => {
	const name = "남우석";
	const enName = "Woosuk Nam";

	return (
		<div className=" relative w-full min-h-screen px-10 py-12 sm:px-20 sm:py-20 flex flex-col justify-between">
			<div className=" w-fit flex flex-col gap-2 sm:gap-4">
				<div className="flex flex-col gap-1 sm:gap-3 text-nowrap font-HSSanTokki20 text-4xl sm:text-5xl">
					<h1>{name.split("").join(" ")}</h1>
					<h1>{enName}</h1>
				</div>
				<h2 className=" font-SUITE font-medium text-xl sm:text-2xl">
					Backend Developer
				</h2>
				<div className="w-full h-1 bg-black" />
			</div>
			<div className=" flex flex-row justify-between items-end w-full min-w-60">
				<div className=" flex flex-col gap-1">
					<p>
						<b>E.</b>{" "}
						<Link href={"mailto:me@suk.kr"}>me@suk.kr</Link>
					</p>
					<p>
						<b>T.</b> 010-9900-2512
					</p>
				</div>
				<div className="animate-wiggle text-6xl">👋</div>
			</div>
		</div>
	);
};
