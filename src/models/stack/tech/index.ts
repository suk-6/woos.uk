import { ai } from "./ai";
import { clouds } from "./clouds";
import { databases } from "./databases";
import { etc } from "./etc";
import { frameworks } from "./frameworks";
import { hardwares } from "./hardwares";
import { lagnuages } from "./languages";
import { tools } from "./tools";

const techStacks = [
	...lagnuages,
	...frameworks,
	...tools,
	...hardwares,
	...databases,
	...clouds,
	...ai,
	...etc,
] as const;

export type TechStackType = (typeof techStacks)[number];
