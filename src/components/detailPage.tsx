export const DetailPage = ({
	title,
	description,
	className,
	children,
}: {
	title: string;
	description: string;
	className?: string;
	children?: React.ReactNode;
}) => (
	<div className="relative w-full min-h-[100dvh] border-y border-light-pageBorder dark:border-dark-pageBorder pt-12 sm:pt-14 pb-28">
		<div className="flex flex-col gap-1 px-10 sm:px-14 pb-10 lg:pb-16">
			<p className="font-HSSanTokki20 text-3xl">{title}</p>
			<p className="text-xl">{description}</p>
		</div>
		<div className={className + " flex flex-col gap-16 items-center"}>
			{children}
		</div>
	</div>
);
