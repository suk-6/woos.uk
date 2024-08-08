export const DetailPage = ({
	title,
	description,
	children,
}: {
	title: string;
	description: string;
	children?: React.ReactNode;
}) => (
	<div className="relative w-full min-h-screen border-y border-light-pageBorder dark:border-dark-pageBorder px-10 py-12 sm:px-14 sm:py-14">
		<div className="flex flex-col gap-1">
			<p className="font-HSSanTokki20 text-3xl">{title}</p>
			<p className="text-xl">{description}</p>
		</div>
		{children}
	</div>
);
