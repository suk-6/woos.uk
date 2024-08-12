import { useEffect, useState } from "react";

const getCardHeights = (container: HTMLDivElement) => {
	if (!container) return;

	const cards = container.querySelectorAll(".scroll-items");
	const heights: number[] = [];

	cards.forEach((c: Element) => {
		const card = c as HTMLDivElement;
		heights.push(card.offsetTop);
	});

	return heights;
};

export const useGetCardHeights = (container: HTMLDivElement | null) => {
	const [cardHeights, setCardHeights] = useState<number[]>([]);

	useEffect(() => {
		if (!container) return;

		const f = () => setCardHeights(getCardHeights(container)!);
		f();

		container.addEventListener("resize", f);
		return () => container.removeEventListener("resize", f);
	}, [container]);

	return { cardHeights };
};
