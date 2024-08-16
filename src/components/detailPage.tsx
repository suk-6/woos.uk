export const DetailPage = ({
	title,
	description,
	className,
	classNameOverride,
	children,
}: {
	title: string;
	description?: string;
	className?: string;
	classNameOverride?: string;
	children?: React.ReactNode;
}) => (
	<div
		className={
			classNameOverride +
			" relative w-full min-h-[100dvh] border-t border-light-sibao-7 dark:border-dark-sibao-7 pt-12 sm:pt-14 pb-28"
		}
	>
		<div className="flex flex-col gap-1 px-10 sm:px-14 pb-10 lg:pb-16">
			<p className="font-HSSanTokki20 text-3xl">{title}</p>
			<p className="text-xl">{description}</p>
		</div>
		<div className={className + " flex flex-col gap-16 items-center"}>
			{children}
		</div>
	</div>
);
