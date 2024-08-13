import { AwardType } from "@/models/award";

export const awards: AwardType[] = [
	{
		competition: "장학생",
		prize: null,
		host: "덕영고등학교",
		date: {
			year: 2022,
			month: 3,
		},
		content: `2022 신입생 입학전형에서 우수한 성적을 보여 장학생으로 선발되었습니다.`,
	},
	{
		competition: "프로그래밍 경연대회",
		prize: "장려상",
		host: "덕영고등학교",
		date: {
			year: 2022,
			month: 7,
		},
		content: `문제들은 모두 C언어로, 알고리즘 관련 문제들이 출제되었습니다.
        약 30~40명 정도 참여하였던 거 같은데 좋은 성적을 거두어 뿌듯했습니다.`,
	},
	{
		competition: "2022 업사이클링 메이커톤",
		prize: "중/고등 부문 우수상(용인시산업진흥원장상)",
		host: "용인시산업진흥원",
		date: {
			year: 2022,
			month: 9,
		},
		links: {
			website: "https://suk.kr/news1",
		},
		content: `버려지는 쓰레기를 새활용하여 새로운 제품으로 탄생시키는 대회였습니다.
        
        아두이노 코딩과 네오픽셀 연결 납땜 작업, Apple Homekit 연동 작업을 맡았습니다.
        
        마스크를 새활용하여 전등 갓을 만들고, 아두이노와 네오픽셀을 사용하여 전등을 완성했습니다.
        
        또한, IoT 기능을 추가하여 휴대폰으로 쉽게 제어할 수 있도록 했습니다.`,
	},
	{
		competition: "2022 사이버가디언즈 CTF",
		prize: "장려상(한국정보보호학회장상)",
		host: "한국정보기술연구원",
		date: {
			year: 2022,
			month: 11,
		},
		links: {
			github: "https://github.com/suk-6/22-cg",
		},
		content: `어릴 때부터 보안에 관심이 있었던 저는 보안을 공부해보기 위해 사이버가디언즈에 지원하여 웹해킹, 포너블 등의 수업을 듣고, 사이버가디언즈 CTF에 출전하였습니다.
        
        저는 Web, Pwn, Misc 등 모든 분야에 집중하였고, Web 2문제, Misc 1문제, Crypto 1문제를 해결했습니다.`,
	},
	{
		competition: "2022 데이터 크리에이터 캠프",
		prize: "최우수상(한국지능정보사회진흥원장상)",
		host: "한국지능정보사회진흥원",
		date: {
			year: 2022,
			month: 11,
		},
		links: {
			github: "https://github.com/suk-6/22-dcc",
		},
		content: `실제 비즈니스 환경에서 발생할 수 있는 문제를 데이터 분석 교육과 멘토링을 통해 해결해 보는 실습 과정을 거치고 4주간의 예선 해커톤을 진행하였습니다.
        
        저는 팀장과 발표, 데이터 전처리, 하이퍼파라미터 조정 등을 맡았습니다.
        
        제공된 3만장의 사진을 전처리하는 과정부터 모델 학습, 모델 평가까지 직접 진행해보며 인공지능 학습에 대한 지식을 습득했습니다.`,
	},
	{
		competition: "2022 경기콘텐츠창의학교 경진대회",
		prize: "최우수상(용인시장상)",
		host: "경기콘텐츠진흥원",
		date: {
			year: 2022,
			month: 11,
		},
		content: `School Platform 프로젝트로 출전했습니다.`,
	},
	{
		competition: "표창장(선행부문)",
		prize: null,
		host: "덕영고등학교",
		date: {
			year: 2023,
			month: 1,
		},
		content: null,
	},
	{
		competition: "23회 앱잼 미래산업부문",
		prize: "최우수상",
		host: "알파코",
		date: {
			year: 2023,
			month: 8,
		},
		links: {
			github: "https://github.com/23AppJam-aj23",
		},
		content: `안전한 물놀이를 위한 사고 예방 서비스
        
        이안류 객체 인식을 통해 전국 해수욕장의 이안류를 감지하고, 미리 경고합니다.
        또한 해수욕장의 현재 상태 등을 보여주어, 사고를 예방하도록 돕습니다.`,
	},
	{
		competition: "2023 SmarTeen App+ Challenge 개발팀 미래산업부문",
		prize: "최우수상(SK텔레콤 대표이사상)",
		host: "SK플래닛",
		date: {
			year: 2023,
			month: 9,
		},
		content: `Withlive 프로젝트로 출전했습니다.`,
	},
	{
		competition: "2023 ELECCON",
		prize: "고등부 4th",
		host: "한국전력공사, 국가정보원 지부",
		date: {
			year: 2023,
			month: 10,
		},
		content: `한국전력공사, 국가정보원 지부가 공동 주최한 에너지분야 사이버공격 방어 훈련입니다.
        Attack & Defense 방식의 CTF라 새로웠던 경험이었습니다.`,
	},
	{
		competition: "2023 제9회 교육부 정보보안경진대회 개인전",
		prize: "장려상(서울여자대학교 정보보호영재교육원장상)",
		host: "교육부",
		date: {
			year: 2023,
			month: 10,
		},
		content: `교육부 정보보호영재교육원 정보보안경진대회입니다.
        개인전(예선)에서 1권역 5등, 전국 7등을 차지하여 장려상 수상했습니다.`,
	},
	{
		competition: "2023 제9회 교육부 정보보안경진대회 단체전",
		prize: "최우수상(한국교육학술정보원장상)",
		host: "교육부",
		date: {
			year: 2023,
			month: 11,
		},
		content: `교육부 정보보호영재교육원 정보보안경진대회입니다.
        단체전(결선)에서 전국 2등을 차지하여 최우수상 수상했습니다.
        
        모바일 앱 분석, 웹 템플릿 엔진 해킹 등의 문제를 해결하며 팀원들 간의 팀워크나 문제 해결 방법에 대해 깊이 이해하게 되었습니다.`,
	},
	{
		competition: "2023 사이버가디언즈 CTF",
		prize: "장려상(코리아사이버보안연합 이사장상)",
		host: "한국정보기술연구원",
		date: {
			year: 2023,
			month: 11,
		},
		content: null,
	},
	{
		competition: "2023 경기콘텐츠창의학교 경진대회",
		prize: "최우수상",
		host: "경기콘텐츠진흥원",
		date: {
			year: 2023,
			month: 11,
		},
		links: {},
		content: ``,
	},
	{
		competition: "2023 전국 청소년 인공지능 프론티어 챌린지",
		prize: "우수상(EBS 사장상) 및 특별상(AWS Korea 사장상)",
		host: "광주광역시, 광주광역시교육청, EBS 등",
		date: {
			year: 2023,
			month: 11,
		},
		links: {
			github: "https://github.com/suk-6/AIFrontier",
		},
		content: `사진 한 장으로 폐를 지키는 의료용 폐 질환 AI, CCA 개발.
        이용자들의 폐 사진을 받아, AI를 통해 폐를 진단하고 코로나, 결핵, 폐렴 등의 감염 사실을 알려주는 서비스.
        
        이 서비스는 학교에서 결핵 검사를 진행할 때, 수백명의 학생들의 모든 폐 사진을 모두 검증하기 어려우니, AI를 도입하여 신속하고 정밀하게 질병을 특정할 수 있도록 하겠다는 아이디어로부터 시작되었습니다.`,
	},
	{
		competition: "2023 데이터 크리에이터 캠프",
		prize: "우수상(한국지능정보사회진흥원장상)",
		host: "한국지능정보사회진흥원",
		date: {
			year: 2023,
			month: 12,
		},
		links: {
			github: "https://github.com/suk-6/23-dcc",
		},
		content: `한국지능정보사회진흥원에서 주최하는 데이터 가공, 인공지능 제작 대회입니다.`,
	},
	{
		competition: "24회 앱잼 미래산업부문",
		prize: "우수상",
		host: "알파코",
		date: {
			year: 2023,
			month: 12,
		},
		links: {
			github: "https://github.com/AppJam-24",
		},
		content: `감정조절이 힘든 사람들을 위한, '이모지' 앱을 개발했습니다.
        
        AI Hub의 '한국인 감정인식을 위한 복합영상' 데이터셋으로 학습된 CNN 모델을 활용하여 이용자의 감정을 인식하고, 이용자에게 입력받은 그 날의 일기를 분석하여 솔루션을 제공하는 앱입니다.
        간단하게 그림으로도 일기를 남길 수 있어, 전 연령대의 사람들이 사용할 수 있도록 개발했습니다.`,
	},
	{
		competition: "9th Highthon",
		prize: "인기상",
		host: "Highthon",
		date: {
			year: 2024,
			month: 2,
		},
		links: {
			github: "https://github.com/9-highthon-15",
		},
		content: null,
	},
	{
		competition: "25회 앱잼 미래산업부문",
		prize: "최우수상",
		host: "알파코",
		date: {
			year: 2024,
			month: 4,
		},
		links: {
			github: "https://github.com/APPJAM-25",
		},
		content: `AI 기반 소개팅/데이트 대화 연습 시뮬레이션 어플 - AI 티키톡
        
        OpenAI Whisper (STT) -> OpenAI ChatGPT API (대화) / OpenAI ChatGPT Function Calling (대화 분석 및 수치화) / RoBERTa 기반 한국어 감정분석 모델 -> OpenAI TTS (대화 음성) -> 대화 피드백 제공
        위와 같은 로직을 구상하고, 구현하여 최우수상을 수상했습니다.`,
	},
];
