<!-- Role and troubleshooting evidence: .github/profile/SOURCES.md. -->
# 정준용 · Jeong Jun Yong

**Full-Stack Developer** · Web / Mobile / Backend / 3D

웹 UI와 API, 데이터 흐름을 연결하고 Android·iOS 네이티브 앱과 Unity 기반 3D 인터랙션을 만듭니다. 주요 프로젝트에서 직접 맡은 일과 문제를 해결한 과정을 정리했습니다.

## 주요 프로젝트

### [살래말래](https://github.com/beshurl/SallaeMallae)
AI 분석 결과와 시세·뉴스·재무 데이터를 통합하는 주식 분석 서비스.

`Next.js` `TypeScript` `TanStack Query` `Zustand` `Spring Boot` `Redis`

**내가 맡은 일**

- 메인, 종목 목록·상세, 포트폴리오, 뉴스, 검색, 인증 화면과 API 연동을 구현했습니다.
- 인기 검색어 SSE와 알림 연동, 프로필 이미지 업로드, 캐시·로딩 UX를 개선했습니다.
- KIS 기반 주식 조회·실시간 시세 API와 Redis Top-list 캐시를 구현했습니다.

**트러블슈팅**

- **뉴스 페이지가 1페이지로 돌아가는 문제** — 페이지 묶음이 바뀔 때 쿼리 데이터가 잠시 비어 전체 페이지 수가 1로 계산되고, 페이지 보정 로직이 현재 페이지를 초기화했습니다. `placeholderData`로 이전 목록과 전체 개수를 유지해 새 응답을 기다리는 동안 페이지가 되돌아가지 않도록 수정했습니다. [수정 기록](https://github.com/beshurl/SallaeMallae/commit/18481f416829d50e49a31a23c31034bd3959d4af)

- **로그아웃·계정 전환 후에도 남는 사용자 캐시** — 인증 상태와 서버 데이터 캐시가 별도로 유지되는 구조였습니다. `AuthQuerySync`에서 사용자 ID와 비회원 상태를 비교해 인증 주체가 바뀔 때 캐시를 초기화하고, 세션 복구 중에는 초기화를 건너뛰도록 구분했습니다. 이전 사용자의 데이터를 재사용하지 않도록 캐시 수명과 인증 상태를 연결했습니다. [수정 기록](https://github.com/beshurl/SallaeMallae/commit/b3039b860193b66664d7b4a885d492322a6c3b1e)

- **외부 순위 API 실패 시 대체 목록의 시세 누락** — KIS 순위 조회가 실패해 로컬 종목으로 대체했을 때 일봉 데이터까지 없으면 현재가·등락률이 비었습니다. 현재 페이지에서 누락된 종목만 단건 시세로 보강하고, 보강 실패 시에는 기존 목록을 유지하도록 처리했습니다. 해당 실패 조합을 확인하는 단위 테스트도 추가했습니다. [수정·테스트](https://github.com/beshurl/SallaeMallae/commit/08bdf207ef8fc30d3b1bd1b7d21236361e72894f)

<br />

### [Bone To Be](https://github.com/beshurl/BoneToBe)
체형을 분석해 어울리는 의류를 추천하는 서비스.

`React` `TypeScript` `Vite` `styled-components` `Zustand` `TanStack Query`

**내가 맡은 일**

- 회원가입·로그인, 카카오·구글 OAuth, 프로필·마이페이지 화면과 API 연동을 구현했습니다.
- 커뮤니티, 사용자 검색, 알림 기능을 연결하고 메인·소개 페이지의 애니메이션을 구현했습니다.
- 진단 상태 저장 방식과 스크롤·섹션 애니메이션의 갱신 흐름을 개선했습니다.

**트러블슈팅**

- **소개 페이지의 무한 렌더링** — 렌더링마다 새로 만들어지는 섹션 ID 배열을 훅 의존성으로 사용하면서 Effect와 IntersectionObserver가 반복 생성됐습니다. 배열 참조 대신 섹션 ID의 내용으로 만든 키를 사용해, 내용이 같으면 메모이제이션이 유지되도록 수정했습니다. [수정 기록](https://github.com/beshurl/BoneToBe/commit/01a931c49775df5434a74ce9229265b5c3db2bca)

- **진단 사진까지 브라우저 저장소에 쌓이는 문제** — 진단 스토어 전체를 영속화해 사진 문자열까지 `sessionStorage`에 저장하고 있었습니다. Zustand의 `persist.partialize`로 `photoData`를 제외하고 기본 정보·분석 결과·리포트 ID만 저장하도록 제한했습니다. 화면에서 사용하는 사진과 복구에 필요한 상태를 분리했습니다. [수정 기록](https://github.com/beshurl/BoneToBe/commit/e779dfe66b60ebe08898970f4ffd9672f25a862a)

<br />

### [DotShelf](https://github.com/beshurl/DotShelf)
책과 취향을 담는 Unity 기반 3D 책장·독서 공간.

`Unity` `C#` `UI Toolkit` `Spring Boot` `AWS S3` `Flyway`

**내가 맡은 일**

- 책장·노트북·책 시장 UI와 API 연동, 책장 스킨·배치 상태 동기화를 구현했습니다.
- 노트북 UI를 첫 사용 시 비동기로 로드하도록 분리하고, 원격 에셋 캐시와 다른 사용자의 공간 방문 흐름을 구현했습니다.
- Spring/S3 기반 썸네일 업로드·확정 API와 관련 테스트를 작성했습니다.

**트러블슈팅**

- **다른 사용자의 공간 방문 시 에셋을 불러오지 못하는 문제** — 기존 다운로드 API는 본인 소유 에셋만 허용해 다른 사람의 공간에 배치된 에셋을 불러오는 흐름과 맞지 않았습니다. 공개 공간 전용 manifest API를 만들고, 저장된 배치와 공간 소유자의 소유권을 검증했습니다. Unity에서 manifest를 먼저 등록한 뒤 버전·해시 기반 캐시로 에셋을 복원하도록 연결했습니다. [구현·검증 기록](https://github.com/beshurl/DotShelf/blob/master/docs/study/2026-05-13-feat-unity-remote-asset-cache.md)

- **썸네일 업로드 재시도의 중복 갱신** — 다음 레이아웃 버전으로 S3 key를 만들면 업로드 확정 전 반복 발급 시 같은 key가 생성되고, 확정 재시도에도 버전이 증가했습니다. 발급 시각·UUID로 key를 분리하고 동일 key 확정은 한 번만 반영하도록 처리했습니다. 오래된 key도 거부하며, key 중복·동일 요청 재시도·순서가 뒤바뀐 확정을 검증하는 테스트를 추가했습니다. [수정·테스트](https://github.com/beshurl/DotShelf/commit/97670a916d4dbebd7d49920002d7acb15a371b17)

<br />

### [GateStamp · Android & iOS](https://github.com/beshurl/skala-temp-for-gain)
지정된 네트워크에서 하루 한 번 출석을 기록하는 서비스의 네이티브 앱 프로토타입.

`Kotlin` `Jetpack Compose` `Material 3` `Swift` `SwiftUI` `Retrofit` `URLSession`

**내가 맡은 일**

- **Android** — Compose로 로그인·출석·기록 화면과 상태별 안내를 구현했습니다. Retrofit/OkHttp로 API를 연결하고, Android Keystore 키로 토큰을 암호화해 저장했습니다.
- **iOS** — SwiftUI 화면과 NavigationStack 기반 탐색, URLSession API 연동, Keychain 기반 세션 복원·로그아웃을 구현했습니다.
- 화면 상태와 Repository·네트워크·토큰 저장소를 분리했습니다. 출석 가능 여부는 서버가 판정하게 하고, 중복 출석·허용되지 않은 IP·인증 만료에 맞춰 앱의 안내와 복구 흐름을 구분했습니다.

**트러블슈팅**

- **모바일 출석 시계에 날짜까지 표시되는 문제** — 서버의 `displayTime`을 그대로 표시해 시계 영역에 날짜와 요일이 함께 들어갔습니다. Android·iOS 각각에서 `HH:mm:ss`를 추출하고, 추출할 수 없으면 `checkedInAt`을 한국 표준시로 변환하도록 수정했습니다. 잘못된 값은 고정된 대체 표시로 처리하고 양쪽 앱에 회귀 테스트를 추가했습니다. [수정·테스트](https://github.com/beshurl/skala-temp-for-gain/commit/d1e268ee68ab9edd29a8caed306747ead7e2cb5e)

- **로그아웃 후 재로그인했을 때 늦게 도착하는 이전 응답에 대한 대응** — iOS 출석 요청이 끝나기 전에 로그아웃할 수 있어, 응답을 적용하기 전 세션 확인이 필요했습니다. 요청 시점의 세션 세대 번호를 기록하고, 현재 세션과 다르면 결과·오류를 반영하지 않도록 구현했습니다. 이전 응답이 새 화면을 덮어쓰거나 새 세션을 만료시키지 않는지 확인하는 테스트를 작성했습니다. [구현](https://github.com/beshurl/skala-temp-for-gain/blob/d1e8ab3e9ef9a24d28d2bf2afd9272fdc5fbe2ce/ios/GateStamp/Features/Attendance/AttendanceViewModel.swift#L42) · [회귀 테스트](https://github.com/beshurl/skala-temp-for-gain/blob/d1e8ab3e9ef9a24d28d2bf2afd9272fdc5fbe2ce/ios/GateStampTests/Features/Attendance/AttendanceViewModelTests.swift#L67)

<br />

### [Sequence](https://github.com/Sequence-Front/sequence)
대학생 개발자·디자이너를 위한 프로젝트 모집·협업 플랫폼.

`React` `TypeScript` `Recoil` `styled-components` `Axios`

**내가 맡은 일**

- 프로젝트·아카이브 등록·수정 화면과 API 연동, 팀원 평가·알림·신고 기능에 참여했습니다.
- 회원가입, 로그아웃·회원 탈퇴 등 사용자 흐름을 구현하고 전반적인 화면 스타일과 QA 오류를 수정했습니다.

**트러블슈팅**

- **회원가입 날짜 데이터의 형식 불일치** — 화면에서 선택한 입학·졸업 연도를 그대로 전송하던 부분을 `YYYY-MM-DD` 형식으로 변환하도록 수정했습니다. 활동·경력·자격증 날짜 입력은 입력 처리와 입력 확정 시 보정을 분리해 월·일 범위와 자릿수를 정리했습니다. [전송 형식 수정](https://github.com/Sequence-Front/sequence/commit/8f74f60ebe7525228f1b150c5fc81af721be1a7d) · [입력 보정](https://github.com/Sequence-Front/sequence/commit/926c20ca296078d5c1a2fc0b571575e36e9f8669)

- **로그아웃 뒤 남는 인증·프로필 정보 정리** — 로그아웃 API 호출 뒤에도 클라이언트 저장 정보를 지우지 않던 흐름에 초기화를 추가했습니다. 이후 로그인, 토큰 갱신, API 요청, 헤더·프로필 조회, 로그아웃·탈퇴에서 사용하는 저장소를 `sessionStorage`로 함께 전환해 읽기·쓰기·삭제 위치를 맞췄습니다. [로그아웃 정리](https://github.com/Sequence-Front/sequence/commit/926c20ca296078d5c1a2fc0b571575e36e9f8669) · [저장소 전환](https://github.com/Sequence-Front/sequence/commit/f1d4207b3250a8646ee70f8f1a78df3cd5228bb5)

<br />

<details>
<summary><b>사용 기술·도구 전체 보기</b></summary>

프로젝트에서 사용한 기술과 도구를 영역별로 정리했습니다.

**Languages**

<p>
  <img src="./assets/tech/typescript.svg" alt="TypeScript" />
  <img src="./assets/tech/javascript.svg" alt="JavaScript" />
  <img src="./assets/tech/java.svg" alt="Java" />
  <img src="./assets/tech/python.svg" alt="Python" />
  <img src="./assets/tech/csharp.svg" alt="C#" />
</p>

**Frontend & UI**

<p>
  <img src="./assets/tech/react.svg" alt="React" />
  <img src="./assets/tech/nextjs.svg" alt="Next.js" />
  <img src="./assets/tech/vue.svg" alt="Vue" />
  <img src="./assets/tech/vite.svg" alt="Vite" />
  <img src="./assets/tech/tailwindcss.svg" alt="Tailwind CSS" />
  <img src="./assets/tech/styled-components.svg" alt="styled-components" />
</p>

**State & data fetching**

<p>
  <img src="./assets/tech/tanstack-query.svg" alt="TanStack Query" />
  <img src="./assets/tech/zustand.svg" alt="Zustand" />
  <img src="./assets/tech/pinia.svg" alt="Pinia" />
  <img src="./assets/tech/recoil.svg" alt="Recoil" />
</p>

**Mobile & Native · Android / iOS**

<p>
  <img src="./assets/tech/kotlin.svg" alt="Kotlin" />
  <img src="./assets/tech/jetpack-compose.svg" alt="Jetpack Compose" />
  <img src="./assets/tech/swift.svg" alt="Swift" />
  <img src="./assets/tech/swiftui.svg" alt="SwiftUI" />
</p>

Material 3 · Retrofit / OkHttp · URLSession · NavigationStack · Android Keystore · Keychain

**Backend & database**

<p>
  <img src="./assets/tech/spring-boot.svg" alt="Spring Boot" />
  <img src="./assets/tech/spring-security.svg" alt="Spring Security" />
  <img src="./assets/tech/jpa.svg" alt="JPA / Hibernate" />
  <img src="./assets/tech/querydsl.svg" alt="QueryDSL" />
  <img src="./assets/tech/fastapi.svg" alt="FastAPI" />
  <br />
  <img src="./assets/tech/postgresql.svg" alt="PostgreSQL" />
  <img src="./assets/tech/mysql.svg" alt="MySQL" />
  <img src="./assets/tech/redis.svg" alt="Redis" />
</p>

**3D & interaction**

<p>
  <img src="./assets/tech/unity.svg" alt="Unity" />
  <img src="./assets/tech/uitoolkit.svg" alt="Unity UI Toolkit" />
  <img src="./assets/tech/unitask.svg" alt="UniTask" />
</p>

**Infrastructure & delivery**

<p>
  <img src="./assets/tech/docker.svg" alt="Docker" />
  <img src="./assets/tech/nginx.svg" alt="Nginx" />
  <img src="./assets/tech/aws.svg" alt="AWS" />
  <img src="./assets/tech/git.svg" alt="Git" />
  <img src="./assets/tech/gitlab-ci.svg" alt="GitLab CI" />
</p>

**Testing & component development**

<p>
  <img src="./assets/tech/playwright.svg" alt="Playwright" />
  <img src="./assets/tech/vitest.svg" alt="Vitest" />
  <img src="./assets/tech/storybook.svg" alt="Storybook" />
  <img src="./assets/tech/msw.svg" alt="Mock Service Worker" />
  <img src="./assets/tech/junit.svg" alt="JUnit" />
</p>

<details>
<summary><b>라이브러리·서비스 구성 더 보기</b></summary>

- **UI & forms** — HTML/CSS, React Hook Form, Zod, shadcn/ui, Radix UI, MUI, PrimeVue, Axios
- **Charts & motion** — ECharts, Chart.js, Motion / Framer Motion, AOS, FullCalendar
- **Backend & messaging** — REST API, Spring Security, OAuth 2.0, JWT, SSE, WebSocket, RabbitMQ, MyBatis, Flyway
- **Storage & deployment** — AWS S3·EC2, MinIO, MariaDB, H2, Docker Compose, Caddy
- **3D tooling** — Addressables, Cinemachine, URP, glTFast
- **Python & quality** — pandas, Pydantic, HTTPX, PyArrow, pytest, Ruff, Testing Library, MSW, ESLint, Prettier, Maven, Gradle

</details>

<details>
<summary><b>AI 서비스에서 연결한 시스템</b></summary>

AI 프로젝트에서는 모델의 결과를 사용자가 이해하고 활용할 수 있는 화면과 서비스 흐름으로 연결했습니다. 아래는 참여 프로젝트의 AI·데이터 구성입니다.

- **살래말래** — LightGBM·TFT·GARCH 기반 앙상블, LLM 토론·분석, FinBERT 뉴스 감성 분석, TimescaleDB·pgvector
- **Bone To Be** — FastAPI 기반 AI 서버, MediaPipe·4D-Humans 체형 인식, PyTorch, WebRTC

개인 담당 내용은 위 프로젝트 소개에 구분해 두었습니다.

</details>

</details>
