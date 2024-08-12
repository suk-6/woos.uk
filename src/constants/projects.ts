import { ProjectType } from "@/models/data";

export const projects: ProjectType[] = [
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
			website: "https://timetable.dyhs.kr/install",
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
	{
		title: "ADEGO",
		description: "약속 지각 방지 솔루션",
		links: {
			github: "https://github.com/adego-project",
		},
		date: {
			start: {
				year: 2024,
				month: 3,
			},
			isEnd: false,
		},
		content: `사람들은 여러 이유로 사람들과의 만남을 약속하고, 특정 장소에서, 특정 시간에 만나는 것을 기약 하지만, 종종 사람들은 그 기약을 어기고, 약속에 늦곤 합니다. ADEGO 팀은 이러한 문제를 포착하였고, 조금은 새롭게 접근하고 싶었습니다.
			
			약속을 생성하고, 딥링크를 통해 참가자를 초대하고, 위치를 실시간으로 공유하는 간단하지만 일상 속에서 많이 사용하게 될 서비스입니다.`,
	},
	{
		title: "YUMYUM",
		description: "덕영고등학교 소프트웨어과 카카오워크 급식 봇",
		links: {
			github: "https://github.com/suk-6/YUMYUM",
		},
		date: {
			start: {
				year: 2024,
				month: 3,
			},
			isEnd: true,
			end: {
				year: 2024,
				month: 3,
			},
		},
		content: `간단한 급식 봇입니다.
			매일 아침 학생들에게 급식 알림을 전송합니다.`,
	},
	{
		title: "DYNet",
		description: "덕영고등학교 학생망 VPN 서비스",
		links: {
			github: "https://github.com/suk-6/dynet-server",
		},
		date: {
			start: {
				year: 2024,
				month: 2,
			},
			isEnd: true,
			end: {
				year: 2024,
				month: 4,
			},
		},
		content: `WireGuard Protocol을 이용한 VPN 서비스입니다.`,
	},
	{
		title: "파토",
		description: "약속이 파토난 1030 타겟 약속 중심 매칭 서비스",
		links: {
			github: "https://github.com/suk-6/pato-server",
		},
		date: {
			start: {
				year: 2024,
				month: 2,
			},
			isEnd: false,
		},
		content: `백엔드 개발 총괄을 하였으며 주요 기능으로는 프론트엔드와 협업을 통한 웹소켓 채팅 구현, 카카오 OAuth 구현 등이 있습니다.

			 해당 팀 프로젝트를 진행하며 팀원간 소통의 중요성과 프로젝트 방법론에 대해 다시 한번 생각해볼 수 있는 계기가 되었습니다.`,
	},
	{
		title: "Gesture Recognition",
		description: "2024 Singapore ITE College West Global Exchange Program",
		links: {
			github: "https://github.com/suk-6/gesture-recognition",
		},
		date: {
			start: {
				year: 2024,
				month: 2,
			},
			isEnd: true,
			end: {
				year: 2024,
				month: 2,
			},
		},
		content: `약 일주일 간의 국제교류 기간 동안 싱가포르 학생들과 함께 프로젝트를 진행했습니다.

			우리 Infinity팀은 Social Impact를 실현하기 위하여 Intel OpenVINO 모델을 사용하여 수어(ASL)를 자연어와 TTS를 활용한 오디오로 번역하는 웹 서비스를 기획, 개발했습니다.`,
	},
	{
		title: "덕영필름",
		description: "덕영고등학교 인생네컷",
		links: {
			github: "https://github.com/suk-6/dukyoung-film-server",
		},
		date: {
			start: {
				year: 2023,
				month: 10,
			},
			isEnd: true,
			end: {
				year: 2023,
				month: 11,
			},
		},
		content: `이용자가 직접 터치하여 덕영필름을 이용할 수 있도록 사용자 인터페이스를 개발하고, 촬영된 이미지를 처리하여 QR코드로 다운로드 할 수 있게 하고, 포토프린터로 이미지를 전달하여 실제 인생네컷처럼 출력할 수 있도록 개발했습니다.
			
			실제로 학교 축제에서 많은 인원이 부스를 이용해 주었습니다.`,
	},
	{
		title: "Withlive",
		description: "시각장애인 보행보조 서비스",
		links: {
			github: "https://github.com/stac23-Withlive",
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
		content: `Withlive는 스마트폰 카메라와 진동 모듈을 사용하여 시각장애인의 보행을 보조하는 서비스입니다.
			
			시각장애인이 Flutter로 제작된 앱을 실행하면, 카메라를 이용해 길거리 영상을 수집합니다.
			
			수집된 영상은 서버에서 자체 제작한 YOLOv5 모델을 통해 분석되고, 보행에 방해가 되는 물체가 있는 지 확인합니다.

			분석이 완료되면 클라이언트는 물체의 위치를 임베디드 장비에 전달하여, 진동을 사용해 시각장애인에게 직접적으로 경고합니다.
			
			또한, 인식된 물체가 무엇인 지 TTS로 읽어줍니다.`,
	},
	{
		title: "Home Infrastructure",
		description: "홈 네트워크 및 서버 구축",
		links: {
			website: "https://suk.kr/home-infra",
		},
		date: {
			start: {
				year: 2023,
				month: 6,
			},
			isEnd: true,
			end: {
				year: 2023,
				month: 6,
			},
		},
		content: `홈 네트워크를 구성하고 Synology NAS, Proxmox, Intel NUC 등을 활용한 서버들을 구축했습니다.`,
	},
	{
		title: "Korean History Site",
		description: "한국사 문제 풀이 사이트",
		links: {
			github: "https://github.com/suk-6/korean-history-site",
		},
		date: {
			start: {
				year: 2023,
				month: 4,
			},
			isEnd: true,
			end: {
				year: 2023,
				month: 5,
			},
		},
		content: `한국사 교과 지필평가를 맞아 학생들의 지식을 테스트하고, 부족한 부분을 보완하기 위해 개발했습니다.
			
			이 프로젝트에서 의미있었던 것은 Github Actions를 이용하여, 새 버전이 PUSH 될 때, Docker Image 형태로 빌드하고, 서버에 SSH로 접근해 서비스를 배포하는 과정을 자동화한 것입니다.`,
	},
	{
		title: "Shipmates",
		description: "가천대학교 예비대학 - 러닝 액션, 캐주얼 모바일 게임",
		links: {
			github: "https://github.com/kyw04/Shipmates",
		},
		date: {
			start: {
				year: 2023,
				month: 2,
			},
			isEnd: true,
			end: {
				year: 2023,
				month: 2,
			},
		},
		content: `로비 화면 제작과 협업을 담당하였습니다.
			Unity 특성상 Git Conflict가 많이 발생하여 이를 도맡아 해결했습니다.`,
	},
	{
		title: "AndroidTfLiteCameraX",
		description: "Real-time Image Classification using TFLite",
		links: {
			github: "https://github.com/suk-6/AndroidTfLiteCameraX",
		},
		date: {
			start: {
				year: 2023,
				month: 2,
			},
			isEnd: true,
			end: {
				year: 2023,
				month: 2,
			},
		},
		content: `TensorFlow Lite 모델을 사용하여, 모바일 환경에서 실시간으로 이미지를 분류하는 앱입니다.`,
	},
	{
		title: "고1식",
		description: "고1식 = 고등학교 1학년 수학 공식",
		links: {
			github: "https://github.com/suk-6/formula_app",
		},
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
		content: `매번 수학 공식을 찾기 위해 힘들게 구글링을 하는 것은 비효율적이라고 생각되어, 수학 공식을 모아서 보여주는 앱을 제작하였습니다.`,
	},
	{
		title: "월패드 보안 프로그램",
		description: "아파트 월패드 백신 프로그램",
		links: {
			github: "https://github.com/suk-6/Wallpad-tool",
		},
		date: {
			start: {
				year: 2022,
				month: 8,
			},
			isEnd: true,
			end: {
				year: 2022,
				month: 9,
			},
		},
		content: `최근 이슈화되는 아파트 월패드 해킹 사건의 해결을 목적으로 고안되었습니다.
			
			월패드의 카메라 부정 사용을 방지하고, 대기 중인 포트를 보여주는 등의 기능을 합니다.`,
	},
	{
		title: "MAKE; Barcode",
		description: "동아리 출입통제 시스템",
		links: {
			github: "https://github.com/suk-6/Make-Barcode",
		},
		date: {
			start: {
				year: 2022,
				month: 7,
			},
			isEnd: true,
			end: {
				year: 2022,
				month: 8,
			},
		},
		content: `학생증의 학생 바코드를 이용하여 출입을 통제하는 Python 프로그램입니다.
			
			바코드를 인식하면 컴퓨터와 연결된 마이크로비트에서 자동문 스위치에 신호를 주는 방식으로 구현되었습니다.`,
	},
	{
		title: "School Platform",
		description: "학생과 교직원을 위한 플랫폼",
		links: {
			website: "https://dyhs.kr",
		},
		date: {
			start: {
				year: 2022,
				month: 5,
			},
			isEnd: true,
			end: {
				year: 2022,
				month: 6,
			},
		},
		content: `덕영위키, 단축 URL 서비스, 교내 Git · Docker Repository 등의 서비스가 포함되어 있습니다.
			
			덕영위키는 오픈소스 위키 엔진인 미디어위키로 구축되었고, PHP를 기반으로 서비스되고 있습니다.
			
			단축 URL 서비스는 thedevs-network의 kutt 라이브러리를 기반으로 한글화와 교내 환경에 맞게 수정되었습니다.
			
			또한, Git 저장소와 Docker 저장소는 Gitea와 Harbor로 서비스되고 있습니다.
			
			School Platform의 모든 서비스는 Cloudflare CDN을 사용하여 DDos 공격을 방지하고, IP를 숨겨 포트 스캐닝, Brute Force 공격을 사전에 막았습니다.
			
			2022 경기콘텐츠창의학교 경진대회 최우수상 수상`,
	},
	{
		title: "AI Face Recognition System",
		description: "얼굴인식 인터폰",
		links: {
			github: "https://github.com/suk-6/Make-Barcode",
		},
		date: {
			start: {
				year: 2022,
				month: 4,
			},
			isEnd: true,
			end: {
				year: 2022,
				month: 5,
			},
		},
		content: `시각장애인이 인터폰을 사용할 수 없는 문제를 해결하기 위해 고안되었습니다.
			
			OpenCV를 이용하여 등록된 얼굴이 인식되면, 이름을 TTS로 알려줍니다.
			
			Intel OpenVINO Pre-Trained Model을 사용하였고, 이 프로젝트를 인텔 아시아태평양 총괄 부사장에게 발표하였습니다.`,
	},
];
