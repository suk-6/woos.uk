import { useEffect, useState } from "react";

const getCardOffsets = (container: HTMLDivElement) => {
	if (!container) return;

	const cards = container.querySelectorAll(".scroll-items");
	const heights: number[] = [];

	cards.forEach((c: Element) => {
		const card = c as HTMLDivElement;
		heights.push(card.offsetTop);
	});

	return heights;
};

export const useGetCardOffsets = (container: HTMLDivElement | null) => {
	const [cardOffsets, setCardOffsets] = useState<number[]>([]);
	const [update, setUpdate] = useState(false);

	const updateOffsets = () => setUpdate(!update);

	useEffect(() => {
		if (!container) return;

		const f = () => setCardOffsets(getCardOffsets(container)!);
		f();

		container.addEventListener("resize", f);
		return () => container.removeEventListener("resize", f);
	}, [container, update]);

	return { cardOffsets, updateOffsets };
};
