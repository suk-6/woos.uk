import { ActivityType } from "@/models/activity";

export const activities: ActivityType[] = [
	{
		title: "학생자치회",
		description: "덕영고등학교",
		date: {
			start: {
				year: 2022,
				month: 3,
			},
			isEnd: true,
			end: {
				year: 2023,
				month: 7,
			},
		},
		content: null,
	},
	{
		title: "4H",
		description: "덕영고등학교",
		date: {
			start: {
				year: 2022,
				month: 3,
			},
			isEnd: false,
		},
		content: `교내 분리수거를 담당하는 환경 봉사 동아리입니다.`,
	},
	{
		title: "디지털 경제 시대의 정보보호와 해킹",
		description: "경기꿈의대학",
		date: {
			start: {
				year: 2022,
				month: 4,
			},
			isEnd: true,
			end: {
				year: 2022,
				month: 11,
			},
		},
		content: `경기꿈의대학에서 '디지털 경제 시대의 정보보호와 해킹'이라는 강의를 신청하여 매주 수업을 들었고, 총 32시간 수강하였습니다.
        
        왕복 3시간이라는 노력을 투자해야 했지만, 그 노력 이상의 가치를 얻은 것 같습니다.`,
	},
	{
		title: "영재학급(AI창의융합)",
		description: "덕영고등학교",
		date: {
			start: {
				year: 2022,
				month: 4,
			},
			isEnd: true,
			end: {
				year: 2022,
				month: 11,
			},
		},
		content: `인공지능 학습의 과정, 자연어 처리, CV 등 인공지능에 관한 전반적인 지식과 파이썬 기초를 학습하였습니다.`,
	},
	{
		title: "2022 경기콘텐츠창의학교 전문역량과정",
		description: "덕영고등학교",
		date: {
			start: {
				year: 2022,
				month: 4,
			},
			isEnd: true,
			end: {
				year: 2022,
				month: 11,
			},
		},
		content: `경기콘텐츠창의학교 전문역량과정에서 웹/정보보안을 수료하였습니다.`,
	},
	{
		title: "사이버가디언즈 교육 프로그램",
		description: "덕영고등학교",
		links: {
			github: "https://github.com/suk-6/2022-cg-Webhacking",
		},
		date: {
			start: {
				year: 2022,
				month: 5,
			},
			isEnd: true,
			end: {
				year: 2022,
				month: 12,
			},
		},
		content: `현업에서 보안 분야에 종사하고 계신 분들의 강의를 듣고, 직접 실습을 해보며 보안을 배웠습니다.
        
        웹 분야에서는 SQL Injection, XSS, CSRF 등의 Exploit을 배웠고 포너블 분야에서는 BOF, RTL, ROP 등의 실습을 진행하며, 모의해킹 능력을 키웠습니다.
        
        약 2개월간 교육을 듣고 CTF에 출전하여 4등이라는 성적을 거두었습니다.`,
	},
	{
		title: "인공지능 교육과 사례 특강",
		description: "서울대학교 사범대학",
		date: {
			start: {
				year: 2022,
				month: 6,
			},
			isEnd: true,
			end: {
				year: 2022,
				month: 6,
			},
		},
		content: `서울대학교 사범대학에서 인공지능 교육과 사례로 특강을 진행했습니다.
        
        AI Face Recognition System 프로젝트로 발표를 진행했습니다.`,
	},
	{
		title: "2022 사이버가디언즈 컨퍼런스",
		description: "한국정보기술연구원",
		date: {
			start: {
				year: 2022,
				month: 11,
			},
			isEnd: true,
			end: {
				year: 2022,
				month: 11,
			},
		},
		content: `사이버가디언즈 컨퍼런스에 참가하여 기업 정보보호팀에서 근무하시는 분들의 강의를 들었습니다.
        
        그분들의 작업 방식, 내용, 경험과 실제 기업에서의 정보보호 방식, 필요 기술에 대해 알게되었습니다.`,
	},
	{
		title: "교내 해킹방어대회(CTF) 주최",
		description: "덕영고등학교",
		links: {
			github: "https://github.com/Asseertive/DY-ctf",
		},
		date: {
			start: {
				year: 2022,
				month: 12,
			},
			isEnd: true,
			end: {
				year: 2023,
				month: 1,
			},
		},
		content: `신입생들과 재학생들을 대상으로 교내 해킹방어대회를 주최하여 보안 의식 수준을 높이고, 보안에 흥미를 가질 수 있도록 하는 목적을 가지고 시작했습니다.
        
        문제 출제와 전반적인 CTF의 운영을 맡았습니다.
        
        직접 CTF의 문제를 출제하면서 내 지식을 테스트하고, CTF 운영 방법을 터득했습니다.`,
	},
	{
		title: "고등학생이 진행한 프로젝트들 특강",
		description: "서울대학교 사범대학",
		date: {
			start: {
				year: 2022,
				month: 12,
			},
			isEnd: true,
			end: {
				year: 2022,
				month: 12,
			},
		},
		content: `프로젝트 중 School Platform과, 데이터 크리에이터 캠프에서 진행한 내용을 발표했습니다.`,
	},
	{
		title: "2023 가천대학교 게임영상학과 예비대학",
		description: "가천대학교",
		links: {
			github: "https://github.com/kyw04/Shipmates",
		},
		date: {
			start: {
				year: 2023,
				month: 1,
			},
			isEnd: true,
			end: {
				year: 2023,
				month: 1,
			},
		},
		content: `GJG(GameJamGachon) - 협업과 프로토타입 팀 프로젝트
        
        GJG이라는 예비대학 프로그램에 참가하여 프로젝트 중 'Shipmates'를 제작하였습니다.`,
	},
	{
		title: "2023 코드게이트 컨퍼런스",
		description: "과학기술정보통신부",
		date: {
			start: {
				year: 2023,
				month: 8,
			},
			isEnd: true,
			end: {
				year: 2023,
				month: 8,
			},
		},
		content: null,
	},
	{
		title: "경기도 특성화고 학생 사업자의 공정거래 권익 보호를 위한 간담회",
		description: "경기도",
		date: {
			start: {
				year: 2023,
				month: 9,
			},
			isEnd: true,
			end: {
				year: 2023,
				month: 9,
			},
		},
		content: null,
	},
	{
		title: "2023 AWS AI 전문가 멘토링 'On the day, Coaching day'",
		description: "AWS",
		date: {
			start: {
				year: 2023,
				month: 11,
			},
			isEnd: true,
			end: {
				year: 2023,
				month: 11,
			},
		},
		content: null,
	},
	{
		title: "2023 사이버보안 10만 인재양성 성과공유회",
		description: "과학기술정보통신부",
		date: {
			start: {
				year: 2023,
				month: 12,
			},
			isEnd: true,
			end: {
				year: 2023,
				month: 12,
			},
		},
		content: null,
	},
	{
		title: "LOUNGE23 - 중고등학생 IT/창업 컨퍼런스",
		description: "IMPACT",
		date: {
			start: {
				year: 2023,
				month: 12,
			},
			isEnd: true,
			end: {
				year: 2023,
				month: 12,
			},
		},
		content: null,
	},
	{
		title: "제16기 Explorer@UNIST",
		description: "울산과학기술원",
		date: {
			start: {
				year: 2024,
				month: 1,
			},
			isEnd: true,
			end: {
				year: 2024,
				month: 1,
			},
		},
		content: null,
	},
	{
		title: "2024 Singapore ITE College West Global Exchange Program",
		description: "덕영고등학교, ITE College West",
		links: {
			github: "https://github.com/suk-6/gesture-recognition",
		},
		date: {
			start: {
				year: 2024,
				month: 1,
			},
			isEnd: true,
			end: {
				year: 2024,
				month: 2,
			},
		},
		content: `덕영고등학교에서 진행한 싱가포르 국제교류 프로그램입니다.
		
		ITE College West에서 현지 친구들과 함께 프로젝트를 진행했습니다.`,
	},
];
