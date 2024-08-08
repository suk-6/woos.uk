import Image, { StaticImageData } from "next/image";

type TileProps = {
	title: string;
	description: string;
	bg?: StaticImageData;
};

export const Tile = ({ title, description, bg }: TileProps) => {
	return (
		<div className=" relative snap-always snap-center min-w-[35rem] h-full p-2">
			<div className=" relative w-full h-full flex flex-col bg-gray-200 rounded-xl shadow-md z-10s">
				<div className=" relative w-full h-full z-30 py-1">
					{bg && (
						<Image
							src={bg}
							alt={title}
							layout="fill"
							className="w-full h-full object-cover rounded-t-xl z-30"
						/>
					)}
				</div>
				<div className=" h-fit px-3 py-3 flex flex-col items-start justify-end">
					<h2 className="text-md font-semibold z-30">{title}</h2>
					<p className="text-sm text-nowrap z-30">{description}</p>
				</div>
			</div>
		</div>
	);
};
