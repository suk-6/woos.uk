import { DataType } from "@/models/data";

export const myData: DataType = {
	name: "남우석",
	enName: "Woosuk Nam",
	job: "Backend Developer",
	email: "me@suk.kr",
	website: "https://suk.kr",
	phone: "010-9900-2512",
	socials: [
		{
			name: "Blog",
			handle: "Suk's Blog",
			link: "https://blog.suk.kr",
		},
		{
			name: "Github",
			handle: "@suk-6",
			link: "https://github.com/suk-6",
		},
		{
			name: "Linkedin",
			handle: "@woosuknam",
			link: "https://www.linkedin.com/in/woosuknam",
		},
		{
			name: "Twitter",
			handle: "@woosuknam",
			link: "https://x.com/woosuknam",
		},
		{
			name: "Instagram",
			handle: "@woosuk_",
			link: "https://instagram.com/woosuk_",
		},
	],
	projects: [
		{
			title: "MAKE; Access Management System",
			description: "동방 출입관리 시스템 (MAKE; Barcode v2)",
			links: {
				github: "https://github.com/suk-6/MAKE-AMS",
			},
			date: {
				start: {
					year: 2024,
					month: 3,
				},
				isEnd: false,
			},
			content: `기존 MAKE; Barcode 프로젝트는 아래와 같은 학생들의 불만 때문에 운영하기 어려운 상황에 도달했습니다.

- 바코드 인식이 원활하지 않음
- 출입관리가 필요 없는 시간대에도 바코드를 인식해야 함
- 학생증을 안 들고다니는 경우

이러한 불만들로 인해 잠시 중단되었던 프로젝트를 1년 반만에 v2로 전환을 시도했습니다.

- 바코드에서 QR로 인증 방식 전환
- 출입관리가 필요 없는 시간대에는 자동 개방
- 전용 앱 및 서버 개발

위와 같은 차별점을 두어, 훨씬 간편하게 이용할 수 있도록 기획했습니다.

첫 기획 단계에서는 카카오워크 봇을 이용하여 구현하기로 계획되어 있었지만, 여러가지 이슈로 인해 구현이 불가능한 상태가 되어버렸습니다.

이에 따라, 다른 방식을 채택해야 했습니다.
앱 개발이 익숙치 않은 저는, PWA가 대안이라는 사실을 알고 있었습니다.

최종적으로는 React + Vite를 사용한 PWA 웹과 NestJS + TypeScript를 사용한 인증 서버, 라즈베리파이를 활용한 QR코드 리더기 및 자동문 개폐 시스템 등을 개발하여 테스트까지 모두 마쳤습니다.`,
		},
		{
			title: "덕영시간표",
			description: "매 시간마다, 다음 교시 과목을 알려주는 서비스",
			links: {
				website: "https://suk.kr",
				github: "https://github.com/suk-6/dytimetable",
			},
			date: {
				start: {
					year: 2024,
					month: 3,
				},
				isEnd: true,
				end: {
					year: 2024,
					month: 4,
				},
			},
			content: `덕영시간표 - 매 시간마다, 다음 교시 과목을 알려주는 서비스

매 교시, 수업이 끝나면 우리는 다음 과목이 무엇인 지 알아야 합니다. 학교 특성상 이동 수업이 많기 때문에, 항상 시간표를 확인해야하는 문제가 있었습니다. 이러한 문제를 푸시 알림으로 해결할 수 있다면, 적어도 나는 이러한 불편에서 조금이라도 벗어날 수 있지 않을까? 라는 생각에 개발하게 되었습니다.

수업이 종료되면 모든 학년, 반의 다음 교시 정보를 조회하고 학생에게는 다음 교시의 교과목을, 교사에게는 다음 교시의 학년과 반을 알려줍니다.

앱 출시 하루만에 DAU 116명을 기록하고, MAU 350명을 기록했습니다.
친구들은 좋은 리뷰들을 남겨주었고, 테스트에서 찾지 못한 버그들도 찾게 되었습니다.

서비스 트래픽이 증가함에 따라 조금 더 효율적인 처리를 위해 기존 Node + Express + 외부 라이브러리 의존 구조에서 NestJS + 자체 제작 파서로 리팩터링하는 경험을 했습니다.

또한, PC에서도 이용하고자 Next.js를 사용한 웹 버전을 준비 중입니다.`,
		},
		{
			title: "SSFS (Serverless Simple File Storage)",
			description: "첫 서버리스 프로젝트",
			links: {
				website: "https://ssfs.suk.kr",
				github: "https://github.com/suk-6/ssfs",
			},
			date: {
				start: {
					year: 2024,
					month: 6,
				},
				isEnd: true,
				end: {
					year: 2024,
					month: 6,
				},
			},
			content: `Next.js와 AWS S3, CloudFront 등을 이용하여 제 불편함을 해결하고자 했습니다. 파일 공유 시, 로그인하기 귀찮았던 저는 전용 파일 공유 서비스를 만들고자 했습니다. 단 아래와 같은 요구사항들이 존재했습니다.

- 간편한 파일 업로드
사용자 인증보단, 더욱 간편하게 파일을 업로드 할 수 있도록 하고 싶었습니다.

- 빠른 다운로드
CDN을 통하여 서버 부하를 줄이고, 어디서나 빠르게 다운받도록 하고 싶었습니다.

- 파일 호스팅 (example.com/direactory/file.txt)
타사 드라이브 서비스들은 전용 다운로드 링크만을 제공하기에 코드 상에서 불러와 사용하거나, 임베드 용도로는 부적합했습니다.

- Serverless Function 이용
백엔드 개발과 운영 자원을 절약하기 위하여 Serverless로 배포되어야 했습니다.

제 요구사항을 만족하는 서비스를 만들고자 하여, Next.js, S3, CloudFront 등의 스택을 메인으로 개발을 시작했고, 아래와 같은 플로우가 완성되었습니다.

- 클라이언트
클라이언트에서 암호와 함께 파일을 업로드합니다.
암호는 Serverless Function에 전송하고, 파일은 잠시 대기합니다.

- Serverless Function
Serverless Function에서 환경변수에 저장된 암호를 불러와 검증하고 S3 Presigned URL을 생성하고, 클라이언트로 반환합니다.

- 클라이언트
반환된 S3 Presigned URL을 통해, S3에 파일을 업로드하고, 다시 Serverless Function을 통해 버킷 내 파일 목록을 불러와 표시합니다.

이렇게 S3에 업로드 된 파일을 CloudFront URL로 접근하도록 제공하게 되는 플로우를 구현했고, 실제로 많이 애용하는 서비스힙니다.`,
		},
	],
};
