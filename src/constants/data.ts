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
			name: "Github",
			handle: "@suk-6",
			link: "https://github.com/suk-6",
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
			content: `덕영시간표 - 매 시간마다, 다음 교시 과목을 알려주는 서비스

매 교시, 수업이 끝나면 우리는 다음 과목이 무엇인 지 알아야 합니다. 학교 특성상 이동 수업이 많기 때문에, 항상 시간표를 확인해야하는 문제가 있었습니다. 이러한 문제를 푸시 알림으로 해결할 수 있다면, 적어도 나는 이러한 불편에서 조금이라도 벗어날 수 있지 않을까? 라는 생각에 개발하게 되었습니다.

수업이 종료되면 모든 학년, 반의 다음 교시 정보를 조회하고 학생에게는 다음 교시의 교과목을, 교사에게는 다음 교시의 학년과 반을 알려줍니다.

앱 출시 하루만에 DAU 116명을 기록하고, MAU 350명을 기록했습니다.
친구들은 좋은 리뷰들을 남겨주었고, 테스트에서 찾지 못한 버그들도 찾게 되었습니다.

서비스 트래픽이 증가함에 따라 조금 더 효율적인 처리를 위해 기존 Node + Express + 외부 라이브러리 의존 구조에서 NestJS + 자체 제작 파서로 리팩터링하는 경험을 했습니다.

또한, PC에서도 이용하고자 Next.js를 사용한 웹 버전을 준비 중입니다.`,
		},
	],
};
