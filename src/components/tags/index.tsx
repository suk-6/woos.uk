import { Tag } from "./tag";

export const Tags = ({ tags }: { tags?: string[] }) => {
	return (
		<div>
			{tags && (
				<div className=" w-full flex flex-row flex-wrap gap-x-1 pb-3">
					{tags.map((tag, index) => (
						<Tag key={index} content={tag} />
					))}
				</div>
			)}
		</div>
	);
};
