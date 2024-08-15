import { DataType } from "@/models/data";

import { projects } from "./projects";
import { socials } from "./socials";
import { awards } from "./awards";
import { activities } from "./activities";
import { education } from "./education";

export const personalData: DataType = {
	name: "남우석",
	enName: "Woosuk Nam",
	job: "Backend Developer",
	email: "me@suk.kr",
	website: "https://suk.kr",
	phone: "010-9900-2512",
	socials: socials,
	projects: projects,
	education: education,
	awards: awards,
	activities: activities,
};
