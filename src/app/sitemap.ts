import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://nam.woo.suk.kr",
			lastModified: new Date(),
			priority: 1,
		},
	];
}
