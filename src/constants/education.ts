import { EducationType } from "@/models/education";

export const education: EducationType[] = [
  {
    title: "덕영고등학교",
    description: "소프트웨어과",
    date: {
      start: {
        year: 2022,
        month: 3,
      },
      isEnd: false,
    },
    content: `- 메이크@정보보안 동아리
        - 4H 환경봉사 동아리
        - 학교를 위한 프로덕트들 개발
		    - 봉사 200+시간`,
  },
  {
    title: "서울여자대학교 정보보호영재교육원",
    description: "고등전문A반",
    date: {
      start: {
        year: 2023,
        month: 4,
      },
      isEnd: true,
      end: {
        year: 2023,
        month: 12,
      },
    },
    content: null,
  },
];
