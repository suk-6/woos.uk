export type AwardType = {
	competition: string;
	prize: PrizeType;
	host: string;
	links?: {
		website?: string;
		github?: string;
	};
	date: {
		year: number;
		month: number;
	};
	content: string | null;
};

type PrizeType = "대상" | "최우수상" | "우수상" | "장려상" | string | null;
