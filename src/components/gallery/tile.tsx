import Image, { StaticImageData } from "next/image";

type TileProps = {
	title: string;
	description: string;
	bg?: StaticImageData;
};

export const Tile = ({ title, description, bg }: TileProps) => {
	return (
		<div className=" relative snap-always snap-center w-full h-full p-2 z-20">
			<div className=" relative w-full h-full bg-gray-200 rounded-xl shadow-md">
				{bg && (
					<div className="absolute bottom-0 left-0 right-0 top-0 w-full h-5/6">
						<Image
							src={bg}
							alt={title}
							layout="fixed"
							className="w-full h-full object-cover rounded-t-xl"
						/>
					</div>
				)}
				<div className="w-full h-full flex flex-col justify-end mx-4 pb-3 text-gray-700">
					<h2 className="text-md font-semibold">{title}</h2>
					<p className="text-sm text-nowrap">{description}</p>
				</div>
			</div>
		</div>
	);
};
