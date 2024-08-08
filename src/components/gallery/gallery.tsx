export const Gallery = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className="relative w-full h-[50dvh] mt-8 px-5 snap-x snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-hide flex flex-row z-0">
			{children}
		</div>
	);
};
