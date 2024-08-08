import { DataType } from "@/models/data";

export const myData: DataType = {
	name: "남우석",
	enName: "Woosuk Nam",
	job: "Backend Developer",
	email: "me@suk.kr",
	website: "https://suk.kr",
	phone: "010-9900-2512",
	projects: [
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
