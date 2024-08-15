import { DataType } from "@/models/data";

import { projects } from "./projects";
import { socials } from "./socials";
import { awards } from "./awards";
import { activities } from "./activities";

export const personalData: DataType = {
	name: "남우석",
	enName: "Woosuk Nam",
	job: "Backend Developer",
	email: "me@suk.kr",
	website: "https://suk.kr",
	phone: "010-9900-2512",
	socials: socials,
	projects: projects,
	awards: awards,
	activities: activities,
};
